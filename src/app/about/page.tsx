// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
                            About JM Nyaga
                        </h1>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Learn more about Hon. Nyaga James Muturi, his background, and his commitment to Tharaka Constituency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden">
                                <Image
                                    src="/JMNyagapic.png"
                                    alt="JM Nyaga - Tharaka MP Candidate"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Background</h2>
                                <p className="text-[var(--color-text-muted)] leading-relaxed">
                                    Hon. Nyaga James Muturi has been a lifelong resident of Tharaka Constituency,
                                    deeply connected to the community and its people. With over 15 years of dedicated
                                    public service, JM Nyaga has consistently demonstrated his commitment to
                                    development-focused leadership.
                                </p>
                            </div>

                            <div className="glass rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Quick Facts</h2>
                                <ul className="space-y-3 text-[var(--color-text-muted)]">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Lifelong resident of Tharaka</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Focus: roads, water, youth employment</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Community-first leadership</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>15+ years of community service</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Mission</h2>
                                <p className="text-[var(--color-text-muted)] leading-relaxed">
                                    To bring transparent, accountable, and development-focused leadership to Tharaka Constituency.
                                    Focused on creating sustainable solutions for roads, water access, youth employment,
                                    and overall community development through planning, hard work, and measurable results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                                Join the Movement
                            </h3>
                            <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
                                Together, we can build a better future for Tharaka Constituency.
                                Your support makes this possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/volunteer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300"
                                >
                                    🤝 Become a Volunteer
                                </Link>
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-white rounded-xl font-semibold hover:bg-[var(--color-secondary-light)] transition-all duration-300"
                                >
                                    ❤️ Support the Campaign
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}