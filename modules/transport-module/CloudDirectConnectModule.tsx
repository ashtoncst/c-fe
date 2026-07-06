"use client";

import React from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

const CLOUD_DIRECT_FEATURES = [
    {
        id: 1,
        title: "Private and Dedicated Connection",
        image: "/images/clouddirectconnect/sercure-internet.png",
        bullets: [
            "Ensures secure and exclusive access between enterprise and cloud providers.",
        ],
    },
    {
        id: 2,
        title: "High Throughput Performance",
        image: "/images/clouddirectconnect/fast-speed.png",
        bullets: [
            "Delivers fast and reliable data transfer to support enterprise workloads.",
        ],
    },
    {
        id: 3,
        title: "Direct Cloud Integration",
        image: "/images/clouddirectconnect/brain.png",
        bullets: [
            "Allows interaction with CSPs as if they are part of your internal network.",
        ],
    },
];

const CLOUD_DIRECT_PRODUCTS = [
    {
        id: 1,
        title: "WAN Extension",
        description:
            "WAN Extension Capability — seamlessly extends enterprise WAN to public cloud environments for unified network management.",
        image: "/images/clouddirectconnect/electric-towel.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Enterprise Cloud Access",
        description:
            "Private, dedicated high-throughput connections to leading cloud providers, bypassing the public internet for superior reliability and security.",
        image: "/images/clouddirectconnect/technology.jpg",
        alignLeft: false,
    },
];

export const CloudDirectConnectModule = (): React.JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    Cloud Direct
                                    <br />
                                    Connect
                                </>
                            }
                            description="Converge Ethernet Cloud Direct Connect provides a private, dedicated and high-throughput network connection between enterprise private network and public Cloud Service Providers (CSP)."
                            buttonLabel=""
                            backgroundImage="/images/clouddirectconnect/technology.jpg"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why Cloud Direct Connect"
                                backgroundColor="bg-white"
                                features={CLOUD_DIRECT_FEATURES}
                            />

                            <ProductsSection
                                title="Cloud Direct Connect Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={CLOUD_DIRECT_PRODUCTS}
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
