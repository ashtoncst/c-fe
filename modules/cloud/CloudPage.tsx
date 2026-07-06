"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { CloudHero } from "./components/CloudHero";
import { CloudVideoSection } from "./components/CloudVideoSection";
import { WhyConvergeCloudSection } from "./components/WhyConvergeCloudSection";
export const CloudPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    <CloudHero />
                    <div className="relative z-10 md:-mt-20">
                        <CloudVideoSection />
                        <WhyConvergeCloudSection />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
