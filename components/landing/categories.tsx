"use client";

import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Network Cameras",
    count: "WizMind 8 Series...",
    image: "/images/network-cameras.png",
    description:
      "Full suite of Dahua network cameras for residential and commercial purposes.",
  },
  {
    title: "PT Cameras",
    count: "IP PT 3 Series...",
    image: "/images/PT-camera.png",
    description:
      "Pan-tilt cameras for precision CCTV operations. Optional models available.",
  },
  {
    title: "PTZ Cameras",
    count: "X-Spans Series...",
    image: "/images/PTZ-camera.png",
    description:
      "Pan, tilt and zoom cameras available, providing full surveillance of properties and commercial spaces.",
  },
];

export function Categories() {
  return (
    <section id="categories" className="relative overflow-hidden border-y border-blue-500/45 shadow-[inset_0_20px_45px_-35px_rgba(37,99,235,0.8),inset_0_-20px_45px_-35px_rgba(37,99,235,0.8)]">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-30">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Shop by category
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything for the install, under one roof
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#products"
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {cat.count}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
