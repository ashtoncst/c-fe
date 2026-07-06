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

const IPVPN_FEATURES = [
    {
        id: 1,
        title: "Secure MPLS Connectivity",
        image: "/images/ipvpn/shuttersctock_24146703.png",
        bullets: [
            "Dedicated private WAN that isolates your traffic from the public internet",
            "MPLS technology ensures consistent quality and security across all sites",
        ],
    },
    {
        id: 2,
        title: "Scalable Multi-Site WAN",
        image: "/images/ipvpn/data.png",
        bullets: [
            "Connect any number of remote offices, branches, and data centers seamlessly",
            "Flexible bandwidth options that grow with your enterprise",
        ],
    },
    {
        id: 3,
        title: "Guaranteed SLA Performance",
        image: "/images/ipvpn/step-progress.png",
        bullets: [
            "Enterprise-grade SLAs with guaranteed uptime and performance metrics",
            "Prioritized routing ensures critical applications always get bandwidth",
        ],
    },
];

const IPVPN_PRODUCTS = [
    {
        id: 1,
        title: "Standard IP VPN",
        description:
            "Full-mesh MPLS connectivity for enterprises with multiple branch offices requiring consistent, high-performance private WAN access.",
        image: "/images/ipvpn/shuttersctock_24146703.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Hub & Spoke Topology",
        description:
            "Centralized hub architecture ideal for enterprises with a primary data center serving distributed branch locations.",
        image: "/images/ipvpn/data.png",
        alignLeft: false,
    },
];

export const IPVPNModule = (): React.JSX.Element => {
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
                                    IP
                                    <br />
                                    VPN
                                </>
                            }
                            description="A dedicated, private network connectivity service that securely links remote offices together using MPLS technology."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/ipvpn/shuttersctock_24146703.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why IP VPN"
                                backgroundColor="bg-white"
                                features={IPVPN_FEATURES}
                            />

                            <ProductsSection
                                title="IP VPN Service Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={IPVPN_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.ipvpn} />
        </>
    );
};
