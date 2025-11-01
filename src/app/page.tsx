// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import About from "@/app/about/page";
import Vision from "@/app/vision/page";
import Agenda from "@/app/agenda/page";

export default function Home() {
    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-foreground)] antialiased">
            <HeroSection/>

            <main className="px-6 lg:px-8 py-12 space-y-20">

                <About/>
                <Vision/>
                <Agenda/>

            </main>
        </div>
    );
}
