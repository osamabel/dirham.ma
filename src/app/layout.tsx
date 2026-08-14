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
  title: `${site.domain} — Domain for sale`,
  description: site.description,
  openGraph: {
    title: `${site.domain} is for sale`,
    description: site.description,
    url: site.url,
    siteName: site.domain,
    type: "website",
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
