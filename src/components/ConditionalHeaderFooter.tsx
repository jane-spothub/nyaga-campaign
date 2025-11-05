"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {usePathname} from "next/navigation";

export function ConditionalHeaderFooter({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    return (
        <>
            {!isAdminRoute && <Header />}
            <main>{children}</main>
            {!isAdminRoute && <Footer />}
        </>
    );
}