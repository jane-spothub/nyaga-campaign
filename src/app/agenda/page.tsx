// src/app/agenda/page.tsx
import Link from "next/link";

export default function Agenda() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
                            Development Agenda
                        </h1>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Comprehensive development plan for Tharaka Constituency with clear timelines and measurable outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Development Pillars */}
                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Infrastructure Development</h3>
                                <ul className="space-y-2 text-[var(--color-text-muted)]">
                                    <li>• Upgrade 50km of feeder roads</li>
                                    <li>• Improve market access roads</li>
                                    <li>• Enhance public transportation</li>
                                    <li>• Digital infrastructure expansion</li>
                                </ul>
                            </div>

                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Water & Sanitation</h3>
                                <ul className="space-y-2 text-[var(--color-text-muted)]">
                                    <li>• New borehole projects</li>
                                    <li>• Water purification systems</li>
                                    <li>• Irrigation schemes</li>
                                    <li>• Sanitation facilities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Youth & Employment</h3>
                                <ul className="space-y-2 text-[var(--color-text-muted)]">
                                    <li>• Skills development programs</li>
                                    <li>• Entrepreneurship support</li>
                                    <li>• Job placement initiatives</li>
                                    <li>• Sports and talent development</li>
                                </ul>
                            </div>

                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Healthcare & Education</h3>
                                <ul className="space-y-2 text-[var(--color-text-muted)]">
                                    <li>• Health center upgrades</li>
                                    <li>• School infrastructure</li>
                                    <li>• Scholarship programs</li>
                                    <li>• Vocational training</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="glass rounded-2xl p-8 mb-12">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">Implementation Timeline</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                                <span className="font-semibold">First 100 Days</span>
                                <span className="text-[var(--color-text-muted)]">Immediate infrastructure projects</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                                <span className="font-semibold">First Year</span>
                                <span className="text-[var(--color-text-muted)]">Youth programs & water projects</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                                <span className="font-semibold">Five Year Plan</span>
                                <span className="text-[var(--color-text-muted)]">Sustainable development goals</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                                Support Our Development Agenda
                            </h3>
                            <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
                                Join us in building a better future for Tharaka Constituency. Your support makes sustainable development possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/volunteer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300"
                                >
                                    🤝 Join as Volunteer
                                </Link>
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-white rounded-xl font-semibold hover:bg-[var(--color-secondary-light)] transition-all duration-300"
                                >
                                    ❤️ Donate Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}