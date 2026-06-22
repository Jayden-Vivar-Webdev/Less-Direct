"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { value: "12,000+", label: "Products in stock" },
  { value: "18,500", label: "Electricians on account" },
  { value: "98%", label: "Orders shipped same day" },
  { value: "4.9/5", label: "Average trade rating" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

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
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={card}
              className="rounded-xl border border-white/10 bg-black/25 px-4 py-5 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold tracking-tight text-primary/100 drop-shadow-[0_0_8px_rgba(2,112,239,0.75)] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
