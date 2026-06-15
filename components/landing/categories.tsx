import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Cables & Wiring",
    count: "1,800+ lines",
    image: "/images/cat-cables.png",
    description: "Twin & earth, SWA, flex, data and tri-rated by the metre or drum.",
  },
  {
    title: "Circuit Protection",
    count: "950+ lines",
    image: "/images/cat-protection.png",
    description: "Consumer units, MCBs, RCBOs, surge protection and isolators.",
  },
  {
    title: "Lighting & Fittings",
    count: "2,400+ lines",
    image: "/images/cat-lighting.png",
    description: "LED downlights, panels, battens, emergency and exterior lighting.",
  },
]

export function Categories() {
  return (
    <section id="categories" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
                    <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
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
  )
}
