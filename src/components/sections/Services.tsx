'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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
        color: '#0088ff'
    },
    {
        title: 'WordPress Solutions',
        slug: 'wordpress-solutions',
        category: 'Web Design',
        description: 'Bespoke WordPress development and WooCommerce expertise for enterprise-grade speed.',
        icon: Globe,
        color: '#00fbff'
    },
    {
        title: 'SEO Strategies',
        slug: 'seo-strategies',
        category: 'Growth',
        description: 'Technical, on-page, and local SEO services designed to get you on Page 1 of Google.',
        icon: Search,
        color: '#0088ff'
    },
    {
        title: 'Custom Development',
        slug: 'custom-development',
        category: 'Engineering',
        description: 'Full-stack applications, API architectures, and bespoke SaaS platforms.',
        icon: Code2,
        color: '#00fbff'
    },
    {
        title: 'CRM Integrations',
        slug: 'crm-integrations',
        category: 'Automation',
        description: 'Syncing HubSpot, Salesforce, and Zoho with your workflow for seamless management.',
        icon: Layers,
        color: '#0088ff'
    },
    {
        title: 'Mobile App Dev',
        slug: 'mobile-app-development',
        category: 'Mobile',
        description: 'Native and hybrid iOS/Android apps built with React Native for maximum performance.',
        icon: Smartphone,
        color: '#00fbff'
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: '-300vw', // Enough to cover all items
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            }
        );
        return () => pin.kill();
    }, { scope: triggerRef });

    return (
        <div ref={triggerRef} className="relative overflow-hidden bg-black">
            {/* Sticky Header */}
            <div className="absolute top-24 left-6 lg:left-12 z-50">
                <div className="section-label mb-6">
                    <span className="dot" />
                    Our Domain
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-tight font-display pr-4 uppercase">
                    Core <span className="gradient-text">Expertise</span>
                </h2>
                <p className="text-white/40 text-sm md:text-base max-w-sm font-medium leading-relaxed font-body mt-4">
                    Scroll to explore our specialized digital protocols.
                </p>
            </div>

            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#0088ff]/10 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#00fbff]/5 blur-[150px] rounded-full" />
            </div>

            <div
                ref={sectionRef}
                className="flex items-center h-screen relative z-10 pl-[5vw]"
                style={{ width: '400vw' }} // Ensure container is wide enough
            >
                {services.map((service, i) => (
                    <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 px-8">
                        <Link href={`/services/${service.slug}`} className="block group">
                            <div className="relative p-10 lg:p-14 rounded-[48px] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 hover:border-[#0088ff]/40 shadow-2xl overflow-hidden h-[500px] flex flex-col justify-between">
                                {/* Hover background glow */}
                                <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-[#0088ff]/5 blur-[100px] group-hover:bg-[#0088ff]/20 transition-all duration-700" />

                                <div>
                                    <div
                                        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-12 shadow-2xl transition-all duration-500 border border-white/10 group-hover:scale-110"
                                        style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}
                                    >
                                        <service.icon className="w-10 h-10 transition-colors" style={{ color: service.color }} />
                                    </div>
                                    <div className="text-xs font-black tracking-[0.3em] text-white/20 uppercase mb-4 font-body group-hover:text-white/40 transition-colors">
                                        {service.category}
                                    </div>
                                    <h3
                                        className="text-3xl md:text-4xl lg:text-5xl font-black italic mb-8 group-hover:text-white transition-colors font-display uppercase tracking-tight leading-none pr-4"
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium font-body max-w-sm lg:max-w-md group-hover:text-white/60 transition-all">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-white/30 font-black uppercase text-xs tracking-[0.2em] group-hover:text-[#00fbff] transition-all pt-12">
                                    <span className="pb-1 border-b border-white/10 group-hover:border-[#00fbff]">View Protocol</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

                {/* Closing visual spacer */}
                <div className="w-[40vw] flex-shrink-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mx-auto bg-white/[0.02]">
                            <ArrowRight className="w-6 h-6 text-white/10" />
                        </div>
                        <p className="text-white/10 font-display text-sm font-black uppercase tracking-[0.3em] italic">Keep Scrolling</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Fixed missing import
import { ArrowRight } from 'lucide-react';
