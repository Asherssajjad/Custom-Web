'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    { name: 'Aisha Khan', role: 'Product Manager, NovaBrands', text: 'Lumina elevated our brand experience. The site is fast, beautiful, and converts better than before. Stunned by the quality.' },
    { name: 'Daniel Lee', role: 'Founder, Finlytics', text: 'From concept to launch, the process was smooth. The attention to detail really stands out. Our Shopify revenue tripled.' },
    { name: 'Maya Patel', role: 'Marketing Lead, CoreScale', text: 'Our campaign performance improved dramatically after the redesign. The UX is on point. Best agency we have worked with.' },
    { name: 'Omar Farouk', role: 'CTO, HelixAI', text: 'Clean code, scalable architecture, and a delightful UI. I couldn\'t ask for more from a development partner.' },
    { name: 'Sara Johansson', role: 'E-commerce Director, Luma', text: 'The Shopify migration was seamless. AOV went up 40% within the first month post-launch. Absolutely incredible team.' },
    { name: 'James Okafor', role: 'CEO, GridBase', text: 'Lumina made our WordPress platform feel enterprise-grade. Speed scores went from 55 to 98. Jaw-dropping results.' },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[400px] p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#0088ff]/40 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-12 h-12 text-[#00fbff]" />
            </div>

            <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00fbff] fill-[#00fbff]" />
                ))}
            </div>

            <p className="text-white/40 text-lg font-medium font-body leading-relaxed mb-10 italic">&ldquo;{t.text}&rdquo;</p>

            <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0088ff] to-[#00fbff] flex items-center justify-center font-black text-white text-lg italic uppercase tracking-tighter shadow-lg">
                    {t.name[0]}
                </div>
                <div>
                    <p className="text-base font-black uppercase italic tracking-tight font-display text-white">{t.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00fbff]/60 font-body mt-1">{t.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    // 3 blocks of same content to ensure no gaps ever
    const loopItems = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-32 bg-black overflow-hidden relative">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(0,136,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 text-center mb-24 relative z-20 space-y-6">
                <div className="section-label mx-auto">
                    <span className="dot" />
                    Impact Report
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-tight font-display pr-4 uppercase">
                    Trusted by <span className="gradient-text">Global Brands</span>
                </h2>
                <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto font-medium font-body leading-relaxed">
                    We deliver high-performance digital solutions that accelerate scalability for modern enterprises.
                </p>
            </div>

            <div className="relative z-10">
                {/* Horizontal slider container */}
                <div className="flex gap-8 py-8">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: [0, -2568] }} // Calculate: Each card 400px + gap 32px = 432px * 6 items = 2592 - approx.
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        {loopItems.map((t, i) => (
                            <TestimonialCard key={i} t={t} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
