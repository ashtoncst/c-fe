"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { DistributedSetupHero } from "./components/DistributedSetupHero";
import { GloballyCertifiedSection } from "./components/GloballyCertifiedSection";
import { OurProductsSection } from "./components/OurProductsSection";

export const DistributedSetupPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    <DistributedSetupHero />
                    <div className="relative z-10 md:-mt-20">
                        <GloballyCertifiedSection />
                        <OurProductsSection />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
