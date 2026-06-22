"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const details = [
  { icon: Phone, label: "Trade line", value: "1800 LESS DIRECT" },
  { icon: Mail, label: "Email", value: "sales@lessdirect.com.au" },
  {
    icon: MapPin,
    label: "Trade Servicing Location",
    value: "Sydney, Australia",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "Mon–Fri 6am–8pm · Sat 7am–4pm",
  },
];

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-blue-500/45 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="absolute inset-0 bg-[url('/images/warehouse-landscape.webp')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get started
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Open your trade account today
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us what you need and our team will help with account setup,
              pricing, project supply and product recommendations.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-0.5 font-medium">{d.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2
                  className="size-12 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks, our team will be in touch shortly to discuss your
                  account and pricing requirements.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setErrorMessage("");
                  setIsSubmitting(true);

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const payload = {
                    name: String(formData.get("name") || ""),
                    company: String(formData.get("company") || ""),
                    email: String(formData.get("email") || ""),
                    phone: String(formData.get("phone") || ""),
                    message: String(formData.get("message") || ""),
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className={fieldClass}
                      placeholder="Sam John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className={fieldClass}
                      placeholder="Trade Electrical"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="0425 539 312"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about the supplies you need and we'll sort your pricing."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full text-base font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Open my trade account"}
                </Button>
                {errorMessage ? (
                  <p className="text-center text-sm text-red-600">
                    {errorMessage}
                  </p>
                ) : null}
                <p className="text-center text-xs text-muted-foreground">
                  Trade-focused support for security, electrical and solar
                  supply.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
