"use client"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  { icon: Phone, label: "Trade line", value: "0800 123 4567" },
  { icon: Mail, label: "Email", value: "trade@lessdirect.co.uk" },
  { icon: MapPin, label: "Trade counter", value: "Unit 7, Forge Park, Birmingham B6 7EU" },
  { icon: Clock, label: "Opening hours", value: "Mon–Fri 6am–8pm · Sat 7am–4pm" },
]

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get started
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Open your trade account today
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Drop your details in and a member of our trade team will set you up with
              pricing, credit options and stock access — usually within the hour.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-0.5 font-medium">{d.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks — our trade team will be in touch shortly to get your account live.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Full name
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Sam Rivera" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                      Company
                    </label>
                    <input id="company" name="company" className={fieldClass} placeholder="Rivera Electrical" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.co.uk" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="07700 900000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about the kit you order most and we'll sort your pricing."
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 w-full text-base font-semibold">
                  Open my trade account
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  No fees, no minimum spend. Trade customers only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
