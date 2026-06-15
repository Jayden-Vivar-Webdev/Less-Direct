import { BadgePoundSterling, ShieldCheck, Truck, Headphones } from "lucide-react"

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
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
