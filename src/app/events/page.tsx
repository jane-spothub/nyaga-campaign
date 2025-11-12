// src/app/events/page.tsx
"use client";

import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaExclamationTriangle, FaPlus, FaBell } from 'react-icons/fa';
import ScrollAnimation from "@/components/ScrollAnimations";

export default function Events() {
    const upcomingEvents = []; // Empty array for no events

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-24 pb-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Enhanced Header */}
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className="text-center mb-12 sm:mb-16 px-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                Community Engagement
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-orange-700 bg-clip-text text-transparent mb-6 break-words">
                                Upcoming Events
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed break-words">
                                Join JM Nyaga at community events, town halls, and development initiatives across Tharaka Constituency.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Events Status Card */}
                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
                            <div className="bg-gradient-to-r from-slate-800 to-orange-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12"></div>

                                <div className="relative text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
                                            <FaCalendarAlt className="text-white text-2xl sm:text-3xl" />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 break-words">
                                        Event Schedule Coming Soon
                                    </h2>
                                    <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
                                        We&#39;re currently planning exciting community events and town hall meetings. Check back soon for our upcoming schedule!
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                        {[
                                            { icon: "🗣️", label: "Town Halls", description: "Community discussions" },
                                            { icon: "🏗️", label: "Development Tours", description: "Project inspections" },
                                            { icon: "🎉", label: "Community Events", description: "Public gatherings" }
                                        ].map((item, index) => (
                                            <div key={index} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                                <div className="text-2xl mb-2">{item.icon}</div>
                                                <div className="font-semibold text-white mb-1">{item.label}</div>
                                                <div className="text-orange-200 text-sm">{item.description}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                                        {/*<Link*/}
                                        {/*    href="/contact"*/}
                                        {/*    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"*/}
                                        {/*>*/}
                                        {/*    <FaPlus className="text-sm sm:text-lg" />*/}
                                        {/*    Suggest an Event*/}
                                        {/*</Link>*/}
                                        <button className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                                            <FaBell className="text-sm sm:text-lg" />
                                            Get Notified
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Empty State */}
                    <ScrollAnimation direction="up" delay={0.6}>
                        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center">
                                        <FaExclamationTriangle className="text-slate-400 text-2xl sm:text-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 break-words">
                                    No Upcoming Events Scheduled
                                </h3>
                                <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base break-words">
                                    We&#39;re currently in the planning phase for our community engagement events. New events will be posted here as soon as they&#39;re scheduled.
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                                        <h4 className="font-semibold text-slate-800 mb-3 sm:mb-4 text-sm sm:text-base">What to Expect:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                                            {[
                                                { icon: "🏘️", text: "Community Town Halls" },
                                                { icon: "🛣️", text: "Development Project Tours" },
                                                { icon: "👥", text: "Public Consultations" },
                                                { icon: "🎯", text: "Campaign Rallies" }
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <span className="text-lg">{item.icon}</span>
                                                    <span className="text-slate-600 text-sm sm:text-base">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Event Types Preview */}
                    <ScrollAnimation direction="up" delay={0.8}>
                        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
                            <div className="text-center mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 break-words">
                                    Types of Events We Host
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base break-words">
                                    When scheduled, you can expect these types of community engagements
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {[
                                    {
                                        icon: "🗣️",
                                        title: "Town Hall Meetings",
                                        description: "Open forums for community discussions and feedback",
                                        color: "from-blue-500 to-cyan-500",
                                        features: ["Q&A Sessions", "Policy Discussions", "Community Input"]
                                    },
                                    {
                                        icon: "🏗️",
                                        title: "Development Tours",
                                        description: "Site visits to ongoing and completed projects",
                                        color: "from-green-500 to-emerald-500",
                                        features: ["Project Updates", "Progress Reviews", "Community Inspection"]
                                    },
                                    {
                                        icon: "👥",
                                        title: "Community Dialogues",
                                        description: "Focused discussions on specific constituency issues",
                                        color: "from-purple-500 to-pink-500",
                                        features: ["Issue Resolution", "Stakeholder Meetings", "Solution Planning"]
                                    },
                                    {
                                        icon: "🎓",
                                        title: "Youth Forums",
                                        description: "Engagement platforms for young constituents",
                                        color: "from-orange-500 to-red-500",
                                        features: ["Youth Empowerment", "Skill Development", "Opportunity Creation"]
                                    },
                                    {
                                        icon: "🏘️",
                                        title: "Ward Meetings",
                                        description: "Localized meetings in each ward of Tharaka",
                                        color: "from-indigo-500 to-purple-500",
                                        features: ["Ward-Specific Issues", "Local Leadership", "Grassroots Engagement"]
                                    },
                                    {
                                        icon: "🌱",
                                        title: "Development Launch",
                                        description: "Commissioning of new projects and initiatives",
                                        color: "from-teal-500 to-green-500",
                                        features: ["Project Launch", "Community Celebration", "Progress Marking"]
                                    }
                                ].map((eventType, index) => (
                                    <ScrollAnimation key={index} direction="up" delay={1.0 + index * 0.1}>
                                        <div className="group relative">
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${eventType.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>
                                            <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${eventType.color} rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                                    {eventType.icon}
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 break-words">
                                                    {eventType.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed break-words">
                                                    {eventType.description}
                                                </p>
                                                <div className="space-y-1 sm:space-y-2">
                                                    {eventType.features.map((feature, featureIndex) => (
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
                        </div>
                    </ScrollAnimation>

                    {/* Call to Action */}
                    <ScrollAnimation direction="up" delay={1.2}>
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-slate-200 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 break-words">
                                    Want to Stay Updated?
                                </h3>
                                <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base break-words">
                                    Be the first to know when new events are scheduled in Tharaka Constituency.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                                    >
                                        <FaBell className="text-sm sm:text-lg" />
                                        Notify Me About Events
                                    </Link>
                                    <Link
                                        href="/volunteer"
                                        className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md text-sm sm:text-base"
                                    >
                                        <FaUsers className="text-sm sm:text-lg" />
                                        Volunteer at Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}