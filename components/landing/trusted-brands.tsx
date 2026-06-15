const brands = [
  { name: "Dahua", logo: "/images/dahua-logo.svg" },
  { name: "HikVision", logo: "/images/Hikvision-logo.png" },
  { name: "Hanwha", logo: "/images/Hanwha-logo.png" },
  { name: "Axis", logo: "/images/Axis-Communications-logo.png" },
  { name: "Uniview", logo: "/images/uniview-logo.png" },
  { name: "TP Link", logo: "/images/tp-link-logo.png" },
];

export function TrustedBrands() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Stocking the brands the trade trusts
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-20 cursor-pointer items-center justify-center rounded-lg border border-border/70 bg-white/80 px-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white active:translate-y-0 active:scale-[0.98] active:border-primary/50 active:bg-white"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-10 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100 group-active:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
