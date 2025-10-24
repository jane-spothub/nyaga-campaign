// src/components/Footer.tsx
"use client"; // optional if static

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black p-4 text-center">
            <div className="container mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h4 className="text-lg font-semibold">Hon. Nyaga James Muturi</h4>
                    <p className="mt-2 text-sm">JM Nyaga — For the People, With the People</p>
                </div>

                <div>
                    <h5 className="font-semibold">Quick Links</h5>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="#vision" className="hover:underline">Vision</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold">Contact</h5>
                    <p className="mt-2 text-sm">Campaign Office: Tharaka Constituency</p>
                    <p className="mt-1 text-sm">Phone/WhatsApp: 07XXXXXXXX</p>
                    <p className="mt-1 text-sm">Email: info@jmnyaga.co.ke</p>
                </div>
            </div>
            <div className="border-t border-[var(--color-glass-border)] text-center py-4">
                <p className="text-sm text-[var(--color-text-muted)]">© {new Date().getFullYear()} Hon. Nyaga James Muturi. All rights reserved.</p>
            </div>
            {/*© 2025 Hon. Nyaga James Muturi | Tharaka Constituency*/}
        </footer>
    );
}
