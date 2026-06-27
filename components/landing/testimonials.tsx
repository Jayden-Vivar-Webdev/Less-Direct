import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ordered a full consumer unit upgrade at 7pm, it was on site by 9am. LESS DIRECT have basically replaced my old wholesaler.",
    name: "Danny Mercer",
    role: "Mercer Electrical, Sydney",
    initials: "DM",
  },
  {
    quote:
      "Prices are genuinely the best I've found and the counter team actually know their stuff. No upselling, just sorted.",
    name: "Priya Shah",
    role: "PS Domestic & Commercial",
    initials: "PS",
  },
  {
    quote:
      "Live stock levels are a game changer. I quote jobs knowing the gear's there. Haven't been let down once in two years.",
    name: "Tom Baxter",
    role: "Baxter & Sons, Brisbane",
    initials: "TB",
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Trusted on the tools
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            What electricians say about us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
