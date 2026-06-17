const steps = [
  {
    number: "1",
    title: "Open your trade account",
    description:
      "Sign up in minutes with your business details. Get instant access to trade pricing and 30-day credit terms on approval.",
  },
  {
    number: "2",
    title: "Build your order",
    description:
      "Search 12,000+ lines, save your regular kit to lists, and check live stock before you commit to the job.",
  },
  {
    number: "3",
    title: "Get it on site",
    description:
      "Free next-day delivery to site or yard, or collect from the trade counter in 30 minutes. Sorted.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/warehouse.png')] bg-cover bg-center opacity-20"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.14),transparent_44%),radial-gradient(circle_at_90%_85%,hsl(var(--primary)/0.1),transparent_42%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            From account to install in three steps
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-primary text-xl font-extrabold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
