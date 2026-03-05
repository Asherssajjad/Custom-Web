'use client';

import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="glass-morphism rounded-[64px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[700px] border border-white/5">

                    {/* Left Info Column */}
                    <div className="p-10 md:p-20 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">
                                Let&apos;s Build <br />
                                <span className="gradient-text underline decoration-white/20">The Future</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-medium mb-16 max-w-sm">
                                Ready to accelerate your growth? Fill out the form or reach out directly.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email Us</div>
                                        <div className="text-xl font-bold">hello@lumina.agency</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-secondary transition-colors">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                                        <div className="text-xl font-bold">+1 (555) 000-0000</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent transition-colors">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Visit Us</div>
                                        <div className="text-xl font-bold">Silicon Valley, CA</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/10 flex gap-6">
                            {['Tw', 'In', 'Fb', 'Be'].map(social => (
                                <span key={social} className="text-xs font-black tracking-widest uppercase cursor-pointer hover:text-primary transition-colors">{social}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="p-10 md:p-20 flex flex-col justify-center">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-all text-white font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-all text-white font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Service Needed</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-all text-white font-medium appearance-none">
                                    <option>Shopify Development</option>
                                    <option>WordPress Enterprise</option>
                                    <option>SEO Strategy</option>
                                    <option>Custom App Dev</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project goals..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-all text-white font-medium resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-6 rounded-full bg-white text-black font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-white/5"
                            >
                                Send Inquiry
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
