// src/app/donate/page.tsx
"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimations";

export default function Donate() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 pb-16">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                Invest in Tharaka&#39;s Future
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
                                Fund Real Change
                            </h1>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                Your investment helps us implement Agenda 7 - ending poverty through strategic planning,
                                fighting handouts, and building sustainable development in Tharaka Constituency.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Donation Options */}
                        <div className="space-y-6">
                            {/* Strategic Investment Options */}
                            <ScrollAnimation direction="left" delay={0.4}>
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                                <span className="text-2xl">🌱</span>
                                            </div>
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                                                Strategic Investment Options
                                            </h2>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                {
                                                    amount: "KSh 500",
                                                    desc: "Supports one youth skills training session",
                                                    impact: "1 youth empowered",
                                                    popular: false
                                                },
                                                {
                                                    amount: "KSh 1,000",
                                                    desc: "Funds water project community mobilization",
                                                    impact: "50 families reached",
                                                    popular: false
                                                },
                                                {
                                                    amount: "KSh 2,500",
                                                    desc: "Sponsors digital literacy equipment",
                                                    impact: "10 students trained",
                                                    popular: true
                                                },
                                                {
                                                    amount: "KSh 5,000",
                                                    desc: "Supports agricultural extension services",
                                                    impact: "25 farmers supported",
                                                    popular: false
                                                },
                                                {
                                                    amount: "KSh 10,000",
                                                    desc: "Major infrastructure planning initiative",
                                                    impact: "Community-wide impact",
                                                    popular: false
                                                }
                                            ].map((option, index) => (
                                                <ScrollAnimation key={index} direction="up" delay={0.6 + index * 0.1}>
                                                    <button
                                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                                                            option.popular
                                                                ? "border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg"
                                                                : "border-slate-200 hover:border-blue-400 hover:bg-blue-50"
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="font-semibold text-slate-800 text-lg">{option.amount}</div>
                                                            {option.popular && (
                                                                <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full font-medium">
                                                                    Most Impact
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="text-sm text-slate-600 mb-2">{option.desc}</div>
                                                        <div className="text-xs text-green-600 font-medium">{option.impact}</div>
                                                    </button>
                                                </ScrollAnimation>
                                            ))}

                                            {/* Custom Strategic Investment */}
                                            <ScrollAnimation direction="up" delay={1.0}>
                                                <div className="pt-4 border-t border-slate-100">
                                                    <div className="text-sm font-medium text-slate-700 mb-3">Custom Strategic Investment</div>
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            placeholder="Enter your investment amount (KSh)"
                                                            className="w-full p-4 rounded-xl border-2 border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                        />
                                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                                                            KSh
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-slate-500 mt-2">
                                                        Specify which Agenda 7 area you&#39;d like to support
                                                    </p>
                                                </div>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Payment Methods */}
                            <ScrollAnimation direction="left" delay={0.8}>
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                            <span className="text-2xl">💳</span>
                                            Secure Payment Methods
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { icon: "📱", name: "M-Pesa", desc: "Instant & Secure" },
                                                { icon: "🏦", name: "Bank Transfer", desc: "Direct & Trackable" }
                                            ].map((method, index) => (
                                                <ScrollAnimation key={index} direction="up" delay={1.0 + index * 0.1}>
                                                    <button className="p-4 rounded-xl border-2 border-slate-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 transform hover:scale-105 text-center">
                                                        <div className="text-2xl mb-2">{method.icon}</div>
                                                        <div className="font-semibold text-slate-800">{method.name}</div>
                                                        <div className="text-xs text-slate-500 mt-1">{method.desc}</div>
                                                    </button>
                                                </ScrollAnimation>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Impact Information */}
                        <div className="space-y-6">
                            {/* Why Your Investment Matters */}
                            <ScrollAnimation direction="right" delay={0.4}>
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                            <span className="text-2xl">🎯</span>
                                            Your Investment Creates Real Change
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Education Revolution",
                                                    desc: "Digital literacy programs and vocational training for self-reliance",
                                                    icon: "💡",
                                                    agenda: "Agenda 1"
                                                },
                                                {
                                                    title: "Wealth Creation",
                                                    desc: "Youth incubation hub and entrepreneurship support to fight dependency",
                                                    icon: "💼",
                                                    agenda: "Agenda 2"
                                                },
                                                {
                                                    title: "Water Security",
                                                    desc: "Boreholes and purification systems - from 12% to 50% access",
                                                    icon: "💧",
                                                    agenda: "Agenda 3"
                                                },
                                                {
                                                    title: "Human Capital",
                                                    desc: "Mentorship and skills training to enhance our greatest asset - our people",
                                                    icon: "👥",
                                                    agenda: "Agenda 4"
                                                },
                                                {
                                                    title: "Infrastructure",
                                                    desc: "Power connectivity and all-weather roads to connect Tharaka",
                                                    icon: "⚡",
                                                    agenda: "Agenda 6"
                                                }
                                            ].map((benefit, index) => (
                                                <ScrollAnimation key={index} direction="up" delay={0.6 + index * 0.1}>
                                                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                                                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0">
                                                            {benefit.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h4 className="font-semibold text-slate-800">{benefit.title}</h4>
                                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                                                    {benefit.agenda}
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-slate-600">{benefit.desc}</p>
                                                        </div>
                                                    </div>
                                                </ScrollAnimation>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* M-Pesa Instructions */}
                            <ScrollAnimation direction="right" delay={0.8}>
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-3">
                                            <span className="text-2xl">📱</span>
                                            Invest via M-Pesa
                                        </h4>
                                        <div className="space-y-3 text-slate-700">
                                            {[
                                                { step: "1", text: "Go to M-Pesa menu" },
                                                { step: "2", text: 'Select "Lipa Na M-Pesa"' },
                                                { step: "3", text: "Enter Paybill: 123456" },
                                                { step: "4", text: "Account: JMNYAGA" },
                                                { step: "5", text: "Enter your investment amount" }
                                            ].map((instruction, index) => (
                                                <ScrollAnimation key={index} direction="up" delay={1.0 + index * 0.1}>
                                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-100">
                                                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            {instruction.step}
                                                        </div>
                                                        <span>{instruction.text}</span>
                                                    </div>
                                                </ScrollAnimation>
                                            ))}
                                        </div>
                                        <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                                            <p className="text-sm text-green-700 font-medium text-center">
                                                💫 Every shilling is an investment in Tharaka&#39;s prosperity
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Accountability Promise */}
                            <ScrollAnimation direction="up" delay={1.2}>
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                            <span className="text-xl">📊</span>
                                            Our Accountability Promise
                                        </h4>
                                        <div className="space-y-2 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span>
                                                <span>Every shilling documented and publicly accounted for</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span>
                                                <span>Regular impact reports shared with all investors</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span>
                                                <span>Data-driven allocation to maximize community impact</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span>
                                                <span>Transparent tracking of all development projects</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Enhanced Call to Action */}
                    <ScrollAnimation direction="up" delay={1.4}>
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                                <div className="relative text-center">
                                    <h3 className="text-3xl font-bold mb-4">Invest in Tharaka&#39;s Seventh Chance</h3>
                                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                        Your strategic investment helps us implement Agenda 7 - ending poverty through
                                        planning, collaboration, and fighting handouts. Together, we&#39;re building permanent prosperity.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]">
                                            <span className="text-xl">💰</span>
                                            Invest in Change
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </button>

                                        <Link
                                            href="/agenda"
                                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                        >
                                            <span className="text-xl">📋</span>
                                            See Our 7-Point Plan
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>

                                    <div className="mt-6 p-4 bg-white/10 rounded-xl">
                                        <p className="text-blue-200 text-sm">
                                            <strong>Revolutionary Approach:</strong> We reject handouts and invest in sustainable development.
                                            Your contribution funds strategic planning, not temporary relief.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Alternative Support Options */}
                    <ScrollAnimation direction="up" delay={1.6}>
                        <div className="text-center mt-12">
                            <p className="text-slate-600 mb-6 text-lg">Other Ways to Support Our Revolution</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    {
                                        href: "/volunteer",
                                        label: "Join Our Movement",
                                        icon: "🤝",
                                        desc: "Volunteer your skills and time"
                                    },
                                    {
                                        href: "/contact",
                                        label: "Share Your Ideas",
                                        icon: "💡",
                                        desc: "Contribute to strategic planning"
                                    },
                                    {
                                        href: "/agenda",
                                        label: "Spread the Vision",
                                        icon: "📢",
                                        desc: "Help share Agenda 7"
                                    }
                                ].map((option, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={1.8 + index * 0.1}>
                                        <Link
                                            href={option.href}
                                            className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md min-w-[180px]"
                                        >
                                            <span className="text-2xl">{option.icon}</span>
                                            <span>{option.label}</span>
                                            <span className="text-xs text-slate-500 font-normal">{option.desc}</span>
                                        </Link>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}