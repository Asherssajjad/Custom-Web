'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Sparkles, MoveRight, Globe, Play, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-reveal-1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        })
            .from('.hero-reveal-2', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'power4.out'
            }, '-=0.8')
            .from('.hero-reveal-3', {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.9')
            .from('.hero-reveal-4', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.7');
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="hero-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)] -z-10" />

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-[10%] w-32 h-32 rounded-3xl bg-primary/20 blur-2xl -z-10"
            />
            <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full bg-secondary/10 blur-3xl -z-10"
            />

            <div className="container mx-auto px-6 text-center space-y-12">
                <div className="hero-reveal-1 flex justify-center mb-6">
                    <div className="px-6 py-2 rounded-full glass border border-white/10 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-black tracking-[0.2em] uppercase text-white/60">Digital Excellence Partner</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="hero-reveal-2 text-[10vw] md:text-[8vw] lg:text-[7vw] font-black tracking-tighter uppercase italic leading-[0.8] mb-0 inline-block overflow-hidden">
                        <span className="block">Building</span>
                    </h1>
                    <br />
                    <h1 className="hero-reveal-2 text-[10vw] md:text-[8vw] lg:text-[7vw] font-black tracking-tighter uppercase leading-[0.8] mb-0 inline-block overflow-hidden">
                        <span className="block text-outline">Digital</span>
                    </h1>
                    <br />
                    <h1 className="hero-reveal-2 text-[10vw] md:text-[8vw] lg:text-[7vw] font-black tracking-tighter uppercase leading-[0.8] mb-0 inline-block overflow-hidden">
                        <span className="block gradient-text italic">Performance</span>
                    </h1>
                </div>

                <p className="hero-reveal-3 text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold tracking-tight">
                    Lumina accelerates <span className="text-white">Shopify</span> & <span className="text-white">WordPress</span> brands
                    through world-class <span className="text-primary italic">SEO engineering</span> and high-performance design.
                </p>

                <div className="hero-reveal-4 flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                    <Link
                        href="/contact"
                        className="group relative px-12 py-6 rounded-full bg-white text-black font-black text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transition-transform group-hover:translate-x-full" />
                        <span className="relative z-10 flex items-center gap-3">
                            Start Project
                            <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>
                    <button className="flex items-center gap-4 text-xl font-bold hover:text-primary transition-all group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:rotate-12 transition-all">
                            <Play className="w-6 h-6 fill-white" />
                        </div>
                        <span>View Our Story</span>
                    </button>
                </div>

                {/* Floating Social Icons */}
                <div className="hero-reveal-4 flex items-center justify-center gap-12 pt-16">
                    <div className="flex -space-x-4">
                        {['S', 'W', 'G'].map((logo, i) => (
                            <div key={i} className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-black bg-background">{logo}</div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="text-2xl font-black">250+</div>
                        <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Global Brands Scaled</div>
                    </div>
                </div>
            </div>

            {/* Mouse Icon */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 cursor-pointer hover:opacity-100 transition-opacity"
            >
                <div className="w-6 h-10 rounded-full border border-white/40 p-2">
                    <div className="w-1 h-2 bg-white rounded-full mx-auto" />
                </div>
            </motion.div>
        </section>
    );
}
