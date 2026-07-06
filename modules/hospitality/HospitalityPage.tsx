"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { HospitalityHero } from "./components/HospitalityHero";
import { DesignedForGuestSection } from "./components/DesignedForGuestSection";
import { HospitalityProductsSection } from "./components/HospitalityProductsSection";

export const HospitalityPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader forceDarkLogo={true} />

                {/* Main Content */}
                <main className="flex-grow w-full relative -mt-[90px]">
                    <HospitalityHero />
                    <div className="relative z-10 md:-mt-20">
                        <DesignedForGuestSection />
                        <HospitalityProductsSection />
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};
