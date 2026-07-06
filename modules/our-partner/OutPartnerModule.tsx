"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { FooterDark } from "@/components/layouts/FooterDark";
import { OurPartnersHero } from "./components/OurPartnersHero";
import { StrongerTogetherSection } from "./components/StrongerTogetherSection";
import { PartnersLogoStrip } from "./components/PartnersLogoStrip";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

export const OutPartnerModule = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />

                <main className="flex-grow w-full relative -mt-[90px]">
                    <OurPartnersHero />

                    <div className="relative z-10 md:-mt-20">
                        <StrongerTogetherSection />
                        <PartnersLogoStrip />
                        <TestimonialSection dark />
                    </div>
                </main>

                <FooterDark />
            </div>
        </div>
    );
};
