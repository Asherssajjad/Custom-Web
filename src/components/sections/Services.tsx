'use client';

import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Globe,
    Search,
    Code2,
    Layers,
    Smartphone,
    ArrowUpRight
} from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: 'Shopify Development',
        slug: 'shopify-development',
        category: 'E-commerce',
        description: 'High-converting custom Shopify stores, theme development, and deep app integrations.',
        icon: ShoppingBag,
        priority: true
    },
    {
        title: 'WordPress Solutions',
        slug: 'wordpress-solutions',
        category: 'Web Design',
        description: 'Bespoke WordPress development and WooCommerce expertise for enterprise-grade speed.',
        icon: Globe,
        priority: true
    },
    {
        title: 'SEO Strategies',
        slug: 'seo-strategies',
        category: 'Growth',
        description: 'Technical, on-page, and local SEO services designed to get you on Page 1 of Google.',
        icon: Search,
        priority: true
    },
    {
        title: 'Custom Development',
        slug: 'custom-development',
        category: 'Engineering',
        description: 'Full-stack applications, API architectures, and bespoke SaaS platforms.',
        icon: Code2,
        priority: false
    },
    {
        title: 'CRM Integrations',
        slug: 'crm-integrations',
        category: 'Automation',
        description: 'Syncing HubSpot, Salesforce, and Zoho with your workflow for seamless management.',
        icon: Layers,
        priority: false
    },
    {
        title: 'Mobile App Dev',
        slug: 'mobile-app-development',
        category: 'Mobile',
        description: 'Native and hybrid iOS/Android apps built with React Native for maximum performance.',
        icon: Smartphone,
        priority: false
    }
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'expo.out'
        });
    }, { scope: containerRef });

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary-light/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl space-y-6">
                        <div className="section-label">
                            <span className="dot" />
                            Our Domain
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-tight font-display">
                            Core <span className="gradient-text">Expertise</span>
                        </h2>
                    </div>
                    <p className="text-white/40 text-lg max-w-sm font-medium leading-relaxed font-body">
                        We deliver high-impact digital solutions that accelerate scalability for modern enterprises.
                    </p>
                </div>

                <div ref={containerRef} className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.slug}`} className="service-card block h-full">
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="premium-card h-full p-8 md:p-10 rounded-[32px] border border-white/10 relative group bg-white/[0.03] backdrop-blur-sm transition-all duration-500"
                            >
                                {service.priority && (
                                    <div className="absolute top-8 right-8 badge">
                                        Flagship
                                    </div>
                                )}

                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 shadow-xl group-hover:bg-primary/20 transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-primary-light group-hover:text-primary-accent transition-colors" />
                                </div>

                                <div className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-4 font-body">
                                    {service.category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center justify-between group-hover:text-primary-light transition-colors font-display uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/45 text-sm md:text-base leading-relaxed font-medium mb-12 line-clamp-3">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-3 text-white/30 font-bold uppercase text-[10px] tracking-widest group-hover:text-primary-light transition-all">
                                    <span>Explore Service</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
