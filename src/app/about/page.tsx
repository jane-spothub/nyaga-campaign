// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
                            About The Candidate
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
                            JM Nyaga
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Dedicated public servant with over 15 years of experience, committed to transforming
                            <span className="font-semibold text-blue-600"> Tharaka Constituency</span> through innovative leadership and community-driven development.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start mb-16">
                        {/* Image Section - Enhanced */}
                        <div className="xl:col-span-1">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition duration-500">
                                    <Image
                                        src="/JMNyagapic.png"
                                        alt="JM Nyaga - Tharaka MP Candidate"
                                        width={500}
                                        height={700}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-2xl font-bold text-blue-600">15+</div>
                                    <div className="text-sm text-slate-500">Years Service</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-2xl font-bold text-green-600">100+</div>
                                    <div className="text-sm text-slate-500">Projects</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                                    <div className="text-sm text-slate-500">For Tharaka</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Sections - Enhanced */}
                        <div className="xl:col-span-2 space-y-8">
                            {/* Background Card */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                            <span className="text-2xl">📚</span>
                                        </div>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                                            Background & Experience
                                        </h2>
                                    </div>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        Hon. Nyaga James Muturi is a lifelong resident of Tharaka Constituency,
                                        deeply rooted in the community's values and aspirations. With over 15 years
                                        of dedicated public service, he has consistently championed development-focused
                                        leadership that prioritizes tangible results and community empowerment.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Facts - Enhanced */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Key Focus Areas
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Road Infrastructure', 'Water Access', 'Youth Employment', 'Healthcare', 'Education'].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-500 text-sm font-bold">
                                                    {index + 1}
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Core Values
                                    </h3>
                                    <ul className="space-y-3">
                                        {['Transparency', 'Accountability', 'Community First', 'Sustainable Development', 'Measurable Results'].map((value, index) => (
                                            <li key={index} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mission Statement */}
                            <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                                <div className="relative">
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="text-3xl">🎯</span>
                                        Our Mission
                                    </h2>
                                    <p className="text-lg text-blue-100 leading-relaxed">
                                        To deliver transparent, accountable, and development-focused leadership that creates
                                        sustainable solutions for Tharaka Constituency. Through strategic planning, hard work,
                                        and community collaboration, we're building a future where every resident has access
                                        to quality infrastructure, economic opportunities, and essential services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Call to Action */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                    Join Our Movement
                                </h3>
                                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                                    Together, we can build a brighter future for Tharaka Constituency.
                                    Your involvement is crucial to our success.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/volunteer"
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
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
                                        Support Campaign
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>

                                <p className="text-slate-500 text-sm mt-6">
                                    Every contribution brings us closer to a better Tharaka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}