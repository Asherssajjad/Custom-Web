'use client';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import BlogListing from '@/components/sections/BlogListing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section (Animated Logos) */}
      <section className="py-20 border-y border-white/5 bg-black/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-12 opacity-50">
            Trusted by World-Class Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['Shopify', 'WordPress', 'Google', 'Meta', 'Forbes', 'Amazon'].map(brand => (
              <span key={brand} className="text-3xl font-black italic tracking-tighter hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Case Studies Section (Preview) */}
      <CaseStudies isPreview={true} />

      {/* Process Section */}
      <Process />

      {/* About Section (Partial) */}
      <About />

      {/* Insights / Blog Listing */}
      <BlogListing />

      {/* Call to Action */}
      <CTA />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
