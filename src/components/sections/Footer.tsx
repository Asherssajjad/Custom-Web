'use client';

import Link from 'next/link';
import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-white/5 pb-20 mb-10">

                    {/* Brand Col */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                <Zap className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-display text-3xl font-[900] italic uppercase tracking-tighter text-white">
                                Lumina
                            </span>
                        </Link>
                        <p className="font-body text-white/40 text-lg font-medium leading-relaxed max-w-sm">
                            Architecting high-performance digital brands since 2018. We bridge the gap between creative excellence and technical engineering.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
                        <div className="space-y-6">
                            <p className="font-body text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Solutions</p>
                            <ul className="space-y-4">
                                {['Shopify', 'WordPress', 'SEO Growth', 'Custom Dev'].map((l) => (
                                    <li key={l}>
                                        <Link href="#" className="font-body text-base font-bold text-white/50 hover:text-white transition-colors">
                                            {l}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <p className="font-body text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Agency</p>
                            <ul className="space-y-4">
                                {['Approach', 'Case Studies', 'Insights', 'Contact'].map((l) => (
                                    <li key={l}>
                                        <Link href="#" className="font-body text-base font-bold text-white/50 hover:text-white transition-colors">
                                            {l}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <p className="font-body text-[10px] font-black uppercase tracking-[0.3em] text-white/20">New Projects</p>
                            <div className="space-y-4">
                                <p className="font-display text-2xl font-[900] italic uppercase text-white hover:text-primary transition-colors cursor-pointer">
                                    Start Project
                                </p>
                                <p className="font-body text-sm text-white/30 font-medium">Inaugurate change today. Book your free 15-min strategy session.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-body text-[11px] font-bold text-white/20 uppercase tracking-widest">
                        © {currentYear} Lumina Digital Agency. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="font-body text-[11px] font-bold text-white/20 uppercase tracking-widest hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="font-body text-[11px] font-bold text-white/20 uppercase tracking-widest hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
