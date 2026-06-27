import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LESS DIRECT — Electrical Wholesale for Electricians",
  description:
    "Trade-only electrical wholesaler. Cables, circuit protection, lighting and more — trade prices, next-day delivery, and stock you can rely on. Built for electricians.",
  openGraph: {
    title: "LESS DIRECT — Electrical Wholesale for Electricians",
    description:
      "Trade-only electrical wholesaler. Cables, circuit protection, lighting and more — trade prices, next-day delivery, and stock you can rely on. Built for electricians.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LESS DIRECT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LESS DIRECT — Electrical Wholesale for Electricians",
    description:
      "Trade-only electrical wholesaler. Cables, circuit protection, lighting and more — trade prices, next-day delivery, and stock you can rely on. Built for electricians.",
    images: ["/og-image.png"],
  },
  generator: "Nexa Web Development",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#2b2a26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
