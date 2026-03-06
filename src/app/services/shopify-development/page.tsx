'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { ShoppingBag, CheckCircle, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ShopifyService() {
    const features = [
        { title: 'Custom Theme Dev', desc: 'Bespoke designs optimized for performance and high-intent buying journeys.' },
        { title: 'Headless Shopify', desc: 'Next.js + Shopify for ultra-fast load times and unmatched SEO flexibility.' },
        { title: 'App Integration', desc: 'Custom apps and private integrations for unique enterprise business logic.' },
        { title: 'Conversion Audit', desc: 'Data-driven UI/UX scaling strategies rooted in customer psychology.' },
        { title: 'Platform Migration', desc: 'Seamlessly move from any legacy system with zero SEO downtime.' },
        { title: 'DevOps & CI/CD', desc: 'Staging, testing, and stable production builds for enterprise reliability.' }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                {/* Intensified Background Glows */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/10 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-primary-deep/10 blur-[150px] -z-10" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left">
                        <div className="flex-1 space-y-10">
                            <div className="section-label mx-auto lg:mx-0">
                                <span className="dot" />
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Shopify Excellence</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] font-display">
                                Scale Your <br /> <span className="gradient-text">E-commerce</span> <br /> Domain
                            </h1>
                            <p className="text-lg md:text-xl text-white/45 max-w-2xl font-medium font-body leading-relaxed mx-auto lg:mx-0">
                                Architecting high-performance Shopify engines that dominate global categories and drive millions in conversion value.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                                <Link href="/contact" className="btn-indigo px-10 py-5 text-base">Book Audit</Link>
                                <Link href="/case-studies" className="flex items-center gap-3 font-bold text-sm hover:text-primary-light transition-all group uppercase tracking-widest text-white/40">
                                    View Results
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative aspect-[4/3] w-full max-w-xl rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-13ef7312754c?q=80&w=1200&auto=format&fit=crop"
                                alt="Shopify Excellence"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <div className="section-label mx-auto">
                            <span className="dot" />
                            Engineering Protocols
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter font-display leading-tight">What We <span className="gradient-text italic">Architect</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-10 rounded-[40px] border border-white/10 bg-white/[0.03] hover:border-primary-light/30 hover:bg-white/[0.05] transition-all group cursor-default backdrop-blur-sm">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-all">
                                    <CheckCircle className="w-7 h-7 text-primary-light" />
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight font-display">{feature.title}</h3>
                                <p className="text-white/45 text-base font-medium font-body leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10" />
                <div className="container mx-auto px-6 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                        {[
                            { label: 'Conversion Lift', val: '240%', icon: Zap },
                            { label: 'Revenue Growth', val: '45%+', icon: Target },
                            { label: 'Mobile Sales', val: '2x', icon: Layers },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <h4 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-white italic uppercase font-display leading-none">{stat.val}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-light/60">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
