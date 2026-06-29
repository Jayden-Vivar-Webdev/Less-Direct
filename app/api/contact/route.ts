import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
  turnstileToken?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeString(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

// Verify a Cloudflare Turnstile token against the siteverify endpoint.
async function verifyTurnstile(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // If no secret is configured, skip verification so the form keeps working.
  if (!secret) return true;
  if (!token) return false;

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const result = (await response.json()) as { success?: boolean };
    return Boolean(result.success);
  } catch (error) {
    console.error("turnstile verify error", error);
    return false;
  }
}

// Heuristic gibberish detector to block junk like "aksjdbnfiirbifo72934".
function looksLikeGibberish(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return false;

  // Examine each "word" longer than a handful of characters.
  const words = trimmed.split(/\s+/);
  for (const word of words) {
    const letters = word.replace(/[^a-zA-Z]/g, "");
    if (letters.length < 8) continue;

    const vowels = (letters.match(/[aeiouAEIOU]/g) || []).length;
    const vowelRatio = vowels / letters.length;

    // Long run of consecutive consonants is a strong gibberish signal.
    const longConsonantRun = /[^aeiouAEIOU\s]{6,}/.test(word);

    // Very low vowel ratio in a long token reads as keyboard mashing.
    if (vowelRatio < 0.2 || longConsonantRun) {
      return true;
    }
  }

  return false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendResendEmail(
  apiKey: string,
  payload: Record<string, unknown>,
) {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend send failed: ${response.status} ${errorBody}`);
  }

  return response.json();
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const customerTemplateId = process.env.RESEND_CUSTOMER_TEMPLATE_ID;
    const internalTemplateId = process.env.RESEND_INTERNAL_TEMPLATE_ID;
    const internalTo = process.env.RESEND_INTERNAL_TO_EMAIL;

    if (!apiKey || !from || !customerTemplateId || !internalTo) {
      return NextResponse.json(
        { error: "Missing required email environment configuration." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;
    const name = normalizeString(body.name);
    const company = normalizeString(body.company);
    const email = normalizeString(body.email);
    const phone = normalizeString(body.phone);
    const message = normalizeString(body.message);
    const turnstileToken = normalizeString(body.turnstileToken);

    if (!name || !email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name and email." },
        { status: 400 },
      );
    }

    // Bot protection: verify the Cloudflare Turnstile challenge.
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;
    const humanVerified = await verifyTurnstile(turnstileToken, ip);
    if (!humanVerified) {
      return NextResponse.json(
        { error: "Verification failed. Please complete the challenge and try again." },
        { status: 400 },
      );
    }

    // Spam protection: reject obvious keyboard-mashing in the name or message.
    if (looksLikeGibberish(name) || looksLikeGibberish(message)) {
      return NextResponse.json(
        {
          error:
            "Your submission looks like spam. Please enter your real details.",
        },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message || "Not provided").replaceAll(
      "\n",
      "<br/>",
    );

    const customerEmailPayload = {
      from,
      to: [email],
      template: {
        id: customerTemplateId,
        variables: {
          CONTACT_NAME: name,
        },
      },
    };

    const submittedAt = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const internalEmailPayload = {
      from,
      to: [internalTo],
      subject: `New contact form enquiry from ${name}`,
      reply_to: email,
      template: {
        id: internalTemplateId,
        variables: {
          client_name: safeName,
          client_email: safeEmail,
          client_phone: safePhone,
          client_company: safeCompany,
          submitted_at: submittedAt,
          client_message: safeMessage,
        },
      },
    };

    const [customerResult, internalResult] = await Promise.all([
      sendResendEmail(apiKey, customerEmailPayload),
      sendResendEmail(apiKey, internalEmailPayload),
    ]);

    return NextResponse.json({
      ok: true,
      customerEmailId: customerResult?.id,
      internalEmailId: internalResult?.id,
    });
  } catch (error) {
    console.error("contact route error", error);
    return NextResponse.json(
      { error: "Failed to send your request. Please try again." },
      { status: 500 },
    );
  }
}
