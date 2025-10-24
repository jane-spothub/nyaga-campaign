// src/app/vision/page.tsx
import Link from "next/link";

export default function Vision() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
                            Vision & Agenda
                        </h1>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Clear, actionable priorities for Tharaka Constituency with measurable milestones and timelines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Vision Cards */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary-dark)] mb-3">Roads & Infrastructure</h3>
                            <p className="text-[var(--color-text-muted)] text-sm">
                                Upgrade key feeder roads and improve market access to reduce travel times and costs.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary-dark)] mb-3">Water & Sanitation</h3>
                            <p className="text-[var(--color-text-muted)] text-sm">
                                Increase access to clean water through boreholes and improved supply chains.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary-dark)] mb-3">Youth Employment</h3>
                            <p className="text-[var(--color-text-muted)] text-sm">
                                Practical youth skills programs, market linkages, and agribusiness opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                                Support Our Vision
                            </h3>
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