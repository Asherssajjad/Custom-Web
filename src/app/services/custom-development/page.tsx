'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Code, CheckCircle, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import Link from 'next/link';

export default function CustomDevService() {
    const features = [
        { title: 'SaaS Platforms', desc: 'Secure, scalable cloud infrastructures.' },
        { title: 'API Integration', desc: 'Connecting complex legacy systems.' },
        { title: 'AI Automation', desc: 'Efficiency powered by frontier LLMs.' },
        { title: 'Modern Stacks', desc: 'Next.js, Node, and High-Performance React.' },
        { title: 'Cloud DevOps', desc: 'AWS & Azure server-side engineering.' },
        { title: 'Security Hardening', desc: 'Enterprise-grade code audits and protection.' }
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
                                <Code className="w-4 h-4" />
                                <span>Next-Gen Engineering</span>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-[900] italic tracking-tighter uppercase leading-[0.85] font-heading">
                                Bespoke <br /> <span className="gradient-text italic opacity-60">Engineering</span> <br /> Architecture
                            </h1>
                            <p className="text-2xl text-muted-foreground max-w-2xl font-medium font-sans tracking-tight">
                                Architecting specialized software ecosystems to bridge the gap between complex brand vision and global scalability.
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
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
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
                            <span>Engineering Protocols</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-[900] uppercase italic tracking-tighter font-heading leading-tight">Solid <span className="gradient-text italic">Foundation</span></h2>
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

            <CTA />
            <Footer />
        </main>
    );
}
