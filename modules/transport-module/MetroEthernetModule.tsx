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

const METRO_ETHERNET_FEATURES = [
    {
        id: 1,
        title: "Business-Grade Connectivity",
        image: "/images/metroethernet/shutterstock_1499939.jpg",
        bullets: [
            "Ensures your operations run with business-level quality and reliability, suitable for mission-critical applications.",
        ],
    },
    {
        id: 2,
        title: "High-Capacity & Secure WAN",
        image: "/images/metroethernet/shutterstock_2109008.jpg",
        bullets: [
            "Leverages a Globally Certified Carrier Ethernet Network for high bandwidth and secure connectivity.",
        ],
    },
    {
        id: 3,
        title: "Seamless Collaboration Across Locations",
        image: "/images/metroethernet/shutterstock_2295886.jpg",
        bullets: [
            "Supports geographically separated sites for consistent, reliable communication and collaboration.",
        ],
    },
];

const METRO_ETHERNET_PRODUCTS = [
    {
        id: 1,
        title: "Business Ethernet",
        description:
            "Guaranteed Business Continuity — maintains network stability to ensure no interruptions in business operations, even across dispersed sites.",
        image: "/images/metroethernet/shutterstock_21051332.jpg",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Premium Metro WAN",
        description:
            "High-capacity, secured Wide Area Network for enterprises that demand consistent performance and business-level quality across all locations.",
        image: "/images/metroethernet/shutterstock_1820093.png",
        alignLeft: false,
    },
];

export const MetroEthernetModule = (): React.JSX.Element => {
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
                                    Metro
                                    <br />
                                    Ethernet
                                </>
                            }
                            description="Runs through a Globally Certified Carrier Ethernet Network providing high capacity and secured Wide Area Network connectivity between geographically separated sites."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/metroethernet/metro-ethernet-banner-full.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why Metro Ethernet"
                                backgroundColor="bg-white"
                                features={METRO_ETHERNET_FEATURES}
                            />

                            <ProductsSection
                                title="Metro Ethernet Solutions"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={METRO_ETHERNET_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.metroEthernet} />
        </>
    );
};
