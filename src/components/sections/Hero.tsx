'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power4.out' } });

        tl.fromTo('.h-line',
            { y: 100, opacity: 0, rotateX: -20 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 1.2 }
        )
            .fromTo('.h-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
            .fromTo('.h-btn', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(2)' }, '-=0.4')
            .fromTo('.h-card', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 0.4);

    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen flex items-center bg-[#000] pt-20 overflow-hidden">

            {/* ── Background Grid ────────────────── */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
                    backgroundSize: '64px 64px',
                    maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
                }}
            />

            {/* ── Orbs ───────────────────────────── */}
            <div className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[-5%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT: Massive Typography */}
                    <div className="lg:col-span-7 space-y-10 group">
                        <div className="space-y-0 tracking-tighter">
                            <div className="overflow-hidden">
                                <h1 className="h-line font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-[900] uppercase italic leading-[0.85] text-white">
                                    We Build
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="h-line font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-[900] uppercase italic leading-[0.85] gradient-text">
                                    High-Performance
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="h-line font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-[900] uppercase italic leading-[0.85] text-white">
                                    Digital Brands
                                </h1>
                            </div>
                        </div>

                        <p className="h-sub font-body text-white/50 text-xl md:text-2xl font-medium max-w-lg leading-relaxed">
                            Accelerate your growth with data-driven design, engineering, and digital marketing strategies.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/contact" className="h-btn btn-primary text-lg px-10 py-5">
                                Start Project
                            </Link>
                            <Link href="/case-studies" className="h-btn btn-ghost text-lg px-10 py-5">
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Floating UI Card */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            className="h-card"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="rounded-3xl p-6 glass border-white/5 shadow-2xl relative overflow-hidden group/card"
                                style={{ background: 'linear-gradient(145deg, rgba(15,15,30,0.95), rgba(5,5,15,0.98))' }}
                            >
                                <div className="flex justify-between items-center mb-10">
                                    <div className="space-y-1">
                                        <p className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Analytics Suite</p>
                                        <p className="font-body text-xs text-white/60 font-semibold">Live Performance Hub</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <p className="font-display text-6xl font-[900] italic text-white">+240%</p>
                                            <ArrowUpRight className="w-8 h-8 text-primary mb-2" />
                                        </div>
                                        <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">Revenue Growth</p>
                                    </div>

                                    <div className="h-32 flex items-end gap-2 group-hover/card:gap-3 transition-all duration-500">
                                        {[45, 65, 35, 85, 55, 95, 65, 100].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 bg-primary/20 rounded-md relative overflow-hidden"
                                                style={{ height: `${h}%` }}
                                            >
                                                <motion.div
                                                    className="absolute inset-x-0 bottom-0 bg-primary"
                                                    initial={{ height: 0 }}
                                                    animate={{ height: i === 7 ? '100%' : '30%' }}
                                                    transition={{ delay: 1 + i * 0.1, duration: 1 }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex gap-4">
                                        <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                            <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Conversion</p>
                                            <p className="font-display text-xl font-[900] italic text-primary">4.8%</p>
                                        </div>
                                        <div className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                            <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">AOV</p>
                                            <p className="font-display text-xl font-[900] italic text-primary">£124</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
