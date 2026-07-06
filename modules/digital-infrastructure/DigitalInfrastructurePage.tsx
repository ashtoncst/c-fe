"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { DigitalInfrastructureHero } from "./components/DigitalInfrastructureHero";
import { BuiltForGrowthSection } from "./components/BuiltForGrowthSection";
import { ProductsSection } from "@/components/sections/ProductsSection";

export const DigitalInfrastructurePage = () => {
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    <DigitalInfrastructureHero />
                    <div className="relative z-10 md:-mt-20">
                        <BuiltForGrowthSection />
                        <ProductsSection
                            title="Our Products"
                            description="Solutions built for everyday life, future growth, and everything in between."
                            backgroundColor="bg-[#1e1e19]"
                            titleColor="text-white"
                            descriptionColor="text-white"
                            cardTextColor="text-black"
                            useMobileGrid
                            showMobileDescription={false}
                            products={[
                                {
                                    id: 1,
                                    title: "Cloud",
                                    description: "Achieve your digital transformation goals with scalable, compliant & AI-ready cloud operations",
                                    image: "/images/digitalinfrastructure/1stlist.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 2,
                                    title: "Data Center",
                                    description: "Transformative cost approach for your hosting, storage, infrastructure and disaster recovery enterprise solutions",
                                    image: "/images/digitalinfrastructure/2ndlist.png",
                                    alignLeft: false,
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};
