'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-black">
            {/* Background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 container mx-auto px-6 text-center space-y-7 max-w-2xl">
                {/* Label — matches screenshot exactly */}
                <div className="section-label mx-auto w-fit">
                    <span className="dot" />
                    Results
                </div>

                {/* Headline — Figtree (like screenshot, not condensed) */}
                <h2 className="font-body text-3xl md:text-5xl font-[800] leading-[1.1] tracking-tight text-white">
                    Delivering Results<br />
                    <span className="text-white">That Propel Your Success</span>
                </h2>

                <p className="font-body text-white/45 text-base font-medium leading-relaxed max-w-md mx-auto">
                    At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
                </p>

                <div className="pt-2">
                    <Link href="/contact" className="btn-indigo inline-flex">
                        Book a 10-min call
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
