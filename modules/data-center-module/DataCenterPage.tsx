"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { DataCenterHero } from "./components/DataCenterHero";
import { MultiEdgeSection } from "./components/MultiEdgeSection";

export const DataCenterPage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    <DataCenterHero />
                    <div className="relative z-10 md:-mt-20">
                        <MultiEdgeSection />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
