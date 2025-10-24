// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center">
            {/* Background Image with Blur and Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.jpg" // Replace with your background image
                    alt="Tharaka Constituency Background"
                    fill
                    className="object-cover w-full h-full blur-sm"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Hero Content Centered */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-white">Aspiring MP - Tharaka Constituency</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                        Building a{" "}
                        <span className="text-[var(--color-accent)]">Better Future</span>
                        {" "}for Tharaka
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Development-first leadership focused on better roads, reliable water,
                        and real opportunities for Tharaka's youth. This campaign is about
                        work, dignity, and measurable progress.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Link
                            href="/volunteer"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--color-primary)] text-white rounded-2xl font-bold text-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
                        >
                            🤝 Join as Volunteer
                        </Link>

                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-2xl font-bold text-lg hover:bg-[var(--color-accent-light)] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
                        >
                            ❤️ Donate Now
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">15+</div>
                            <div className="text-sm text-white/80">Years Service</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">50+</div>
                            <div className="text-sm text-white/80">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">100%</div>
                            <div className="text-sm text-white/80">Commitment</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}