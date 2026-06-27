type Brand =
  | { name: string; logo: string }
  | { name: string; wordmark: true };

const brands: Brand[] = [
  { name: "Dahua", logo: "/images/dahua-logo.svg" },
  { name: "Clipsal", wordmark: true },
  { name: "Hager", wordmark: true },
  { name: "Ubiquiti", logo: "/images/ubiquiti-logo.svg" },
  { name: "Martec", wordmark: true },
  { name: "HikVision", logo: "/images/Hikvision-logo.png" },
  { name: "Havit", wordmark: true },
  { name: "NHP", wordmark: true },
  { name: "Hanwha", logo: "/images/Hanwha-logo.png" },
  { name: "Axis", logo: "/images/Axis-Communications-logo.png" },
  { name: "Uniview", logo: "/images/uniview-logo.png" },
  { name: "TP-Link", logo: "/images/tp-link-logo.png" },
];

function BrandChip({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-16 w-40 shrink-0 items-center justify-center px-6">
      {"logo" in brand ? (
        <img
          src={brand.logo || "/placeholder.svg"}
          alt={`${brand.name} logo`}
          className="max-h-8 w-auto object-contain opacity-60 brightness-0 invert transition-opacity"
        />
      ) : (
        <span className="text-xl font-extrabold uppercase tracking-tight text-foreground/60">
          {brand.name}
        </span>
      )}
    </div>
  );
}

export function TrustedBrands() {
  return (
    <section className="relative -mt-px border-b border-border bg-transparent">
      <div className="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Stocking the brands the trade trusts
        </p>

        <div className="relative mt-8 overflow-hidden">
          {/* edge fades blend the strip into the page background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
          />

          <div className="flex w-max animate-brand-marquee gap-8 sm:gap-12">
            {/* duplicate the list so the loop is seamless */}
            {[...brands, ...brands].map((brand, index) => (
              <BrandChip key={`${brand.name}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
