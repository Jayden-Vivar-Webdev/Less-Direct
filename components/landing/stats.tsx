const stats = [
  { value: "12,000+", label: "Products in stock" },
  { value: "18,500", label: "Electricians on account" },
  { value: "98%", label: "Orders shipped same day" },
  { value: "4.9/5", label: "Average trade rating" },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
