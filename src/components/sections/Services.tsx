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
        color: 'from-blue-500 to-blue-600',
        priority: true
    },
    {
        title: 'WordPress Solutions',
        slug: 'wordpress-solutions',
        category: 'Web Design',
        description: 'Bespoke WordPress development and WooCommerce expertise for enterprise-grade speed.',
        icon: Globe,
        color: 'from-purple-500 to-indigo-600',
        priority: true
    },
    {
        title: 'SEO Strategies',
        slug: 'seo-strategies',
        category: 'Growth',
        description: 'Technical, on-page, and local SEO services designed to get you on Page 1 of Google.',
        icon: Search,
        color: 'from-pink-500 to-rose-600',
        priority: true
    },
    {
        title: 'Custom Development',
        slug: 'custom-development',
        category: 'Engineering',
        description: 'Full-stack applications, API architectures, and bespoke SaaS platforms.',
        icon: Code2,
        color: 'from-emerald-500 to-teal-600',
        priority: false
    },
    {
        title: 'CRM Integrations',
        slug: 'crm-integrations',
        category: 'Automation',
        description: 'Syncing HubSpot, Salesforce, and Zoho with your workflow for seamless management.',
        icon: Layers,
        color: 'from-orange-500 to-amber-600',
        priority: false
    },
    {
        title: 'Mobile App Dev',
        slug: 'mobile-app-development',
        category: 'Mobile',
        description: 'Native and hybrid iOS/Android apps built with React Native for maximum performance.',
        icon: Smartphone,
        color: 'from-cyan-500 to-blue-600',
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
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-[#010413]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Our Core <span className="gradient-text italic">Expertise</span>
                        </h2>
                        <p className="text-muted-foreground text-xl font-medium">
                            We focus on delivering high-impact digital solutions that drive revenue and scalability for modern brands.
                        </p>
                    </div>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Link key={i} href={`/services/${service.slug}`}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`service-card h-full p-10 rounded-[48px] glass-morphism border border-white/5 relative group cursor-pointer transition-all duration-500 ${service.priority ? 'bg-primary/5' : ''}`}
                            >
                                {service.priority && (
                                    <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black tracking-widest uppercase">
                                        Priority
                                    </div>
                                )}

                                <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${service.color} flex items-center justify-center mb-10 shadow-lg group-hover:rotate-6 transition-transform`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <div className="text-xs font-black tracking-widest text-muted-foreground uppercase mb-3 opacity-60">
                                    {service.category}
                                </div>
                                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 overflow-hidden line-clamp-3">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-white font-black group-hover:gap-4 transition-all">
                                    <span className="text-sm tracking-widest uppercase">View Details</span>
                                    <ArrowUpRight className="w-6 h-6 text-primary" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
