import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Smartphone, CheckCircle, ArrowRight, Zap, Target, Layers, Laptop } from 'lucide-react';
import Link from 'next/link';

export default function MobileService() {
    const features = [
        { title: 'iOS & Android', desc: 'Native and hybrid apps.' },
        { title: 'React Native', desc: 'Efficient cross-platform builds.' },
        { title: 'App Store Optimization', desc: 'Rank higher in markets.' },
        { title: 'UI/UX Mobile Design', desc: 'Optimized for tiny screens.' },
        { title: 'Maintenance', desc: 'Continuous updates & security.' },
        { title: 'Offline Support', desc: 'Functionality with no connection.' }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 text-accent uppercase font-black text-xs tracking-widest">
                                <Smartphone className="w-4 h-4" />
                                <span>Mobile First Future</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
                                Engineered <br /> <span className="gradient-text italic">Mobile</span> <br /> Experiences
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-xl font-medium">
                                We build high-performance mobile applications that users love. Whether native or hybrid, we ensure your app is fast, secure, and addictive.
                            </p>
                            <div className="flex gap-6">
                                <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-black font-black text-xl hover:scale-105 transition-all shadow-xl">Start Project</Link>
                                <button className="flex items-center gap-3 font-bold text-lg hover:text-accent transition-all group">
                                    Case Studies
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative aspect-square w-full max-w-lg rounded-[60px] overflow-hidden border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Scalable <span className="text-accent italic">Apps</span></h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Native-grade performance for both iOS and Android platforms.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-10 rounded-[48px] glass border border-white/5 hover:border-accent/50 transition-all group cursor-default">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:rotate-12 transition-transform">
                                    <Laptop className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: 'Retention Rate', val: '65%+', icon: Zap },
                            { label: 'Rating Goal', val: '4.8★', icon: Target },
                            { label: 'Device Coverage', val: '100%', icon: Layers },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                                    <stat.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h4 className="text-7xl font-black tracking-tighter text-accent uppercase italic">{stat.val}</h4>
                                <p className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
