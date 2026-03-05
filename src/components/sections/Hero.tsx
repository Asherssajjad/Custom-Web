'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power4.out' } });

        tl.fromTo('.h-word',
            { yPercent: 120, opacity: 0, skewY: 3 },
            { yPercent: 0, opacity: 1, skewY: 0, stagger: 0.1, duration: 0.9 }
        )
            .fromTo('.h-sub', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
            .fromTo('.h-btn', { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.55, ease: 'back.out(1.7)' }, '-=0.4')
            .fromTo('.h-card', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, 0.3)
            .fromTo('.h-orb', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.25, duration: 1.2 }, 0.1);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-screen flex items-center overflow-hidden bg-black"
        >
            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
                }}
            />

            {/* Orbs – matching screenshot positions */}
            <motion.div className="h-orb absolute top-16 right-16 w-14 h-14 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #818cf8 0%, #6366f1 60%, transparent 100%)', boxShadow: '0 0 50px 16px rgba(99,102,241,0.55)' }}
                animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div className="h-orb absolute bottom-28 left-8 w-8 h-8 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #818cf8, #6366f1)', boxShadow: '0 0 35px 10px rgba(99,102,241,0.45)' }}
                animate={{ y: [0, 14, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div className="h-orb absolute top-[55%] right-6 w-5 h-5 rounded-full pointer-events-none"
                style={{ background: '#6366f1', boxShadow: '0 0 24px 8px rgba(99,102,241,0.4)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div className="space-y-7 z-10">

                    {/* Big headline – Barlow Condensed Black Italic */}
                    <div className="space-y-0 leading-none">
                        {['We Build', 'High-Performance', 'Digital Brands'].map((line, i) => (
                            <div key={i} className="overflow-hidden">
                                <h1
                                    className="h-word inline-block font-display text-[15vw] md:text-[10vw] lg:text-[7.5vw] uppercase leading-[0.9] tracking-[-0.02em]"
                                    style={i === 1 ? {
                                        background: 'linear-gradient(90deg,#818cf8,#a78bfa)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        fontStyle: 'italic',
                                    } : { color: '#fff', fontStyle: 'italic' }}
                                >
                                    {line}
                                </h1>
                            </div>
                        ))}
                    </div>

                    <p className="h-sub font-body text-white/50 text-base md:text-lg font-medium max-w-sm leading-relaxed">
                        Accelerate your growth with data-driven design, engineering, and digital marketing
                        strategies crafted for impact.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="h-btn btn-primary">
                            Start Project
                        </Link>
                        <Link href="/case-studies" className="h-btn btn-ghost">
                            View Our Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT — floating 3D dashboard */}
                <div className="relative flex items-center justify-center z-10">
                    {/* Big glow behind */}
                    <div className="absolute w-80 h-80 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)' }} />

                    <motion.div
                        className="h-card w-full max-w-[420px]"
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                        style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))' }}
                    >
                        <div className="rounded-2xl p-5 overflow-hidden" style={{
                            background: 'linear-gradient(145deg, rgba(25,22,55,0.97) 0%, rgba(10,8,28,0.99) 100%)',
                            border: '1px solid rgba(99,102,241,0.2)',
                            transform: 'perspective(1200px) rotateY(-10deg) rotateX(5deg)',
                            boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                        }}>
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4 pb-3 border-b border-white/5">
                                <div>
                                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Dashboard</p>
                                    <p className="font-body text-xs text-white/55 font-medium mt-0.5">Key Metrics — Mar 2026</p>
                                </div>
                                <div className="flex gap-1.5">
                                    {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                                        <div key={c} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.65 }} />
                                    ))}
                                </div>
                            </div>

                            {/* +240% Growth badge */}
                            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/25">
                                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                                <span className="font-body font-[800] text-sm text-primary">+240% Growth</span>
                            </div>

                            {/* Mini stats */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {[['Revenue', '+£2.3k'], ['AOV', '£0.89'], ['Conv.', '3.5%']].map(([l, v]) => (
                                    <div key={l} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <p className="font-body text-[9px] font-bold uppercase tracking-wider text-white/25 mb-1">{l}</p>
                                        <p className="font-body text-sm font-[800] text-white">{v}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Bar chart */}
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-3">
                                <p className="font-body text-[9px] font-bold uppercase tracking-wider text-white/25 mb-3">Monthly Revenue</p>
                                <div className="flex items-end gap-1 h-12">
                                    {[30, 50, 38, 65, 45, 75, 55, 70, 48, 85, 68, 100].map((h, i) => (
                                        <motion.div key={i}
                                            className="flex-1 rounded-sm"
                                            style={{ height: `${h}%`, originY: 1, background: i >= 9 ? 'linear-gradient(to top,#6366f1,#818cf8)' : 'rgba(99,102,241,0.2)' }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: 1.6 + i * 0.04, duration: 0.45 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Table rows */}
                            <div className="space-y-1.5">
                                {[['NRL analytics suite', '£4.34', '+12.3%'], ['Platform efficiency', '98.2%', '+2.1%']].map(([l, v, c]) => (
                                    <div key={l} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02]">
                                        <span className="font-body text-[10px] text-white/35">{l}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-body text-[10px] font-semibold text-white/55">{v}</span>
                                            <span className="font-body text-[10px] font-[800] text-emerald-400">{c}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
