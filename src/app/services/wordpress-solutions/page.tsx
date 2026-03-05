'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Globe, CheckCircle, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import Link from 'next/link';

export default function WordPressService() {
    const features = [
        { title: 'Bespoke Themes', desc: 'Custom built for speed, performance, and SEO.' },
        { title: 'WooCommerce', desc: 'Dynamic e-commerce systems scaled for enterprise.' },
        { title: 'Security Audits', desc: 'Hardened protection and real-time monitoring.' },
        { title: 'Speed Optimization', desc: 'Core Web Vital dominance and lazy-loading.' },
        { title: 'CRM Sync', desc: 'Seamless lead management and sales flows.' },
        { title: 'Legacy Migration', desc: 'Upgrading and refactoring your old WP sites.' }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-primary/5 blur-[200px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1 space-y-12">
                            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] text-primary uppercase font-black text-xs tracking-[0.3em]">
                                <Globe className="w-4 h-4" />
                                <span>Enterprise WordPress</span>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-[900] italic tracking-tighter uppercase leading-[0.85] font-heading">
                                Performance <br /> <span className="gradient-text italic">Architecture</span> <br /> Engineering
                            </h1>
                            <p className="text-2xl text-muted-foreground max-w-2xl font-medium font-sans tracking-tight">
                                WordPress builds beyond simple content management into high-speed, secure, and resilient enterprise platforms.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-10 pt-4">
                                <Link href="/contact" className="px-12 py-6 rounded-full bg-white text-black font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-all shadow-2xl">Start Architecture</Link>
                                <button className="flex items-center gap-4 font-black text-lg hover:text-primary transition-all group uppercase tracking-widest text-white/50">
                                    Case Studies
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative aspect-square w-full max-w-lg rounded-[64px] overflow-hidden border border-white/5 group shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <div className="flex items-center justify-center gap-4 text-xs font-black tracking-[0.4em] uppercase text-primary">
                            <Zap className="w-4 h-4 fill-primary/30" />
                            <span>Enterprise CMS Protocols</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-[900] uppercase italic tracking-tighter font-heading leading-tight">What We <span className="gradient-text italic">Architect</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, i) => (
                            <div key={i} className="p-12 rounded-[40px] border border-white/5 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all group cursor-default">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-primary/20 transition-all">
                                    <CheckCircle className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter font-heading">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg font-medium font-sans leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-40">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                        {[
                            { label: 'Security Score', val: '99.9%', icon: Zap },
                            { label: 'Speed Index', val: 'Low 1s', icon: Target },
                            { label: 'Lead Growth', val: '3x', icon: Layers },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="text-8xl font-black tracking-[-0.05em] text-white italic uppercase font-heading leading-none">{stat.val}</h4>
                                <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">{stat.label}</p>
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
