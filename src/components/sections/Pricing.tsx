'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
    {
        name: 'Starter',
        price: '$1,999',
        description: 'Perfect for small businesses starting their AI journey.',
        features: [
            '1 Custom AI Chatbot',
            'Basic Workflow Automation',
            'Email Support',
            'Data Security Protocol',
            'Weekly Performance Reports'
        ],
        notIncluded: [
            'Voice AI Integration',
            'Advanced Data Analysis',
            'Dedicated Account Manager'
        ],
        popular: false
    },
    {
        name: 'Business',
        price: '$4,999',
        description: 'Scaling operations with multi-agent systems and deep automation.',
        features: [
            'Up to 5 Custom AI Agents',
            'Advanced Process Automation',
            'Priority Phone Support',
            'API & Tool Integrations',
            'Bi-Weekly Strategy Calls',
            'Voice AI Integration'
        ],
        notIncluded: [
            'Enterprise Infrastructure',
            'Custom LLM Fine-tuning'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Full-scale AI transformation for global corporations.',
        features: [
            'Unlimited AI Solutions',
            'Full Infrastructure Audit',
            '24/7 Premium Support',
            'Custom LLM Fine-tuning',
            'On-site Implementation',
            'Dedicated Strategy Team',
            'White-label Options'
        ],
        notIncluded: [],
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Investment <span className="text-primary">Plans</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Transparent pricing models designed to scale with your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative p-10 rounded-[40px] border flex flex-col",
                                plan.popular
                                    ? "bg-primary/5 border-primary shadow-[0_0_40px_rgba(147,51,234,0.1)]"
                                    : "glass border-white/5"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-white text-sm font-bold">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black mb-4">{plan.price}<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                                <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-3 opacity-40">
                                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                                            <X className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-4 rounded-2xl font-bold transition-all",
                                plan.popular
                                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                                    : "glass border border-white/10 text-white hover:bg-white/5"
                            )}>
                                {plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
