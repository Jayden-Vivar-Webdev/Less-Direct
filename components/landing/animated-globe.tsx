import Earth from "@/components/landing/globe";
import { Sparkles } from "@/components/landing/sparkles";
import { Button } from "@/components/ui/button";

export function AnimatedGlobe() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
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
              render={<a href="#products">Explore Product Range</a>}
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
    </section>
  );
}
