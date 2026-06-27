"use client";

import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  name: string;
  sku: string;
  price: string;
  unit: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    name: "Dahua Smart Dual Light 6MP Turret Camera (White)",
    sku: "DHU7597",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHUWSK66T8BNA-4TBWHT-DL/images/DHUWSK66T8BNA-4TBWHT-DL_pi_1.png",
    tag: "Camera",
  },
  {
    name: "Dahua Smart Dual Light 8MP Turret Camera (White)",
    sku: "DHU7531",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7531/images/DHU7531_DH-IPC-HDW3867EM-S-IL-ANZ_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua TiOC 3.0 6MP Turret Camera (White)",
    sku: "DHU7480",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7480/images/DHU7480_DH-IPC-HDW3649H-AS-PV-ANZ-S2_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua TiOC 3.0 8MP Bullet Camera (White)",
    sku: "DHU7478",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7478/images/DHU7478_DH-IPC-HFW3849T1-AS-PV-ANZ-S2_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua TiOC PRO 6MP Turret Camera (White)",
    sku: "DHU7557",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7557/images/DHU7557_DH-IPC-HDW3649H-AS-PV-PRO-ANZ_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua TiOC PRO 8MP Turret Camera (Black)",
    sku: "DHU7654",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7654/images/DHU7654_DH-IPC-HDW3849H-AS-PV-PRO-ANZ-BLK_product_image_1.png",
    tag: "Camera",
  },
  {
    name: "Dahua TiOC DUO 180° Bullet Camera (2x4MP)",
    sku: "DHU-TIOCDUO",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7407/images/DHU7407_DH-IPC-PDW3849-A180-AS-PV-BLK_product-image_1.png",
    tag: "Camera",
  },
  {
    name: "Dahua Standard 6MP Turret Camera (White)",
    sku: "DHU7184",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7480/images/DHU7480_DH-IPC-HDW3649H-AS-PV-ANZ-S2_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua Standard 8MP Bullet Camera (White)",
    sku: "DHU7276",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7478/images/DHU7478_DH-IPC-HFW3849T1-AS-PV-ANZ-S2_product-image_1.PNG",
    tag: "Camera",
  },
  {
    name: "Dahua 4-Channel NVR (4x PoE, Black)",
    sku: "DHU7277",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7277/images/DHU7277_DHI-NVR4104HS-P-AIANZ_product-image_1.png",
    tag: "Recorder",
  },
  {
    name: "Dahua 8-Channel AI NVR (Black)",
    sku: "DHU7746",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7746/images/DHU7746_DHI-NVR4108-WT_product-image_1.jpg",
    tag: "Recorder",
  },
  {
    name: "Dahua 16-Channel NVR (16x PoE, Black)",
    sku: "DHU7269",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7269/images/DHU7269_DHI-NVR5416-16P-AI-ANZ_product-image_1.png",
    tag: "Recorder",
  },
  {
    name: "Dahua 32-Channel NVR (16x PoE, 8 SATA, Black)",
    sku: "DHU7273",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7273/images/DHU7273_DHI-NVR5832-16P-AI-ANZ_product-image_1.png",
    tag: "Recorder",
  },
  {
    name: "Dahua SIP2.0 1-Button Audio/Video Door Station",
    sku: "DAHI9955",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DAHI10018/images/DAHI10018_DHI-VTO4202FB-P1_product-image_1.PNG",
    tag: "Intercom",
  },
  {
    name: "Dahua SIP2.0 Keypad Video Door Station",
    sku: "DAHI10068",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DAHI10008/images/DAHI10008_VTO6222E-P_product-image_1.png",
    tag: "Intercom",
  },
  {
    name: "Dahua AirShield Wireless Alarm Kit",
    sku: "DAHI10016",
    price: "POA",
    unit: "kit",
    image:
      "https://resources.seadan.com.au/resources/products/DAHI10063/images/DAHI10063_product-image_1.PNG",
    tag: "Alarm",
  },
  {
    name: "Dahua Cat6 Network Cable (Blue, 305m)",
    sku: "DHU7061",
    price: "POA",
    unit: "box",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7061/images/DHU7061_DH-PFM920I-6UN-C_product-image_1.PNG",
    tag: "Cable",
  },
  {
    name: "Dahua TiOC Auto-Tracking 8MP PTZ Speed Dome",
    sku: "DHU7433",
    price: "POA",
    unit: "each",
    image:
      "https://resources.seadan.com.au/resources/products/DHU7433/images/DHU7433_DH-SD6C3825GA-NHR-A-PV1_product-image_1.png",
    tag: "PTZ",
  },
];

export function Products() {
  const [activeTag, setActiveTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tags = useMemo(
    () => [
      "All",
      ...Array.from(new Set(products.map((product) => product.tag))),
    ],
    [],
  );

  const filteredProducts = useMemo(() => {
    if (activeTag === "All") return products;
    return products.filter((product) => product.tag === activeTag);
  }, [activeTag]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);
  const hasMoreProducts = filteredProducts.length > 8;

  return (
    <section
      id="products"
      className="relative border-b border-border bg-card/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-8"
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
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-30">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Installer favourites
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Exclusive Trade Pricing on Leading Brands
            </h2>
          </div>
          <Button
            variant="outline"
            nativeButton={false}
            size="lg"
            className="font-semibold"
            render={<a href="#contact">Request Pricing & Project Support</a>}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              type="button"
              size="sm"
              variant={activeTag === tag ? "default" : "outline"}
              className="px-3 font-semibold"
              onClick={() => {
                setActiveTag(tag);
                setShowAll(false);
              }}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div
          key={`${activeTag}-${showAll ? "all" : "top"}`}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProducts.map((product) => (
            <div
              key={product.sku}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card z-10 transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="size-full object-contain p-4"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-semibold leading-snug">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  SKU: {product.sku}
                </p>
                <div className="mt-4">
                  <span className="text-lg font-extrabold tracking-tight text-primary">
                    Trade Pricing Available
                  </span>
                </div>
                <Button
                  size="lg"
                  nativeButton={false}
                  className="mt-4 w-full font-semibold"
                  render={
                    <a href="#contact">
                      <ShoppingCart className="size-4" /> Request Pricing
                    </a>
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {hasMoreProducts ? (
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="font-semibold"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Fewer Products" : "Show All Products"}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
