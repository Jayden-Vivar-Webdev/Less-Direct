import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Exclusive trade pricing tailored for installers",
  "Volume discounts and project support for larger jobs",
  "Reliable stock of genuine Dahua security solutions",
  "Growing range of electrical and solar products",
  "Fast delivery and responsive local support",
];

export function Benefits() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src="/images/warehouse-landscape.webp"
            alt="LESS DIRECT electrical wholesale warehouse"
            className="aspect-[4/3] size-full object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why installers switch
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The benefits of going LESS DIRECT
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We focus on what trade customers value most: quality products,
            competitive pricing, dependable stock and a team that supports your
            jobs from quote to delivery.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check
                    className="size-4"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Open a trade account</a>}
          />
        </div>
      </div>
    </section>
  );
}
