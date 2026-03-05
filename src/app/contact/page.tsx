import Navbar from '@/components/sections/Navbar';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32">
                <div className="container mx-auto px-6 mb-12">
                    <h1 className="text-6xl md:text-8xl font-black italic mb-8 uppercase tracking-tighter text-center">Get in <span className="gradient-text">Touch</span></h1>
                </div>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
