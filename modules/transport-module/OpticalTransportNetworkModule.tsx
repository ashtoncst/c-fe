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

const OTN_FEATURES = [
    {
        id: 1,
        title: "Secure and Clear Channel",
        image: "/images/opticaltransportnetwork/shutterstock_1289954.jpg",
        bullets: [
            "Provides a dedicated, interference-free transmission path, ensuring secure data delivery.",
        ],
    },
    {
        id: 2,
        title: "High Bandwidth",
        image: "/images/opticaltransportnetwork/shutterstock_584696.png",
        bullets: [
            "Delivers high-speed data transmission, supporting large-scale data transfers and real-time applications.",
        ],
    },
    {
        id: 3,
        title: "Reliable and Low Latency",
        image: "/images/opticaltransportnetwork/shutterstock_701393.jpg",
        bullets: [
            "Ensures minimal delay and high reliability, critical for real-time applications and business continuity.",
        ],
    },
];

const OTN_PRODUCTS = [
    {
        id: 1,
        title: "DWDM Backbone Transport",
        description:
            "Advanced Optical Technology — powered by Dense Wavelength Division Multiplexing (DWDM), enabling multiple data streams over a single fiber for efficiency and speed.",
        image: "/images/opticaltransportnetwork/shutterstock_256732.jpg",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Ultra-High Capacity Links",
        description:
            "Carrier-grade backbone connectivity with ultra-high capacity and low-latency performance for enterprises, data centers, and carriers.",
        image: "/images/opticaltransportnetwork/shutterstock_1289954.jpg",
        alignLeft: false,
    },
];

export const OpticalTransportNetworkModule = (): React.JSX.Element => {
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
                                    Optical Transport
                                    <br />
                                    Network
                                </>
                            }
                            description="OTN is a Layer 1 technology that provides a secure, clear channel, high bandwidth, reliable, and low-latency network service running over Dense Wavelength Division Multiplexing."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/opticaltransportnetwork/shutterstock_1289954.jpg"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why Optical Transport Network"
                                backgroundColor="bg-white"
                                features={OTN_FEATURES}
                            />

                            <ProductsSection
                                title="OTN Service Capabilities"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={OTN_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.opticalTransportNetwork} />
        </>
    );
};
