"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const FiberBroadbandPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        {/* SECTION 1: Hero Section */}
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    Fiber
                                    <br />
                                    Broadband
                                </>
                            }
                            description="Power your daily operations with high-speed, 100% fiber connectivity designed for consistent performance and business-grade reliability."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/fiberbroadband/herobg.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Why Our Fiber Broadband */}
                            <DesignedForGuestSection
                                title="Why Our Fiber Broadband"
                                backgroundColor="bg-white"
                                features={[
                                    {
                                        id: 1,
                                        title: "Cost-Efficient Business Connectivity",
                                        image: "/images/fiberbroadband/1stcard.png",
                                        bullets: [
                                            "Get high-speed fiber internet at a competitive price point through a shared network model",
                                            "Reliable connectivity for businesses with dedicated lanes—ideal for remote offices"
                                        ]
                                    },
                                    {
                                        id: 2,
                                        title: "Fast Deployment & Easy Scalability",
                                        image: "/images/fiberbroadband/2ndcard.png",
                                        bullets: [
                                            "Quick installation and flexible bandwidth options let you upgrade as your business grows",
                                            "Agile connectivity that keeps up with expansion"
                                        ]
                                    },
                                    {
                                        id: 3,
                                        title: "Reliable Fiber Performance",
                                        image: "/images/fiberbroadband/3rdcard.png",
                                        bullets: [
                                            "Powered by Converge's pure fiber backbone, enjoy stable speeds and low latency for daily operations, seamless cloud applications, video calls, and online transactions"
                                        ]
                                    }
                                ]}
                            />

                            {/* SECTION 3: Fiber Broadband Solutions */}
                            <ProductsSection
                                title="Fiber Broadband Solutions"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                showMobileDescription={false}
                                products={[
                                    {
                                        id: 1,
                                        title: "Business Fiber Internet",
                                        description: "",
                                        image: "/images/fiberbroadband/1stlist.png",
                                        alignLeft: true,
                                    }
                                ]}
                            />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.fiberBroadband} />
        </>
    );
};