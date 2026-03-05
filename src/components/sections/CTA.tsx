'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MoveRight, Star } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-black selection:bg-white/20">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[48px] border border-white/5 bg-gradient-to-br from-primary/10 via-black to-black p-12 md:p-32 overflow-hidden text-center group">

                    {/* Animated Background Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none -z-10" />

                    <div className="relative z-10 space-y-12">
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] uppercase font-black tracking-[0.4em]">
                                <Star className="w-3.5 h-3.5 fill-primary" />
                                <span>Start Your Dominance</span>
                            </div>
                        </div>

                        <h2 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-[900] text-white mb-10 tracking-[-0.05em] uppercase italic leading-[0.85] font-heading">
                            Ready to <br className="hidden md:block" /> <span className="gradient-text italic opacity-60">Architect</span> <br /> Your Growth?
                        </h2>

                        <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-20 font-medium tracking-tight font-sans">
                            Join the elite circle of brands scaling with high-performance
                            digital architecture and growth engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-6 bg-white text-black px-12 py-7 rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                            >
                                Inaugurate Project
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <button className="flex items-center gap-3 text-lg font-bold border-b border-white/20 hover:border-primary transition-all pb-2 group uppercase tracking-widest text-white/50 hover:text-white">
                                View Global Cases
                                <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
