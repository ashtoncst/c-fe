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

const EIPL_FEATURES = [
    {
        id: 1,
        title: "Dedicated International Connectivity",
        image: "/images/exthernetinternationalprivateline/dedicated-global.png",
        bullets: [
            "Provides a secure and reliable private line between international branch offices and sites.",
        ],
    },
    {
        id: 2,
        title: "Layer 2 WAN Architecture",
        image: "/images/exthernetinternationalprivateline/layer.png",
        bullets: [
            "Delivers simplified yet efficient network routing with enhanced control and performance.",
        ],
    },
    {
        id: 3,
        title: "Trans-Asia and Trans-Pacific Coverage",
        image: "/images/exthernetinternationalprivateline/trans-asia.png",
        bullets: [
            "Leverages major subsea cable systems for wide regional and global reach.",
        ],
    },
];

const EIPL_PRODUCTS = [
    {
        id: 1,
        title: "International Private Line",
        description:
            "Secure, Scalable Ethernet Technology — combines the security of traditional private lines with the flexibility and ease of Ethernet infrastructure.",
        image: "/images/exthernetinternationalprivateline/ex-technology.png",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Global Enterprise WAN",
        description:
            "Dedicated cross-border connectivity for multinational enterprises requiring consistent, secure Layer 2 network access across Asia and the Pacific.",
        image: "/images/exthernetinternationalprivateline/dedicated-global.png",
        alignLeft: false,
    },
];

export const EthernetIntenationalPrivateLineModule = (): React.JSX.Element => {
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
                                    Ethernet International
                                    <br />
                                    Private Line
                                </>
                            }
                            description="Get dedicated connectivity to your international branch offices and sites with Layer 2 architecture for simplified routing, enhanced control, and Trans-Asia and Trans-Pacific coverage."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/exthernetinternationalprivateline/dedicated-global.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            <DesignedForGuestSection
                                title="Why Ethernet International Private Line"
                                backgroundColor="bg-white"
                                features={EIPL_FEATURES}
                            />

                            <ProductsSection
                                title="EIPL Service Plans"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={EIPL_PRODUCTS}
                            />

                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.ethernetInternationalPrivateLine} />
        </>
    );
};
