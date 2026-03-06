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
            {/* Background Glow Elements - HIGHER BRIGHTNESS ELECTRIC BLUE */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Massive Focal Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[#0088ff]/30 blur-[180px] pointer-events-none" />

                {/* Secondary Accent Glows */}
                <div className="absolute top-1/4 -left-[10%] w-[700px] h-[700px] bg-[#00d4ff]/20 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-[10%] w-[800px] h-[800px] bg-[#0044cc]/30 blur-[160px] pointer-events-none" />

                {/* Floating Intense Light Pockets */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                        x: [0, 80, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-[#00d4ff]/15 blur-[120px]"
                />
            </div>

            {/* Grid - High Visibility */}
            <div className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,136,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(0,136,255,0.12) 1px,transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)',
                }}
            />

            {/* Neon Orbs */}
            <motion.div className="h-orb absolute top-24 right-[10%] w-20 h-20 rounded-full pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(circle, #00d4ff 0%, #0088ff 60%, transparent 100%)',
                    boxShadow: '0 0 80px 30px rgba(0,212,255,0.5)'
                }}
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div className="h-orb absolute bottom-32 left-16 w-12 h-12 rounded-full pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(circle, #0088ff, #0044cc)',
                    boxShadow: '0 0 60px 20px rgba(0,136,255,0.4)'
                }}
                animate={{ y: [0, 25, 0], x: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Content Content Content */}
            <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">

                {/* LEFT */}
                <div className="space-y-8">
                    <div className="space-y-0 leading-none">
                        {['We Build', 'High-Performance', 'Digital Brands'].map((line, i) => (
                            <div key={i} className="overflow-hidden">
                                <h1
                                    className="h-word inline-block font-display text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.9] tracking-tighter"
                                    style={i === 1 ? {
                                        background: 'linear-gradient(90deg, #0088ff, #00d4ff, #ffffff)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        fontStyle: 'italic',
                                    } : { color: '#fff' }}
                                >
                                    {line}
                                </h1>
                            </div>
                        ))}
                    </div>

                    <p className="h-sub font-body text-white/70 text-base md:text-lg font-medium max-w-lg leading-relaxed">
                        Accelerate your growth with data-driven design, engineering, and digital marketing
                        strategies crafted for impact.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link href="/contact" className="h-btn btn-primary px-12 py-5 text-base font-black uppercase tracking-tight">
                            Start Project
                        </Link>
                        <Link href="/case-studies" className="h-btn px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-base font-bold rounded-full transition-all">
                            View Our Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT — High Contrast Dashboard */}
                <div className="relative flex items-center justify-center">
                    {/* Focal light for card */}
                    <div className="absolute w-[600px] h-[600px] bg-[#0088ff]/20 blur-[140px] rounded-full pointer-events-none" />

                    <motion.div
                        className="h-card w-full max-w-[480px]"
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    >
                        <div className="rounded-[2.5rem] p-8 overflow-hidden backdrop-blur-2xl" style={{
                            background: 'linear-gradient(145deg, rgba(0,30,80,0.95) 0%, rgba(0,5,15,0.98) 100%)',
                            border: '1px solid rgba(0,136,255,0.4)',
                            transform: 'perspective(2000px) rotateY(-6deg) rotateX(4deg)',
                            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(0,136,255,0.2)',
                        }}>
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 pb-5 border-b border-white/10">
                                <div>
                                    <p className="font-body text-[11px] font-black uppercase tracking-[0.4em] text-[#00d4ff]">Intelligence Suite</p>
                                    <p className="font-body text-sm text-white/80 font-semibold mt-1">Global Performance Stats</p>
                                </div>
                                <div className="flex gap-2.5">
                                    {['#ff5f57', '#ffbd2e', '#27c93f'].map((c) => (
                                        <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, boxShadow: `0 0 12px ${c}99` }} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#0088ff]/20 border border-[#0088ff]/40">
                                <TrendingUp className="w-5 h-5 text-[#00d4ff]" />
                                <span className="font-body font-black text-base text-[#00d4ff]">+342% Efficiency</span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[['ROAS', '8.4x'], ['AOV', '£164'], ['Conv.', '6.8%']].map(([l, v]) => (
                                    <div key={l} className="p-4 rounded-2xl bg-white/[0.06] border border-white/10">
                                        <p className="font-body text-[10px] font-black uppercase tracking-widest text-[#00d4ff] mb-2">{l}</p>
                                        <p className="font-body text-xl font-black text-white">{v}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Chart area */}
                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                                <p className="font-body text-[10px] font-black uppercase tracking-widest text-white/40 mb-5">Velocity Metrics</p>
                                <div className="flex items-end gap-2 h-20">
                                    {[30, 55, 40, 75, 45, 90, 60, 85, 55, 100].map((h, i) => (
                                        <motion.div key={i}
                                            className="flex-1 rounded-md"
                                            style={{
                                                height: `${h}%`,
                                                originY: 1,
                                                background: i >= 7 ? 'linear-gradient(to top, #0044cc, #00d4ff)' : 'rgba(0,136,255,0.2)',
                                                boxShadow: i >= 7 ? '0 0 20px rgba(0,212,255,0.4)' : 'none'
                                            }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: i * 0.08, duration: 0.6 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom transition */}
            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-[30]" />
        </section>
    );
}
