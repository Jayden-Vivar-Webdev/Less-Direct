import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-primary/10 px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Less markup. Less hassle. More time on the tools.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Join thousands of electricians ordering smarter with LESS DIRECT. Open your
            trade account in minutes — no fees, no catch.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-6 text-base font-semibold"
              render={<a href="#contact">Open a trade account <ArrowRight className="size-4" /></a>}
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base font-semibold"
              render={<a href="#products">Browse the range</a>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
