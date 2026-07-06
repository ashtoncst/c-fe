"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { InternetHero } from "./components/InternetHero";
import { InternetFeaturesSection } from "./components/InternetFeaturesSection";

export const InternetPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    <InternetHero />
                    <div className="relative z-10 md:-mt-20">
                        <InternetFeaturesSection />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
