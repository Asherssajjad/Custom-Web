'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-48 overflow-hidden bg-black flex items-center justify-center">
            {/* Massive Global Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1000px] bg-[#0088ff]/15 blur-[200px] rounded-full pointer-events-none" />

            {/* Orbs */}
            <motion.div
                animate={{ y: [0, -40, 0], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00fbff]/15 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 40, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0088ff]/15 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 container mx-auto px-6 text-center space-y-10 max-w-4xl">
                <div className="section-label mx-auto">
                    <span className="dot" />
                    <Sparkles className="w-3.5 h-3.5 text-[#00fbff]" />
                    Growth Protocol
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none font-display text-white pr-4 uppercase">
                    Delivering Results That<br />
                    <span className="gradient-text italic">Propel Your Success</span>
                </h2>

                <p className="font-body text-white/40 text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
                    At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
                </p>

                <div className="pt-10 flex justify-center">
                    <Link href="/contact" className="group relative px-14 py-6 rounded-full bg-white text-black font-black text-lg md:text-xl uppercase tracking-tighter overflow-hidden shadow-3xl hover:shadow-[0_0_80px_rgba(255,255,255,0.2)] transition-all duration-500">
                        <span className="relative z-10 flex items-center gap-3">
                            Book a 10-min call
                            <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00fbff] to-[#0088ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
