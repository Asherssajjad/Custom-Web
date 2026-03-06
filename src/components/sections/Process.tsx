'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, BarChart3, ChevronRight, Activity, Cpu, Rocket } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Analyze',
        desc: 'A deep forensic audit of your digital ecosystem — benchmarking performance, conversion gaps, and growth vectors.',
        icon: Search,
        accent: '#00fbff',
        visual: 'analyze',
    },
    {
        num: '02',
        title: 'Build & Scale',
        desc: 'Our engineers craft bespoke digital infrastructure with performance-first architecture and high-fidelity design systems.',
        icon: Code,
        accent: '#0088ff',
        visual: 'build',
    },
    {
        num: '03',
        title: 'Dominate',
        desc: 'Post-launch optimization and continuous growth engineering to ensure your brand remains at the edge of performance.',
        icon: BarChart3,
        accent: '#00fbff',
        visual: 'dominate',
    },
];

function AnalyzeVisual() {
    return (
        <div className="relative w-full h-40 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-3 opacity-40">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center ${i === 6 ? 'border-[#00fbff]/60 bg-[#0088ff]/20' : 'bg-white/[0.02]'}`}
                        animate={i === 6 ? {
                            scale: [1, 1.2, 1],
                            borderColor: ['rgba(0,251,255,0.4)', 'rgba(0,251,255,1)', 'rgba(0,251,255,0.4)'],
                            boxShadow: ['0 0 0px rgba(0,251,255,0)', '0 0 30px rgba(0,251,255,0.3)', '0 0 0px rgba(0,251,255,0)']
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    >
                        {i === 6 && <Activity className="w-4 h-4 text-[#00fbff]" />}
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent" />
        </div>
    );
}

function BuildVisual() {
    return (
        <div className="relative w-full h-40 overflow-hidden bg-[#0088ff]/5 rounded-2xl flex flex-col p-6 font-mono text-[10px] space-y-3">
            <div className="flex gap-2 mb-2">
                {['#ff5f57', '#ffbd2e', '#27c93f'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
                <div className="text-[9px] uppercase tracking-widest text-white/20 ml-2">Main.Protocol</div>
            </div>
            <div className="space-y-2 opacity-60">
                <div className="flex gap-4"><span className="text-white/20">01</span><span className="text-[#00fbff]">import</span><span> {'{ Protocol } from \'@lumina\';'}</span></div>
                <div className="flex gap-4"><span className="text-white/20">02</span><span className="text-[#0088ff]">const</span><span> execute = (ops) ={'>'} {'{'}</span></div>
                <div className="flex gap-4"><span className="text-white/20">03</span><span className="ml-4 text-white/40">return Protocol.scale(ops);</span></div>
                <div className="flex gap-4"><span className="text-white/20">04</span><span>{'}'}</span></div>
            </div>
            <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="h-[1px] bg-[#00fbff]/40 absolute bottom-12 left-0"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent" />
        </div>
    );
}

function DominateVisual() {
    return (
        <div className="w-full h-40 space-y-4 py-4 px-6 relative">
            {[['Network Speed', '99.9%', '#27c93f'], ['Growth Index', '+4.5x', '#00fbff'], ['Efficiency', '98/100', '#00d4ff']].map(([l, v, c], i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-white/30">{l}</span>
                        <span style={{ color: c }}>{v}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: v === '99.9%' ? '100%' : v === '+4.5x' ? '85%' : '98%' }}
                            transition={{ duration: 1.5, delay: i * 0.2, ease: 'circOut' }}
                            className="h-full rounded-full"
                            style={{ background: c }}
                        />
                    </div>
                </div>
            ))}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent" />
        </div>
    );
}

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-48 bg-black relative overflow-hidden">
            {/* High Performance Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[600px] bg-[#0088ff]/10 blur-[200px] rounded-full opacity-50" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[600px] bg-[#00fbff]/5 blur-[200px] rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-32 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-label mx-auto"
                    >
                        <span className="dot" />
                        Operational Flow
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-[-0.04em] font-display leading-[0.85] pr-20 uppercase inline-block"
                        style={{ perspective: '1000px' }}
                    >
                        How We <span className="gradient-text italic pr-4">Operate</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white max-w-2xl mx-auto text-lg md:text-xl font-medium font-body leading-relaxed tracking-tight"
                    >
                        A tiered engineering protocol designed for absolute digital dominance.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: i * 0.2, duration: 1, ease: 'circOut' }}
                            className="group relative p-12 rounded-[56px] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl transition-all duration-700 hover:border-[#0088ff]/40 hover:bg-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col gap-12 overflow-hidden"
                        >
                            {/* Visual Layer */}
                            <div className="relative rounded-[40px] bg-black/80 border border-white/10 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                {step.visual === 'analyze' && <AnalyzeVisual />}
                                {step.visual === 'build' && <BuildVisual />}
                                {step.visual === 'dominate' && <DominateVisual />}
                                <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0088ff]/10 border border-[#0088ff]/20">
                                    <step.icon className="w-6 h-6 text-[#00fbff]" />
                                </div>
                            </div>

                            {/* Content Layer */}
                            <div className="space-y-6 relative">
                                <div className="flex items-center gap-6">
                                    <span
                                        className="text-4xl font-black italic font-display tracking-tighter"
                                        style={{ color: step.accent, opacity: 0.4 }}
                                    >
                                        {step.num}
                                    </span>
                                    <h3
                                        className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter font-display text-white group-hover:text-[#00fbff] transition-colors pr-6 uppercase"
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-white/40 text-lg leading-relaxed font-medium font-body max-w-xs group-hover:text-white/60 transition-colors">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Hover Neon Accent */}
                            <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-[#0088ff]/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Desktop Connectors */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20 opacity-10 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                                    <ChevronRight className="w-16 h-16 text-[#00fbff]" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
