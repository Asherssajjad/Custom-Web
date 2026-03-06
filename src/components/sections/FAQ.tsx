'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

const faqs = [
    {
        question: 'How long does implementation take?',
        answer: 'A standard project typically takes 4-8 weeks from initial audit to full deployment, depending on complexity.'
    },
    {
        question: 'How do you ensure data security?',
        answer: 'We use enterprise-grade encryption and secure API protocols. Your data and customer information are handled with the highest security standards.'
    },
    {
        question: 'What is your typical project ROI?',
        answer: 'While it varies, our clients typically see a 30-50% increase in performance metrics and conversion rates within the first 6 months.'
    },
    {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, all our partnerships include ongoing maintenance, security updates, and performance optimization to ensure long-term scalability.'
    },
    {
        question: 'Can you integrate with my existing CRM?',
        answer: 'Absolutely. We have extensive experience integrating with Shopify, WordPress, HubSpot, Salesforce, and custom legacy systems.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 relative overflow-hidden bg-black">
            {/* Massive Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#0088ff]/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <div className="section-label mx-auto">
                            <span className="dot" />
                            <Sparkles className="w-3.5 h-3.5" />
                            Intelligence
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-tight font-display pr-4 uppercase">
                            Expert <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto font-medium font-body leading-relaxed">
                            Everything you need to know about partnering with Lumina.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-[#0088ff]/30 shadow-2xl"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full p-8 md:p-10 flex items-center justify-between text-left group transition-all"
                                >
                                    <span className="text-lg md:text-xl font-black uppercase italic tracking-tight font-display text-white/80 group-hover:text-[#00fbff] transition-colors pr-2 uppercase">
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#0088ff] border-[#00d4ff] rotate-180' : 'bg-transparent'}`}>
                                        {openIndex === i ? (
                                            <Minus className="w-5 h-5 text-white" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-white/40 group-hover:text-white" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: 'circOut' }}
                                        >
                                            <div className="px-10 pb-10 text-white/40 text-base md:text-lg leading-relaxed font-body font-medium max-w-2xl">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
