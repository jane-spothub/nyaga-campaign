// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900  pt-16 pb-16 relative overflow-hidden">
            {/* Background decorative elements */}
            {/*<div className="fixed inset-0 overflow-hidden pointer-events-none">*/}
            {/*    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl opacity-60"></div>*/}
            {/*    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60"></div>*/}
            {/*    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-40"></div>*/}
            {/*</div>*/}

            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg4.png"
                    alt="Tharaka Constituency Background"
                    fill
                    className="object-cover w-full h-full bg-center"
                    priority
                />
                {/* Gradient overlay */}
                {/*<div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 "></div>*/}
            </div>

            {/* Main Content Container - Centered Vertically and Horizontally */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                <div className="flex items-center justify-center min-h-screen pt-16 pb-16">
                    <div className="max-w-6xl mx-auto w-full">
                        {/* Hero Content - Centered */}
                        <div className="text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium mb-8 shadow-lg">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                Aspiring MP - Tharaka Constituency
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                                Building a{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
    Better Future for Tharaka
</span>
                            </h1>

                            {/* Subheading */}
                            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 drop-shadow-xl">
                                Reimagining politics to end poverty
                            </h2>

                            {/* Subtitle */}
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 sm:p-8 my-8 shadow-2xl max-w-4xl mx-auto">
                                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow">
                                    Development-first leadership focused on better roads, reliable water,
                                    and real opportunities for Tharaka&#39;s youth. This campaign is about
                                    work, dignity, and measurable progress.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                                <Link
                                    href="/volunteer"
                                    className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-950 to-blue-800 text-white rounded-xl font-bold hover:from-orange-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl min-w-[180px] sm:min-w-[200px] border border-white/20"
                                >
                                    <span className="text-xl">🤝🏾</span>
                                    Join as Volunteer
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>

                                <Link
                                    href="/donate"
                                    className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl min-w-[180px] sm:min-w-[200px] border border-white/20"
                                >
                                    <span className="text-xl">❤️</span>
                                    Donate Now
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <div className="w-6 h-6 text-white/70">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}