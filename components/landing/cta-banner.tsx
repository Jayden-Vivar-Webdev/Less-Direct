import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src="/images/warehouse-landscape.webp"
          alt="Trade warehouse shelves"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,hsl(var(--primary)/0.3),transparent_50%)]" />
      </div>
      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-2xl border border-primary/40 bg-background/70 px-6 py-14 text-center backdrop-blur-sm sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Quality products. Trade pricing. Fast support.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Partner with LESS Direct for genuine security products and a growing
            electrical and solar range, backed by dependable service.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 px-6 text-base font-semibold"
              render={
                <a href="#contact">
                  Open a trade account <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base font-semibold"
              render={<a href="#products">Browse the range</a>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
