import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const posts = [
    {
        slug: 'shopify-conversion-rate-optimization',
        title: 'How to 3x Your Shopify Conversion Rate in 90 Days',
        excerpt: 'A deep dive into the exact CRO strategies we used to take a struggling Shopify store from 1.2% to 4.1% conversion rate.',
        category: 'Shopify',
        date: 'Mar 4, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1556742049-13ef7312754c?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'wordpress-speed-optimization-guide',
        title: 'The Complete WordPress Speed Optimization Guide for 2026',
        excerpt: 'Core Web Vitals, caching strategies, and advanced server-side tricks that take a WordPress site from 55 to 98 on PageSpeed.',
        category: 'WordPress',
        date: 'Feb 28, 2026',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'seo-strategy-dominate-google-2026',
        title: 'The SEO Strategy That Dominates Google in 2026',
        excerpt: 'Forget the old playbook. Here\'s the topical authority + E-E-A-T framework we use to rank brands in competitive niches.',
        category: 'SEO',
        date: 'Feb 20, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'headless-commerce-future',
        title: 'Why Headless Commerce Is the Future of E-commerce',
        excerpt: 'How we\'re building headless Shopify stores with Next.js that load in under 1 second and convert 30% better than traditional themes.',
        category: 'Development',
        date: 'Feb 14, 2026',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'crm-integration-sales-automation',
        title: 'Building a CRM-to-Sales Pipeline That Actually Works',
        excerpt: 'We break down the HubSpot + Shopify + Zapier stack that generated 400% more qualified leads for one of our clients.',
        category: 'CRM',
        date: 'Feb 6, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=800&auto=format&fit=crop',
    },
    {
        slug: 'mobile-first-design-principles',
        title: 'Mobile-First Design Principles That Convert in 2026',
        excerpt: 'With 65% of traffic now on mobile, your desktop-first design is killing your revenue. Here\'s how we fix that.',
        category: 'Design',
        date: 'Jan 30, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    },
];

const categoryColors: Record<string, string> = {
    Shopify: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/8',
    WordPress: 'text-blue-400 border-blue-400/20 bg-blue-400/8',
    SEO: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/8',
    Development: 'text-primary border-primary/20 bg-primary/8',
    CRM: 'text-purple-400 border-purple-400/20 bg-purple-400/8',
    Design: 'text-pink-400 border-pink-400/20 bg-pink-400/8',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-44 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-10 text-center space-y-6">
                    <div className="section-label mx-auto w-fit">
                        <span className="dot" />
                        Insights & Resources
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl lg:text-[7vw] font-[900] uppercase italic leading-[0.9] tracking-tight">
                        The <span className="gradient-text">Lumina</span> Blog
                    </h1>
                    <p className="font-body text-white/50 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                        Expert strategies, industry insights, and proven playbooks from our team of digital specialists.
                    </p>
                </div>
            </section>

            {/* Featured post */}
            <section className="pb-16">
                <div className="container mx-auto px-6 lg:px-10">
                    <Link href={`/blog/${posts[0].slug}`} className="group block rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-primary/25 transition-all duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="aspect-[16/9] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                                <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" />
                            </div>
                            <div className="p-10 flex flex-col justify-center space-y-5">
                                <div className={`inline-flex w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border font-body ${categoryColors[posts[0].category]}`}>
                                    {posts[0].category}
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-[900] uppercase italic tracking-tight leading-[0.95] group-hover:text-primary transition-colors">
                                    {posts[0].title}
                                </h2>
                                <p className="font-body text-white/45 text-base leading-relaxed">{posts[0].excerpt}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-4 text-white/30 text-xs font-body font-medium">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Grid of posts */}
            <section className="pb-24">
                <div className="container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.slice(1).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-primary/25 transition-all duration-300">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border font-body ${categoryColors[post.category]}`}>
                                        {post.category}
                                    </div>
                                    <h3 className="font-display text-2xl font-[900] uppercase italic tracking-tight leading-[1] group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="font-body text-white/40 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-white/25 text-xs font-body font-medium pt-1">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
