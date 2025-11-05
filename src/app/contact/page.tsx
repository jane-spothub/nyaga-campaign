// src/app/contact/page.tsx
"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
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
                                Get In Touch
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6 break-words">
                                Contact Us
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-words">
                                Reach out to the JM Nyaga campaign team. We&#39;re here to listen, assist, and work together for a better Tharaka.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
                        {/* Contact Information Cards */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-6 w-full">
                            {/* Campaign Office */}
                            <ScrollAnimation direction="left" delay={0.4}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaMapMarkerAlt className="text-blue-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Campaign Office</h3>
                                        </div>
                                        <p className="text-slate-600 mb-2 text-sm sm:text-base break-words">Tharaka Constituency Headquarters</p>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">Open Monday - Saturday, 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Phone */}
                            <ScrollAnimation direction="left" delay={0.6}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaPhone className="text-green-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Call Us</h3>
                                        </div>
                                        <a
                                            href="tel:+2547XXXXXXXX"
                                            className="text-base sm:text-lg text-slate-700 hover:text-green-600 transition-colors duration-200 block mb-1 break-all"
                                        >
                                            07XX XXX XXX
                                        </a>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">Available for urgent constituency matters</p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Email */}
                            <ScrollAnimation direction="left" delay={0.8}>
                                <div className="group relative w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FaEnvelope className="text-purple-500 text-lg sm:text-xl" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 break-words">Email Us</h3>
                                        </div>
                                        <a
                                            href="mailto:info@jmnyaga.co.ke"
                                            className="text-base sm:text-lg text-slate-700 hover:text-purple-600 transition-colors duration-200 block mb-1 break-all"
                                        >
                                            info@jmnyaga.co.ke
                                        </a>
                                        <p className="text-slate-500 text-xs sm:text-sm break-words">We respond within 24 hours</p>
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
                                                Send a Message
                                            </h2>
                                        </div>
                                    </ScrollAnimation>

                                    <form className="space-y-4 sm:space-y-6">
                                        <ScrollAnimation direction="up" delay={0.8}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="w-full">
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                        placeholder="Enter your first name"
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                        placeholder="Enter your last name"
                                                    />
                                                </div>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.0}>
                                            <div className="w-full">
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Email Address *
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
                                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Subject *
                                                </label>
                                                <select
                                                    id="subject"
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                                >
                                                    <option value="">Select a topic</option>
                                                    <option value="constituency-issue">Constituency Issue</option>
                                                    <option value="campaign-volunteer">Volunteer Opportunity</option>
                                                    <option value="event-invitation">Event Invitation</option>
                                                    <option value="general-inquiry">General Inquiry</option>
                                                    <option value="support">Campaign Support</option>
                                                </select>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.3}>
                                            <div className="w-full">
                                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                                                    placeholder="Tell us how we can help you..."
                                                ></textarea>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.4}>
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                                            >
                                                <FaPaperPlane className="text-sm sm:text-lg" />
                                                Send Message
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </ScrollAnimation>
                                    </form>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Social Media & Follow Section */}
                    <ScrollAnimation direction="up" delay={0.8}>
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden w-full">
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12"></div>

                                <div className="relative text-center w-full">
                                    <ScrollAnimation direction="up" delay={1.0}>
                                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">Follow Our Journey</h2>
                                    </ScrollAnimation>
                                    <ScrollAnimation direction="up" delay={1.1}>
                                        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
                                            Stay connected with real-time updates, events, and community initiatives.
                                        </p>
                                    </ScrollAnimation>

                                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                        {[
                                            { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
                                            { icon: FaTwitter, name: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
                                            { icon: FaInstagram, name: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' },
                                            { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' }
                                        ].map((social, index) => (
                                            <ScrollAnimation key={index} direction="up" delay={1.2 + index * 0.1}>
                                                <a
                                                    href="#"
                                                    className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 ${social.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base flex-shrink-0`}
                                                >
                                                    <social.icon className="text-lg sm:text-xl" />
                                                    <span className="hidden sm:inline">{social.name}</span>
                                                    <span className="sm:hidden">{social.name === 'Facebook' ? 'FB' : social.name === 'Twitter' ? 'TW' : social.name === 'Instagram' ? 'IG' : 'WA'}</span>
                                                </a>
                                            </ScrollAnimation>
                                        ))}
                                    </div>

                                    <ScrollAnimation direction="up" delay={1.6}>
                                        <p className="text-blue-200 text-xs sm:text-sm break-words">
                                            Join thousands of Tharaka residents staying informed and engaged
                                        </p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Quick Action Links */}
                    <ScrollAnimation direction="up" delay={1.0}>
                        <div className="mt-8 sm:mt-12 text-center px-4">
                            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Looking for other ways to get involved?</p>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {[
                                    { href: "/volunteer", label: "Volunteer Program", icon: "🤝" },
                                    { href: "/events", label: "Upcoming Events", icon: "📅" },
                                    { href: "/donate", label: "Support Campaign", icon: "❤️" }
                                ].map((link, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={1.2 + index * 0.1}>
                                        <Link
                                            href={link.href}
                                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md text-sm sm:text-base flex-shrink-0"
                                        >
                                            {link.icon} {link.label}
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