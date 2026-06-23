"use client";

const stats = [
  { value: "12,000+", label: "Products in stock" },
  { value: "18,500", label: "Electricians on account" },
  { value: "98%", label: "Orders shipped same day" },
  { value: "4.9/5", label: "Average trade rating" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-border text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-12"
        style={{
          backgroundImage: "url('/images/carbon-fibre-bg.jpg')",
          backgroundSize: "380px 380px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.2),transparent_48%),radial-gradient(circle_at_85%_100%,hsl(var(--primary)/0.14),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_34%,rgba(0,0,0,0.52))]"
      />
      <div className="relative mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-black/25 px-4 py-5 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold tracking-tight text-primary/100 drop-shadow-[0_0_8px_rgba(2,112,239,0.75)] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
