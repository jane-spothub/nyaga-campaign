// src/app/vision/page.tsx
import Link from "next/link";

export default function Vision() {
    const visionPillars = [
        {
            icon: "🌅",
            title: "A Connected Tharaka",
            description: "Where every community is accessible through modern infrastructure and digital connectivity",
            gradient: "from-orange-400 to-red-500",
            features: ["All-weather roads", "Digital access", "Market connectivity"]
        },
        {
            icon: "💎",
            title: "A Prosperous Tharaka",
            description: "Where every youth has economic opportunities and every family enjoys financial security",
            gradient: "from-purple-400 to-pink-500",
            features: ["Youth entrepreneurship", "Job creation", "Economic growth"]
        },
        {
            icon: "🌊",
            title: "A Healthy Tharaka",
            description: "Where clean water is a right, not a privilege, and healthcare reaches every doorstep",
            gradient: "from-cyan-400 to-blue-500",
            features: ["Clean water access", "Quality healthcare", "Sanitation for all"]
        },
        {
            icon: "🎓",
            title: "An Educated Tharaka",
            description: "Where every child has access to quality education and skills for the future",
            gradient: "from-green-400 to-emerald-500",
            features: ["Modern schools", "Skills training", "Digital literacy"]
        },
        {
            icon: "🤝",
            title: "A United Tharaka",
            description: "Where community values thrive and every voice is heard in our development journey",
            gradient: "from-indigo-400 to-purple-500",
            features: ["Community unity", "Inclusive governance", "Cultural heritage"]
        },
        {
            icon: "🌱",
            title: "A Sustainable Tharaka",
            description: "Where development meets environmental stewardship for future generations",
            gradient: "from-teal-400 to-green-500",
            features: ["Green energy", "Conservation", "Sustainable agriculture"]
        }
    ];

    const visionStatement = {
        title: "Our Vision for Tharaka",
        statement: "To transform Tharaka Constituency into a model of sustainable development, where every resident enjoys quality life, economic opportunity, and community prosperity through innovative leadership and collective action.",
        principles: [
            "People-Centered Development",
            "Transparent Governance",
            "Sustainable Solutions",
            "Community Partnership",
            "Measurable Progress"
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 pt-24 pb-16">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Inspirational Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            The Future We Imagine
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
                            Our Vision
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            A bold, inspiring vision for Tharaka Constituency - where innovation meets tradition,
                            and every dream finds the path to reality.
                        </p>
                    </div>

                    {/* Main Vision Statement */}
                    <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-lg mb-16">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full translate-x-12 translate-y-12"></div>

                        <div className="relative text-center max-w-4xl mx-auto">
                            <div className="text-6xl mb-6">✨</div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                {visionStatement.title}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                                {visionStatement.statement}
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {visionStatement.principles.map((principle, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-sm"
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        {principle}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vision Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {visionPillars.map((pillar, index) => (
                            <div key={index} className="group relative">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                                <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                        {pillar.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                                        {pillar.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {pillar.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-500">
                                                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action - Vision Focused */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-r from-slate-800 to-purple-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12"></div>

                            <div className="relative text-center">
                                <div className="text-4xl mb-4">🌟</div>
                                <h3 className="text-3xl font-bold mb-4">Be Part of Our Vision</h3>
                                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                    Great visions become reality through collective effort. Join us in building the Tharaka of our dreams.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/agenda"
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                    >
                                        <span className="text-xl">📋</span>
                                        See Our Action Plan
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>

                                    <Link
                                        href="/volunteer"
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                    >
                                        <span className="text-xl">🤝</span>
                                        Join the Movement
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>

                                <p className="text-purple-200 text-sm mt-6">
                                    Together, we can turn vision into victory
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inspirational Quote */}
                    <div className="text-center mt-12">
                        <div className="inline-block max-w-2xl">
                            <div className="text-4xl mb-4">💫</div>
                            <p className="text-lg text-slate-600 italic">
                                "The future of Tharaka is not something we enter, but something we create.
                                And every great creation begins with a vision."
                            </p>
                            <p className="text-slate-500 text-sm mt-2 font-medium">
                                — JM Nyaga
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}