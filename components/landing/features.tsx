import { BadgePoundSterling, Headphones, ShieldCheck, Truck } from "lucide-react"

const features = [
  {
    icon: BadgePoundSterling,
    title: "Real trade pricing",
    description:
      "Account holders get genuine wholesale rates with no minimum spend and clear, itemised pricing.",
  },
  {
    icon: Truck,
    title: "Next-day to site",
    description:
      "Order by 8pm for free next-day delivery to your yard, depot or directly to the job.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & compliant",
    description:
      "Every product is genuine, fully certified and meets the latest 18th Edition standards.",
  },
  {
    icon: Headphones,
    title: "Sparks who get it",
    description:
      "Our counter team are ex-trade — call up and talk specs with someone who knows the job.",
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/35">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.14),transparent_44%),radial-gradient(circle_at_90%_85%,hsl(var(--primary)/0.12),transparent_42%)]"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Why Trade Teams Choose Less Direct
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need from a trade supplier
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Built around how electricians and installers actually buy: fast pricing,
              reliable stock, compliant products and support that understands site work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/45"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <feature.icon
                    className="size-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.65)]"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/95">
                  {feature.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/35 via-primary/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
