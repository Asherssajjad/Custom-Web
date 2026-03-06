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
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-black selection:bg-primary/20">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl space-y-6">
                        <div className="flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase text-primary">
                            <div className="w-12 h-[1px] bg-primary" />
                            <span>Our Domain</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight font-heading">
                            Core <span className="gradient-text italic">Expertise</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed font-sans">
                        We deliver high-impact digital solutions that accelerate scalability for modern enterprises.
                    </p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.slug}`} className="h-full">
                            <motion.div
                                whileHover={{ y: -8, scale: 1.01 }}
                                className={`premium-card h-full p-10 rounded-[32px] border border-white/5 relative group cursor-pointer transition-all duration-500`}
                            >
                                {service.priority && (
                                    <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase font-heading">
                                        Flagship
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-6 group-hover:bg-primary/10 transition-all`}>
                                    <service.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                                </div>

                                <div className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase mb-4 font-heading">
                                    {service.category}
                                </div>
                                <h3 className="text-xl font-black mb-6 flex items-center justify-between group-hover:text-primary transition-colors font-heading uppercase tracking-tighter">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-base leading-relaxed font-medium mb-12 line-clamp-3">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-3 text-white/40 font-bold uppercase text-[10px] tracking-widest group-hover:text-primary transition-all">
                                    <span>Learn More</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
