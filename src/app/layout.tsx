import type { Metadata } from "next";
import { Barlow_Condensed, Figtree } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// Display / Hero font — bold condensed italic like the screenshot
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Body / UI font — clean, rounded, modern
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LUMINA | Premium Digital Agency | Shopify, WordPress & SEO",
  description:
    "Lumina is a world-class digital agency specializing in high-performance Shopify stores, custom WordPress websites, and aggressive SEO strategies.",
  keywords: "Shopify development, WordPress development, SEO, digital agency, CRM integrations, mobile app development",
  authors: [{ name: "Lumina Digital Agency" }],
  openGraph: {
    title: "LUMINA | Premium Digital Agency",
    description: "High-performance digital experiences for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${figtree.variable} font-body antialiased bg-black text-white`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
