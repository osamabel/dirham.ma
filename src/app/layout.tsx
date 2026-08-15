import type { Metadata } from "next";
import { Syne, Figtree } from "next/font/google";
import { site } from "@/lib/config";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.domain} — Domain for sale | Premium .ma name`,
    template: `%s | ${site.domain}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: "Oussama Belkhadir", url: site.url }],
  creator: "Oussama Belkhadir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.domain} is for sale`,
    description: site.description,
    url: site.url,
    siteName: site.domain,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1536,
        height: 1024,
        alt: `${site.domain} — Moroccan domain for sale`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.domain} is for sale`,
    description: site.description,
    images: ["/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
