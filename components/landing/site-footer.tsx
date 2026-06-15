import { Logo } from "./logo"

const columns = [
  {
    title: "Shop",
    links: ["Cables & Wiring", "Circuit Protection", "Lighting & Fittings", "Wiring Accessories", "Full Catalogue"],
  },
  {
    title: "Company",
    links: ["About Us", "Trade Counters", "Careers", "Sustainability", "Contact"],
  },
  {
    title: "Support",
    links: ["Open an Account", "Delivery & Collection", "Returns", "Credit Terms", "Help Centre"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Trade-only electrical wholesale. Genuine stock, honest prices and next-day
              delivery — built for electricians.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LESS DIRECT Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
