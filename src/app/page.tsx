// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-foreground)] antialiased">
            {/* HERO - Split layout */}
            <HeroSection/>

            <main className="container mx-auto px-6 lg:px-8 py-12 space-y-20">
                {/* ABOUT */}
                <section id="about" className="pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)]">About the Candidate</h2>
                            <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
                                Hon. Nyaga James Muturi has a record of community service and
                                practical development work in Tharaka. Rooted in the community,
                                JM Nyaga believes in planning, hard work, and measurable
                                results — not short-term giveaways.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)] p-6">
                            <h4 className="font-semibold text-[var(--color-primary-dark)]">Quick Facts</h4>
                            <ul className="mt-3 text-[var(--color-text-muted)] space-y-2 text-sm">
                                <li>• Lifelong resident of Tharaka</li>
                                <li>• Focus: roads, water, youth employment</li>
                                <li>• Community-first leadership</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* VISION & AGENDA */}
                <section id="vision" className="pt-6">
                    <h2 className="text-2xl font-bold text-[var(--color-primary-dark)]">Vision & Agenda</h2>
                    <p className="mt-3 text-[var(--color-text-muted)] max-w-3xl">
                        Clear, actionable priorities for Tharaka. Each pillar has measurable
                        milestones and timelines.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-[var(--color-glass)] border border-[var(--color-glass-border)]">
                            <h3 className="font-semibold text-[var(--color-primary-dark)]">Roads & Infrastructure</h3>
                            <p className="mt-2 text-[var(--color-text-muted)] text-sm">
                                Upgrade key feeder roads and improve market access to reduce travel times and costs.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-[var(--color-glass)] border border-[var(--color-glass-border)]">
                            <h3 className="font-semibold text-[var(--color-primary-dark)]">Water & Sanitation</h3>
                            <p className="mt-2 text-[var(--color-text-muted)] text-sm">
                                Increase access to clean water through boreholes and improved supply chains.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-[var(--color-glass)] border border-[var(--color-glass-border)]">
                            <h3 className="font-semibold text-[var(--color-primary-dark)]">Youth Employment</h3>
                            <p className="mt-2 text-[var(--color-text-muted)] text-sm">
                                Practical youth skills programs, market linkages, and agribusiness opportunities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* VOLUNTEER / CTA */}
                <section id="volunteer" className="pt-6">
                    <div className="rounded-2xl p-8 backdrop-blur-md bg-[var(--color-glass)] border border-[var(--color-glass-border)]">
                        <div className="flex flex-col lg:flex-row items-center gap-6">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-[var(--color-primary-dark)]">Join the Movement</h2>
                                <p className="mt-2 text-[var(--color-text-muted)]">We need committed volunteers across Tharaka. Sign up to help with field outreach and community mapping.</p>
                            </div>

                            <div className="w-full lg:w-80">
                                <Link href="/volunteer" className="block text-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] transition">
                                    Volunteer
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
