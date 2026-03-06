'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Globe, CheckCircle, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import Link from 'next/link';

export default function WordPressService() {
    const features = [
        { title: 'Enterprise WP', desc: 'Custom core development for heavy-traffic corporate platforms.' },
        { title: 'WooCommerce Scaling', desc: 'Bespoke checkout and catalog engines optimized for global e-commerce.' },
        { title: 'Headless WordPress', desc: 'WP as a CMS with Next.js frontend for maximum performance.' },
        { title: 'Security Hardening', desc: 'Military-grade protection and proactive threat monitoring.' },
        { title: 'Speed Optimization', desc: 'Core Web Vital perfection with advanced caching and DB tuning.' },
        { title: 'API Integrations', desc: 'Seamlessly connecting WP with your entire SaaS ecosystem.' }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/10 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-primary-deep/10 blur-[150px] -z-10" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left">
                        <div className="flex-1 space-y-10">
                            <div className="section-label mx-auto lg:mx-0">
                                <span className="dot" />
                                <Globe className="w-3.5 h-3.5" />
                                <span>WordPress Solutions</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] font-display">
                                Bespoke <br /> <span className="gradient-text">Enterprise</span> <br /> Architecture
                            </h1>
                            <p className="text-lg md:text-xl text-white/45 max-w-2xl font-medium font-body leading-relaxed mx-auto lg:mx-0">
                                Engineering robust WordPress platforms that combine ease of management with enterprise-grade speed and security.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                                <Link href="/contact" className="btn-indigo px-10 py-5 text-base">Get Proposal</Link>
                                <Link href="/case-studies" className="flex items-center gap-3 font-bold text-sm hover:text-primary-light transition-all group uppercase tracking-widest text-white/40">
                                    View Results
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative aspect-[4/3] w-full max-w-xl rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                                alt="WordPress Excellence"
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
                            Digital Standards
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter font-display leading-tight">What We <span className="gradient-text italic">Build</span></h2>
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

            <CTA />
            <Footer />
        </main>
    );
}
