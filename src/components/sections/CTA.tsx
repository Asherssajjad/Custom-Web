'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MoveRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[60px] bg-gradient-to-br from-primary via-indigo-600 to-secondary p-12 md:p-24 overflow-hidden text-center group">
                    {/* Animated Background Overlay */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 blur-[100px] rounded-full pointer-events-none"
                    />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter italic">
                            Ready to Accelerate <br className="hidden md:block" /> Your Growth?
                        </h2>
                        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium">
                            Join the elite brands that scale with high-performance
                            Shopify and WordPress ecosystems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
                            >
                                Start Your Project
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="text-white font-bold text-lg border-b-2 border-white/20 hover:border-white transition-all pb-1 flex items-center gap-2 group"
                            >
                                View Case Studies
                                <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
