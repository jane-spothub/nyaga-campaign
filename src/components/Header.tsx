// Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 lg:px-8">

            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center text-[var(--color-text)]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">JM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-light)] transition-colors">
                                JM Nyaga
                            </span>
                            <span className="text-xs text-[var(--color-text-muted)] -mt-1">
                                Tharaka Constituency
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        <Link href="/" className="px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-glass)] transition-all duration-200">
                            Home
                        </Link>
                        <Link href="/about" className="px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-glass)] transition-all duration-200">
                            About
                        </Link>
                        <Link href="/vision" className="px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-glass)] transition-all duration-200">
                            Vision
                        </Link>
                        <Link href="/contact" className="px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-glass)] transition-all duration-200">
                            Contact
                        </Link>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                            <Link
                                href="/volunteer"
                                className="px-4 py-2 rounded-lg font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Volunteer
                            </Link>
                            <Link
                                href="/donate"
                                className="px-4 py-2 rounded-lg font-semibold bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-light)] transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1"
                            >
                                <span>❤️</span>
                                <span>Donate</span>
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            className="block text-[var(--color-text)] focus:outline-none p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl p-4 space-y-2">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200">Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200">About</Link>
                        <Link href="/vision" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200">Vision</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200">Contact</Link>

                        <div className="pt-2 border-t border-gray-200 space-y-2">
                            <Link href="/volunteer" onClick={() => setIsOpen(false)} className="block text-center bg-[var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-200">
                                Volunteer
                            </Link>
                            <Link href="/donate" onClick={() => setIsOpen(false)} className="block text-center bg-[var(--color-secondary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--color-secondary-light)] transition-all duration-200 flex items-center justify-center space-x-2">
                                <span>🤍️</span>
                                <span>Donate Now</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
            </div>
        </header>
    );
}