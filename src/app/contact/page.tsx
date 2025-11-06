// src/app/contact/page.tsx
"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';
import ScrollAnimation from "@/components/ScrollAnimations";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 pb-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Enhanced Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-12 sm:mb-16 px-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                Your Voice Matters
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6 break-words">
                                Let's Build Tharaka Together
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-words">
                                I'm here to listen, collaborate, and work with you to end poverty through strategic planning and fighting handouts.
                                Your ideas and concerns drive our revolutionary agenda.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
                        {/* Contact Information Cards */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-6 w-full">
                            {/* Direct Access */}
                            <ScrollAnimation direction="left" delay={0.4}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaHandshake className="text-blue-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Direct Access</h3>
                                        </div>
                                        <p className="text-slate-600 mb-2 text-sm sm:text-base break-words">I believe in being accessible to every citizen</p>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">No barriers between leadership and the people</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Community Hotline */}
                            <ScrollAnimation direction="left" delay={0.6}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaPhone className="text-green-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Community Hotline</h3>
                                        </div>
                                        <a
                                            href="tel:+2547XXXXXXXX"
                                            className="text-base sm:text-lg text-slate-700 hover:text-green-600 transition-colors duration-200 block mb-1 break-all"
                                        >
                                            07XX XXX XXX
                                        </a>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">For urgent development matters and ideas</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Strategic Partnerships */}
                            <ScrollAnimation direction="left" delay={0.8}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaUsers className="text-purple-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Partnership Desk</h3>
                                        </div>
                                        <a
                                            href="mailto:partnerships@jmnyaga.co.ke"
                                            className="text-base sm:text-lg text-slate-700 hover:text-purple-600 transition-colors duration-200 block mb-1 break-all"
                                        >
                                            partnerships@jmnyaga.co.ke
                                        </a>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">For development partners and collaborators</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Data & Research */}
                            <ScrollAnimation direction="left" delay={1.0}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaChartLine className="text-orange-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Data & Research</h3>
                                        </div>
                                        <a
                                            href="mailto:data@jmnyaga.co.ke"
                                            className="text-base sm:text-lg text-slate-700 hover:text-orange-600 transition-colors duration-200 block mb-1 break-all"
                                        >
                                            data@jmnyaga.co.ke
                                        </a>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">Share data and research for better planning</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 w-full">
                            <ScrollAnimation direction="right" delay={0.4}>
                                <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-100 shadow-lg w-full">
                                    <ScrollAnimation direction="up" delay={0.6}>
                                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaPaperPlane className="text-white text-lg sm:text-xl" />
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent break-words">
                                                Share Your Vision With Me
                                            </h2>
                                        </div>
                                    </ScrollAnimation>

                                    <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <p className="text-blue-700 text-sm italic">
                                            "I believe real change comes from listening to you. Tell me about the Tharaka you want to see,
                                            and let's work together to make it happen through strategic planning and community collaboration."
                                        </p>
                                    </div>

                                    <form className="space-y-4 sm:space-y-6">
                                        <ScrollAnimation direction="up" delay={0.8}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="w-full">
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Your First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                        placeholder="How should I address you?"
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Your Location in Tharaka *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="location"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                        placeholder="Which area do you represent?"
                                                    />
                                                </div>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.0}>
                                            <div className="w-full">
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.1}>
                                            <div className="w-full">
                                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                    placeholder="07XX XXX XXX"
                                                />
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.2}>
                                            <div className="w-full">
                                                <label htmlFor="agendaArea" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Which Agenda 7 Area Matters Most to You? *
                                                </label>
                                                <select
                                                    id="agendaArea"
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                >
                                                    <option value="">Select your priority area</option>
                                                    <option value="education">Education: Lighting the Mind</option>
                                                    <option value="jobs">Jobs: Creating Wealth, Not Dependence</option>
                                                    <option value="water">Water: The Source of Life</option>
                                                    <option value="human-capital">Human Capital: Enhancing Our People</option>
                                                    <option value="healthcare">Healthcare: Investing in Wellness</option>
                                                    <option value="infrastructure">Power & Infrastructure: Connecting Tharaka</option>
                                                    <option value="agriculture">Agriculture: Feeding Our Future</option>
                                                    <option value="general">General Development Idea</option>
                                                </select>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.3}>
                                            <div className="w-full">
                                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Your Idea, Concern or Suggestion *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={5}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                                                    placeholder="How can we work together to end poverty and build sustainable development in your area? Share your specific ideas, challenges, or suggestions..."
                                                ></textarea>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.4}>
                                            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-green-600 text-sm">✓</span>
                                                </div>
                                                <p className="text-green-700 text-sm">
                                                    <strong>Commitment to Action:</strong> Every idea shared will be reviewed and considered in our data-driven planning process.
                                                </p>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.5}>
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base group"
                                            >
                                                <FaPaperPlane className="text-sm sm:text-lg" />
                                                Share Your Vision With Me
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </ScrollAnimation>
                                    </form>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Community Collaboration Section */}
                    <ScrollAnimation direction="up" delay={0.8}>
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden w-full">
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12"></div>

                                <div className="relative text-center w-full">
                                    <ScrollAnimation direction="up" delay={1.0}>
                                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">Join Our Revolutionary Movement</h2>
                                    </ScrollAnimation>
                                    <ScrollAnimation direction="up" delay={1.1}>
                                        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
                                            Stay connected with real progress updates, community meetings, and opportunities to shape Tharaka's future together.
                                        </p>
                                    </ScrollAnimation>

                                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                        {[
                                            { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700', desc: 'Live updates & community discussions' },
                                            { icon: FaTwitter, name: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600', desc: 'Real-time progress & announcements' },
                                            { icon: FaInstagram, name: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700', desc: 'Visual stories of our journey' },
                                            { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600', desc: 'Direct community alerts' }
                                        ].map((social, index) => (
                                            <ScrollAnimation key={index} direction="up" delay={1.2 + index * 0.1}>
                                                <div className="text-center">
                                                    <a
                                                        href="#"
                                                        className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 ${social.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base flex-shrink-0 mb-2`}
                                                    >
                                                        <social.icon className="text-lg sm:text-xl" />
                                                        <span className="hidden sm:inline">{social.name}</span>
                                                        <span className="sm:hidden">{social.name === 'Facebook' ? 'FB' : social.name === 'Twitter' ? 'TW' : social.name === 'Instagram' ? 'IG' : 'WA'}</span>
                                                    </a>
                                                    <p className="text-blue-200 text-xs hidden sm:block">{social.desc}</p>
                                                </div>
                                            </ScrollAnimation>
                                        ))}
                                    </div>

                                    <ScrollAnimation direction="up" delay={1.6}>
                                        <p className="text-blue-200 text-xs sm:text-sm break-words">
                                            "Together, we're building a Tharaka where every voice matters and every idea counts."
                                        </p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Quick Action Links */}
                    <ScrollAnimation direction="up" delay={1.0}>
                        <div className="mt-8 sm:mt-12 text-center px-4">
                            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Ready to be part of the Seventh Chance revolution?</p>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {[
                                    { href: "/volunteer", label: "Join Our Movement", icon: "🤝", desc: "Volunteer for change" },
                                    { href: "/agenda", label: "See Our 7-Point Plan", icon: "📋", desc: "Detailed agenda" },
                                    { href: "/donate", label: "Support Real Change", icon: "❤️", desc: "Fund development" },
                                    { href: "/events", label: "Community Meetings", icon: "📅", desc: "Join discussions" }
                                ].map((link, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={1.2 + index * 0.1}>
                                        <Link
                                            href={link.href}
                                            className="inline-flex flex-col items-center gap-1 px-4 sm:px-6 py-3 sm:py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md text-sm sm:text-base flex-shrink-0 min-w-[140px]"
                                        >
                                            <span className="text-lg sm:text-xl">{link.icon}</span>
                                            <span>{link.label}</span>
                                            <span className="text-xs text-slate-500 font-normal">{link.desc}</span>
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