"use client";

import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  "Exclusive trade pricing tailored for installers",
  "Volume discounts and project support for larger jobs",
  "Reliable stock of genuine Dahua security solutions",
  "Growing range of electrical and solar products",
  "Fast delivery and responsive local support",
];

const sectionTimeline: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.28,
    },
  },
};

const block: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const listTimeline: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function Benefits() {
  return (
    <section className="relative overflow-hidden border-b border-border text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-8"
        style={{
          backgroundImage: "url('/images/carbon-fibre-bg.jpg')",
          backgroundSize: "380px 380px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.2),transparent_48%),radial-gradient(circle_at_85%_100%,hsl(var(--primary)/0.14),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_34%,rgba(0,0,0,0.52))]"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionTimeline}
        className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-30"
      >
        <motion.div
          variants={block}
          className="overflow-hidden rounded-xl border border-border"
        >
          <img
            src="/images/warehouse-landscape.webp"
            alt="LESS DIRECT electrical wholesale warehouse"
            className="aspect-[4/3] size-full object-cover"
          />
        </motion.div>

        <motion.div variants={block}>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why installers switch
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The benefits of going LESS DIRECT
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We focus on what trade customers value most: quality products,
            competitive pricing, dependable stock and a team that supports your
            jobs from quote to delivery.
          </p>
          <motion.ul variants={listTimeline} className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check
                    className="size-4"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Open a trade account</a>}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
