"use client";

import Earth from "@/components/landing/globe";
import { Sparkles } from "@/components/landing/sparkles";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const articleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const articleItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function AnimatedGlobe() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden border-y border-blue-500/45 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-400/90 shadow-[0_0_18px_rgba(37,99,235,0.95)]" />
      <div className="absolute inset-0 bg-[url('/images/warehouse-landscape.webp')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative mx-auto grid max-w-[90rem] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-30">
        <article className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
            Globally Proven Brands
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Globally trusted products,
            <span className="text-primary">
              {" "}
              supplied for Australian trades.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0">
            Our security, electrical and solar range is used on projects around
            the world. LESS Direct brings those trusted products to installers
            across Australia with local stock, trade pricing and fast support.
          </p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 px-6 text-sm font-semibold sm:text-base"
              render={<a href="#contact">Explore Our Full Range</a>}
            />
          </div>
        </article>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.3),transparent_60%)] blur-2xl" />
          <Earth
            className="max-w-[420px]"
            theta={0.28}
            dark={0.85}
            scale={1.02}
            diffuse={1.35}
            mapBrightness={7}
            markerColor={[0.4, 0.8, 1]}
            glowColor={[0.36, 0.7, 1]}
            baseColor={[0.14, 0.32, 0.68]}
          />
          <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-52 overflow-hidden mask-[radial-gradient(58%_58%_at_50%_0%,white,transparent)]">
            <Sparkles
              density={420}
              speed={1}
              size={1}
              direction="top"
              opacitySpeed={1.8}
              color="#F6C66A"
              className="absolute inset-x-0 bottom-0 h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/images/carbon-fibre-bg.jpg')",
              backgroundSize: "380px 380px",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/55"
          />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Quality products. Trade pricing. Fast support.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
              Partner with LESS Direct for genuine security products and a
              growing electrical and solar range, backed by dependable service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
