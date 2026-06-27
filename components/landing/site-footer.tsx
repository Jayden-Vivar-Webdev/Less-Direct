import { Logo } from "./logo";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Cables & Wiring", href: "#products" },
      { label: "Security Cameras", href: "#products" },
      { label: "Security Systems", href: "#products" },
      { label: "Wiring Accessories", href: "#products" },
      { label: "Full Catalogue", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Trade Discounts", href: "#contact" },
      // { label: "Careers", href: "#contact" },
      // { label: "Sustainability", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Open an Account", href: "#contact" },
      { label: "Request Pricing", href: "#contact" },
      { label: "Contact Our Team", href: "#contact" },
      { label: "Discuss a Project", href: "#contact" },
      { label: "Apply for Wholesale Pricing", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-card/40">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-40" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Built for trade installers across Australia. Quality security,
              electrical and solar products with competitive pricing and
              reliable support.
            </p>
            <div className="mt-5 space-y-1 text-sm text-muted-foreground">
              <p>
                <strong>ABN:</strong> 48 698 722 673
              </p>
              <p>
                <strong>Licence Number:</strong> 000 111 212
              </p>
              <p>
                <strong>Operating hours:</strong> Monday to Saturday 6am -
                4.30pm
              </p>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LESS DIRECT Pty Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            {/* <a href="#" className="transition-colors hover:text-foreground">
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
