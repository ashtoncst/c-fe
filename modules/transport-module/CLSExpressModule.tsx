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

const CLS_EXPRESS_FEATURES = [
    {
        id: 1,
        title: "Seamless Transport via DWDM Network",
        image: "/images/clsexpress/seamless-transport.png",
        bullets: [
            "Ensures stable and high-capacity connectivity between landing stations.",
        ],
    },
    {
        id: 2,
        title: "Dedicated Ethernet Service",
        image: "/images/clsexpress/ethernet-service.png",
        bullets: [
            "Offers exclusivity and high reliability for enterprise needs.",
        ],
    },
    {
        id: 3,
        title: "Strategic Transit through the Philippines",
        image: "/images/clsexpress/strategic-transit.png",
        bullets: [
            "Ideal for customers utilizing PH as a transit hub to Asia and the US.",
        ],
    },
];

const CLS_EXPRESS_PRODUCTS = [
    {
        id: 1,
        title: "Cable Owner Services",
        description:
            "Secure, Scalable Ethernet Technology — designed specifically for clients with existing cable infrastructure seeking reliable PH-based transit.",
        image: "/images/clsexpress/cable-owner.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "International Transit Hub",
        description:
            "Leverage Converge's fiber network for high-capacity international traffic routing through the Philippines — connecting Asia and the Americas.",
        image: "/images/clsexpress/multiple-color.png",
        alignLeft: false,
    },
];

export const CLSExpressModule = (): React.JSX.Element => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    CLS
                                    <br />
                                    Express
                                </>
                            }
                            description="CLS Express delivers carrier-grade cable landing station connectivity via Converge ICT Solutions' fiber network, enabling high-capacity international traffic through the Philippines."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/clsexpress/multiple-color.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why CLS Express"
                                backgroundColor="bg-white"
                                features={CLS_EXPRESS_FEATURES}
                            />

                            <ProductsSection
                                title="CLS Express Service Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={CLS_EXPRESS_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.clsExpress} />
        </>
    );
};
