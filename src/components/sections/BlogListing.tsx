'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const posts = [
    {
        title: 'The Future of Shopify Headless E-commerce in 2026',
        excerpt: 'Why top-tier brands are moving away from traditional themes towards headless architectures.',
        category: 'E-commerce',
        author: 'Sarah Chen',
        date: 'March 15, 2026',
        image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=800&auto=format&fit=crop'
    },
    {
        title: 'How to Scale WordPress to Millions of Users',
        excerpt: 'Architecting WordPress installations for high-traffic environments and ultimate security.',
        category: 'Engineering',
        author: 'Marcus J.',
        date: 'March 12, 2026',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
    },
    {
        title: 'SEO Secrets for Dominating Local Search Markets',
        excerpt: 'Advanced keyword research and content strategies for local multi-location service brands.',
        category: 'Growth',
        author: 'Alex Rivera',
        date: 'March 10, 2026',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop'
    }
];

export default function BlogListing() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.blog-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 italic underline decoration-primary/40">Insights & <span className="gradient-text">Strategies</span></h2>
                        <p className="text-muted-foreground text-lg font-medium">
                            We share our learnings from building high-performance digital products every single week.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="px-6 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">All</button>
                        <button className="px-6 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">E-commerce</button>
                        <button className="px-6 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">SEO</button>
                    </div>
                </div>

                <div ref={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <div key={i} className="blog-card group cursor-pointer flex flex-col h-full">
                            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-8 border border-white/5">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 px-4 py-1 rounded-full glass border border-white/20 text-[10px] font-black tracking-widest uppercase">
                                    {post.category}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center gap-6 text-xs text-muted-foreground font-bold uppercase tracking-widest mb-6">
                                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</div>
                                    <div className="flex items-center gap-2"><User className="w-4 h-4 text-secondary" /> {post.author}</div>
                                </div>

                                <h3 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-3 text-white font-black group-hover:gap-6 transition-all border-t border-white/5 pt-6 uppercase text-xs tracking-widest">
                                    Read Article
                                    <ArrowRight className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
