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

    useGSAP(() => {
        gsap.from('.process-card', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
            {/* Background Glows for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,136,255,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <div className="section-label mx-auto">
                        <span className="dot" />
                        Our Process
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter font-display leading-[0.9]">
                        How We <span className="gradient-text">Operate</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto text-base md:text-lg font-medium font-body leading-relaxed">
                        Three precision stages from discovery to ongoing domination.
                    </p>
                </div>

                {/* Cards grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="process-card relative p-8 rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-[#0088ff]/40 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col gap-8 shadow-2xl"
                        >
                            {/* Visual mockup area */}
                            <div className="rounded-2xl border border-white/5 bg-black/60 p-5 overflow-hidden shadow-inner">
                                {step.visual === 'grid' && <GridVisual />}
                                {step.visual === 'code' && <CodeVisual />}
                                {step.visual === 'stats' && <StatsVisual />}
                            </div>

                            {/* Text */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#00fbff] font-black italic text-xl font-display">{step.num}</span>
                                    <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight font-display group-hover:text-[#00fbff] transition-colors">{step.title}</h3>
                                </div>
                                <p className="text-white/45 text-sm md:text-base font-medium font-body leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Step Connector */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-20">
                                    <ChevronRight className="w-8 h-8 text-[#00fbff]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
