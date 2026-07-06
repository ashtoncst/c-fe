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

const FIBER_DEDICATED_FEATURES = [
    {
        id: 1,
        title: "Standard",
        image: "/images/fiberdedicated/shutterstock_1774874147.jpg",
        bullets: [
            "Premium Metro-Ethernet access technology delivering dedicated high-performance internet",
            "Traffic dynamically routed to multiple local and global IX and CDNs",
        ],
    },
    {
        id: 2,
        title: "Economy",
        image: "/images/fiberdedicated/shutterstock_114251.png",
        bullets: [
            "Balances performance and cost while delivering enterprise-grade service",
            "Designed for customers who require dedicated but basic internet access",
        ],
    },
    {
        id: 3,
        title: "Time of Day",
        image: "/images/fiberdedicated/shutterstock_14993.png",
        bullets: [
            "Variable bandwidth based on pre-set time of day",
            "Double the subscribed bandwidth when you really need it — day or night",
        ],
    },
];

const FIBER_DEDICATED_PRODUCTS = [
    {
        id: 1,
        title: "Bandwidth on Demand",
        description:
            "Burst up to 2x your subscribed bandwidth whenever your business demands it — flexible, dynamic, and always ready.",
        image: "/images/fiberdedicated/shutterstock_182278.jpg",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Upload",
        description:
            "Asymmetric download and upload bandwidth allocation, best for outbound traffic-intensive business operations.",
        image: "/images/fiberdedicated/shutterstock_2-5763.png",
        alignLeft: false,
    },
    {
        id: 3,
        title: "Anti-DDoS Protection",
        description:
            "Guarantees safe and secure browsing for all your enterprise sites — ensuring no loss of business at all times.",
        image: "/images/fiberdedicated/shutterstock_164166.jpg",
        alignLeft: true,
    },
];

export const FiberDedicatedModule = (): React.JSX.Element => {
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
                                    Fiber
                                    <br />
                                    Dedicated
                                </>
                            }
                            description="Smart, scalable, and secure connectivity tailored to your operations."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/fiberdedicated/landing2.png"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Why Fiber Dedicated */}
                            <DesignedForGuestSection
                                title="Why Fiber Dedicated"
                                backgroundColor="bg-white"
                                features={FIBER_DEDICATED_FEATURES}
                            />

                            {/* SECTION 3: Advanced Service Plans */}
                            <ProductsSection
                                title="Advanced Service Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={FIBER_DEDICATED_PRODUCTS}
                            />

                            {/* SECTION 4: Testimonials */}
                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.fiberDedicated} />
        </>
    );
};
