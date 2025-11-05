// src/components/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
                />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="text-center space-y-8">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-2xl"
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse" />
                                <span className="text-sm font-semibold tracking-wide">
                  Aspiring MP - Tharaka Constituency
                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                                >
                                    Building a{" "}
                                    <span className="relative">
                    <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">
                      Better Future
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                                    <br />
                                    <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-100">
                    for Tharaka
                  </span>
                                </motion.h1>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide max-w-4xl mx-auto leading-relaxed"
                                >
                                    Reimagining politics to end poverty
                                </motion.h2>
                            </div>

                            {/* Mission Statement */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto shadow-2xl"
                            >
                                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed">
                                    Development-first leadership focused on{" "}
                                    <span className="text-orange-300 font-semibold">better roads</span>
                                    ,{" "}
                                    <span className="text-blue-300 font-semibold">reliable water</span>
                                    , and{" "}
                                    <span className="text-emerald-300 font-semibold">real opportunities</span>
                                    {" "}for Tharaka&#39;s youth. This campaign is about{" "}
                                    <span className="text-yellow-300 font-semibold">work</span>
                                    ,{" "}
                                    <span className="text-purple-300 font-semibold">dignity</span>
                                    , and{" "}
                                    <span className="text-cyan-300 font-semibold">measurable progress</span>.
                                </p>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-row gap-4 justify-center items-center pt-8"
                            >
                                <Link
                                    href="/volunteer"
                                    className="group relative inline-flex items-center justify-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl min-w-[160px] sm:min-w-[200px] border border-blue-400/30 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <span className="text-xl">🤝</span>
                                    <span className="relative">Join as Volunteer</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>

                                <Link
                                    href="/donate"
                                    className="group relative inline-flex items-center justify-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl min-w-[160px] sm:min-w-[200px] border border-orange-400/30 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <span className="text-xl">❤️</span>
                                    <span className="relative">Donate Now</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </motion.div>

                            {/* Impact Stats */}
                            {/*<motion.div*/}
                            {/*    initial={{ opacity: 0 }}*/}
                            {/*    animate={{ opacity: 1 }}*/}
                            {/*    transition={{ duration: 1, delay: 1 }}*/}
                            {/*    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12"*/}
                            {/*>*/}
                            {/*    {[*/}
                            {/*        { number: "Better", label: "Roads & Infrastructure" },*/}
                            {/*        { number: "Reliable", label: "Water Access" },*/}
                            {/*        { number: "Real", label: "Youth Opportunities" }*/}
                            {/*    ].map((stat, index) => (*/}
                            {/*        <motion.div*/}
                            {/*            key={index}*/}
                            {/*            whileHover={{ scale: 1.05 }}*/}
                            {/*            className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all duration-300"*/}
                            {/*        >*/}
                            {/*            <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-2">*/}
                            {/*                {stat.number}*/}
                            {/*            </div>*/}
                            {/*            <div className="text-sm text-blue-200 font-medium">*/}
                            {/*                {stat.label}*/}
                            {/*            </div>*/}
                            {/*        </motion.div>*/}
                            {/*    ))}*/}
                            {/*</motion.div>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
          <span className="text-sm text-white/60 font-medium tracking-wide">
            Scroll to explore
          </span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/50 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}