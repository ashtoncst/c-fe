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

const FASTER_FEATURES = [
    {
        id: 1,
        title: "Trans-Pacific Backbone",
        image: "/images/faster/shutterstock_2465034.png",
        bullets: [
            "High-capacity trans-Pacific cable system connecting Asia and the Americas",
            "Consortium membership ensures resilient, diverse routing for critical connectivity",
        ],
    },
    {
        id: 2,
        title: "Pure Fiber GPON Network",
        image: "/images/metroethernet/shutterstock_1820093.png",
        bullets: [
            "Leverages Converge's 100% fiber backbone for consistent, low-latency connectivity",
            "GPON architecture delivers reliable performance across all business sites",
        ],
    },
    {
        id: 3,
        title: "Secure Private WAN",
        image: "/images/ipvpn/shuttersctock_24146703.png",
        bullets: [
            "Layer 3 IP VPN keeps enterprise traffic private and isolated",
            "Connect offices, branches, and remote sites over a secure private network",
        ],
    },
];

const FASTER_PRODUCTS = [
    {
        id: 1,
        title: "Carrier & ISP Connectivity",
        description:
            "High-capacity international bandwidth for carriers and internet operators via the FASTER subsea cable system.",
        image: "/images/faster/shutterstock_2465034.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Enterprise WAN Access",
        description:
            "Secure Layer 3 IP VPN connectivity linking your business offices, branches, and remote sites across the region and globally.",
        image: "/images/ipvpn/data.png",
        alignLeft: false,
    },
];

export const FasterModule = (): React.JSX.Element => {
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
                                    FASTER
                                    <br />
                                    Cable System
                                </>
                            }
                            description="FASTER is a Layer 3 (IP) VPN service that offers secure and private WAN connectivity to customer's business offices, branches and remote sites using our pure fiber GPON Network."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/faster/shutterstock_2465034.png"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why FASTER"
                                backgroundColor="bg-white"
                                features={FASTER_FEATURES}
                            />

                            <ProductsSection
                                title="FASTER Service Options"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={FASTER_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.faster} />
        </>
    );
};
