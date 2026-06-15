import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "6242Y Twin & Earth Cable 2.5mm² — 100m",
    sku: "CAB-TE25-100",
    price: "£62.40",
    unit: "per drum",
    image: "/images/prod-cable.png",
    tag: "Best seller",
  },
  {
    name: "10-Way Dual RCD Consumer Unit",
    sku: "CU-10DRCD",
    price: "£78.95",
    unit: "ex VAT",
    image: "/images/prod-breaker.png",
    tag: "18th Edition",
  },
  {
    name: "Fire-Rated LED Downlight 6W — Pack of 10",
    sku: "DL-FR6-10",
    price: "£44.50",
    unit: "per pack",
    image: "/images/prod-downlight.png",
    tag: "Dimmable",
  },
  {
    name: "Double Socket 13A with Twin USB-A/C",
    sku: "SKT-2G-USB",
    price: "£9.85",
    unit: "ex VAT",
    image: "/images/prod-socket.png",
    tag: "New",
  },
]

export function Products() {
  return (
    <section id="products" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Trade favourites
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stocked deep, priced for the trade
            </h2>
          </div>
          <Button variant="outline" size="lg" className="font-semibold" render={<a href="#contact">View full catalogue</a>} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.sku}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="size-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug">{product.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">SKU: {product.sku}</p>
                <div className="mt-4 flex items-end gap-1.5">
                  <span className="text-2xl font-extrabold tracking-tight">{product.price}</span>
                  <span className="pb-1 text-xs text-muted-foreground">{product.unit}</span>
                </div>
                <Button
                  size="lg"
                  className="mt-4 w-full font-semibold"
                  render={
                    <a href="#contact">
                      <ShoppingCart className="size-4" /> Add to order
                    </a>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
