import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { TrustedBrands } from "@/components/landing/trusted-brands";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { Categories } from "@/components/landing/categories";
import { Products } from "@/components/landing/products";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Benefits } from "@/components/landing/benefits";
import { About } from "@/components/landing/about";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { Faq } from "@/components/landing/faq";
import { CtaBanner } from "@/components/landing/cta-banner";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        {/* <TrustedBrands /> */}
        <Stats />
        <Features />

        {/* <Categories />
        <Products />
        <HowItWorks />
        <Benefits />
        <About />
        <Testimonials />
        <Contact />
        <Faq />
        <CtaBanner /> */}
      </main>
      <SiteFooter />
    </div>
  );
}
