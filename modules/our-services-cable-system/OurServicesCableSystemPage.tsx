"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { BrochureDropdownModal, type BrochureOption } from "@/components/modals/BrochureDropdownModal";
import { BROCHURE_URLS } from "@/config/brochures";

const CABLE_SYSTEM_BROCHURES: BrochureOption[] = [
    { label: "Cable System Brochure", url: BROCHURE_URLS.cableSystem },
    { label: "Bifrost Brochure", url: BROCHURE_URLS.bifrost },
];

export const OurServicesCableSystemPage = () => {
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
                                Cable
                                <br />
                                System
                            </>
                        }
                        description="The world moves faster when you're fully connected. Converge empowers global carriers and enterprises with advanced subsea and fiber solutions, paving the way for seamless, scalable, and high-performance communication between Asia, the USA, and beyond."
                        buttonLabel="Download"
                        onButtonClick={() => setModalOpen(true)}
                        backgroundImage="/images/cablesystems/herobg.png"
                        bottomGradient="none"
                    />

                    <div className="relative z-10 md:-mt-20">
                        {/* SECTION 2: Why Our Cable Systems */}
                        <DesignedForGuestSection
                            title="Why Our Cable Systems"
                            backgroundColor="bg-white"
                            features={[
                                {
                                    id: 1,
                                    title: "Ultra-Fast Global Connectivity",
                                    image: "/images/cablesystems/1stcard.png",
                                    bullets: [
                                        "These state-of-the-art submarine cables provide high-capacity, low-latency links between the Philippines and key global markets.",
                                    ],
                                },
                                {
                                    id: 2,
                                    title: "Redundancy & Network Resilience",
                                    image: "/images/cablesystems/2ndcard.png",
                                    bullets: [
                                        "Built with diverse routes and multiple landing points, these systems enhance network reliability and protect against outages.",
                                    ],
                                },
                                {
                                    id: 3,
                                    title: "Scalable & Future-Ready Bandwidth",
                                    image: "/images/cablesystems/3rdcard.png",
                                    bullets: [
                                        "Designed for high growth and data-intensive workloads, these cables support scalable bandwidth to meet rising enterprise demands.",
                                        "Future-proof connectivity that can handle AI, cloud, and high-volume traffic without compromise.",
                                    ],
                                },
                            ]}
                        />

                        {/* SECTION 4: Cable System Solutions */}
                        <ProductsSection
                            title="Cable System Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1e1e19]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            products={[
                                {
                                    id: 1,
                                    // Bifrost detail page hidden (for future use) — no clickable link.
                                    title: "Bifrost",
                                    description: "Direct, high-capacity connectivity between the Philippines, Singapore, Indonesia, and the USA—a game-changer for transpacific data demands. Experience ultra-low latency and future-ready bandwidth for next-gen applications.",
                                    image: "/images/cablesystems/bifrost.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 2,
                                    // SEA-H2X detail page hidden (for future use) — no clickable link.
                                    title: "SEA-H2X",
                                    description: "Build your intra-Asia backbone with a submarine cable system spanning key economies. Unlock reliable, high-speed routes to meet Asia's explosive digital growth.",
                                    image: "/images/cablesystems/seah2x.png",
                                    alignLeft: false,
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        <BrochureDropdownModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            brochures={CABLE_SYSTEM_BROCHURES}
        />
        </>
    );
};
