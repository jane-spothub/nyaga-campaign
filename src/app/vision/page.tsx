// src/components/VisionSection.tsx
"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimations";

export default function VisionSection() {
    const visionPillars = [
        {
            icon: "🎓",
            title: "An Educated & Skilled Tharaka",
            description: "Where every mind is illuminated with digital literacy and practical skills for self-reliance",
            gradient: "from-blue-500 to-cyan-500",
            features: ["Digital literacy programs", "Vocational training", "Job-ready skills development"]
        },
        {
            icon: "💼",
            title: "A Wealth-Creating Tharaka",
            description: "Where entrepreneurship thrives and sustainable jobs replace dependency on handouts",
            gradient: "from-green-500 to-emerald-500",
            features: ["Youth incubation hub", "Value-added agriculture", "Local enterprise support"]
        },
        {
            icon: "💧",
            title: "A Water-Secure Tharaka",
            description: "Where clean water flows freely as a fundamental right, not a distant privilege",
            gradient: "from-cyan-500 to-blue-500",
            features: ["Water Security 2029", "Reliable water sources", "Modern purification systems"]
        },
        {
            icon: "👑",
            title: "A Dignified Tharaka",
            description: "Where human capital is our greatest asset and every talent is nurtured to excellence",
            gradient: "from-purple-500 to-pink-500",
            features: ["Mentorship programs", "Skills enhancement", "Community-driven development"]
        },
        {
            icon: "🏥",
            title: "A Healthy Tharaka",
            description: "Where quality healthcare is accessible and wellness is a community priority",
            gradient: "from-red-500 to-orange-500",
            features: ["Modernized healthcare", "Equitable access", "Professional medical services"]
        },
        {
            icon: "⚡",
            title: "A Connected Tharaka",
            description: "Where power and infrastructure unite communities and drive economic growth",
            gradient: "from-yellow-500 to-orange-500",
            features: ["Reliable electricity", "All-weather roads", "Digital connectivity"]
        },
        {
            icon: "🌱",
            title: "A Food-Secure Tharaka",
            description: "Where agriculture transforms from subsistence to commercial prosperity",
            gradient: "from-emerald-500 to-green-500",
            features: ["Commercial farming", "Market linkages", "Climate-resilient crops"]
        }
    ];

    return (
        <section id="vision" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Inspirational Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-16 px-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                The Seventh Chance - Rising from the Dust
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 break-words">
                                Our Vision for Tharaka
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed break-words">
                                A revolutionary vision to end the bondage of poverty through strategic planning, collaborative action,
                                and fighting the culture of handouts. This is our moment to rise from the dust and build lasting prosperity.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Main Vision Statement */}
                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-100 shadow-lg mb-16 mx-4 max-w-6xl mx-auto">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full translate-x-12 translate-y-12"></div>

                            <div className="relative text-center w-full">
                                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🌟</div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 break-words px-4">
                                    From Dependency to Self-Reliance
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 break-words px-2">
                                    We envision a Tharaka where temporary handouts are replaced by permanent solutions,
                                    where strategic planning drives development, and where every citizen becomes an architect
                                    of their own prosperity through dignity, hard work, and collaboration.
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                                    {["Strategic Planning", "Data-Driven Decisions", "Community Collaboration", "Fighting Handouts", "Sustainable Development", "Human Dignity"].map((principle, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-white border border-blue-100 rounded-full text-blue-700 text-xs sm:text-sm font-medium shadow-sm break-words max-w-full"
                                        >
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                                            <span className="truncate">{principle}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Vision Pillars Grid */}
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

                    {/* Revolutionary Promise */}
                    <ScrollAnimation direction="up" delay={0.8}>
                        <div className="max-w-5xl mx-auto mb-16 px-4">
                            <div className="relative bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 translate-y-16"></div>

                                <div className="relative text-center">
                                    <div className="text-4xl mb-4">🕊️</div>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Revolutionary Promise</h3>
                                    <p className="text-lg sm:text-xl text-blue-100 mb-6 leading-relaxed">
                                        <strong>Ending the Bondage of Poverty</strong> through planning, collaboration, and fighting handouts.
                                        We reject temporary fixes and embrace permanent prosperity built on dignity, hard work, and strategic investment.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm sm:text-base">
                                        <div className="bg-white/10 rounded-xl p-4">
                                            <div className="text-2xl mb-2">📊</div>
                                            <div className="font-semibold">Data-Driven Approach</div>
                                            <div className="text-blue-200 text-sm mt-1">Policies based on facts, not guesswork</div>
                                        </div>
                                        <div className="bg-white/10 rounded-xl p-4">
                                            <div className="text-2xl mb-2">🤲</div>
                                            <div className="font-semibold">Community First</div>
                                            <div className="text-blue-200 text-sm mt-1">Decisions forged through dialogue</div>
                                        </div>
                                        <div className="bg-white/10 rounded-xl p-4">
                                            <div className="text-2xl mb-2">⚖️</div>
                                            <div className="font-semibold">Strict Accountability</div>
                                            <div className="text-blue-200 text-sm mt-1">Every shilling documented and justified</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Call to Action */}
                    <ScrollAnimation direction="up" delay={1.0}>
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="relative bg-gradient-to-r from-slate-800 to-purple-900 rounded-3xl p-6 md:p-8 lg:p-12 text-white overflow-hidden w-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                                <div className="relative text-center w-full">
                                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👑</div>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">Join the Seventh Chance Revolution</h3>
                                    <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
                                        This is not just another election - it&#39;s our seventh chance to rewrite history.
                                        Join JM. Nyaga in building a Tharaka where work remains dignified and hard work is rewarded.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
                                        <Link
                                            href="/agenda"
                                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px] sm:min-w-[200px] text-sm sm:text-base"
                                        >
                                            <span className="text-lg sm:text-xl">📋</span>
                                            See Our 7-Point Agenda
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>

                                        <Link
                                            href="/volunteer"
                                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px] sm:min-w-[200px] text-sm sm:text-base"
                                        >
                                            <span className="text-lg sm:text-xl">🤝</span>
                                            Rise With Us
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>

                                    <p className="text-purple-200 text-xs sm:text-sm mt-4 sm:mt-6">
                                        &#34;Our greatest glory is not in never falling but in rising every time we fall.&#34; - Nelson Mandela
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