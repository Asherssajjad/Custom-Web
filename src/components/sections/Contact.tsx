'use client';

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight, Zap, Sparkles, TrendingUp } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-48 relative overflow-hidden bg-black selection:bg-[#0088ff]/20">
            {/* Ambient Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[#0088ff]/5 blur-[250px] rounded-full pointer-events-none" />
            <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-[#00fbff]/5 blur-[200px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">

                    {/* Left Column — High Fidelity Info */}
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <div className="section-label mb-8">
                                <span className="dot" />
                                <Zap className="w-3.5 h-3.5 fill-[#00fbff]/30" />
                                <span>Inaugurate Protocol</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] font-display text-white pr-4 uppercase">
                                Design <br />
                                <span className="gradient-text italic opacity-80 pr-2">Success</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/40 font-medium font-body leading-relaxed max-w-sm tracking-tight">
                                Architecting the future of your digital performance. Complete the form to start the consultation.
                            </p>
                        </div>

                        <div className="grid gap-10">
                            {[
                                { icon: Mail, label: 'Direct Protocol', value: 'hello@lumina.agency', color: '#0088ff' },
                                { icon: Phone, label: 'Voice Command', value: '+1 (555) 000-0000', color: '#00fbff' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-8 group">
                                    <div
                                        className="w-16 h-16 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#0088ff]/40 shadow-2xl overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0088ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <item.icon className="w-6 h-6 text-white/30 group-hover:text-white transition-colors relative z-10" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00fbff]/60 mb-2 font-body">{item.label}</div>
                                        <div className="text-xl md:text-2xl font-black italic uppercase font-display tracking-tight text-white group-hover:text-[#00fbff] transition-colors">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-10 border-t border-white/10 flex gap-10">
                            {['tw', 'in', 'fb', 'yt'].map(social => (
                                <span key={social} className="text-[10px] font-black tracking-[0.4em] uppercase cursor-pointer hover:text-white transition-colors text-white/20 font-display">{social}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Premium Glass Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-br from-[#0088ff]/20 to-[#00fbff]/10 blur-2xl opacity-50" />
                        <div className="relative p-10 md:p-14 rounded-[48px] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00fbff]/60 ml-6 font-display">Full Identity</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 focus:outline-none focus:border-[#0088ff]/50 focus:bg-white/[0.04] transition-all text-white font-bold font-body text-base"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00fbff]/60 ml-6 font-display">Communication Node</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 focus:outline-none focus:border-[#0088ff]/50 focus:bg-white/[0.04] transition-all text-white font-bold font-body text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00fbff]/60 ml-6 font-display">Operational Domain</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/[0.02] border border-white/5 rounded-full px-8 py-5 focus:outline-none focus:border-[#0088ff]/50 focus:bg-white/[0.04] transition-all text-white font-bold font-body text-base appearance-none cursor-pointer">
                                            <option className="bg-black">High Performance Shopify</option>
                                            <option className="bg-black">Enterprise WordPress</option>
                                            <option className="bg-black">Aggressive SEO Growth</option>
                                            <option className="bg-black">Bespoke Engineering</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00fbff]/60 ml-6 font-display">Project Architecture</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Outline your vision..."
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-[32px] px-8 py-6 focus:outline-none focus:border-[#0088ff]/50 focus:bg-white/[0.04] transition-all text-white font-bold font-body text-base resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full py-7 rounded-full bg-white text-black font-black text-xl md:text-2xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-6 shadow-3xl hover:shadow-[0_0_60px_rgba(0,136,255,0.2)] overflow-hidden relative"
                                >
                                    <span className="relative z-10 flex items-center gap-4">
                                        Inaugurate Project
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00fbff] to-[#0088ff] translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
