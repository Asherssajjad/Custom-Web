'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const technologies = [
    { name: 'Shopify', logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg' },
    { name: 'WordPress', logo: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
    { name: 'HubSpot', logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg' },
    { name: 'Salesforce', logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg' },
    { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Next.js', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
    { name: 'Stripe', logo: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
];

export default function TrustBar() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.tech-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 90%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'expo.out'
        });
    }, { scope: container });

    return (
        <section className="py-24 bg-black relative border-y border-white/5 overflow-hidden">
            {/* Background Glows for the section */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-primary-light/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="section-label mx-auto mb-6">
                        <span className="dot" />
                        Domain Integration
                    </div>
                    <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-[0.2em] font-display">
                        Technologies & Platforms We <span className="gradient-text italic">Master</span>
                    </h2>
                </div>

                <div
                    ref={container}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
                >
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="tech-item group relative flex flex-col items-center gap-4"
                        >
                            <div className="tech-logo-container p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(28,77,141,0.5)] transition-all duration-500"
                                />

                                {/* Orbit Ring on Hover */}
                                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 group-hover:rotate-12 transition-all duration-700" />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-primary-light transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
