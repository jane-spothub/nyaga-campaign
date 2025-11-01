// Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking on a link
    const handleLinkClick = () => {
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
        { name: "Home", href: "/", icon: "🏠", description: "Welcome page" },
        { name: "About", href: "/about", icon: "👤", description: "Know JM Nyaga" },
        { name: "Vision", href: "/vision", icon: "🎯", description: "Our future vision" },
        { name: "Agenda", href: "/agenda", icon: "📋", description: "Development plan" },
        { name: "Contact", href: "/contact", icon: "📞", description: "Get in touch" }
    ];

    const actionItems = [
        { name: "Volunteer", href: "/volunteer", icon: "🤝", color: "from-blue-500 to-cyan-500" },
        { name: "Donate", href: "/donate", icon: "❤️", color: "from-orange-500 to-red-500" }
    ];

    return (
        <>
            <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
                    : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80'
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                                <span className="text-white font-bold text-sm">JM</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                                    JM Nyaga
                                </span>
                                <span className="text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                                    Tharaka Constituency
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            {actionItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                                }`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
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
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isOpen ? 'opacity-30' : 'opacity-0'
                    }`}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Side Menu Panel */}
                <div className={`
                    absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl
                    transform transition-transform duration-500 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Header Section */}
                    <div className="p-6 border-b border-slate-200">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 group"
                                onClick={handleLinkClick}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                                    <span className="text-white font-bold text-lg">JM</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-slate-800">JM Nyaga</span>
                                    <span className="text-xs text-slate-600">Tharaka Constituency</span>
                                </div>
                            </Link>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500">📞</span>
                                <span>07XX XXX XXX</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">📍</span>
                                <span>Tharaka Constituency</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={handleLinkClick}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group border border-transparent hover:border-blue-200"
                            >
                                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </span>
                                <div className="flex-1">
                                    <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </div>
                                    <div className="text-sm text-slate-500 group-hover:text-slate-600">
                                        {item.description}
                                    </div>
                                </div>
                                <span className="text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1">
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
                                onClick={handleLinkClick}
                                className={`flex items-center justify-center gap-3 p-4 rounded-xl font-semibold text-white bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200">
                        <div className="text-center text-sm text-slate-500">
                            <p>For the People, With the People</p>
                            <p className="text-xs mt-1">© {new Date().getFullYear()} JM Nyaga</p>
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