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
import { FloatingCta } from "@/components/landing/floating-cta";
import { AnimatedGlobe } from "@/components/landing/animated-globe";
import Script from "next/script";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        {/* <TrustedBrands /> */}
        <Stats />
        <Categories />
        <Features />
        <Products />
        <HowItWorks />
        <Benefits />
        <AnimatedGlobe />
        <About />
        {/* <Testimonials /> */}
        {/* <CtaBanner /> */}
        <Contact />
        <Faq />
      </main>
      <FloatingCta />
      <SiteFooter />
      <Script
        src="https://client-revision-widget.vercel.app/widget.js"
        data-to="contact.nexawebdev@gmail.com"
        data-project="Client Project - Less Direct"
        data-side="left"
        data-accent="#2563eb"
        defer
      />
    </div>
  );
}
