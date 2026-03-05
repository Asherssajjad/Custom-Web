import Navbar from '@/components/sections/Navbar';
import BlogListing from '@/components/sections/BlogListing';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32">
                <div className="container mx-auto px-6 mb-24">
                    <h1 className="text-6xl md:text-8xl font-black italic mb-8 uppercase tracking-tighter">Growth <span className="gradient-text">Journal</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-medium">
                        Strategic insights on Shopify, WordPress, and the future of search engine optimization.
                    </p>
                </div>
                <BlogListing />
                <CTA />
            </div>
            <Footer />
        </main>
    );
}
