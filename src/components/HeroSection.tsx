// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const missionSlides = [
        {
            id: 1,
            content: "Ending poverty through strategic planning, fighting handouts, and building sustainable prosperity in Tharaka.",
            emphasis: ["strategic planning", "fighting handouts", "sustainable prosperity"]
        },
        {
            id: 2,
            content: "Implementing Agenda 7: Education, Jobs, Water, Human Capital, Healthcare, Infrastructure, and Agriculture revolution.",
            emphasis: ["Agenda 7", "Education", "Jobs", "Water", "Human Capital"]
        },
        {
            id: 3,
            content: "Our seventh chance to rise from the dust - replacing dependency with development and handouts with dignity.",
            emphasis: ["seventh chance", "rise from the dust", "development", "dignity"]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % missionSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [missionSlides.length]);

    const getHighlightedText = (content: string, emphasis: string[]) => {
        let highlightedContent = content;
        emphasis.forEach(term => {
            const colors = ["text-orange-300", "text-blue-300", "text-emerald-300", "text-yellow-300", "text-purple-300", "text-cyan-300"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            highlightedContent = highlightedContent.replace(
                term,
                `<span class="${randomColor} font-semibold">${term}</span>`
            );
        });
        return highlightedContent;
    };

    return (
        <div style={{backgroundColor: "darkblue"}} className="min-h-screen bg-gradient-to-br from-slate-900  relative">
            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="text-center space-y-6 sm:space-y-8">
                            {/* Badge - Reduced padding and text on mobile */}
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-xl sm:shadow-2xl"
                            >
                                <div
                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"/>
                                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                                    The Seventh Chance Leader
                                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <div className="space-y-4 sm:space-y-6">
                                <motion.h1
                                    initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.2}}
                                    className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                                >
                                    <span className="relative">
                                        <span
                                            className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">

                                             JM Nyaga&#39;s Vision
                                        </span>
                                        <div
                                            className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                                    </span>
                                    <br/>
                                    <span
                                        className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-blue-100">
                                        Rising from the Dust
                                    </span>
                                </motion.h1>

                                <motion.h2
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.4}}
                                    className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide max-w-4xl mx-auto leading-relaxed"
                                >
                                    Ending Poverty Through Planning & Collaboration
                                </motion.h2>
                            </div>

                            {/* Mission Statement Carousel */}
                            <div className="relative max-w-4xl mx-auto">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{duration: 0.5}}
                                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-xl sm:shadow-2xl"
                                    >
                                        <p
                                            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-medium leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: getHighlightedText(
                                                    missionSlides[currentSlide].content,
                                                    missionSlides[currentSlide].emphasis
                                                )
                                            }}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Progress Bar */}
                                <motion.div
                                    key={currentSlide}
                                    initial={{width: 0}}
                                    animate={{width: "100%"}}
                                    transition={{duration: 5, ease: "linear"}}
                                    className="h-1 bg-gradient-to-r from-orange-400 to-red-400 mt-3 rounded-full"
                                />
                            </div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.8}}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-3 sm:pt-3"
                            >
                                <Link
                                    href="/volunteer"
                                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-950 to-blue-700 text-white rounded-xl sm:rounded-2xl font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl hover:shadow-2xl min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] border border-blue-400/30 overflow-hidden text-sm sm:text-base"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <span className="text-lg sm:text-xl">🤝🏾</span>
                                    <span className="relative">Volunteer</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>

                                <Link
                                    href="/donate"
                                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-xl sm:rounded-2xl font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl hover:shadow-2xl min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] border border-orange-400/30 overflow-hidden text-sm sm:text-base"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <span className="text-lg sm:text-xl">❤️</span>
                                    <span className="relative">Donate Now</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 1.0}}
                                className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4"
                            >
                                {[
                                    {href: "/vision", label: "Our Vision", icon: "🌟"},
                                    {href: "/donate", label: "Invest", icon: "💰"},
                                    {href: "/contact", label: "Contact", icon: "📞"},
                                    {href: "/events", label: "Events", icon: "📅"}
                                ].map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 rounded-lg sm:rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                                    >
                                        <span>{link.icon}</span>
                                        <span>{link.label}</span>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Revolutionary Stats Bar */}
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0, y: 20 }}*/}
            {/*    animate={{ opacity: 1, y: 0 }}*/}
            {/*    transition={{ duration: 0.8, delay: 1.2 }}*/}
            {/*    className="absolute bottom-20 left-0 right-0"*/}
            {/*>*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">*/}
            {/*            {[*/}
            {/*                { value: "7-Point", label: "Revolutionary Agenda", icon: "🎯" },*/}
            {/*                { value: "Zero", label: "Handouts Policy", icon: "🚫" },*/}
            {/*                { value: "100%", label: "Community Focus", icon: "👥" },*/}
            {/*                { value: "Data-Driven", label: "Approach", icon: "📊" }*/}
            {/*            ].map((stat, index) => (*/}
            {/*                <motion.div*/}
            {/*                    key={index}*/}
            {/*                    initial={{ opacity: 0, scale: 0.8 }}*/}
            {/*                    animate={{ opacity: 1, scale: 1 }}*/}
            {/*                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}*/}
            {/*                    className="text-center p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"*/}
            {/*                >*/}
            {/*                    <div className="text-lg sm:text-xl text-white mb-1">{stat.icon}</div>*/}
            {/*                    <div className="text-white font-bold text-sm sm:text-base">{stat.value}</div>*/}
            {/*                    <div className="text-white/60 text-xs">{stat.label}</div>*/}
            {/*                </motion.div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/* Scroll Indicator - Smaller on mobile */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.5}}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{y: [0, 8, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    className="flex flex-col items-center gap-1 sm:gap-2"
                >
                    <span className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">
                        Explore Our Revolution
                    </span>
                    <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{y: [0, 8, 0]}}
                            transition={{duration: 2, repeat: Infinity}}
                            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}