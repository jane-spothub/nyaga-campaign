// src/app/volunteer/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimations";

export default function VolunteerPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        skills: "",
        availability: "",
        interests: []
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    const volunteerRoles = [
        {
            icon: "📢",
            title: "Community Mobilizer",
            description: "Engage with local communities and spread our development message",
            skills: ["Communication", "Networking", "Public Speaking"],
            time: "Flexible hours"
        },
        {
            icon: "📱",
            title: "Digital Volunteer",
            description: "Manage social media, create content, and help with online campaigns",
            skills: ["Social Media", "Content Creation", "Digital Literacy"],
            time: "Remote friendly"
        },
        {
            icon: "🎯",
            title: "Field Organizer",
            description: "Coordinate events, rallies, and community meetings in your area",
            skills: ["Organization", "Leadership", "Event Planning"],
            time: "Weekends & Evenings"
        },
        {
            icon: "🤝",
            title: "Canvassing Team",
            description: "Door-to-door outreach and voter education in your neighborhood",
            skills: ["Persuasion", "Local Knowledge", "Community Relations"],
            time: "Flexible schedule"
        },
        {
            icon: "📋",
            title: "Data & Research",
            description: "Help with data entry, research, and constituency mapping",
            skills: ["Computer Skills", "Research", "Attention to Detail"],
            time: "Remote options"
        },
        {
            icon: "🎨",
            title: "Creative Team",
            description: "Design materials, take photos, and create campaign content",
            skills: ["Design", "Photography", "Creativity"],
            time: "Project-based"
        }
    ];

    const benefits = [
        {
            icon: "🌟",
            title: "Make Real Impact",
            description: "Directly contribute to community development and positive change"
        },
        {
            icon: "📚",
            title: "Skill Development",
            description: "Gain valuable experience in leadership, communication, and organization"
        },
        {
            icon: "👥",
            title: "Build Networks",
            description: "Connect with like-minded individuals and community leaders"
        },
        {
            icon: "🎓",
            title: "Training Provided",
            description: "Receive comprehensive training and ongoing support"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 pb-16">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                Join Our Movement
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-orange-800 bg-clip-text text-transparent mb-6">
                                Become a Volunteer
                            </h1>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                Join thousands of dedicated Tharaka residents working together to create positive change.
                                Your time and skills can help build a better future for our constituency.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Volunteer Roles */}
                        <div>
                            <ScrollAnimation direction="left" delay={0.4}>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-700 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                                    <span className="text-3xl">🎯</span>
                                    Volunteer Opportunities
                                </h2>
                            </ScrollAnimation>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {volunteerRoles.map((role, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={0.6 + index * 0.1}>
                                        <div className="group relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                            <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl">
                                                        {role.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-800">{role.title}</h3>
                                                        <p className="text-sm text-slate-600 mt-1">{role.time}</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-700 mb-4">{role.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {role.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full border border-orange-100"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>

                        {/* Volunteer Benefits */}
                        <div>
                            <ScrollAnimation direction="right" delay={0.4}>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                                    <span className="text-3xl">✨</span>
                                    Why Volunteer With Us?
                                </h2>
                            </ScrollAnimation>

                            <div className="space-y-6 mb-8">
                                {benefits.map((benefit, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={0.6 + index * 0.1}>
                                        <div className="group relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                            <div className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl">
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-slate-800">{benefit.title}</h3>
                                                        <p className="text-slate-600 mt-1">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>

                            {/* Quick Stats */}
                            <ScrollAnimation direction="up" delay={1.0}>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: "500+", label: "Active Volunteers", color: "text-orange-600" },
                                        { value: "10+", label: "Wards Covered", color: "text-green-600" },
                                        { value: "50+", label: "Events Monthly", color: "text-purple-600" },
                                        { value: "24/7", label: "Support", color: "text-blue-600" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                            <div className="text-sm text-slate-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Volunteer Form */}
                    <ScrollAnimation direction="up" delay={0.8}>
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                                    <ScrollAnimation direction="up" delay={1.0}>
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-700 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
                                                <span className="text-3xl">📝</span>
                                                Join Our Volunteer Team
                                            </h2>
                                            <p className="text-lg text-slate-600">
                                                Fill out the form below and we&#39;ll contact you with opportunities that match your skills and interests.
                                            </p>
                                        </div>
                                    </ScrollAnimation>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <ScrollAnimation direction="up" delay={1.2}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        required
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Enter your first name"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        required
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Enter your last name"
                                                    />
                                                </div>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.3}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                                        Phone Number *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="07XX XXX XXX"
                                                    />
                                                </div>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.4}>
                                            <div>
                                                <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Your Location in Tharaka *
                                                </label>
                                                <select
                                                    id="location"
                                                    name="location"
                                                    required
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                >
                                                    <option value="">Select your area</option>
                                                    <option value="marimanti">Marimanti Ward</option>
                                                    <option value="ganga">Gatunga Ward</option>
                                                    <option value="chogoria">Chiakariga Ward</option>
                                                    <option value="mitheru">Nkondi Ward</option>
                                                    <option value="other">Mukothima Ward</option>
                                                </select>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.5}>
                                            <div>
                                                <label htmlFor="skills" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Skills & Experience
                                                </label>
                                                <textarea
                                                    id="skills"
                                                    name="skills"
                                                    rows={3}
                                                    value={formData.skills}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                                                    placeholder="Tell us about your skills, experience, or any special talents..."
                                                ></textarea>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.6}>
                                            <div>
                                                <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-2">
                                                    Availability *
                                                </label>
                                                <select
                                                    id="availability"
                                                    name="availability"
                                                    required
                                                    value={formData.availability}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                >
                                                    <option value="">Select your availability</option>
                                                    <option value="weekends">Weekends Only</option>
                                                    <option value="evenings">Evenings After Work</option>
                                                    <option value="flexible">Flexible - Any Time</option>
                                                    <option value="remote">Remote Work Only</option>
                                                    <option value="specific">Specific Days</option>
                                                </select>
                                            </div>
                                        </ScrollAnimation>

                                        <ScrollAnimation direction="up" delay={1.7}>
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                            >
                                                <span className="text-xl">🤝</span>
                                                Join as Volunteer
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </ScrollAnimation>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Enhanced Call to Action */}
                    <ScrollAnimation direction="up" delay={1.8}>
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-gradient-to-r from-slate-800 to-orange-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                                <div className="relative text-center">
                                    <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
                                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                                        Join our growing team of volunteers and be part of the movement that&#39;s transforming Tharaka Constituency.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Link
                                            href="/contact"
                                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                        >
                                            <span className="text-xl">📞</span>
                                            Contact Us First
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>

                                        <Link
                                            href="/events"
                                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                        >
                                            <span className="text-xl">📅</span>
                                            Upcoming Events
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>

                                    <p className="text-orange-200 text-sm mt-6">
                                        No experience necessary - we provide all the training you need!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}