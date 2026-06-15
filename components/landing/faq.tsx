"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Who can open a trade account?",
    a: "Accounts are for electrical trade professionals — sole traders, contractors and businesses. We'll verify your trade status when you sign up, which usually takes under an hour.",
  },
  {
    q: "Is there a minimum order value?",
    a: "No. Order one socket or a full board's worth of kit — trade pricing applies either way. Free next-day delivery kicks in on orders over £75.",
  },
  {
    q: "How fast is delivery?",
    a: "Order by 8pm Monday to Friday for free next-day delivery to your site or yard. You can also collect from our trade counter within 30 minutes of ordering.",
  },
  {
    q: "Do you offer credit terms?",
    a: "Yes. Approved accounts get 30-day credit terms. You can apply when you open your account, or upgrade an existing cash account at any time.",
  },
  {
    q: "What's your returns policy?",
    a: "Unused stock in its original packaging can be returned within 60 days for a full refund. Faulty goods are covered by manufacturer warranty and replaced free of charge.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold">{faq.q}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
