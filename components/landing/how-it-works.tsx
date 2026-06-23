"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Open your trade account",
    description:
      "Apply with your business details to unlock wholesale pricing, account support and project-based quotes.",
  },
  {
    number: "2",
    title: "Get pricing for your job",
    description:
      "Share your requirements and our team will provide competitive trade pricing, volume discounts and product guidance.",
  },
  {
    number: "3",
    title: "Receive stock fast",
    description:
      "We dispatch quickly so installers can keep projects moving, with fast delivery support across NSW and beyond.",
  },
];

const intro = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-blue-500/45 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/warehouse.png')] bg-cover bg-center opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.14),transparent_44%),radial-gradient(circle_at_90%_85%,hsl(var(--primary)/0.1),transparent_42%)]"
      />
      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-30">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={intro}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            From enquiry to delivery in three steps
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-primary text-xl font-extrabold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
