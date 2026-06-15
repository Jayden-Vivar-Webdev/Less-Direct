import { ArrowRight, Circle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <img
          src="/images/electrician-switchboard.jpg"
          alt="Electrician wiring a consumer unit"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="w-full max-w-2xl space-y-7 text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
            Trade Only electrical wholesale
          </span>
          <div className="relative mt-6 overflow-hidden">
            <img
              src="/landscape-logo.png"
              alt="Less Direct Logo"
              className="mx-auto h-auto w-full max-w-[540px] object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            <p className="italic text-balance text-xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Security
            </p>
            <span className="flex size-3 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Circle strokeWidth={0} aria-hidden="true" />
            </span>
            <p className="italic text-balance text-xl font-extrabold leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              Electrical
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
              className="h-12 w-full px-6 text-sm font-semibold sm:w-auto sm:text-base"
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
              className="h-12 w-full px-6 text-sm font-semibold sm:w-auto sm:text-base"
              render={<a href="#contact">Request Pricing</a>}
            />
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Truck className="size-4 text-primary" aria-hidden="true" />
            Free next day delivery on trade orders over $1,000
          </p>
        </div>
      </div>
    </section>
  );
}
