import Navbar from '@/components/sections/Navbar';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24">
                <Pricing />
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
