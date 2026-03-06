'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Contact from '@/components/sections/Contact';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ShopifyDevelopment() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* ── HERO ────────────────────────── */}
            <section className="pt-44 pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-12 text-center space-y-8">
                    <div className="section-label mx-auto">
                        <span className="dot" />
                        Specialised Service
                    </div>
                    <h1 className="font-display text-[15vw] md:text-[8vw] lg:text-[10vw] font-[900] uppercase italic leading-[0.8] tracking-tighter">
                        Shopify<br />
                        <span className="gradient-text">Excellence</span>
                    </h1>
                    <p className="font-body text-white/50 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
                        High-conversion, performance-engineered Shopify ecosystems for the next generation of commerce.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact" className="btn-primary">
                            Launch Your Store
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="font-display text-5xl md:text-7xl font-[900] uppercase italic leading-[0.9] tracking-tighter">
                                    Beyond The<br />
                                    <span className="text-white/30 italic">Standard Theme</span>
                                </h2>
                                <p className="font-body text-white/50 text-xl font-medium leading-relaxed">
                                    We don't just build stores; we architect revenue-generating systems using Headless Hydrogen or highly optimized Liquid storefronts.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    'Hydrogen & Oxygen',
                                    'Liquid Performance',
                                    'CRO Optimization',
                                    'Custom ERP Sync',
                                    'Advanced Subscriptions',
                                    'B2B Wholesale',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 group">
                                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                                        <span className="font-body text-lg font-bold text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-[40px] bg-white/[0.02] border border-white/5 overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1556742049-13ef7312754c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Shopify Dev"
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 p-10 glass rounded-[32px] border-primary/20 space-y-4 max-w-[280px]">
                                <p className="font-display text-5xl font-[900] italic text-primary">+340%</p>
                                <p className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Average Revenue Lift Post-Optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
