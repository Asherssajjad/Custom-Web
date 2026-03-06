import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="global-glow" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
