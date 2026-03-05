'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactForm() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="glass-morphism rounded-[60px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                Let&apos;s Build the <br />
                                <span className="gradient-text">Future Together</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-12 max-w-md">
                                Ready to transform your business with AI? Send us a message and our strategy team will be in touch within 24 hours.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                                        <div className="text-xl font-bold">hello@aigen.agency</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Live Chat</div>
                                        <div className="text-xl font-bold">Available 24/7</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Office</div>
                                        <div className="text-xl font-bold">Silicon Valley, CA</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold px-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl glass border border-white/10 focus:border-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold px-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-6 py-4 rounded-2xl glass border border-white/10 focus:border-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold px-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl glass border border-white/10 focus:border-primary/50 outline-none transition-all appearance-none">
                                        <option>Custom AI Agent Development</option>
                                        <option>Workflow Automation Audit</option>
                                        <option>Enterprise AI Strategy</option>
                                        <option>Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold px-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-6 py-4 rounded-2xl glass border border-white/10 focus:border-primary/50 outline-none transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
