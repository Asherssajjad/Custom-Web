import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from 'lucide-react';

// Blog post data — in production this would come from a CMS/database
const postsData: Record<string, {
    title: string; category: string; date: string; readTime: string;
    image: string; excerpt: string;
    content: { heading?: string; body: string }[];
}> = {
    'shopify-conversion-rate-optimization': {
        title: 'How to 3x Your Shopify Conversion Rate in 90 Days',
        category: 'Shopify',
        date: 'Mar 4, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1556742049-13ef7312754c?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'A deep dive into the exact CRO strategies we used to take a struggling Shopify store from 1.2% to 4.1% conversion rate.',
        content: [
            { body: 'Conversion Rate Optimization (CRO) is the single highest-leverage activity for any Shopify store. A 1% increase in conversion rate can mean hundreds of thousands in additional revenue without spending a single penny more on ads.' },
            { heading: '1. Audit Your Checkout Flow', body: 'The first 48 hours of any engagement, we run a full checkout audit using Hotjar session recordings and Google Analytics funnel data. Most Shopify stores lose 60-70% of customers between cart and order confirmation. This is almost always fixable with smarter UX.' },
            { heading: '2. Product Page Architecture', body: 'Your product page is your sales page. A/B testing has consistently shown that moving the CTA above the fold, adding trust badges, and including a 3-second product video increases conversions by 15-25% alone.' },
            { heading: '3. Speed = Revenue', body: 'A 1-second delay in page load time reduces conversions by 7%. We\'ve seen Shopify stores running 8-second load times on mobile. After optimization to under 2 seconds, conversion rates jumped 35% overnight.' },
            { heading: '4. Trust and Social Proof', body: 'Real-time purchase notifications, verified review carousels, and media mentions are not fluff — they are conversion infrastructure. Don\'t launch a Shopify store without them.' },
        ],
    },
    'wordpress-speed-optimization-guide': {
        title: 'The Complete WordPress Speed Optimization Guide for 2026',
        category: 'WordPress',
        date: 'Feb 28, 2026',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Core Web Vitals, caching strategies, and advanced server-side tricks that take a WordPress site from 55 to 98 on PageSpeed.',
        content: [
            { body: 'WordPress powers 43% of the web but is also one of the most poorly optimized platforms when left unconfigured. A default WordPress install with a few popular plugins will easily score below 50 on Core Web Vitals.' },
            { heading: 'Start with Hosting', body: 'No optimization strategy overcomes bad hosting. Shared hosting is a performance killer. Invest in a managed WordPress host like Kinsta, WP Engine, or Cloudways, and your baseline score immediately jumps 20-30 points.' },
            { heading: 'Critical CSS and Deferred JS', body: 'Load only the CSS needed for above-the-fold content on initial render, and defer all JavaScript. Tools like Perfmatters and LiteSpeed Cache make this manageable without touching raw code.' },
            { heading: 'Image Optimization Pipeline', body: 'Convert all images to WebP, implement lazy loading, and use a CDN. Images typically account for 70% of a page\'s weight. This single step alone can cut your load time in half.' },
        ],
    },
    'seo-strategy-dominate-google-2026': {
        title: 'The SEO Strategy That Dominates Google in 2026',
        category: 'SEO',
        date: 'Feb 20, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Forget the old playbook. Here\'s the topical authority + E-E-A-T framework we use to rank brands in competitive niches.',
        content: [
            { body: 'SEO in 2026 is fundamentally about demonstrating expertise, experience, authority, and trust (E-E-A-T) at scale. Google\'s Helpful Content updates have permanently shifted how content is evaluated.' },
            { heading: 'Topical Authority Over Keywords', body: 'Stop targeting individual keywords. Build comprehensive topic clusters that cover every aspect of a subject. When Google sees you as the definitive resource on Shopify development, it ranks all your related pages — not just the one you optimized.' },
            { heading: 'Technical SEO Foundation', body: 'Before any content strategy, you need clean technical foundations. Crawlability, proper internal linking, correct canonical tags, and schema markup are non-negotiable.' },
        ],
    },
};

// Generate static params for all known slugs
export function generateStaticParams() {
    return Object.keys(postsData).map(slug => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = postsData[params.slug];

    // Fallback for unknown slugs
    if (!post) {
        return (
            <main className="min-h-screen bg-black text-white flex items-center justify-center">
                <Navbar />
                <div className="text-center space-y-4 pt-32">
                    <h1 className="font-display text-6xl font-[900] uppercase italic">Post Not Found</h1>
                    <Link href="/blog" className="btn-ghost inline-flex">← Back to Blog</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero image */}
            <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
            </div>

            {/* Article */}
            <article className="container mx-auto px-6 lg:px-10 max-w-3xl -mt-16 relative z-10 pb-32">

                {/* Back link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 text-sm font-body font-semibold hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/25 bg-primary/8 text-primary font-body">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/30 font-body"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-white/30 font-body"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-[900] uppercase italic tracking-tight leading-[0.9] mb-8">
                    {post.title}
                </h1>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-primary mb-8" />

                {/* Excerpt */}
                <p className="font-body text-lg text-white/60 font-medium leading-relaxed mb-10 border-l-2 border-primary/40 pl-5">
                    {post.excerpt}
                </p>

                {/* Body */}
                <div className="space-y-8">
                    {post.content.map((block, i) => (
                        <div key={i}>
                            {block.heading && (
                                <h2 className="font-display text-3xl md:text-4xl font-[900] uppercase italic tracking-tight mb-3 text-primary">
                                    {block.heading}
                                </h2>
                            )}
                            <p className="font-body text-white/55 text-base leading-[1.8] font-normal">{block.body}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 p-8 rounded-3xl border border-primary/15 bg-primary/5 text-center space-y-4">
                    <h3 className="font-display text-3xl font-[900] uppercase italic tracking-tight">
                        Ready to implement this?
                    </h3>
                    <p className="font-body text-white/50 text-base">Let our team build it for you. Book a free strategy call today.</p>
                    <Link href="/contact" className="btn-indigo inline-flex">
                        Book a Free Call
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    );
}
