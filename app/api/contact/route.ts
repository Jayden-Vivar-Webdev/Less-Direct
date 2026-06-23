import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeString(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
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
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message || "Not provided").replaceAll(
      "\n",
      "<br/>",
    );

    if (!name || !email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name and email." },
        { status: 400 },
      );
    }

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
