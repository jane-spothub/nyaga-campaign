// src/app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection";
import About from "@/app/about/page";
// import Vision from "@/app/vision/page";
import Agenda from "@/app/agenda/page";
import SiteLoader from "@/components/SiteLoader";
import { useState, useEffect } from "react";

export default function Home() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show content after loader is done (loader handles its own timing)
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1500); // Slightly longer than loader duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-foreground)] antialiased">
            <SiteLoader />

            {showContent && (
                <>
                    <HeroSection/>
                    <main className="px-6 lg:px-8 py-12 space-y-20">
                        <About/>
                        {/*<Vision/>*/}
                        <Agenda/>
                    </main>
                </>
            )}
        </div>
    );
}