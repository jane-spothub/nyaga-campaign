// src/components/Footer.tsx
"use client"; // optional if static

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        // Update the hero section in page.tsx
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.jpg" // Replace with your background image
                    alt="Campaign Background"
                    fill
                    className="object-cover w-full h-full blur-sm brightness-90"
                    priority
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 backdrop-blur-sm"></div>
                {/* optional overlay for gradient/color tint */}
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)] rounded-full px-4 py-2 mb-6">
                            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-[var(--color-text-muted)]">Aspiring MP - Tharaka Constituency</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-[var(--color-text)]">Building a </span>
                            <span className="text-[var(--color-primary)]">Better Future</span>
                            <span className="text-[var(--color-text)]"> for Tharaka</span>
                        </h1>

                        <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-2xl">
                            Development-first leadership focused on better roads, reliable water,
                            and real opportunities for Tharaka's youth. This campaign is about
                            work, dignity, and measurable progress.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                            <Link
                                href="/volunteer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                🤝 Join as Volunteer
                            </Link>

                            <Link
                                href="/donate"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-white rounded-xl font-semibold hover:bg-[var(--color-secondary-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                🤍 Donate Now
                            </Link>
                        </div>
                    </div>

                    {/* Right: Candidate Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/JMNyagapic.png"
                                alt="JM Nyaga - Tharaka MP Candidate"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Floating Info Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 max-w-xs">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">JM</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">JM Nyaga</h4>
                                    <p className="text-sm text-[var(--color-text-muted)]">Your Next MP</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                "Committed to transparent, development-focused leadership for Tharaka."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}