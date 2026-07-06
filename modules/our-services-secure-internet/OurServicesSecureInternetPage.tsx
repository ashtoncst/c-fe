"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { SecureInternetHero } from "./components/SecureInternetHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const OurServicesSecureInternetPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader forceDarkLogo={true} />
                <main className="flex-grow w-full relative -mt-[90px]">
                    {/* SECTION 1: Hero Section */}
                    <SecureInternetHero />

                    <div className="relative z-10 md:-mt-20">
                        {/* SECTION 2: Why Secure Internet */}
                        <DesignedForGuestSection
                            title="Why Our Secure Internet"
                            backgroundColor="bg-white"
                            features={[
                                {
                                    id: 1,
                                    title: "Connectivity Anywhere, Anytime",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-connectivity-anywhere.webp",
                                    bullets: [
                                        "Delivers high-speed, low-latency satellite internet in remote, underserved, or hard-to-reach locations",
                                        "Enables operations in mining sites, offshore facilities, rural branches, and disaster-prone areas",
                                    ],
                                },
                                {
                                    id: 2,
                                    title: "Business Continuity & Redundancy",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-business-continuity.webp",
                                    bullets: [
                                        "Acts as a powerful failover or backup link to fiber networks",
                                        "Ensures uninterrupted operations, protects revenue, and strengthens disaster recovery strategies",
                                    ],
                                },
                                {
                                    id: 3,
                                    title: "Rapid Deployment & Scalability",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-rapid-deployment.webp",
                                    bullets: [
                                        "Quick to install and easy to scale across multiple sites globally",
                                        "Accelerates expansion plans and supports agile enterprise growth",
                                    ],
                                },
                            ]}
                        />

                        {/* SECTION 3: Secure Internet Solutions */}
                        <ProductsSection
                            title="Secure Internet Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1e1e19]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            products={[
                                {
                                    id: 1,
                                    title: "Connectivity Anywhere, Anytime",
                                    description: "High-speed, low-latency satellite internet for remote, underserved, and hard-to-reach locations without relying on terrestrial infrastructure.",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-connectivity-anywhere.webp",
                                    alignLeft: true,
                                },
                                {
                                    id: 2,
                                    title: "Business Continuity & Redundancy",
                                    description: "A powerful failover or backup link to fiber networks, ensuring uninterrupted operations and strengthening your disaster recovery strategy.",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-business-continuity.webp",
                                    alignLeft: false,
                                },
                                {
                                    id: 3,
                                    title: "Rapid Deployment & Scalability",
                                    description: "Quick to install and easy to scale across multiple sites globally, accelerating expansion plans and supporting agile enterprise growth.",
                                    image: "/images/our-services/satellite-internet/converge-satellite-internet-rapid-deployment.webp",
                                    alignLeft: true,
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.secureInternet} />
        </>
    );
};
