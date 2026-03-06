'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const technologies = [
    { name: 'Shopify', icon: '/logos/shopify.svg' },
    { name: 'WordPress', icon: '/logos/wordpress.svg' },
    { name: 'HubSpot', icon: '/logos/hubspot.svg' },
    { name: 'Salesforce', icon: '/logos/salesforce.svg' },
    { name: 'Figma', icon: '/logos/figma.svg' },
    { name: 'Vercel', icon: '/logos/vercel.svg' },
    { name: 'Next.js', icon: '/logos/nextjs.svg' },
    { name: 'Stripe', icon: '/logos/stripe.svg' },
];

export default function TrustBar() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.tech-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 90%',
            },
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section className="py-20 bg-black relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
                        Technologies & Platforms We Master
                    </p>
                </div>

                <div ref={container} className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {technologies.map((tech, i) => (
                        <div key={i} className="tech-item group flex flex-col items-center gap-4">
                            <div className="relative w-12 h-12 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                {/* Using placeholder icons if actual files don't exist yet, but structured for real logos */}
                                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xs text-white/50 group-hover:text-primary-light">
                                    {tech.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
