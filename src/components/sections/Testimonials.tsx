'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    { name: 'Aisha Khan', role: 'Product Manager, NovaBrands', text: 'Lumina elevated our brand experience. The site is fast, beautiful, and converts better than before. Stunned by the quality.' },
    { name: 'Daniel Lee', role: 'Founder, Finlytics', text: 'From concept to launch, the process was smooth. The attention to detail really stands out. Our Shopify revenue tripled.' },
    { name: 'Maya Patel', role: 'Marketing Lead, CoreScale', text: 'Our campaign performance improved dramatically after the redesign. The UX is on point. Best agency we have worked with.' },
    { name: 'Omar Farouk', role: 'CTO, HelixAI', text: 'Clean code, scalable architecture, and a delightful UI. I couldn\'t ask for more from a development partner.' },
    { name: 'Sara Johansson', role: 'E-commerce Director, Luma', text: 'The Shopify migration was seamless. AOV went up 40% within the first month post-launch. Absolutely incredible team.' },
    { name: 'James Okafor', role: 'CEO, GridBase', text: 'Lumina made our WordPress platform feel enterprise-grade. Speed scores went from 55 to 98. Jaw-dropping results.' },
];

// Duplicate for infinite loop effect
const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials.slice(3), ...testimonials.slice(3)];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 group">
            <Quote className="w-5 h-5 text-primary/40 mb-4" />
            <p className="text-white/55 text-sm font-medium font-sans leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
            <div className="border-t border-white/5 pt-4">
                <p className="text-sm font-[900] uppercase italic tracking-tighter font-heading text-white">{t.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 font-heading mt-0.5">{t.role}</p>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-32 bg-black overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Header */}
            <div className="container mx-auto px-6 text-center mb-20 space-y-5">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] font-heading">
                    Testimonials
                </div>
                <h2 className="text-5xl md:text-7xl font-[900] uppercase italic tracking-tighter font-heading leading-[0.9]">
                    What Our Clients <span className="text-primary">Say</span>
                </h2>
                <p className="text-white/40 max-w-lg mx-auto text-lg font-medium font-sans">
                    Real results, spoken by the people who matter most.
                </p>
                <div className="pt-2">
                    <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-black text-sm uppercase tracking-widest font-heading hover:scale-105 transition-all">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Row 1 — scrolls left */}
            <div className="mb-5 relative">
                <motion.div
                    className="flex gap-5"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                >
                    {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
                </motion.div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative">
                <motion.div
                    className="flex gap-5"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
                </motion.div>
            </div>
        </section>
    );
}
