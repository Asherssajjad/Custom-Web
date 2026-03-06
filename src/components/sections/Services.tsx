'use client';

import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Globe,
    Search,
    Code2,
    Layers,
    Smartphone,
    ArrowUpRight,
    ArrowRight
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
                x: '-320vw',
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '3000 top',
                    pin: true,
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            }
        );
        return () => pin.kill();
    }, { scope: triggerRef });

    return (
        <div ref={triggerRef} className="relative overflow-hidden bg-black py-0">
            {/* Sticky Header */}
            <div className="absolute top-24 left-6 lg:left-12 z-50">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="section-label mb-6"
                >
                    <span className="dot" />
                    Protocol Domain
                </motion.div>
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase italic tracking-[-0.05em] leading-[0.85] font-display pr-12">
                    Core <span className="gradient-text italic">Expertise</span>
                </h2>
                <p className="text-white/30 text-base md:text-lg max-w-sm font-medium font-body mt-8 leading-relaxed">
                    Swipe or scroll to navigate our high-performance digital deployment strategies.
                </p>
            </div>

            {/* Global Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-[#0088ff]/10 blur-[200px] rounded-full" />
                <div className="absolute bottom-0 left-1/4 w-[1000px] h-[1000px] bg-[#00fbff]/5 blur-[200px] rounded-full" />
            </div>

            <div
                ref={sectionRef}
                className="flex items-center h-screen relative z-10 pl-[40vw]"
                style={{ width: '450vw' }}
            >
                {services.map((service, i) => (
                    <div key={i} className="w-[85vw] md:w-[65vw] lg:w-[45vw] flex-shrink-0 px-10">
                        <Link href={`/services/${service.slug}`} className="block group">
                            <div className="relative p-12 lg:p-16 rounded-[64px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl transition-all duration-700 hover:border-[#0088ff]/50 shadow-[0_40px_100px_rgba(0,0,0,0.5)] h-[600px] flex flex-col justify-between group-hover:translate-y-[-10px]">

                                {/* Inner Card Accents */}
                                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <service.icon className="w-40 h-40" style={{ color: service.color }} />
                                </div>

                                <div>
                                    <div
                                        className="w-24 h-24 rounded-[32px] flex items-center justify-center mb-16 shadow-3xl transition-all duration-700 border border-white/10 group-hover:rotate-[10deg]"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}40, transparent)`,
                                            boxShadow: `0 20px 50px ${service.color}20`
                                        }}
                                    >
                                        <service.icon className="w-12 h-12" style={{ color: service.color }} />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00fbff]/60 font-body">
                                            {service.category}
                                        </div>
                                        <h3
                                            className="text-4xl md:text-5xl lg:text-6xl font-black italic group-hover:text-white transition-colors font-display uppercase tracking-tighter leading-[0.9] pr-8"
                                            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium font-body max-w-md group-hover:text-white/70 transition-all">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-12">
                                    <div className="flex items-center gap-4 text-white/30 font-black uppercase text-xs tracking-[0.3em] group-hover:text-[#00fbff] transition-all">
                                        <span className="pb-1 border-b-2 border-white/10 group-hover:border-[#00fbff]">Protocol Details</span>
                                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                    <div className="text-[64px] font-black italic text-white/5 font-display group-hover:text-[#0088ff]/10 transition-colors tracking-tighter">
                                        0{i + 1}
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-[#0088ff]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10 rounded-[64px]" />
                            </div>
                        </Link>
                    </div>
                ))}

                {/* Closing visual spacer */}
                <div className="w-[60vw] flex-shrink-0 flex items-center justify-center">
                    <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-center space-y-6 opacity-20"
                    >
                        <ArrowRight className="w-20 h-20 text-white mx-auto" />
                        <p className="text-white font-display text-xl font-black uppercase tracking-[0.5em] italic">End of Domain</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
