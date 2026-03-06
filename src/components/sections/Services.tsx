'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Globe, Search, Code, Layout, Smartphone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: ShoppingBag,
        title: 'Shopify Development',
        desc: 'High-conversion stores built on Liquid & Hydrogen for global brands.',
        href: '/services/shopify-development',
        color: '#96bf48',
    },
    {
        icon: Globe,
        title: 'WordPress Solutions',
        desc: 'Bespoke enterprise sites with headless architecture and Gutenberg power.',
        href: '/services/wordpress-solutions',
        color: '#21759b',
    },
    {
        icon: Search,
        title: 'SEO Strategies',
        desc: 'Aggressive data-driven campaigns to dominate search engine results.',
        href: '/services/seo-strategies',
        color: '#ff9900',
    },
    {
        icon: Code,
        title: 'Custom Development',
        desc: 'Next.js & React-based web apps engineered for performance and scale.',
        href: '/services/custom-development',
        color: '#6366f1',
    },
    {
        icon: Layout,
        title: 'CRM Integrations',
        desc: 'Seamless HubSpot, Salesforce & Zendesk syncing for automated sales.',
        href: '/services/crm-integrations',
        color: '#ff7a59',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        desc: 'Cross-platform iOS and Android apps with React Native & Flutter.',
        href: '/services/mobile-app-development',
        color: '#34d399',
    },
];

export default function Services() {
    return (
        <section className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
                    <div className="space-y-6">
                        <div className="section-label">
                            <span className="dot" />
                            Specialisations
                        </div>
                        <h2 className="font-display text-[10vw] md:text-[7vw] lg:text-[6vw] font-[900] uppercase italic leading-[0.85] tracking-tighter">
                            World Class<br />
                            <span className="gradient-text">Solutions</span>
                        </h2>
                    </div>
                    <p className="font-body text-white/40 text-xl font-medium max-w-sm leading-relaxed pb-2">
                        We bridge the gap between creative excellence and technical engineering.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href={service.href}
                            className="group block p-10 rounded-[40px] glass border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                                <ArrowUpRight className="w-8 h-8 text-primary" />
                            </div>

                            <div className="space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                                    <service.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-display text-4xl font-[900] uppercase italic tracking-tighter group-hover:text-primary transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-white/50 text-lg font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
