// src/components/VisionSection.tsx
"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimations";

export default function VisionSection() {
    const visionPillars = [
        {
            icon: "🌅",
            title: "A Connected Tharaka",
            description: "Where every community is accessible through modern infrastructure and digital connectivity",
            gradient: "from-orange-400 to-red-500",
            features: ["All-weather roads", "Digital access", "Market connectivity"]
        },
        {
            icon: "💎",
            title: "A Prosperous Tharaka",
            description: "Where every youth has economic opportunities and every family enjoys financial security",
            gradient: "from-purple-400 to-pink-500",
            features: ["Youth entrepreneurship", "Job creation", "Economic growth"]
        },
        {
            icon: "🌊",
            title: "A Healthy Tharaka",
            description: "Where clean water is a right, not a privilege, and healthcare reaches every doorstep",
            gradient: "from-cyan-400 to-blue-500",
            features: ["Clean water access", "Quality healthcare", "Sanitation for all"]
        },
        {
            icon: "🎓",
            title: "An Educated Tharaka",
            description: "Where every child has access to quality education and skills for the future",
            gradient: "from-green-400 to-emerald-500",
            features: ["Modern schools", "Skills training", "Digital literacy"]
        },
        {
            icon: "🤝",
            title: "A United Tharaka",
            description: "Where community values thrive and every voice is heard in our development journey",
            gradient: "from-indigo-400 to-purple-500",
            features: ["Community unity", "Inclusive governance", "Cultural heritage"]
        },
        {
            icon: "🌱",
            title: "A Sustainable Tharaka",
            description: "Where development meets environmental stewardship for future generations",
            gradient: "from-teal-400 to-green-500",
            features: ["Green energy", "Conservation", "Sustainable agriculture"]
        }
    ];

    return (
        <section id="vision" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 overflow-hidden">
            {/* Background decorative elements */}
            {/*<div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>*/}
            {/*    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-40 transform -translate-y-1/2 translate-x-1/2"></div>*/}
            {/*    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40 transform translate-y-1/2 -translate-x-1/2"></div>*/}
            {/*    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>*/}
            {/*</div>*/}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Inspirational Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-16 px-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                The Future We Imagine
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6 break-words">
                                Our Vision
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-words">
                                A bold, inspiring vision for Tharaka Constituency - where innovation meets tradition,
                                and every dream finds the path to reality.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Main Vision Statement */}
                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-100 shadow-lg mb-16 mx-4 max-w-6xl mx-auto">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full translate-x-12 translate-y-12"></div>

                            <div className="relative text-center w-full">
                                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">✨</div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 break-words px-4">
                                    Our Vision for Tharaka
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 break-words px-2">
                                    To transform Tharaka Constituency into a model of sustainable development, where every resident enjoys quality life, economic opportunity, and community prosperity through innovative leadership and collective action.
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                                    {["People-Centered Development", "Transparent Governance", "Sustainable Solutions", "Community Partnership", "Measurable Progress"].map((principle, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-xs sm:text-sm font-medium shadow-sm break-words max-w-full"
                                        >
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                                            <span className="truncate">{principle}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/*/!* Vision Pillars Grid *!/*/}
                    <ScrollAnimation direction="up" delay={0.6}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4">
                            {visionPillars.map((pillar, index) => (
                                <ScrollAnimation key={index} direction="up" delay={0.8 + index * 0.1}>
                                    <div className="group relative w-full">
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                                        <div className="relative bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col w-full">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                {pillar.icon}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 break-words">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4 flex-grow break-words">
                                                {pillar.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-1 sm:space-y-2">
                                                {pillar.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                                                        <div className="w-1 h-1 bg-slate-300 rounded-full flex-shrink-0"></div>
                                                        <span className="break-words">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/*/!* Call to Action *!/*/}
                    <ScrollAnimation direction="up" delay={1.0}>
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="relative bg-gradient-to-r from-slate-800 to-purple-900 rounded-3xl p-6 md:p-8 lg:p-12 text-white overflow-hidden w-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                                <div className="relative text-center w-full">
                                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌟</div>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">Be Part of Our Vision</h3>
                                    <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
                                        Great visions become reality through collective effort. Join us in building the Tharaka of our dreams.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
                                        <Link
                                            href="/agenda"
                                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px] sm:min-w-[200px] text-sm sm:text-base"
                                        >
                                            <span className="text-lg sm:text-xl">📋</span>
                                            See Our Action Plan
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>

                                        <Link
                                            href="/volunteer"
                                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px] sm:min-w-[200px] text-sm sm:text-base"
                                        >
                                            <span className="text-lg sm:text-xl">🤝🏾</span>
                                            Join the Movement
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>

                                    <p className="text-purple-200 text-xs sm:text-sm mt-4 sm:mt-6">
                                        Together, we can turn vision into victory
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}