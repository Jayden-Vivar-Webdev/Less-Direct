"use client";

import { BadgeCheck, Truck, Headset, Tag } from "lucide-react";

const stats = [
  {
    icon: BadgeCheck,
    title: "Genuine Products Only",
    description: "Authentic, trade-grade brands you can install with confidence.",
  },
  {
    icon: Truck,
    title: "Fast Australia-Wide Delivery",
    description: "Reliable dispatch to job sites and workshops nationwide.",
  },
  {
    icon: Headset,
    title: "Dedicated Trade Support",
    description: "Local people who understand installers and your work.",
  },
  {
    icon: Tag,
    title: "Trade Pricing Available",
    description: "Competitive pricing built for the trade, not retail markups.",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-border text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-12"
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
      <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-black/25 px-5 py-6 text-center backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary drop-shadow-[0_0_8px_rgba(2,112,239,0.55)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 text-base font-bold tracking-tight text-white sm:text-lg">
                  {stat.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
