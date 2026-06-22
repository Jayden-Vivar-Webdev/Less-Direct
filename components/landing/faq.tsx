"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Why should I switch from my current supplier?",
    a: "LESS Direct is built for installers who need quality products, dependable stock, fast support and competitive pricing without the usual hassle.",
  },
  {
    q: "Can LESS Direct beat my current pricing?",
    a: "In many cases, yes. We offer competitive trade pricing and can provide project-based quotes to help reduce total job cost.",
  },
  {
    q: "Do you offer trade accounts and volume discounts?",
    a: "Yes. Trade accounts are available for eligible installers and businesses, with volume discounts and project support for larger orders.",
  },
  {
    q: "How quickly can products be delivered?",
    a: "Delivery time depends on stock and destination, but our focus is fast, reliable dispatch to keep your installations moving.",
  },
  {
    q: "Do you stock genuine Dahua products?",
    a: "Yes. We specialise in genuine Dahua solutions including cameras, NVRs, alarms, intercoms, accessories and related networking products.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-border bg-black">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Common installer questions
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-12 divide-y divide-border border-y border-border"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold">{faq.q}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
