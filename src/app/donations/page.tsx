// src/app/donate/page.tsx
import Link from "next/link";

export default function Donate() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
                            Support Our Campaign
                        </h1>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Your contribution helps us reach more people and build a better future for Tharaka Constituency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Donation Options */}
                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Donation Options</h3>

                                <div className="space-y-4">
                                    <button className="w-full text-left p-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
                                        <div className="font-semibold">KSh 500</div>
                                        <div className="text-sm text-[var(--color-text-muted)]">Supports community outreach</div>
                                    </button>

                                    <button className="w-full text-left p-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
                                        <div className="font-semibold">KSh 1,000</div>
                                        <div className="text-sm text-[var(--color-text-muted)]">Helps with campaign materials</div>
                                    </button>

                                    <button className="w-full text-left p-4 rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white">
                                        <div className="font-semibold">KSh 2,500</div>
                                        <div className="text-sm opacity-90">Flagship supporter package</div>
                                    </button>

                                    <div className="pt-4">
                                        <div className="text-sm font-medium mb-2">Custom Amount</div>
                                        <input
                                            type="number"
                                            placeholder="Enter amount (KSh)"
                                            className="w-full p-3 rounded-xl border border-[var(--color-glass-border)] bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="glass rounded-2xl p-6">
                                <h4 className="font-semibold mb-4">Payment Methods</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="p-3 rounded-xl border border-[var(--color-glass-border)] hover:bg-[var(--color-glass)] transition-all duration-200">
                                        M-Pesa
                                    </button>
                                    <button className="p-3 rounded-xl border border-[var(--color-glass-border)] hover:bg-[var(--color-glass)] transition-all duration-200">
                                        Bank Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Donation Info */}
                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Why Donate?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Campaign Materials</h4>
                                            <p className="text-sm text-[var(--color-text-muted)]">Flyers, banners, and outreach materials</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Community Events</h4>
                                            <p className="text-sm text-[var(--color-text-muted)]">Town halls and community meetings</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Volunteer Support</h4>
                                            <p className="text-sm text-[var(--color-text-muted)]">Training and support for our volunteers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* M-Pesa Instructions */}
                            <div className="glass rounded-2xl p-6 bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20">
                                <h4 className="font-semibold mb-3">M-Pesa Donation</h4>
                                <div className="space-y-2 text-sm">
                                    <div>1. Go to M-Pesa menu</div>
                                    <div>2. Select "Lipa Na M-Pesa"</div>
                                    <div>3. Enter Paybill: <strong>123456</strong></div>
                                    <div>4. Account: <strong>JMNYAGA</strong></div>
                                </div>
                            </div>

                            {/* Alternative Support */}
                            <div className="text-center">
                                <p className="text-[var(--color-text-muted)] mb-4">Prefer to support in other ways?</p>
                                <Link href="/volunteer" className="inline-flex items-center px-6 py-3 rounded-xl bg-[var(--color-glass)] border border-[var(--color-glass-border)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
                                    🤝 Become a Volunteer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}