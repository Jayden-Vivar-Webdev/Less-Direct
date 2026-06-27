"use client";

import {
  BadgeCheck,
  Tags,
  Timer,
  MapPin,
  ClipboardList,
  Truck,
  FileText,
  Handshake,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Genuine products",
    description:
      "Authentic, trade grade brands and stock you can install with full confidence.",
  },
  {
    icon: Tags,
    title: "Competitive trade pricing",
    description:
      "Wholesale rates structured for installers, not retail markups.",
  },
  {
    icon: Timer,
    title: "Fast quote turnaround",
    description:
      "Send us your list and get pricing back quickly so jobs keep moving.",
  },
  {
    icon: MapPin,
    title: "Local support",
    description:
      "Real people who understand installers and the way the trade works.",
  },
  {
    icon: ClipboardList,
    title: "Project pricing",
    description:
      "Sharper pricing on larger jobs with volume and project-based rates.",
  },
  {
    icon: Truck,
    title: "Australia wide freight",
    description:
      "Reliable dispatch to job sites and workshops right across the country.",
  },
  {
    icon: FileText,
    title: "Trade accounts",
    description:
      "Simple account setup with terms designed around how installers buy.",
  },
  {
    icon: Handshake,
    title: "Dedicated account management",
    description:
      "A direct point of contact who knows your business and your jobs.",
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

const gridContainer: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.1, staggerChildren: 0.07 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function WhyLessDirect() {
  return (
    <section
      id="why-less-direct"
      className="relative overflow-hidden border-y border-blue-500/45 bg-card/35 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.2),transparent_48%),radial-gradient(circle_at_85%_100%,hsl(var(--primary)/0.14),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_34%,rgba(0,0,0,0.52))]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />

      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={intro}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Why LESS Direct
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built around how installers actually buy
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            From genuine stock to dedicated account management, every part of
            LESS Direct is set up to make supply easier for the trade.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardItem}
              className="group rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/45"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <reason.icon
                  className="size-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.65)]"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground/95">
                {reason.description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/35 via-primary/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
