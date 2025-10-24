// src/app/contact/page.tsx
export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-[var(--color-text-muted)]">
                            Get in touch with the JM Nyaga campaign team.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Campaign Office</h3>
                                <p className="text-[var(--color-text-muted)] mb-2">Tharaka Constituency</p>
                                <p className="text-[var(--color-text-muted)] mb-2">Phone: 07XXXXXXXX</p>
                                <p className="text-[var(--color-text-muted)]">Email: info@jmnyaga.co.ke</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Follow Us</h3>
                                <p className="text-[var(--color-text-muted)]">Stay updated with our campaign activities and events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}