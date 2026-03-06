'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';
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
            {/* AMBIENT GLOWS */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[#0088ff]/15 blur-[200px] pointer-events-none opacity-80" />
                <div className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] bg-[#00fbff]/15 blur-[150px] pointer-events-none rounded-full" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#0044cc]/15 blur-[180px] pointer-events-none rounded-full" />
            </div>

            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,136,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,136,255,0.08) 1px,transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Orbs */}
            <motion.div className="h-orb absolute top-20 right-[15%] w-20 h-20 rounded-full pointer-events-none z-10"
                style={{
                    background: 'radial-gradient(circle, #00fbff 0%, #0088ff 60%, transparent 100%)',
                    boxShadow: '0 0 80px 30px rgba(0,251,255,0.3)'
                }}
                animate={{ y: [0, -30, 0], rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            <div className="container mx-auto px-6 lg:px-12 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">

                {/* LEFT CONTENT */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#00fbff]/20 bg-[#0088ff]/10 backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#00fbff]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00fbff]">High-Performance Digital</span>
                    </div>

                    <div className="space-y-0 leading-none">
                        {['We Build', 'High-Performance', 'Digital Brands'].map((line, i) => (
                            <div key={i} className="overflow-hidden">
                                <h1
                                    className="h-word inline-block font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tighter pr-2"
                                    style={i === 1 ? {
                                        background: 'linear-gradient(90deg, #0088ff, #00fbff, #ffffff)',
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

                    <p className="h-sub font-body text-white/70 text-sm md:text-base font-medium max-w-sm leading-relaxed">
                        Accelerate your growth with data-driven design, engineering, and digital marketing
                        strategies crafted for global impact.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="/contact" className="h-btn btn-primary px-10 py-4 text-xs">
                            Start Project
                        </Link>
                        <Link href="/case-studies" className="h-btn btn-ghost px-10 py-4 text-xs font-bold">
                            View Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT — DASHBOARD - LARGER AS REQUESTED */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[600px] h-[600px] bg-[#0088ff]/15 blur-[140px] rounded-full pointer-events-none" />

                    <motion.div
                        className="h-card w-full max-w-[550px]"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="rounded-[3rem] p-10 overflow-hidden backdrop-blur-3xl" style={{
                            background: 'linear-gradient(145deg, rgba(0,30,80,0.92) 0%, rgba(0,8,20,0.98) 100%)',
                            border: '1px solid rgba(0,136,255,0.4)',
                            transform: 'perspective(2000px) rotateY(-8deg) rotateX(5deg)',
                            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(0,136,255,0.15)',
                        }}>
                            {/* Inner Header */}
                            <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
                                <div>
                                    <p className="font-body text-[11px] font-black uppercase tracking-[0.4em] text-[#00fbff]">Live Data</p>
                                    <p className="font-body text-base text-white font-bold mt-1">Growth Index — 2026</p>
                                </div>
                                <div className="flex gap-3">
                                    {['#ff5f57', '#ffbd2e', '#27c93f'].map((c) => (
                                        <div key={c} className="w-3.5 h-3.5 rounded-full" style={{ background: c }} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0088ff]/15 border border-[#0088ff]/30">
                                <TrendingUp className="w-5 h-5 text-[#00fbff]" />
                                <span className="font-body font-black text-base text-[#00fbff]">+4.5x Efficiency Scaled</span>
                            </div>

                            <div className="grid grid-cols-3 gap-5 mb-10">
                                {[['ROAS', '8.4x'], ['AOV', '£164'], ['Conv.', '5.2%']].map(([l, v]) => (
                                    <div key={l} className="p-5 rounded-3xl bg-white/[0.05] border border-white/10">
                                        <p className="font-body text-[10px] font-black uppercase tracking-widest text-[#00d4ff] mb-2">{l}</p>
                                        <p className="font-body text-2xl font-black text-white">{v}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                                <div className="flex items-end gap-2 h-24">
                                    {[25, 50, 35, 70, 45, 85, 55, 95, 65, 100, 80, 110].map((h, i) => (
                                        <motion.div key={i}
                                            className="flex-1 rounded-md"
                                            style={{
                                                height: `${h}%`,
                                                originY: 1,
                                                background: i >= 9 ? 'linear-gradient(to top, #0044cc, #00fbff)' : 'rgba(0,136,255,0.2)',
                                            }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: i * 0.05, duration: 0.6 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-[30]" />
        </section>
    );
}
