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
                        className={`w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center ${i === 5 ? 'border-primary-light/60 bg-primary/10' : 'bg-white/[0.02]'}`}
                        animate={i === 5 ? { scale: [1, 1.15, 1], borderColor: ['rgba(73,136,196,0.6)', 'rgba(73,136,196,1)', 'rgba(73,136,196,0.6)'] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    >
                        {i === 5 && <Search className="w-4 h-4 text-primary-light" />}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function CodeVisual() {
    const lines = [
        { num: 1, code: '.container {', indent: 0 },
        { num: 2, code: 'display: flex;', indent: 1 },
        { num: 3, code: 'align-items: center;', indent: 1 },
        { num: 4, code: 'height: 100vh;', indent: 1 },
        { num: 5, code: 'background: linear...', indent: 1 },
        { num: 6, code: '}', indent: 0 },
    ];
    return (
        <div className="relative w-full h-32 overflow-hidden">
            <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="ml-auto flex gap-2">
                    {['HTML', 'React', 'CSS'].map((t, i) => (
                        <span key={t} className={`text-[9px] px-2 py-0.5 rounded-sm font-mono font-bold ${i === 2 ? 'bg-primary/20 text-primary-light' : 'text-white/20'}`}>{t}</span>
                    ))}
                </div>
            </div>
            <div className="space-y-1 font-mono text-[11px]">
                {lines.map((l) => (
                    <motion.div key={l.num} className="flex gap-3" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: l.num * 0.1 }}>
                        <span className="text-white/20 w-3 text-right flex-shrink-0">{l.num}</span>
                        <span className="text-white/50" style={{ paddingLeft: l.indent * 12 }}>
                            {l.indent > 0 ? <span className="text-primary-light/70">{l.code.split(':')[0]}</span> : null}
                            {l.indent > 0 ? <span className="text-white/30">{l.code.includes(':') ? ':' + l.code.split(':').slice(1).join(':') : ''}</span> : <span className="text-white/40">{l.code}</span>}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function StatsVisual() {
    const stats = [
        { label: 'Software speed', val: '+38%', up: true },
        { label: 'Workflow efficiency', val: '+25%', up: true },
        { label: 'Operational cost', val: '-11%', up: false },
        { label: 'Update available', val: 'Update ↑', up: true, highlight: true },
    ];
    return (
        <div className="w-full h-32 space-y-2 overflow-hidden">
            {stats.map((s, i) => (
                <motion.div key={i} className={`flex items-center justify-between px-3 py-1.5 rounded-lg ${s.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.02] border border-white/5'}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, ease: 'power3.out' as any }}
                >
                    <span className="text-[11px] text-white/50 font-medium">{s.label}</span>
                    <span className={`text-[11px] font-black ${s.highlight ? 'text-primary-light' : s.up ? 'text-emerald-400' : 'text-rose-400'}`}>{s.val}</span>
                </motion.div>
            ))}
        </div>
    );
}

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, { scope: containerRef });

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(15,40,84,0.15),transparent)] pointer-events-none" />

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
                    <p className="text-white/40 max-w-xl mx-auto text-lg font-medium font-body leading-relaxed">
                        Three precision stages from discovery to ongoing domination.
                    </p>
                </div>

                {/* Cards grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="process-card relative p-8 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-primary-light/30 hover:bg-white/[0.05] transition-all duration-500 group flex flex-col gap-8 shadow-2xl"
                        >
                            {/* Visual mockup area */}
                            <div className="rounded-2xl border border-white/10 bg-black/60 p-5 overflow-hidden shadow-inner">
                                {step.visual === 'grid' && <GridVisual />}
                                {step.visual === 'code' && <CodeVisual />}
                                {step.visual === 'stats' && <StatsVisual />}
                            </div>

                            {/* Text */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary-light font-black italic text-xl font-display">{step.num}</span>
                                    <h3 className="text-2xl font-black uppercase italic tracking-tight font-display group-hover:text-primary-light transition-colors">{step.title}</h3>
                                </div>
                                <p className="text-white/45 text-sm md:text-base font-medium font-body leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Step Connector (Mobile Only Decoration or subtle hover) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight className="w-8 h-8 text-primary-light" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
