'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden bg-black">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 text-center space-y-6 max-w-2xl">
                <div className="section-label mx-auto">
                    <span className="dot" />
                    <Sparkles className="w-3.5 h-3.5" />
                    Growth Protocol
                </div>

                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white uppercase italic">
                    Delivering Results That<br />
                    <span className="gradient-text italic">Propel Your Success</span>
                </h2>

                <p className="font-body text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto">
                    At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
                </p>

                <div className="pt-4 flex justify-center">
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Book a 10-min call
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
