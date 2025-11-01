// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/60 pt-16 pb-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-40"></div>
            </div>

            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/*<Image*/}
                {/*    src="/hero2-bg.png"*/}
                {/*    alt="Tharaka Constituency Background"*/}
                {/*    fill*/}
                {/*    className="object-cover w-full h-full"*/}
                {/*    priority*/}
                {/*/>*/}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-red-900/50 to-orange-900/40"></div>
            </div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Content */}
                    <div className="text-center pt-20 pb-16">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            Aspiring MP - Tharaka Constituency
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Building a{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                Better Future
                            </span>
                            <br />
                            for Tharaka
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Development-first leadership focused on better roads, reliable water,
                            and real opportunities for Tharaka&#39;s youth. This campaign is about
                            work, dignity, and measurable progress.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                            <Link
                                href="/volunteer"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                            >
                                <span className="text-xl">🤝</span>
                                Join as Volunteer
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>

                            <Link
                                href="/donate"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                            >
                                <span className="text-xl">❤️</span>
                                Donate Now
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        {/* Stats */}
                        {/*<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">*/}
                        {/*    {[*/}
                        {/*        { value: "15+", label: "Years Service", gradient: "from-orange-500 to-red-500" },*/}
                        {/*        { value: "50+", label: "Projects", gradient: "from-purple-500 to-pink-500" },*/}
                        {/*        { value: "100%", label: "Commitment", gradient: "from-cyan-500 to-blue-500" }*/}
                        {/*    ].map((stat, index) => (*/}
                        {/*        <div key={index} className="group text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">*/}
                        {/*            <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>*/}
                        {/*                {stat.value}*/}
                        {/*            </div>*/}
                        {/*            <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">*/}
                        {/*                {stat.label}*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                        {/*<div className="max-w-4xl mx-auto">*/}
                        {/*    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">*/}
                        {/*        <div className="flex flex-wrap justify-center gap-4">*/}
                        {/*            {[*/}
                        {/*                { href: "/about", label: "About JM", icon: "👨‍💼" },*/}
                        {/*                { href: "/vision", label: "Our Vision", icon: "🎯" },*/}
                        {/*                { href: "/agenda", label: "Development Plan", icon: "📋" },*/}
                        {/*                { href: "/contact", label: "Get Involved", icon: "📞" }*/}
                        {/*            ].map((link, index) => (*/}
                        {/*                <Link*/}
                        {/*                    key={index}*/}
                        {/*                    href={link.href}*/}
                        {/*                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 border border-white/30"*/}
                        {/*                >*/}
                        {/*                    <span className="text-lg">{link.icon}</span>*/}
                        {/*                    {link.label}*/}
                        {/*                    <span className="group-hover:translate-x-1 transition-transform">→</span>*/}
                        {/*                </Link>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/* Quick Navigation */}

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