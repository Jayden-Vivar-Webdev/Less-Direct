"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Exclusive trade pricing tailored for installers",
  "Volume discounts and project support for larger jobs",
  "Reliable stock of genuine Dahua security solutions",
  "Growing range of electrical and solar products",
  "Fast delivery and responsive local support",
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden text-white">
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
      <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-30">
        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src="/images/packing-van.png"
            alt="LESS DIRECT staff loading genuine security and solar products into a delivery van"
            className="aspect-[4/3] size-full object-cover"
          />
        </div>

        <div>
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
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check
                    className="size-4"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Open a trade account</a>}
          />
        </div>
      </div>
    </section>
  );
}
