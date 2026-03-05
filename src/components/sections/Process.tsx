'use client';

import { motion } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const steps = [
    {
        title: 'Discovery',
        label: 'Identify',
        description: 'We dive deep into your brand, audience, and goals to build a roadmap for success.',
        icon: Search,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: 'Development',
        label: 'Execute',
        description: 'Our engineers build your high-performance platform using cutting-edge tech stacks.',
        icon: Code,
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Launch & Scale',
        label: 'Optimize',
        description: 'We deploy your project and implement SEO & performance optimizations to scale.',
        icon: Rocket,
        color: 'from-orange-500 to-rose-500'
    }
];

export default function Process() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process-step', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            scale: 0.9,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    }, { scope: container });

    return (
        <section id="process" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">How We <span className="gradient-text italic">Build</span></h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
                        Our proven 3-step framework for turning complex ideas into market-dominating digital products.
                    </p>
                </div>

                <div ref={container} className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 -z-10 blur-[1px]" />

                    {steps.map((step, i) => (
                        <div key={i} className="process-step relative text-center group">
                            <div className="relative mb-12 flex justify-center">
                                <div className={`w-28 h-28 rounded-[40px] bg-gradient-to-br ${step.color} p-[2px] shadow-2xl transition-transform group-hover:scale-110 duration-500`}>
                                    <div className="w-full h-full bg-[#020617] rounded-[38px] flex items-center justify-center">
                                        <step.icon className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-black tracking-widest uppercase shadow-xl">
                                    {step.label}
                                </div>
                            </div>

                            <h3 className="text-3xl font-black mb-6">{step.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                {step.description}
                            </p>

                            <div className="mt-8 text-primary font-black text-7xl opacity-5 select-none pointer-events-none italic">
                                0{i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
