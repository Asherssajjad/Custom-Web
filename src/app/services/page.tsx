import Navbar from '@/components/sections/Navbar';
import Services from '@/components/sections/Services';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-40">
                <div className="container mx-auto px-6 mb-24">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 text-primary uppercase font-black text-xs tracking-widest mb-8">
                        <span>Lumina Core Specialties</span>
                    </div>
                    <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black italic tracking-tighter uppercase leading-[0.8]">
                        Full-Stack <br /><span className="gradient-text italic">Performance</span>
                    </h1>
                    <p className="text-2xl text-muted-foreground max-w-3xl font-bold mt-12 leading-relaxed">
                        From world-class e-commerce engines to enterprise-grade content platforms,
                        we build the tools that power digital leaders.
                    </p>
                </div>
                <Services />
                <CTA />
            </div>
            <Footer />
        </main>
    );
}
