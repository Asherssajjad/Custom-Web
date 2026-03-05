'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Floating particle component
function Particle({ style }: { style: React.CSSProperties }) {
    return (
        <motion.div
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={style}
            animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
            }}
            transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
            }}
        />
    );
}

const WORDS = ['Shopify', 'WordPress', 'SEO Growth'];

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLSpanElement>(null);
    const wordIndex = useRef(0);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        // Staggered word-by-word reveal for headline
        tl.fromTo('.hero-word',
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, stagger: 0.08, duration: 1.1 }
        )
            .fromTo('.hero-sub', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
            .fromTo('.hero-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 }, '-=0.5')
            .fromTo('.hero-stats', { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.4')
            .fromTo('.hero-badge', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, 0);

    }, { scope: container });

    // Cycling animated word
    useEffect(() => {
        const el = wordRef.current;
        if (!el) return;

        const cycle = async () => {
            while (true) {
                await new Promise<void>(res => {
                    gsap.to(el, { y: -20, opacity: 0, duration: 0.4, ease: 'power2.in', onComplete: res });
                });
                wordIndex.current = (wordIndex.current + 1) % WORDS.length;
                el.textContent = WORDS[wordIndex.current];
                await new Promise<void>(res => {
                    gsap.fromTo(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', onComplete: res });
                });
                await new Promise(res => setTimeout(res, 2000));
            }
        };

        const timeout = setTimeout(cycle, 2500);
        return () => clearTimeout(timeout);
    }, []);

    const particles = Array.from({ length: 20 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
    }));

    return (
        <section
            ref={container}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* ── Animated Background Layers ── */}

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Indigo radial glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Two orbiting blobs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-[100px] pointer-events-none bg-primary/10"
                animate={{ x: ['-30%', '30%', '-30%'], y: ['-20%', '20%', '-20%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '20%', left: '10%' }}
            />
            <motion.div
                className="absolute w-72 h-72 rounded-full blur-[80px] pointer-events-none bg-indigo-800/10"
                animate={{ x: ['30%', '-30%', '30%'], y: ['20%', '-20%', '20%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{ bottom: '20%', right: '10%' }}
            />

            {/* Floating particles */}
            {particles.map((p, i) => (
                <Particle key={i} style={{ left: p.left, top: p.top }} />
            ))}

            {/* ── Content ── */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-10">

                {/* Badge */}
                <motion.div
                    className="hero-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-[11px] font-black tracking-[0.25em] uppercase text-primary/80">
                        Premium Digital Agency
                    </span>
                </motion.div>

                {/* Headline */}
                <div className="overflow-hidden space-y-1">
                    <div className="overflow-hidden">
                        <h1 className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[12vw] md:text-[8vw] lg:text-[6.5vw] font-[900] tracking-[-0.04em] uppercase leading-[0.85] font-heading">
                            {['We', 'Build'].map((w, i) => (
                                <span key={i} className="hero-word inline-block">{w}</span>
                            ))}
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] font-[900] tracking-[-0.04em] uppercase leading-[0.85] font-heading">
                            <span className="hero-word inline-block bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent italic">
                                High-Performance
                            </span>
                        </h1>
                    </div>
                    <div className="overflow-hidden flex justify-center items-center gap-5">
                        <h1 className="hero-word inline-block text-[12vw] md:text-[8vw] lg:text-[6.5vw] font-[900] tracking-[-0.04em] uppercase leading-[0.85] font-heading">
                            Digital
                        </h1>
                        {/* Cycling animated word */}
                        <div className="overflow-hidden h-[1em] flex items-center">
                            <span
                                ref={wordRef}
                                className="inline-block text-[12vw] md:text-[8vw] lg:text-[6.5vw] font-[900] tracking-[-0.04em] uppercase leading-[0.85] font-heading text-primary italic"
                            >
                                Shopify
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sub */}
                <p className="hero-sub text-lg md:text-2xl text-white/50 max-w-2xl leading-relaxed font-medium font-sans tracking-tight">
                    Engineered for <span className="text-white font-semibold">Shopify</span>, <span className="text-white font-semibold">WordPress</span>,
                    and aggressive <span className="text-primary font-semibold italic">Search Dominance</span>. We bridge complex logic with stunning aesthetics.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-5 pt-2">
                    <Link
                        href="/contact"
                        className="hero-btn group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] font-heading"
                    >
                        Start Project
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <Link
                        href="/case-studies"
                        className="hero-btn flex items-center gap-3 px-8 py-5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 font-bold text-lg uppercase tracking-widest hover:bg-white/[0.07] hover:text-white transition-all backdrop-blur-sm font-heading"
                    >
                        <Play className="w-4 h-4 fill-primary text-primary" />
                        View Our Work
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="hero-stats flex flex-wrap justify-center items-center gap-x-12 gap-y-6 pt-8">
                    {[
                        { val: '150+', label: 'Projects Delivered' },
                        { val: '98%', label: 'Client Satisfaction' },
                        { val: '3x', label: 'Average Growth' },
                    ].map((stat, i) => (
                        <div key={i} className="hero-stats flex flex-col items-center gap-1">
                            <span className="text-3xl font-[900] italic font-heading text-white">{stat.val}</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">{stat.label}</span>
                        </div>
                    ))}
                    <div className="hidden sm:block w-[1px] h-8 bg-white/10 mx-2" />
                    <div className="hero-stats flex items-center gap-3 text-white/30">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em]">Scroll to explore</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
                    <motion.div
                        className="w-1 h-2 bg-primary rounded-full"
                        animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
