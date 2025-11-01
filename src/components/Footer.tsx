// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';
import "../styles/styles.css"
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Vision", href: "/vision" },
        { name: "Agenda", href: "/agenda" },
        { name: "Contact", href: "/contact" }
    ];

    const socialLinks = [
        { icon: FaFacebook, href: "#", label: "Facebook" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaWhatsapp, href: "#", label: "WhatsApp" }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">JM</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    JM Nyaga
                                </h3>
                                <p className="text-sm text-blue-200">Tharaka Constituency</p>
                            </div>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed mb-4">
                            Dedicated to serving the people of Tharaka with transparency, accountability,
                            and development-focused leadership.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-blue-200">
                            <FaHeart className="text-red-400 animate-pulse" />
                            <span>For the People, With the People</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></div>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-blue-100 group">
                                <div className="w-8 h-8 bg-blue-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                    <FaMapMarkerAlt className="text-sm" />
                                </div>
                                <span className="text-sm">Tharaka Constituency</span>
                            </div>
                            <a
                                href="tel:+2547XXXXXXXX"
                                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors duration-200 group"
                            >
                                <div className="w-8 h-8 bg-blue-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                    <FaPhone className="text-sm" />
                                </div>
                                <span className="text-sm">07XX XXX XXX</span>
                            </a>
                            <a
                                href="mailto:info@jmnyaga.co.ke"
                                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors duration-200 group break-all"
                            >
                                <div className="w-8 h-8 bg-blue-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                    <FaEnvelope className="text-sm" />
                                </div>
                                <span className="text-sm">info@jmnyaga.co.ke</span>
                            </a>
                        </div>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
                        <p className="text-blue-100 text-sm mb-4">
                            Follow our journey and stay updated with campaign activities.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-white text-sm" />
                                </a>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <Link
                            href="/volunteer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span>🤝</span>
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800/50 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-blue-200 text-sm">
                                © {currentYear} Hon. Nyaga James Mutwiri. All rights reserved.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <div className="flex items-center gap-2 text-blue-200">
                                <span className="foot-note"><span>Built with</span><FaHeart className="text-red-400 animate-pulse text-xs" />
                                <span>for Tharaka</span>
                               </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button for Mobile */}
            <div className="fixed bottom-6 right-6 md:hidden">
                <a
                    href="https://wa.me/2547XXXXXXXX"
                    className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
                    aria-label="Contact via WhatsApp"
                >
                    <FaWhatsapp className="text-white text-xl" />
                </a>
            </div>
        </footer>
    );
}