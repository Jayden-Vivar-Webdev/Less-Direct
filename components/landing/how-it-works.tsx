const steps = [
  {
    number: "1",
    title: "Open your trade account",
    description:
      "Apply with your business details to unlock wholesale pricing, account support and project-based quotes.",
  },
  {
    number: "2",
    title: "Get pricing for your job",
    description:
      "Share your requirements and our team will provide competitive trade pricing, volume discounts and product guidance.",
  },
  {
    number: "3",
    title: "Receive stock fast",
    description:
      "We dispatch quickly so installers can keep projects moving, with fast delivery support across NSW and beyond.",
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
            From enquiry to delivery in three steps
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
