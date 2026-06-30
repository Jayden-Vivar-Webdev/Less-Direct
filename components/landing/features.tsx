"use client";

import {
  BadgePoundSterling,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: BadgePoundSterling,
    title: "Competitive trade pricing",
    description:
      "Access wholesale pricing structured for installers, with account rates and volume discounts available.",
  },
  {
    icon: Truck,
    title: "Fast project delivery",
    description:
      "Reliable dispatch helps keep installs on schedule, with fast delivery support across NSW and Australia.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Dahua range",
    description:
      "We specialise in genuine Dahua solutions including Smart Dual Light, TiOC Pro, TiOC Duo, NVRs and intercoms.",
  },
  {
    icon: Headphones,
    title: "Installer-first support",
    description:
      "Our team provides practical support on product selection, pricing and project supply requirements.",
  },
];

const intro: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-blue-500/45 bg-card/35 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-8"
        style={{
          backgroundImage: "url('/images/carbon-fibre-bg.jpg')",
          backgroundSize: "380px 380px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      /> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.2),transparent_48%),radial-gradient(circle_at_85%_100%,hsl(var(--primary)/0.14),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_34%,rgba(0,0,0,0.52))]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/lessdirect-electricians.png')] bg-cover bg-center opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.14),transparent_44%),radial-gradient(circle_at_90%_85%,hsl(var(--primary)/0.12),transparent_42%)]"
      />
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-40">
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={intro}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Why Trade Teams Choose Less Direct
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need from a trade supplier
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Built around how installers buy: quality products, dependable
              stock, competitive pricing and support that understands project
              timelines.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/45"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <feature.icon
                    className="size-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.65)]"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/95">
                  {feature.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/35 via-primary/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
