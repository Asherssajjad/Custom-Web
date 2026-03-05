'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power4.out' } });

        tl.fromTo('.h-line',
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1 }
        )
            .fromTo('.h-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
            .fromTo('.h-btn', { y: 16, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5')
            .fromTo('.h-card', { x: 60, opacity: 0, rotateY: 15 }, { x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8')
            .fromTo('.h-orb', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2, duration: 1 }, 0.3);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-screen flex items-center overflow-hidden bg-[#080810]"
        >
            {/* ── Grid Background ────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: '48px 48px',
                }}
            />

            {/* ── Floating Orbs (matching screenshot exactly) ── */}
            {/* Top-right large orb */}
            <motion.div
                className="h-orb absolute top-16 right-20 w-16 h-16 rounded-full bg-primary/70 blur-sm pointer-events-none"
                animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ boxShadow: '0 0 40px 12px rgba(99,102,241,0.5)' }}
            />
            {/* Bottom-left medium orb */}
            <motion.div
                className="h-orb absolute bottom-24 left-12 w-10 h-10 rounded-full bg-primary/60 blur-sm pointer-events-none"
                animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ boxShadow: '0 0 30px 10px rgba(99,102,241,0.4)' }}
            />
            {/* Centre-right small orb */}
            <motion.div
                className="h-orb absolute top-1/2 right-8 w-5 h-5 rounded-full bg-primary/50 blur-[2px] pointer-events-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ boxShadow: '0 0 20px 8px rgba(99,102,241,0.35)' }}
            />

            {/* ── Content Grid ─────────────────────────── */}
            <div className="container mx-auto px-6 md:px-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT ── Text Block */}
                <div className="space-y-8 z-10">

                    <div className="space-y-2 overflow-hidden">
                        <div className="overflow-hidden">
                            <h1 className="h-line text-[13vw] md:text-[8vw] lg:text-[5.8vw] font-[900] uppercase italic tracking-tighter leading-[0.85] font-heading text-white">
                                We Build
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="h-line text-[13vw] md:text-[8vw] lg:text-[5.8vw] font-[900] uppercase italic tracking-tighter leading-[0.85] font-heading"
                                style={{ background: 'linear-gradient(90deg, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                High-Performance
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="h-line text-[13vw] md:text-[8vw] lg:text-[5.8vw] font-[900] uppercase italic tracking-tighter leading-[0.85] font-heading text-white">
                                Digital Brands
                            </h1>
                        </div>
                    </div>

                    <p className="h-sub opacity-0 text-white/50 text-lg md:text-xl font-medium font-sans max-w-md leading-relaxed">
                        Accelerate your growth with data-driven design, engineering, and digital marketing
                        strategies crafted for impact.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="h-btn opacity-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-black text-base uppercase tracking-wider hover:scale-105 active:scale-95 transition-all font-heading shadow-xl"
                        >
                            Start Project
                        </Link>
                        <Link
                            href="/case-studies"
                            className="h-btn opacity-0 inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-black text-base uppercase tracking-wider hover:bg-white/5 transition-all font-heading"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT ── 3D Dashboard Card */}
                <div className="relative flex items-center justify-center z-10">

                    {/* Glow behind card */}
                    <div
                        className="absolute w-72 h-72 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)' }}
                    />

                    <motion.div
                        className="h-card opacity-0 relative w-full max-w-md"
                        style={{ perspective: 1000 }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    >
                        {/* Card shell */}
                        <div
                            className="rounded-2xl p-4 border border-white/10 overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(30,27,60,0.95) 0%, rgba(15,12,35,0.98) 100%)',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
                                transform: 'perspective(1000px) rotateY(-8deg) rotateX(4deg)',
                            }}
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 font-heading">Dashboard</p>
                                    <p className="text-xs font-bold text-white/60 font-sans">Key Metrics — Mar 2026</p>
                                </div>
                                <div className="flex gap-1.5">
                                    {['bg-red-500/60', 'bg-yellow-500/60', 'bg-green-500/60'].map((c, i) => (
                                        <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                                    ))}
                                </div>
                            </div>

                            {/* Growth Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30">
                                <TrendingUp className="w-4 h-4 text-primary" />
                                <span className="text-primary font-[900] text-sm font-heading">+240% Growth</span>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[
                                    { label: 'Revenue', val: '+£2.3k', up: true },
                                    { label: 'AOV', val: '£0.89', up: true },
                                    { label: 'Conv.', val: '3.5%', up: true },
                                ].map((s, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/25 font-heading mb-1">{s.label}</p>
                                        <p className="text-sm font-[900] text-white font-heading">{s.val}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Chart bars */}
                            <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/25 font-heading mb-3">Monthly Revenue</p>
                                <div className="flex items-end gap-1.5 h-14">
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 rounded-sm"
                                            style={{
                                                originY: 1,
                                                height: `${h}%`,
                                                background: i >= 9
                                                    ? 'linear-gradient(to top, #6366f1, #818cf8)'
                                                    : 'rgba(99,102,241,0.25)',
                                            }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: 1.8 + i * 0.04, duration: 0.5 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Bottom table rows */}
                            <div className="space-y-2">
                                {[
                                    { label: 'NRL analytics suite', val: '£4.34', change: '+12.3%' },
                                    { label: 'Platform efficiency', val: '98.2%', change: '+2.1%' },
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.02]">
                                        <span className="text-[10px] text-white/40 font-medium font-sans">{row.label}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-white/60 font-sans">{row.val}</span>
                                            <span className="text-[10px] font-black text-green-400 font-heading">{row.change}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
