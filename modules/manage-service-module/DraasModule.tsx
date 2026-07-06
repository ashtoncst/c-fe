"use client";

import React, { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { BROCHURE_URLS } from "@/config/brochures";

const DRAAS_FEATURES = [
    {
        id: 1,
        title: "Instant Recovery, Zero Downtime",
        image: "/images/draas/male-check-computer.jpg",
        bullets: [
            "Stay resilient with in-country DRaaS powered by Continuous Data Protection",
            "Automated failover ensures operations continue without interruption",
        ],
    },
    {
        id: 2,
        title: "Ransomware Protection",
        image: "/images/draas/male-computer.png",
        bullets: [
            "Ransomware attacks surged by 300% last year, costing an average of $1.4 million to recover",
            "Emphasize resilience over mere prevention with Converge DRaaS",
        ],
    },
    {
        id: 3,
        title: "Business Continuity Assurance",
        image: "/images/our-services/satellite-internet/converge-satellite-internet-business-continuity.webp",
        bullets: [
            "World-class disaster recovery at the cost of a traditional backup",
            "Continuous coverage for your most critical operations",
        ],
    },
];

const DRAAS_PRODUCTS = [
    {
        id: 1,
        title: "Disaster Recovery as a Service",
        description:
            "An in-country cloud computing solution delivering business continuity with rapid recovery, automated failover, and continuous data protection—at the cost of a traditional backup.",
        image: "/images/draas/male-check-computer.jpg",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Ransomware Recovery Plan",
        description:
            "Organizations need a ransomware recovery plan that emphasizes resilience over mere prevention. Converge DRaaS delivers automated protection and rapid recovery when you need it most.",
        image: "/images/draas/mobile-content-banner.png",
        alignLeft: false,
    },
];

export const DraasModule = (): React.JSX.Element => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        {/* SECTION 1: Hero */}
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    Disaster
                                    <br />
                                    Recovery
                                </>
                            }
                            description="Affordable Disaster Recovery — world-class business continuity at the cost of a traditional back-up that only addresses data recovery."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/draas/male-computer.png"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Why Trust Converge DRaaS */}
                            <DesignedForGuestSection
                                title="Why Trust Converge DRaaS"
                                backgroundColor="bg-white"
                                features={DRAAS_FEATURES}
                            />

                            {/* SECTION 3: DRaaS Service Plans */}
                            <ProductsSection
                                title="DRaaS Service Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={DRAAS_PRODUCTS}
                            />

                            {/* SECTION 4: Testimonials */}
                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.draas} />
        </>
    );
};
