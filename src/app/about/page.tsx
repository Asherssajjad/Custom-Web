import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32">
                <div className="container mx-auto px-6 mb-24">
                    <h1 className="text-6xl md:text-8xl font-black italic mb-8">Specialists in <br /><span className="gradient-text">Performance</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-medium">
                        We are a collective of engineers, designers, and growth hackers obsessive about your results.
                    </p>
                </div>
                <About />
                <CTA />
            </div>
            <Footer />
        </main>
    );
}
