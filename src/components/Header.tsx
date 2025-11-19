// Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking on a link
    const handleLinkClick = (name: string) => {
        setActiveTab(name);
        setIsOpen(false);
    };

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const navItems = [
        {
            name: "Home",
            href: "/",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            description: "Welcome page"
        },
        {
            name: "About",
            href: "/about",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            description: "Know JM Nyaga"
        },
        {
            name: "Vision",
            href: "/vision",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            description: "Our future vision"
        },
        {
            name: "Agenda",
            href: "/agenda",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            description: "Development plan"
        },
        {
            name: "Events",
            href: "/events",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            description: "Community engagements"
        },
        {
            name: "Contact",
            href: "/contact",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            description: "Get in touch"
        }
    ];

    const actionItems = [
        {
            name: "Volunteer",
            href: "/volunteer",
            icon: "🤝🏾",
            color: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
            bgColor: "bg-gradient-to-r from-blue-600 to-blue-700"
        },
        {
            name: "Donate",
            href: "/donate",
            icon: "❤️",
            color: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
            bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
        }
    ];

    return (
        <>
            <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/60'
                    : 'bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-xl border-b border-white/20'
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3 sm:py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                            onClick={() => setActiveTab("Home")}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3">
                                    <span className="text-white font-bold text-sm">JM</span>
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            </div>
                            <div className="flex flex-col">
                                {/*<span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${*/}
                                {/*    scrolled ? 'text-blue-600 group-hover:text-blue-700' : 'text-white group-hover:text-yellow-200'*/}
                                {/*}`}>*/}
                                {/*    JM Nyaga*/}
                                {/*</span>*/}
                                <span className={`text-xs transition-colors duration-300 ${
                                    scrolled ? 'text-slate-600' : 'text-blue-200'
                                }`}>
                                    Tharaka Constituency
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation - IMPROVED VISIBLE TABS */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveTab(item.name)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 relative group ${
                                        activeTab === item.name
                                            ? 'bg-white/50 text-blue-600 shadow-2xl shadow-blue-500/30 transform scale-105'
                                            : scrolled
                                                ? 'text-black hover:text-blue-600  hover:shadow-lg'
                                                : 'text-black hover:text-blue-600  hover:shadow-2xl'
                                    }`}
                                >
                                    {/* Background for non-scrolled state */}
                                    {!scrolled && activeTab !== item.name && (
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl group-hover:bg-white group-hover:backdrop-blur-0 transition-all duration-300"></div>
                                    )}

                                    <div className={`transition-transform duration-300 relative z-10 ${
                                        activeTab === item.name
                                            ? 'scale-110 text-blue-600'
                                            : 'text- grblackoucurrentp-hover:scale-110'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <span className="whitespace-nowrap relative z-10">{item.name}</span>

                                    {/* Active indicator */}
                                    {activeTab === item.name && (
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    )}

                                    {/* Hover gradient border */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                                    <div className="absolute inset-[2px] rounded-2xl bg-white -z-10"></div>
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            {actionItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group relative px-6 py-3 rounded-2xl font-bold bg-orange-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${item.color} shadow-lg`}
                                >
                                    <div className="flex items-center gap-2 relative z-10">
                                        <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
                                scrolled
                                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                    : 'bg-white/20 hover:bg-white/30 text-white'
                            }`}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                }`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Side Menu Overlay */}
            <div className={`
                fixed inset-0 z-50 transition-all duration-500 ease-in-out
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm transition-opacity duration-500 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Side Menu Panel */}
                <div className={`
                    absolute top-0 right-0 h-full w-80 sm:w-96 max-w-full bg-white shadow-2xl
                    transform transition-transform duration-500 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    flex flex-col
                `}>
                    {/* Header Section - Fixed */}
                    <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-900 to-purple-900 text-white flex-shrink-0">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 group"
                                onClick={() => handleLinkClick("Home")}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                                    <span className="text-white font-bold text-lg">JM</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-white">JM Nyaga</span>
                                    <span className="text-sm text-blue-200">Tharaka Constituency</span>
                                </div>
                            </Link>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-blue-200">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span>07XX XXX XXX</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span>Tharaka Constituency</span>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto">
                        {/* Navigation Links */}
                        <nav className="p-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleLinkClick(item.name)}
                                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group border-2 ${
                                        activeTab === item.name
                                            ? 'bg-blue-50 border-blue-200 shadow-lg'
                                            : 'border-transparent hover:border-blue-200 hover:bg-blue-50'
                                    }`}
                                >
                                    <div className={`p-2 rounded-xl transition-all duration-300 ${
                                        activeTab === item.name
                                            ? 'bg-blue-500 text-white shadow-lg'
                                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-500 group-hover:text-white'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-semibold transition-colors truncate ${
                                            activeTab === item.name ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'
                                        }`}>
                                            {item.name}
                                        </div>
                                        <div className="text-sm text-slate-500 group-hover:text-slate-600 truncate">
                                            {item.description}
                                        </div>
                                    </div>
                                    <span className={`text-slate-400 transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0 ${
                                        activeTab === item.name ? 'text-blue-500' : 'group-hover:text-blue-500'
                                    }`}>
                                        →
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Action Buttons */}
                        <div className="p-6 border-t border-slate-200 space-y-3">
                            {actionItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleLinkClick(item.name)}
                                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${item.color} ${item.bgColor}`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Footer Section */}
                        <div className="p-6 border-t border-slate-200 bg-slate-50">
                            <div className="text-center text-sm text-slate-600">
                                <p className="font-semibold text-slate-800">For the People, With the People</p>
                                <p className="text-xs mt-2">© {new Date().getFullYear()} JM Nyaga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prevent body scroll when menu is open */}
            <style jsx global>{`
                body {
                    overflow: ${isOpen ? 'hidden' : 'auto'};
                }
            `}</style>
        </>
    );
}