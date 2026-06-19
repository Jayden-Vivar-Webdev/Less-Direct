import { BadgePoundSterling, Headphones, ShieldCheck, Truck } from "lucide-react"

const features = [
  {
    icon: BadgePoundSterling,
    title: "Competitive trade pricing",
    description:
      "Access wholesale pricing structured for installers, with account rates and volume discounts available.",
  },
  {
    icon: Truck,
    title: "Fast project delivery",
    description:
      "Reliable dispatch helps keep installs on schedule, with fast delivery support across NSW and Australia.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Dahua range",
    description:
      "We specialise in genuine Dahua solutions including Smart Dual Light, TiOC Pro, TiOC Duo, NVRs and intercoms.",
  },
  {
    icon: Headphones,
    title: "Installer-first support",
    description:
      "Our team provides practical support on product selection, pricing and project supply requirements.",
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/35">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/warehouse.png')] bg-cover bg-center opacity-20 md:bg-fixed"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/55" />
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
              Built around how installers buy: quality products, dependable
              stock, competitive pricing and support that understands project
              timelines.
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
