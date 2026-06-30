"use client";

import { useState } from "react";
import { CheckCircle2, TrendingDown, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Turnstile } from "@/components/landing/turnstile";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40";

const points = [
  {
    icon: TrendingDown,
    title: "We\u2019ll try to beat it",
    text: "Send your latest invoice or quote and we\u2019ll see if we can sharpen the price.",
  },
  {
    icon: FileText,
    title: "No obligation",
    text: "It\u2019s a free price check there\u2019s nothing to commit to.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    text: "Our team reviews your pricing quickly so you can keep quoting.",
  },
];

const intro: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function BeatMySupplier() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileEnabled = Boolean(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );

  return (
    <section
      id="beat-my-supplier"
      className="relative overflow-hidden border-y border-blue-500/45 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/carbon-fibre-bg.jpg')",
          backgroundSize: "380px 380px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,hsl(var(--primary)/0.28),transparent_46%),radial-gradient(circle_at_90%_100%,hsl(var(--primary)/0.18),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%,rgba(0,0,0,0.55))]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />

      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={intro}
          >
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Beat My Supplier
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
              Already buying through another wholesaler?
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Send us your latest invoice or quote and we&apos;ll see if we can
              beat it. It&apos;s a simple, no obligation price check, so give us
              a chance to earn your business.
            </p>

            <ul className="mt-8 space-y-5">
              {points.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                    <point.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="rounded-2xl border border-border bg-card p-6 text-foreground sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2
                  className="size-12 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold">Quote received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks. Our team will review your pricing and get back to you
                  shortly to see if we can beat it.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setErrorMessage("");

                  if (turnstileEnabled && !turnstileToken) {
                    setErrorMessage(
                      "Please complete the verification challenge.",
                    );
                    return;
                  }

                  setIsSubmitting(true);

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const currentSupplier = String(
                    formData.get("supplier") || "",
                  );
                  const details = String(formData.get("details") || "");
                  const message = [
                    "BEAT MY SUPPLIER request",
                    currentSupplier
                      ? `Current supplier: ${currentSupplier}`
                      : "",
                    details ? `Quote / invoice details: ${details}` : "",
                  ]
                    .filter(Boolean)
                    .join("\n");

                  const payload = {
                    name: String(formData.get("name") || ""),
                    company: String(formData.get("company") || ""),
                    email: String(formData.get("email") || ""),
                    phone: String(formData.get("phone") || ""),
                    message,
                    turnstileToken,
                  };

                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                      const result = (await response
                        .json()
                        .catch(() => null)) as { error?: string } | null;
                      throw new Error(
                        result?.error || "Could not submit the form.",
                      );
                    }

                    form.reset();
                    setTurnstileToken("");
                    setSubmitted(true);
                  } catch (error) {
                    setErrorMessage(
                      error instanceof Error
                        ? error.message
                        : "Could not submit the form.",
                    );
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <h3 className="text-lg font-bold">Send us your pricing</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="bms-name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Full name
                    </label>
                    <input
                      id="bms-name"
                      name="name"
                      required
                      className={fieldClass}
                      placeholder="Sam John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bms-company"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Company
                    </label>
                    <input
                      id="bms-company"
                      name="company"
                      className={fieldClass}
                      placeholder="Trade Electrical"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="bms-email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="bms-email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="your@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bms-phone"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <input
                      id="bms-phone"
                      name="phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="0425 539 312"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="bms-supplier"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Current supplier
                  </label>
                  <input
                    id="bms-supplier"
                    name="supplier"
                    className={fieldClass}
                    placeholder="Who are you buying through now?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bms-details"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Quote or invoice details
                  </label>
                  <textarea
                    id="bms-details"
                    name="details"
                    rows={4}
                    className={fieldClass}
                    placeholder="List the products and prices you're currently paying, and we'll see if we can beat it."
                  />
                </div>
                <Turnstile
                  onVerify={setTurnstileToken}
                  onExpire={() => setTurnstileToken("")}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full text-base font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Beat my supplier"}
                </Button>
                {errorMessage ? (
                  <p className="text-center text-sm text-red-600">
                    {errorMessage}
                  </p>
                ) : null}
                <p className="text-center text-xs text-muted-foreground">
                  Prefer email? Send your invoice to{" "}
                  <a
                    href="mailto:sales@lessdirect.com.au"
                    className="font-medium text-primary hover:underline"
                  >
                    sales@lessdirect.com.au
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
