// src/components/Footer.tsx
"use client"; // optional if static

export default function About() {
    return (
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
    );
}
