type Brand = { name: string; logo: string };

const brands: Brand[] = [
  { name: "Dahua", logo: "/images/brands/dahua-color.png" },
  { name: "WizSense", logo: "/images/brands/wizsense-color.png" },
  { name: "Clipsal", logo: "/images/brands/clipsal-color.png" },
  { name: "Schneider Electric", logo: "/images/brands/schneider-color.png" },
  { name: "HPM", logo: "/images/brands/hpm-color.png" },
  { name: "Martec", logo: "/images/brands/martec-color.png" },
  { name: "Matelec", logo: "/images/brands/matelec-color.png" },
  { name: "Havit Lighting", logo: "/images/brands/havit-color.png" },
  { name: "Eglo Lighting", logo: "/images/brands/eglo-color.png" },
  { name: "CLA Lighting", logo: "/images/brands/cla-color.png" },
  { name: "Beacon Lighting", logo: "/images/brands/beacon-color.png" },
  { name: "Sungrow", logo: "/images/brands/sungrow-color.png" },
];

function BrandChip({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center px-6 sm:w-48">
      <img
        src={brand.logo || "/placeholder.svg"}
        alt={`${brand.name} logo`}
        className="max-h-12 w-auto object-contain"
      />
    </div>
  );
}

export function TrustedBrands() {
  return (
    <section className="relative -mt-px bg-transparent">
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

          <div className="flex w-max animate-brand-marquee gap-6 sm:gap-8">
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
