'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Play, Globe, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-badge', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.hero-headline span', {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out'
            }, '-=0.5')
            .from('.hero-subline', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.7')
            .from('.hero-btns', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6');
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black selection:bg-primary/20">
            <div className="hero-glow" />

            {/* Dynamic Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 text-center space-y-12 relative z-10">

                {/* Modern Label Badge */}
                <div className="hero-badge inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl">
                    <Zap className="w-3.5 h-3.5 text-primary fill-primary/30" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">Modern Digital Architecture</span>
                </div>

                <div className="space-y-4">
                    <h1 className="hero-headline text-[13vw] md:text-[8vw] lg:text-[6.5vw] font-black tracking-[-0.04em] uppercase leading-[0.8] font-heading overflow-hidden flex flex-col items-center">
                        <span className="block translate-y-0">Building</span>
                        <span className="block gradient-text italic">Performance</span>
                        <span className="block opacity-90">First Brands</span>
                    </h1>
                </div>

                <p className="hero-subline text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium tracking-tight font-sans">
                    Engineered for <span className="text-white font-semibold">Shopify</span>, <span className="text-white font-semibold">WordPress</span>,
                    and enterprise <span className="text-primary italic">Growth</span>. We bridge complex logic with stunning aesthetics.
                </p>

                <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <Link
                        href="/contact"
                        className="group px-12 py-5 rounded-full bg-white text-black font-extrabold text-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 overflow-hidden"
                    >
                        Start Project
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <button className="flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 text-lg font-bold hover:bg-white/5 transition-all text-white/80 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Play className="w-4 h-4 fill-white" />
                        </div>
                        Our Journey
                    </button>
                </div>

                {/* Minimal Trust Assets */}
                <div className="hero-btns pt-16 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-3"><Shield className="w-5 h-5" /> <span className="text-sm font-black uppercase tracking-widest">Enterprise Safe</span></div>
                    <div className="flex items-center gap-3"><Globe className="w-5 h-5" /> <span className="text-sm font-black uppercase tracking-widest">Global Reach</span></div>
                    <div className="flex items-center gap-3"><Zap className="w-5 h-5" /> <span className="text-sm font-black uppercase tracking-widest">Lightning Fast</span></div>
                </div>

            </div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
            >
                <div className="w-5 h-10 rounded-full border border-white/40 flex justify-center pt-2">
                    <div className="w-1 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
