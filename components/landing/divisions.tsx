"use client";

import { ArrowRight, Cctv, Plug, Sun, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Division = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

const divisions: Division[] = [
  {
    id: "security",
    label: "Security",
    icon: Cctv,
    title: "Security & surveillance, ready to install",
    description:
      "Genuine CCTV, network cameras, NVRs, intercoms and access control from the brands installers trust. Specced for residential and commercial jobs alike.",
    image: "/images/network-cameras.png",
    imageAlt: "Range of network surveillance cameras stocked by LESS Direct",
    highlights: [
      "IP, PT & PTZ cameras",
      "NVRs and recording kits",
      "Intercoms & access control",
    ],
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: Plug,
    title: "Electrical supply built for the trade",
    description:
      "Switchboards, breakers, cabling, lighting and accessories from leading electrical brands, priced for installers and dispatched fast to keep jobs moving.",
    image: "/images/packed-warehouse.png",
    imageAlt: "Electrician wiring a switchboard with LESS Direct supplies",
    highlights: [
      "Switchgear & circuit protection",
      "Cable, conduit & accessories",
      "Commercial & residential lighting",
    ],
  },
  {
    id: "solar",
    label: "Solar",
    icon: Sun,
    title: "Solar components for clean installs",
    description:
      "Panels, inverters, mounting and balance-of-system components for residential and commercial solar. Quality gear backed by genuine trade pricing.",
    image: "/images/packing-van.png",
    imageAlt: "Rooftop solar panel installation on an Australian home",
    highlights: [
      "Panels & inverters",
      "Mounting & racking systems",
      "Cabling & balance of system",
    ],
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

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Divisions() {
  return (
    <section id="divisions" className="relative overflow-hidden border-y border-blue-500/45">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-30">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={intro}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            What We Supply
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three trades. One trusted supplier.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Security, Electrical and Solar. Everything installers need across
            Australia, all from a single trade account.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={division.id}
                id={division.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={division.image || "/placeholder.svg"}
                      alt={division.imageAlt}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                    <Icon className="size-4" aria-hidden="true" />
                    {division.label}
                  </span>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="flex size-12 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                    <Icon
                      className="size-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {division.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {division.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {division.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#products"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Explore {division.label.toLowerCase()} products
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
