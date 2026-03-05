'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Analyze',
        desc: 'We start with a deep audit of your current digital ecosystem — user journeys, conversion gaps, and technical SEO benchmarks.',
        icon: Search,
        visual: 'grid', // shows a grid icon layout
    },
    {
        num: '02',
        title: 'Build & Implement',
        desc: 'Our engineers craft bespoke Shopify, WordPress, and custom solutions with performance-first architecture.',
        icon: Code,
        visual: 'code', // shows code editor mockup
    },
    {
        num: '03',
        title: 'Maintain & Scale',
        desc: 'After launch, we keep your platform at peak performance with continuous monitoring, updates, and growth engineering.',
        icon: BarChart3,
        visual: 'stats', // shows stat metrics
    },
];

function GridVisual() {
    return (
        <div className="relative w-full h-32 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-2 opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center ${i === 5 ? 'border-primary/60 bg-primary/10' : 'bg-white/[0.02]'}`}
                        animate={i === 5 ? { scale: [1, 1.15, 1], borderColor: ['rgba(99,102,241,0.6)', 'rgba(99,102,241,1)', 'rgba(99,102,241,0.6)'] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    >
                        {i === 5 && <Search className="w-4 h-4 text-primary" />}
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
            {/* Editor chrome */}
            <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="ml-auto flex gap-2">
                    {['HTML', 'React', 'CSS'].map((t, i) => (
                        <span key={t} className={`text-[9px] px-2 py-0.5 rounded-sm font-mono font-bold ${i === 2 ? 'bg-primary/20 text-primary' : 'text-white/20'}`}>{t}</span>
                    ))}
                </div>
            </div>
            <div className="space-y-1 font-mono text-[11px]">
                {lines.map((l) => (
                    <motion.div key={l.num} className="flex gap-3" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: l.num * 0.1 }}>
                        <span className="text-white/20 w-3 text-right flex-shrink-0">{l.num}</span>
                        <span className="text-white/50" style={{ paddingLeft: l.indent * 12 }}>
                            {l.indent > 0 ? <span className="text-primary/70">{l.code.split(':')[0]}</span> : null}
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
                    transition={{ delay: i * 0.15, ease: 'power3.out' as 'easeOut' }}
                >
                    <span className="text-[11px] text-white/50 font-medium font-sans">{s.label}</span>
                    <span className={`text-[11px] font-black font-heading ${s.highlight ? 'text-primary' : s.up ? 'text-green-400' : 'text-red-400'}`}>{s.val}</span>
                </motion.div>
            ))}
        </div>
    );
}

export default function Process() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process-card', {
            scrollTrigger: { trigger: container.current, start: 'top 75%' },
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: 'power3.out',
        });
    }, { scope: container });

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Dim gradient behind */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 space-y-5">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] font-heading">
                        Our Process
                    </div>
                    <h2 className="text-5xl md:text-7xl font-[900] uppercase italic tracking-tighter font-heading leading-[0.9]">
                        How We <span className="text-primary">Operate</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto text-lg font-medium font-sans leading-relaxed">
                        Three precision stages from discovery to ongoing domination.
                    </p>
                </div>

                {/* Cards grid */}
                <div ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="process-card relative p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col gap-6"
                        >
                            {/* Visual mockup area */}
                            <div className="rounded-2xl border border-white/5 bg-black/60 p-4 overflow-hidden">
                                {step.visual === 'grid' && <GridVisual />}
                                {step.visual === 'code' && <CodeVisual />}
                                {step.visual === 'stats' && <StatsVisual />}
                            </div>

                            {/* Text */}
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-primary font-[900] italic font-heading text-lg">{step.num}</span>
                                    <h3 className="text-2xl font-[900] uppercase italic tracking-tighter font-heading group-hover:text-primary transition-colors">{step.title}</h3>
                                </div>
                                <p className="text-white/40 text-base font-medium font-sans leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
