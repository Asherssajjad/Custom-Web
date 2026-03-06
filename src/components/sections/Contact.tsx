'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Zap } from 'lucide-react';

export default function Contact() {
    return (
        <section className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE: Identity & Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <Zap className="w-4 h-4 fill-primary" />
                                <span className="font-body text-[10px] font-black uppercase tracking-[0.3em]">Inaugurate Change</span>
                            </div>

                            <h2 className="font-display text-[15vw] md:text-[8vw] lg:text-[7vw] font-[900] uppercase italic leading-[0.8] tracking-tighter text-white">
                                Design<br />
                                <span className="gradient-text">Success</span>
                            </h2>

                            <p className="font-body text-white/50 text-lg max-w-sm leading-relaxed">
                                Architecting the future of your digital performance. Fill the form to start the consultation.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">Electronic Mail</p>
                                    <p className="font-display text-2xl font-[900] italic uppercase tracking-tight group-hover:text-primary transition-colors">Hello@lumina.agency</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">Voice Comm</p>
                                    <p className="font-display text-2xl font-[900] italic uppercase tracking-tight group-hover:text-primary transition-colors">+1 (555) 000-0000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Form */}
                    <div className="space-y-8 lg:pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">Legal Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full h-16 px-6 rounded-2xl bg-white/[0.03] border border-white/5 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all shadow-inner"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">Direct Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full h-16 px-6 rounded-2xl bg-white/[0.03] border border-white/5 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">Primary Interest</label>
                            <input
                                type="text"
                                placeholder="Shopify Excellence"
                                className="w-full h-16 px-6 rounded-2xl bg-white/[0.03] border border-white/5 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all shadow-inner"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-[9px] font-black uppercase tracking-widest text-white/30 ml-4">Objective Details</label>
                            <textarea
                                placeholder="Outline your project architecture..."
                                className="w-full h-40 p-6 rounded-3xl bg-white/[0.03] border border-white/5 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all shadow-inner resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full h-20 rounded-[40px] bg-white text-black font-display text-2xl font-[900] uppercase italic tracking-tight flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                            Inaugurate Project
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
