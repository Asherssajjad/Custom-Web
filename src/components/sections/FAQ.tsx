'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How long does implementation take?',
        answer: 'A standard AI agent integration typically takes 2-4 weeks from initial audit to full deployment, depending on complexity.'
    },
    {
        question: 'How do you ensure data security?',
        answer: 'We use enterprise-grade encryption and can deploy models on-premises or within your private cloud. We never train public models on your private business data.'
    },
    {
        question: 'Will AI replace my entire workforce?',
        answer: 'No. AI is designed to augment human potential by handling repetitive tasks, allowing your team to focus on high-value creative and strategic work.'
    },
    {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, all our plans include ongoing maintenance, security updates, and performance optimization as AI models evolve.'
    },
    {
        question: 'Can you integrate with my existing CRM?',
        answer: 'Absolutely. We have extensive experience integrating with Salesforce, HubSpot, Zapier, and custom legacy systems.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Expert <span className="text-primary">Questions</span></h2>
                        <p className="text-muted-foreground text-lg">
                            Everything you need to know about partnering with AIGEN.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="rounded-3xl glass border border-white/5 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold">{faq.question}</span>
                                    {openIndex === i ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
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
