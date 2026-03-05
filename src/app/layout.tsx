import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "LUMINA | Premium Digital Agency | Shopify, WordPress & SEO",
  description: "Lumina is a world-class digital agency specializing in high-performance Shopify stores, custom WordPress websites, and aggressive SEO strategies.",
  keywords: ["Shopify Development", "WordPress Agency", "SEO Services", "Digital Agency", "Web Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
