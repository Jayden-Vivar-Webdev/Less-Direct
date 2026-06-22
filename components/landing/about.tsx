"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-2"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About LESS DIRECT
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built to support installers across Australia
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            At LESS Direct, we understand what installers need: quality
            products, competitive pricing, reliable stock and fast support. Our
            core range includes Dahua Smart Dual Light, TiOC Pro and TiOC Duo
            cameras, AI NVRs, alarms, intercoms and accessories.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We also supply a growing range of electrical and solar products.
            Whether you are purchasing for a single installation or a
            large-scale project, our focus is simple: dependable service and
            strong trade pricing that helps your business grow.
          </p>
          {/* <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="mt-8 h-12 px-6 text-base font-semibold"
            render={<a href="#contact">Talk to our trade team</a>}
          /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="order-1 overflow-hidden rounded-xl border border-border lg:order-1"
        >
          <img
            src="/images/less-warehouse.png"
            alt="LESS DIRECT trade counter team helping an electrician"
            className="aspect-[4/3] size-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
