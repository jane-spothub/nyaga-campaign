// src/app/agenda/page.tsx
import Link from "next/link";

export default function Agenda() {
    const developmentPillars = [
        {
            icon: "🏗️",
            title: "Infrastructure Development",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100",
            items: [
                "Upgrade 50km of feeder roads",
                "Improve market access roads",
                "Enhance public transportation",
                "Digital infrastructure expansion",
                "Bridge construction projects",
                "Street lighting installation"
            ]
        },
        {
            icon: "💧",
            title: "Water & Sanitation",
            color: "from-cyan-500 to-teal-500",
            bgColor: "bg-cyan-50",
            borderColor: "border-cyan-100",
            items: [
                "New borehole projects",
                "Water purification systems",
                "Irrigation schemes",
                "Sanitation facilities",
                "Water storage solutions",
                "Community water points"
            ]
        },
        {
            icon: "🚀",
            title: "Youth & Employment",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100",
            items: [
                "Skills development programs",
                "Entrepreneurship support",
                "Job placement initiatives",
                "Sports and talent development",
                "Digital skills training",
                "Business incubation"
            ]
        },
        {
            icon: "🏥",
            title: "Healthcare & Education",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-100",
            items: [
                "Health center upgrades",
                "School infrastructure",
                "Scholarship programs",
                "Vocational training",
                "Medical equipment",
                "Teacher support"
            ]
        }
    ];

    const timeline = [
        {
            phase: "First 100 Days",
            period: "Immediate Action",
            tasks: ["Road assessments", "Water project planning", "Youth program launch"],
            color: "bg-green-100 text-green-800 border-green-200",
            progress: "w-1/4"
        },
        {
            phase: "First Year",
            period: "Implementation Phase",
            tasks: ["Infrastructure projects", "Skills training", "Healthcare upgrades"],
            color: "bg-blue-100 text-blue-800 border-blue-200",
            progress: "w-2/4"
        },
        {
            phase: "Five Year Plan",
            period: "Sustainable Development",
            tasks: ["Economic growth", "Education excellence", "Community prosperity"],
            color: "bg-purple-100 text-purple-800 border-purple-200",
            progress: "w-full"
        }
    ];

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
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            Development Blueprint
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
                            Our Agenda
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive, actionable development plan for Tharaka Constituency with clear timelines,
                            measurable outcomes, and community-driven priorities.
                        </p>
                    </div>

                    {/* Development Pillars Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {developmentPillars.map((pillar, index) => (
                            <div key={index} className="group relative">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}></div>
                                <div className={`relative ${pillar.bgColor} rounded-xl p-6 border ${pillar.borderColor} shadow-sm hover:shadow-md transition-all duration-300`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-14 h-14 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center text-white text-2xl`}>
                                            {pillar.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800">{pillar.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {pillar.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Timeline Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-4">
                                Implementation Roadmap
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Strategic phases designed for maximum impact and sustainable growth
                            </p>
                        </div>

                        <div className="relative">
                            {/* Progress Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 transform -translate-x-1/2"></div>

                            <div className="space-y-8">
                                {timeline.map((phase, index) => (
                                    <div key={index} className="relative flex items-start gap-6 group">
                                        {/* Timeline Dot */}
                                        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.color.split(' ')[0].replace('bg-', '')}`}></div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1">
                                            <div className={`group relative rounded-2xl p-6 border-2 ${phase.color} bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}>
                                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                                    <h3 className="text-2xl font-bold text-slate-800">{phase.phase}</h3>
                                                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                                        {phase.period}
                                                    </span>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="mb-4">
                                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                                        <div className={`h-2 rounded-full bg-gradient-to-r ${phase.color.split(' ')[0].replace('bg-', '')} ${phase.progress} transition-all duration-1000`}></div>
                                                    </div>
                                                </div>

                                                <ul className="space-y-2">
                                                    {phase.tasks.map((task, taskIndex) => (
                                                        <li key={taskIndex} className="flex items-center gap-3 text-slate-600">
                                                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                                                            {task}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Key Metrics Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                value: "50km",
                                label: "Roads to Upgrade",
                                gradient: "from-orange-500 to-red-500",
                                icon: "🛣️"
                            },
                            {
                                value: "10+",
                                label: "Water Projects",
                                gradient: "from-cyan-500 to-blue-500",
                                icon: "💧"
                            },
                            {
                                value: "5,000+",
                                label: "Youth to Empower",
                                gradient: "from-purple-500 to-pink-500",
                                icon: "🚀"
                            },
                            {
                                value: "100%",
                                label: "Community Focus",
                                gradient: "from-green-500 to-emerald-500",
                                icon: "👥"
                            }
                        ].map((metric, index) => (
                            <div key={index} className="group text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                {/* Background Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                {/* Metric Icon */}
                                <div className="text-2xl mb-2">{metric.icon}</div>

                                {/* Value with Gradient Background */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${metric.gradient} rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Call to Action */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                            <div className="relative text-center">
                                <h3 className="text-3xl font-bold mb-4">Join Our Development Journey</h3>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Together, we can transform Tharaka Constituency into a model of sustainable development and community prosperity.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/volunteer"
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                    >
                                        <span className="text-xl">🤝</span>
                                        Become a Volunteer
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>

                                    <Link
                                        href="/donate"
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                    >
                                        <span className="text-xl">❤️</span>
                                        Support Our Agenda
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>

                                <p className="text-blue-200 text-sm mt-6">
                                    Every contribution brings us closer to our development goals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}