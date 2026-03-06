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
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary-light/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-center lg:text-left">
                    <div className="max-w-xl space-y-4">
                        <div className="section-label mx-auto lg:mx-0">
                            <span className="dot" />
                            Our Domain
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-tight font-display">
                            Core <span className="gradient-text">Expertise</span>
                        </h2>
                    </div>
                    <p className="text-white/40 text-sm md:text-base max-w-sm font-medium leading-relaxed font-body">
                        We deliver high-impact digital solutions that accelerate scalability for modern enterprises.
                    </p>
                </div>

                <div ref={containerRef} className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.slug}`} className="service-card block h-full group">
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="premium-card h-full p-8 rounded-[24px] border border-white/5 relative bg-white/[0.02] backdrop-blur-sm transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-xl group-hover:bg-primary/20 transition-all duration-300">
                                    <service.icon className="w-6 h-6 text-primary-light group-hover:text-primary-accent transition-colors" />
                                </div>

                                <div className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mb-3 font-body">
                                    {service.category}
                                </div>
                                <h3 className="text-lg md:text-xl font-black mb-4 flex items-center justify-between group-hover:text-primary-light transition-colors font-display uppercase tracking-tight italic">
                                    {service.title}
                                </h3>
                                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-medium mb-10 line-clamp-3">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2.5 text-white/20 font-bold uppercase text-[9px] tracking-widest group-hover:text-primary-light transition-all">
                                    <span>Explore Service</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
