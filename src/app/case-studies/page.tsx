import Navbar from '@/components/sections/Navbar';
import CaseStudies from '@/components/sections/CaseStudies';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32">
                <div className="container mx-auto px-6 mb-24 text-center">
                    <h1 className="text-6xl md:text-9xl font-black italic mb-8 uppercase tracking-tighter">Impact <span className="gradient-text">Report</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        Explore our portfolio of high-performance digital products and the results they generated.
                    </p>
                </div>
                <CaseStudies />
                <CTA />
            </div>
            <Footer />
        </main>
    );
}
