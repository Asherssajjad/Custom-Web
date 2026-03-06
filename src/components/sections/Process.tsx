'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, BarChart3, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        num: '01',
        title: 'Analyze',
        desc: 'We start with a deep audit of your current digital ecosystem — user journeys, conversion gaps, and technical SEO benchmarks.',
        icon: Search,
        visual: 'grid',
    },
    {
        num: '02',
        title: 'Build & Implement',
        desc: 'Our engineers craft bespoke Shopify, WordPress, and custom solutions with performance-first architecture.',
        icon: Code,
        visual: 'code',
    },
    {
        num: '03',
        title: 'Maintain & Scale',
        desc: 'After launch, we keep your platform at peak performance with continuous monitoring, updates, and growth engineering.',
        icon: BarChart3,
        visual: 'stats',
    },
];

function GridVisual() {
    return (
        <div className="relative w-full h-32 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center ${i === 5 ? 'border-[#00fbff]/60 bg-[#0088ff]/10' : 'bg-white/[0.02]'}`}
                        animate={i === 5 ? { scale: [1, 1.1, 1], borderColor: ['rgba(0,251,255,0.4)', 'rgba(0,251,255,1)', 'rgba(0,251,255,0.4)'] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    >
                        {i === 5 && <Search className="w-3.5 h-3.5 text-[#00fbff]" />}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function CodeVisual() {
    const lines = [
        { num: 1, code: '.main {', indent: 0 },
        { num: 2, code: 'display: flex;', indent: 1 },
        { num: 3, code: 'gap: 20px;', indent: 1 },
        { num: 4, code: '}', indent: 0 },
    ];
    return (
        <div className="relative w-full h-32 overflow-hidden px-2">
            <div className="flex gap-1.5 mb-3">
                {['#ff5f57', '#ffbd2e', '#27c93f'].map(c => <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />)}
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
                {lines.map((l) => (
                    <div key={l.num} className="flex gap-4">
                        <span className="text-white/20 w-3">{l.num}</span>
                        <span className="text-white/40" style={{ paddingLeft: l.indent * 12 }}>{l.code}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StatsVisual() {
    return (
        <div className="w-full h-32 space-y-2.5 px-2 py-1">
            {[['Speed', '+42%', '#27c93f'], ['Perf.', '98/100', '#00fbff'], ['ROAS', '8.4x', '#ffbd2e']].map(([l, v, c], i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{l}</span>
                    <span className="text-[10px] font-black" style={{ color: c }}>{v}</span>
                </div>
            ))}
        </div>
    );
}

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Simplified Entrance — No GSAP opacity manipulation if it fails
    // Using Framer Motion for safer triggering
    return (
        <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
            {/* Background Glows for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,136,255,0.06),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-label mx-auto"
                    >
                        <span className="dot" />
                        Our Process
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter font-display leading-[0.9] pr-4 uppercase"
                    >
                        How We <span className="gradient-text italic">Operate</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white max-w-xl mx-auto text-base md:text-lg font-medium font-body leading-relaxed"
                    >
                        Three precision stages from discovery to ongoing domination.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="process-card relative p-10 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-[#0088ff]/40 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col gap-10 shadow-3xl"
                        >
                            {/* Visual mockup area */}
                            <div className="rounded-3xl border border-white/5 bg-black/60 p-6 overflow-hidden shadow-inner flex items-center justify-center">
                                {step.visual === 'grid' && <GridVisual />}
                                {step.visual === 'code' && <CodeVisual />}
                                {step.visual === 'stats' && <StatsVisual />}
                            </div>

                            {/* Text */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#00fbff] font-black italic text-2xl font-display">{step.num}</span>
                                    <h3
                                        className="text-2xl md:text-3xl font-black uppercase italic tracking-tight font-display group-hover:text-[#00fbff] transition-colors pr-4 uppercase"
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-white/40 text-sm md:text-base font-medium font-body leading-relaxed max-w-xs">{step.desc}</p>
                            </div>

                            {/* Step Connector */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-100 transition-all">
                                    <ChevronRight className="w-10 h-10 text-[#00fbff]" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
