'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
    { name: 'Shopify', logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg' },
    { name: 'WordPress', logo: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
    { name: 'HubSpot', logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg' },
    { name: 'Salesforce', logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg' },
    { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Next.js', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
    { name: 'Stripe', logo: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
    { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Google Ads', logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg' },
    { name: 'Meta', logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg' },
    { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
];

export default function TrustBar() {
    // Duplicate for infinite effect
    const duplicatedTech = [...technologies, ...technologies, ...technologies];

    return (
        <section className="py-20 bg-black relative border-y border-white/5 overflow-hidden">
            {/* Ambient Background Glow - Colorful */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,136,255,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 mb-12">
                <div className="text-center">
                    <h2 className="text-xl md:text-3xl font-black uppercase italic tracking-[0.2em] font-display">
                        Technologies & Platforms We <span className="gradient-text italic">Master</span>
                    </h2>
                </div>
            </div>

            {/* Infinite Slider */}
            <div className="relative flex overflow-hidden py-10">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1035] }} // Adjust based on content width
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {duplicatedTech.map((tech, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-4 mx-8 md:mx-12 group"
                        >
                            <div className="tech-logo-container p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl relative overflow-hidden backdrop-blur-sm">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-8 h-8 md:w-12 md:h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                                {/* Internal Glow on groups hover */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-primary-light transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Slider edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
}
