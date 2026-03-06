'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Zap, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const caseStudiesData: Record<string, {
    title: string;
    client: string;
    category: string;
    image: string;
    vibrantColor: string;
    results: { label: string; val: string; icon: any }[];
    challenge: string;
    solution: string;
    details: string[];
}> = {
    'everest-ecommerce': {
        title: 'Everest E-commerce',
        client: 'Everest Gear Co.',
        category: 'Shopify Excellence',
        image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=1200',
        vibrantColor: '#1C4D8D',
        results: [
            { label: 'Revenue Lift', val: '+240%', icon: Zap },
            { label: 'Conv. Rate', val: '4.8%', icon: Target },
            { label: 'Page Speed', val: '98/100', icon: BarChart3 },
        ],
        challenge: 'Everest Gear faced stagnant growth and high bounce rates on their legacy platform. Mobile users were dropping off due to 8-second load times.',
        solution: 'We rebuilt their entire store using a high-performance headless architecture, resulting in record-breaking conversions.',
        details: [
            'Implemented Headless Shopify with Next.js for sub-second page loads.',
            'Custom UI/UX overhaul focusing on mobile-first high-intent journeys.',
            'Advanced conversion tracking and personalization engine integration.',
            'Optimized global CDN and edge delivery for international scaling.'
        ]
    },
    // Add more case studies as needed
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const study = caseStudiesData[params.slug] || caseStudiesData['everest-ecommerce'];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/10 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-primary-deep/10 blur-[150px] -z-10" />

                <div className="container mx-auto px-6">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/40 text-sm font-bold uppercase tracking-widest hover:text-primary-light transition-all mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Insights
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-10">
                            <div className="section-label">
                                <span className="dot" />
                                <span>Impact Report</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] font-display">
                                {study.title}
                            </h1>
                            <p className="text-xl text-white/45 font-medium font-body leading-relaxed max-w-xl">
                                {study.challenge}
                            </p>

                            <div className="grid grid-cols-3 gap-6 pt-6">
                                {study.results.map((stat, i) => (
                                    <div key={i} className="space-y-2 p-1 relative overflow-hidden group">
                                        <h4 className="text-3xl md:text-5xl font-black italic text-primary-light font-display">{stat.val}</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
                            <img src={study.image} alt={study.title} className="w-full h-full object-cover grayscale-[30%]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter font-display">The Challenge</h3>
                                <p className="text-white/50 text-lg leading-relaxed font-body">
                                    {study.challenge}
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter font-display">Our Solution</h3>
                                <p className="text-white/50 text-lg leading-relaxed font-body">
                                    {study.solution}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 p-10 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm self-start">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter font-display">Strategic Implementation</h3>
                            <ul className="space-y-5">
                                {study.details.map((detail, i) => (
                                    <li key={i} className="flex gap-4 text-white/50 font-medium font-body">
                                        <CheckCircle2 className="w-6 h-6 text-primary-light flex-shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
