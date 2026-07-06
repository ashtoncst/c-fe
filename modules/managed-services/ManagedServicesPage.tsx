"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { ManagedServicesHero } from "./components/ManagedServicesHero";
import { DesignedForBusinessSection } from "./components/DesignedForBusinessSection";
import { ManagedServicesProductsSection } from "./components/ManagedServicesProductsSection";

export const ManagedServicesPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader forceDarkLogo={false} />

                {/* Main Content */}
                <main className="flex-grow w-full relative -mt-[90px]">
                    <ManagedServicesHero />
                    <div className="relative z-10 md:-mt-20">
                        <DesignedForBusinessSection />
                        <ManagedServicesProductsSection />
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};