"use client";

import React from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

const DC_EXPRESS_FEATURES = [
    {
        id: 1,
        title: "Ethernet",
        image: "/images/dcexpress/internet-string.png",
        bullets: [
            "Layer 2 capacity with offering up to 100Gbps with our interconnection to our global carrier partners, we can also connect you to key international data centers",
        ],
    },
    {
        id: 2,
        title: "Fiber Channel",
        image: "/images/dcexpress/light-string.png",
        bullets: [
            "For your storage area networking, our fiber channel offering is the best solution as we support FC800 (10G), FC1600 (20G), and FC3200 (40G).",
        ],
    },
    {
        id: 3,
        title: "Optical Transport",
        image: "/images/dcexpress/optical-transport.png",
        bullets: [
            "Optical Channel for customers who want to leverage and use their own network terminals for their capacity requirements.",
        ],
    },
];

const DC_EXPRESS_PRODUCTS = [
    {
        id: 1,
        title: "Ethernet",
        description:
            "Layer 2 capacity with offering of up to 100Gbps. With our interconnection to our global carrier partners, we can also connect you to key international Data Centers.",
        image: "/images/dcexpress/internet-string.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Fiber Channel",
        description:
            "For your Storage Area Networking, our Fiber Channel offering is the best solution as we support FC800 (10G), FC1600 (20G), and FC3200 (40G).",
        image: "/images/dcexpress/light-string.png",
        alignLeft: false,
    },
    {
        id: 3,
        title: "Optical Transport",
        description:
            "Optical channel for customers who want to leverage and use their own network terminals for their capacity requirements.",
        image: "/images/dcexpress/optical-transport.png",
        alignLeft: true,
    },
];

export const DCExpressModule = (): React.JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    DC
                                    <br />
                                    Express
                                </>
                            }
                            description="DC Express supports different protocols to connect data centers that host your IT services and network elements."
                            buttonLabel=""
                            backgroundImage="/images/dcexpress/mirror-window.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why DC Express"
                                backgroundColor="bg-white"
                                features={DC_EXPRESS_FEATURES}
                            />

                            <ProductsSection
                                title="DC Express Protocols"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={DC_EXPRESS_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};
