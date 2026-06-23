"use client";

import { BadgeDollarSign, Boxes, Headphones } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const highlights = [
  {
    icon: BadgeDollarSign,
    title: "Trade-first pricing",
    description:
      "Competitive account rates with volume support for larger jobs.",
  },
  {
    icon: Boxes,
    title: "Dependable stock",
    description:
      "Strong availability across Dahua, electrical and solar essentials.",
  },
  {
    icon: Headphones,
    title: "Real support",
    description:
      "A local team that helps from product selection through delivery.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-b border-border">
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
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-4 py-20 sm:px-6 xl:grid-cols-2 lg:px-8 lg:py-40">
        <div className="order-2 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About LESS DIRECT
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built to support installers across Australia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            At LESS Direct, we understand what installers need: quality
            products, competitive pricing, reliable stock and fast support. Our
            core range includes Dahua Smart Dual Light, TiOC Pro and TiOC Duo
            cameras, AI NVRs, alarms, intercoms and accessories.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We also supply a growing range of electrical and solar products.
            Whether you are purchasing for a single installation or a
            large-scale project, our focus is simple: dependable service and
            strong trade pricing that helps your business grow.
          </p>
          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid gap-5 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={cardItem}
                className="group rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/45"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <item.icon
                    className="size-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.65)]"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/95">
                  {item.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/35 via-primary/10 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
          {/* <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Talk to our trade team</a>}
          /> */}
        </div>

        <div className="order-1 overflow-hidden rounded-xl border border-border lg:order-1">
          <img
            src="/images/less-warehouse.png"
            alt="LESS DIRECT trade counter team helping an electrician"
            className="aspect-[4/3] size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
