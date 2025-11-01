// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import About from "@/app/about/page";
import Vision from "@/app/vision/page";
import Agenda from "@/app/agenda/page";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 antialiased">
            <HeroSection/>

            <main className="space-y-0">
                <About/>
                <Vision/>
                <Agenda/>

            </main>
        </div>
    );
}
