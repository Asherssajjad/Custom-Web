'use client';

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black selection:bg-primary/20">
            <div className="container mx-auto px-6">
                <div className="bg-black border border-white/5 rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[800px] shadow-2xl shadow-primary/5">

                    {/* Left Info Column - Monochromatic High End */}
                    <div className="p-10 md:p-24 bg-gradient-to-br from-primary/5 via-black to-black flex flex-col justify-between border-r border-white/5">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 text-primary text-xs font-black uppercase tracking-[0.4em]">
                                    <Zap className="w-4 h-4 fill-primary/30" />
                                    <span>Inaugurate Change</span>
                                </div>
                                <h2 className="text-6xl md:text-8xl font-[900] mb-8 italic tracking-tighter uppercase leading-[0.8] font-heading">
                                    Design <br />
                                    <span className="gradient-text italic opacity-60">Success</span>
                                </h2>
                            </div>
                            <p className="text-xl text-muted-foreground font-medium mb-20 max-w-sm font-sans tracking-tight">
                                Architecting the future of your digital performance. Fill the form to start the consultation.
                            </p>

                            <div className="space-y-12">
                                <div className="flex items-center gap-8 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                                        <Mail className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 font-heading">Electronic Mail</div>
                                        <div className="text-2xl font-black italic uppercase font-heading tracking-tighter">hello@lumina.agency</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                                        <Phone className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 font-heading">Voice Comm</div>
                                        <div className="text-2xl font-black italic uppercase font-heading tracking-tighter">+1 (555) 000-0000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 pt-10 border-t border-white/5 flex gap-10">
                            {['Tw', 'In', 'Fb', 'Be'].map(social => (
                                <span key={social} className="text-xs font-black tracking-[0.4em] uppercase cursor-pointer hover:text-white transition-colors text-white/30 font-heading">{social}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right Form Column - High Performance Input Design */}
                    <div className="p-10 md:p-24 flex flex-col justify-center">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-4 font-heading">Legal Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-white font-bold font-sans text-lg"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-4 font-heading">Direct Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-white font-bold font-sans text-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-4 font-heading">Primary Interest</label>
                                <div className="relative">
                                    <select className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-white font-bold font-sans text-lg appearance-none cursor-pointer">
                                        <option className="bg-black">Shopify Excellence</option>
                                        <option className="bg-black">WordPress Enterprise</option>
                                        <option className="bg-black">SEO Aggression</option>
                                        <option className="bg-black">Custom Engineering</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ml-4 font-heading">Objective Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Outline your project architecture..."
                                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all text-white font-bold font-sans text-lg resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-8 rounded-full bg-white text-black font-black text-2xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-6 shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                            >
                                Inaugurate Project
                                <ArrowRight className="w-7 h-7" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
