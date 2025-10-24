// src/app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "JM Nyaga Campaign",
    description: "Hon. Nyaga James Muturi – Tharaka MP Campaign",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
