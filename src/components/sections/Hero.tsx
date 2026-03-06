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
            {/* Background Glow Elements - Intensified and Brightened */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Large Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#1C4D8D]/25 blur-[160px] pointer-events-none opacity-60" />

                {/* Accent Glows */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#0F2854]/40 blur-[130px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-[#4988C4]/20 blur-[150px] pointer-events-none" />

                {/* Floating Soft Lights */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[20%] right-[15%] w-96 h-96 bg-[#BDE8F5]/10 blur-[110px]"
                />
            </div>

            {/* Grid - Brighter and more visible */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(73,136,196,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(73,136,196,0.08) 1px,transparent 1px)`,
                    backgroundSize: '54px 54px',
                    maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Orbs – matching screenshot positions with new colors */}
            <motion.div className="h-orb absolute top-20 right-20 w-16 h-16 rounded-full pointer-events-none z-5"
                style={{ background: 'radial-gradient(circle, #BDE8F5 0%, #4988C4 60%, transparent 100%)', boxShadow: '0 0 60px 20px rgba(189,232,245,0.45)' }}
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div className="h-orb absolute bottom-32 left-12 w-10 h-10 rounded-full pointer-events-none z-5"
                style={{ background: 'radial-gradient(circle, #4988C4, #1C4D8D)', boxShadow: '0 0 45px 15px rgba(73,136,196,0.4)' }}
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                {/* LEFT */}
                <div className="space-y-8">
                    <div className="space-y-0 leading-none">
                        {['We Build', 'High-Performance', 'Digital Brands'].map((line, i) => (
                            <div key={i} className="overflow-hidden">
                                <h1
                                    className="h-word inline-block font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold uppercase leading-[0.92] tracking-tight"
                                    style={i === 1 ? {
                                        background: 'linear-gradient(90deg,#4988C4, #BDE8F5, #ffffff)',
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

                    <p className="h-sub font-body text-white/60 text-sm md:text-base font-medium max-w-sm leading-relaxed ring-offset-4 ring-white/5">
                        Accelerate your growth with data-driven design, engineering, and digital marketing
                        strategies crafted for impact.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href="/contact" className="h-btn btn-primary px-10 py-4 text-sm font-black">
                            Start Project
                        </Link>
                        <Link href="/case-studies" className="h-btn btn-ghost px-10 py-4 text-sm font-bold">
                            View Our Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT — floating 3D dashboard */}
                <div className="relative flex items-center justify-center">
                    {/* Intense glow behind dashboard */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(28,77,141,0.3) 0%, transparent 70%)' }}
                    />

                    <motion.div
                        className="h-card w-full max-w-[450px]"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                        style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}
                    >
                        <div className="rounded-2xl p-6 overflow-hidden backdrop-blur-md" style={{
                            background: 'linear-gradient(145deg, rgba(15,40,84,0.95) 0%, rgba(5,10,25,0.98) 100%)',
                            border: '1px solid rgba(73,136,196,0.3)',
                            transform: 'perspective(1500px) rotateY(-8deg) rotateX(4deg)',
                            boxShadow: '0 0 0 1px rgba(28,77,141,0.2), 0 35px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
                        }}>
                            {/* Dashboard Content - matching screenshot colors but brighter */}
                            <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                                <div>
                                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-primary-accent opacity-60">Insight Hub</p>
                                    <p className="font-body text-xs text-white/70 font-medium mt-0.5">Global Metrics — 2026</p>
                                </div>
                                <div className="flex gap-2">
                                    {['#ff5f57', '#ffbd2e', '#27c93f'].map((c) => (
                                        <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, boxShadow: `0 0 8px ${c}66` }} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30">
                                <TrendingUp className="w-4 h-4 text-primary-accent" />
                                <span className="font-body font-black text-sm text-primary-accent">+328% Impact</span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[['Growth', '+£12.4k'], ['AOV', '£1.42'], ['Conv.', '5.2%']].map(([l, v]) => (
                                    <div key={l} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                                        <p className="font-body text-[9px] font-bold uppercase tracking-widest text-white/30 mb-1.5">{l}</p>
                                        <p className="font-body text-sm font-black text-white">{v}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-4">
                                <p className="font-body text-[9px] font-bold uppercase tracking-widest text-white/30 mb-4">Conversion Efficiency</p>
                                <div className="flex items-end gap-1.5 h-16">
                                    {[35, 60, 45, 80, 55, 95, 65, 85, 50, 100, 75, 90].map((h, i) => (
                                        <motion.div key={i}
                                            className="flex-1 rounded-sm"
                                            style={{
                                                height: `${h}%`,
                                                originY: 1,
                                                background: i >= 9 ? 'linear-gradient(to top, #1e5bb0, #4988C4)' : 'rgba(73,136,196,0.3)',
                                                boxShadow: i >= 9 ? '0 0 15px rgba(30,91,176,0.5)' : 'none'
                                            }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: 2 + i * 0.05, duration: 0.5 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glow Fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
        </section>
    );
}
