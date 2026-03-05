'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Play, ArrowDownRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const word1Ref = useRef<HTMLSpanElement>(null);
    const words = ['Shopify.', 'WordPress.', 'SEO.', 'Mobile.'];
    const wordIdx = useRef(0);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            // Badge
            tl.fromTo('.h-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });

            // Headline: character-by-character reveal
            if (headlineRef.current) {
                const split = new SplitText(headlineRef.current, { type: 'chars,words' });
                tl.fromTo(split.chars,
                    { opacity: 0, yPercent: 120, rotationX: -90 },
                    { opacity: 1, yPercent: 0, rotationX: 0, stagger: 0.02, duration: 0.7, ease: 'power4.out' },
                    '-=0.4'
                );
            }

            // Sub-text
            tl.fromTo(subRef.current,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.3'
            );

            // Buttons
            tl.fromTo('.h-btn', { opacity: 0, y: 16, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4');

            // Stats
            tl.fromTo('.h-stat', { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, '-=0.3');

        }, container);

        return () => ctx.revert();
    }, { scope: container });

    // Cycle animated word
    useEffect(() => {
        const el = word1Ref.current;
        if (!el) return;
        let running = true;

        const cycle = async () => {
            await new Promise(r => setTimeout(r, 3000));
            while (running) {
                await new Promise<void>(r => {
                    gsap.to(el, { y: -16, opacity: 0, duration: 0.35, ease: 'power2.in', onComplete: r });
                });
                wordIdx.current = (wordIdx.current + 1) % words.length;
                el.textContent = words[wordIdx.current];
                el.style.color = '';
                await new Promise<void>(r => {
                    gsap.fromTo(el, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', onComplete: r });
                });
                await new Promise(r => setTimeout(r, 2400));
            }
        };

        cycle();
        return () => { running = false; };
    }, []);

    return (
        <section ref={container} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">

            {/* ─── Background ──────────────────────── */}
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]" />

            {/* Centre radial glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)' }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Top-left blob */}
            <motion.div
                className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-primary/8"
                animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Bottom-right blob */}
            <motion.div
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none bg-indigo-700/8"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Floating tiny dots */}
            {Array.from({ length: 18 }).map((_, i) => (
                <motion.div key={i}
                    className="absolute w-[3px] h-[3px] rounded-full bg-primary/50 pointer-events-none"
                    style={{ left: `${(i * 37 + 13) % 95 + 2}%`, top: `${(i * 53 + 7) % 90 + 5}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
                    transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                />
            ))}

            {/* ─── Content ─────────────────────────── */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">

                {/* Badge */}
                <div className="h-badge opacity-0 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-lg shadow-primary/5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-black tracking-[0.25em] uppercase text-primary/80 font-heading">
                        Premium Digital Agency — Est. 2018
                    </span>
                </div>

                {/* Headline — SplitText GSAP target */}
                <div className="overflow-hidden">
                    <h1
                        ref={headlineRef}
                        className="text-[13vw] md:text-[9vw] lg:text-[7.5vw] font-[900] tracking-[-0.04em] uppercase leading-[0.85] font-heading text-white perspective-[800px]"
                    >
                        We Build <br />
                        <span className="text-primary italic">High-Performance</span><br />
                        Digital Brands
                    </h1>
                </div>

                {/* Cycling word sub-line */}
                <div className="flex items-center justify-center gap-4 -mt-2">
                    <span className="text-white/25 text-sm font-black uppercase tracking-[0.2em] font-heading">Specialising in</span>
                    <div className="overflow-hidden h-7 flex items-center">
                        <span
                            ref={word1Ref}
                            className="text-primary italic font-[900] text-lg uppercase tracking-tight font-heading inline-block"
                        >
                            Shopify.
                        </span>
                    </div>
                </div>

                {/* Sub */}
                <p
                    ref={subRef}
                    className="opacity-0 text-lg md:text-xl text-white/45 max-w-xl leading-relaxed font-medium font-sans tracking-tight"
                >
                    We architect custom digital ecosystems — from high-conversion Shopify stores to
                    SEO-engineered WordPress platforms — for brands that demand results.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <Link
                        href="/contact"
                        className="h-btn opacity-0 group flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-black text-base uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.08)] font-heading"
                    >
                        Start Your Project
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <Link
                        href="/case-studies"
                        className="h-btn opacity-0 flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/60 font-bold text-base uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm font-heading"
                    >
                        <Play className="w-4 h-4 fill-primary text-primary flex-shrink-0" />
                        View Case Studies
                    </Link>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 pt-6 border-t border-white/5 w-full max-w-lg">
                    {[
                        { val: '150+', label: 'Projects Shipped' },
                        { val: '98%', label: 'Client Retention' },
                        { val: '3x', label: 'Avg. Revenue Growth' },
                    ].map((s, i) => (
                        <div key={i} className="h-stat opacity-0 flex flex-col items-center gap-0.5">
                            <span className="text-2xl font-[900] italic font-heading text-white">{s.val}</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/25 font-heading">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <ArrowDownRight className="w-4 h-4 text-primary" />
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
                />
            </div>
        </section>
    );
}
