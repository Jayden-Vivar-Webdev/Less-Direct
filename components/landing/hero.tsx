import {
  ArrowRight,
  Circle,
  Headset,
  Shield,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <img
          src="/images/warehouse.png"
          alt="Electrician wiring a consumer unit"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.14),transparent_44%),radial-gradient(circle_at_90%_85%,hsl(var(--primary)/0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/75" />
      </div>

      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="w-full max-w-2xl space-y-7 text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
            Trade Only electrical wholesale
          </span>
          <div className="relative mt-6 overflow-hidden">
            <img
              src="/landscape-logo-opt.png"
              alt="Less Direct Logo"
              className="mx-auto h-auto w-full max-w-[540px] object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            <p className="italic text-balance text-xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Electrical
            </p>
            <span className="flex size-3 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Circle strokeWidth={0} aria-hidden="true" />
            </span>
            <p className="italic text-balance text-xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Security
            </p>
            <span className="flex size-3 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Circle strokeWidth={0} aria-hidden="true" />
            </span>
            <p className="italic text-balance text-xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Solar
            </p>
          </div>

          <div className=" mt-3 flex w-full bg-primary h-[0.1]"></div>

          <h1 className="mt-6 italic text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.7rem]">
            Build For Trades. Priced for{" "}
            <span className="text-[var(--primary)]">Less.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Australia's Trade focused supplier of Dahua security, electrical and
            solar products. Quality brands. Competative pricing. Reliable
            supply.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 w-full px-6 text-sm font-semibold sm:w-auto sm:text-base drop-shadow-[0_0_4px_rgba(2,112,239,0.9)]"
              render={
                <a href="#products">
                  Open A Trade Account <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 w-full px-6 text-sm font-semibold sm:w-auto sm:text-base drop-shadow-[0_0_2px_rgba(2,112,239,0.9)]"
              render={<a href="#contact">Request Pricing</a>}
            />
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Truck className="size-4 text-primary" aria-hidden="true" />
            Free next day delivery on trade orders over $1,000
          </p>
          {/* Mobile view */}
          <div className="lg:flex xl:hidden relative left-1/2 mt-10 w-[min(1200px,calc(100vw-2rem))] -translate-x-1/2 sm:w-[min(1320px,calc(100vw-3rem))] lg:w-[min(1440px,calc(100vw-5rem))]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3 rounded-md border border-primary/40 bg-background/45 p-4 backdrop-blur-sm">
                <Shield
                  className="mt-0.5 size-7 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={2.2}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Quality Brands</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Trusted by professionals. Built to perform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-primary/40 bg-background/45 p-4 backdrop-blur-sm">
                <Tag
                  className="mt-0.5 size-7 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={2.2}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Trade Pricing</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Competitive rates built for trade accounts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-primary/40 bg-background/45 p-4 backdrop-blur-sm">
                <Truck
                  className="mt-0.5 size-7 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={2.2}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Fast Delivery</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Reliable dispatch with next day options available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-primary/40 bg-background/45 p-4 backdrop-blur-sm">
                <Headset
                  className="mt-0.5 size-7 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={2.2}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Trade Support</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Local help from people who understand your work
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop view */}
          <div className="hidden xl:flex relative p-2 rounded-md bg-background/35 border border-white/2 left-1/2 mt-10 w-[min(1200px,calc(100vw-2rem))] -translate-x-1/2 sm:w-[min(1320px,calc(100vw-3rem))] lg:w-[min(1440px,calc(100vw-5rem))]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
              <div className="flex items-center gap-3 border-r border-primary p-4">
                <ShieldCheck
                  className="mt-0.5 size-16 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={1.0}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Quality Brands</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Trusted by professionals. Built to perform
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-r border-primary p-4">
                <Tag
                  className="mt-0.5 size-16 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={1.0}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Trade Pricing</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Competitive rates built for trade accounts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-r border-primary p-4">
                <Truck
                  className="mt-0.5 size-16 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={1.0}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Fast Delivery</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Reliable dispatch with next day options available
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4">
                <Headset
                  className="mt-0.5 size-16 shrink-0 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  strokeWidth={1.0}
                />
                <div className="text-start">
                  <h2 className="text-md leading-relaxed">Trade Support</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Local help from people who understand your work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-1/3 mx-auto mt-10">
            <div>
              <img className="" src="/images/dahua-logo.png" alt="Dahua Logo" />
            </div>
            <div>
              <img src="/images/wizsense-logo.png" alt="wizsense Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
