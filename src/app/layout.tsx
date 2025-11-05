// src/app/layout.tsx
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ConditionalHeaderFooter} from "@/components/ConditionalHeaderFooter";

export const metadata = {
    title: "JM Nyaga Campaign",
    description: "Hon. Nyaga James Mutwiri – Tharaka Constituency MP Campaign",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    // This is still static, but you could use a hacky approach
    // Note: This is not recommended for production

    return (
        <html lang="en">
        <body className="bg-white text-black" data-gramm="false" data-gr-ext-installed="">
        <ConditionalHeaderFooter>
            {children}
        </ConditionalHeaderFooter>
        </body>
        </html>
    );
}

// Client component for conditional rendering
