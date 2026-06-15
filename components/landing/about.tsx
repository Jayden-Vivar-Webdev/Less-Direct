import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About LESS DIRECT
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Founded by sparks, run for sparks
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            LESS DIRECT started on a van and a frustration: paying over the odds for
            kit and waiting days for stock. So we built the wholesaler we always
            wanted — deep stock, straight pricing and people who understand a deadline.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Today we supply thousands of electricians across the country from our
            trade counters and distribution hub, with the same promise: less hassle,
            less markup, more time on the tools.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Talk to our trade team</a>}
          />
        </div>

        <div className="order-1 overflow-hidden rounded-xl border border-border lg:order-2">
          <img
            src="/images/about-team.png"
            alt="LESS DIRECT trade counter team helping an electrician"
            className="aspect-[4/3] size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
