"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          <a
            href="#top"
            aria-label="LESS DIRECT home"
            className="md:justify-self-start"
          >
            <Logo className="h-20" />
          </a>

          <nav
            className="hidden items-center gap-8 md:flex md:justify-self-center"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex md:justify-self-end">
            <a
              href="tel:1800"
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" />
              1800 Less Direct
            </a>
            <Button
              size="lg"
              nativeButton={false}
              className="font-semibold"
              render={<a href="#contact">Open Trade Account</a>}
            />
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-2 font-semibold"
              render={
                <a href="#contact" onClick={() => setOpen(false)}>
                  Open Trade Account
                </a>
              }
            />
          </nav>
        </div>
      )}
    </header>
  );
}
