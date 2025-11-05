// src/components/AboutSection.tsx
"use client";

import ScrollAnimation from "@/components/ScrollAnimations";

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 transform -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-40 transform translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Enhanced Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-16 px-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                About The Candidate
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6 break-words">
                                JM Nyaga
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-words">
                                Dedicated public servant with over 15 years of experience, committed to transforming
                                <span className="font-semibold text-blue-600"> Tharaka Constituency</span> through innovative leadership and community-driven development.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 items-start px-4">
                        {/* Image Section */}
                        <ScrollAnimation direction="left" delay={0.4}>
                            <div className="xl:col-span-1 w-full">
                                <div className="relative group w-full">
                                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition duration-500 w-full">
                                        <img
                                            src="/hero2-bg.png"
                                            alt="JM Nyaga - Tharaka MP Candidate"
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <ScrollAnimation direction="up" delay={0.6}>
                                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 w-full">
                                        {[
                                            { value: "15+", label: "Years Service", color: "text-blue-600" },
                                            { value: "100+", label: "Projects", color: "text-green-600" },
                                            { value: "24/7", label: "For Tharaka", color: "text-purple-600" }
                                        ].map((stat, index) => (
                                            <div key={index} className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-100 shadow-sm w-full">
                                                <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                                <div className="text-xs sm:text-sm text-slate-500 break-words">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </ScrollAnimation>

                        {/* Content Sections */}
                        <div className="xl:col-span-2 space-y-6 sm:space-y-8 w-full">
                            <ScrollAnimation direction="right" delay={0.4}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 sm:-inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl sm:text-2xl">📚</span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent break-words">
                                                Background & Experience
                                            </h2>
                                        </div>
                                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed break-words">
                                            Hon. Nyaga James Muturi is a lifelong resident of Tharaka Constituency,
                                            deeply rooted in the community&#39;s values and aspirations. With over 15 years
                                            of dedicated public service, he has consistently championed development-focused
                                            leadership that prioritizes tangible results and community empowerment.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border border-blue-100 w-full">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                            Key Focus Areas
                                        </h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {['Road Infrastructure', 'Water Access', 'Youth Employment', 'Healthcare', 'Education'].map((item, index) => (
                                                <li key={index} className="flex items-center gap-3 text-slate-700">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-lg flex items-center justify-center text-blue-500 text-xs sm:text-sm font-bold flex-shrink-0">
                                                        {index + 1}
                                                    </div>
                                                    <span className="break-words text-sm sm:text-base">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 border border-green-100 w-full">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                                            Core Values
                                        </h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {['Transparency', 'Accountability', 'Community First', 'Sustainable Development', 'Measurable Results'].map((value, index) => (
                                                <li key={index} className="flex items-center gap-3 text-slate-700">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                                    <span className="break-words text-sm sm:text-base">{value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.8}>
                                <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden w-full">
                                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12"></div>

                                    <div className="relative">
                                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                            <span className="text-2xl sm:text-3xl">🎯</span>
                                            Our Mission
                                        </h2>
                                        <p className="text-base sm:text-lg text-blue-100 leading-relaxed break-words">
                                            To deliver transparent, accountable, and development-focused leadership that creates
                                            sustainable solutions for Tharaka Constituency. Through strategic planning, hard work,
                                            and community collaboration, we&#39;re building a future where every resident has access
                                            to quality infrastructure, economic opportunities, and essential services.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}