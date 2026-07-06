"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import DiagramImage from "../../public/images/ixexpress/DiagramImage.svg";
import DiagramImageMobile from "@/public/icons/DiagramImageMobile";
import { BROCHURE_URLS } from "@/config/brochures";

const IX_EXPRESS_FEATURES = [
    {
        id: 1,
        title: "Safe & Uninterrupted Access",
        image: "/images/ixexpress/shutterstock_203069.jpg",
        bullets: [
            "Guarantees safe and secure browsing for all your enterprise sites",
            "Ensures zero downtime and no loss of business at any time",
        ],
    },
    {
        id: 2,
        title: "Direct IXP Connectivity",
        image: "/images/ixexpress/shutterstock_171416.jpg",
        bullets: [
            "Direct connections to major global Internet Exchange Points (IXPs)",
            "No need for additional physical ports or cross-connections",
        ],
    },
    {
        id: 3,
        title: "Full IPL Capacity Ownership",
        image: "/images/ixexpress/shutterstock_2194844.jpg",
        bullets: [
            "Both technical and commercial advantages with your own dedicated IPL capacity",
            "International Point of Presence (POP) for global direct connectivity",
        ],
    },
];

export const IXExpressModule = (): React.JSX.Element => {
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
                                    IX
                                    <br />
                                    Express
                                </>
                            }
                            description="Unstoppable access, unmatched security — direct ISP connectivity built for enterprise scale."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/ixexpress/shuttersctock_255644.jpg"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Key Benefits */}
                            <DesignedForGuestSection
                                title="Why IX Express"
                                backgroundColor="bg-white"
                                features={IX_EXPRESS_FEATURES}
                            />

                            {/* SECTION 3: Connectivity Diagram */}
                            <section className="bg-white py-[24px] md:py-[32px]">
                                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[120px]">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-4 md:mb-6">
                                        <h2
                                            className={`text-[35px] font-light text-[#024645] leading-[1.2] max-w-[400px] font-funnel`}
                                        >
                                            Connectivity Benefits of an ISP with International Presence &amp; Capacity
                                        </h2>
                                        <p
                                            className={`text-[15px] md:text-[16px] text-black font-light leading-[1.7] max-w-[480px] font-dm-sans`}
                                        >
                                            Get both technical and commercial benefits of having your own IPL capacity and
                                            international POP — connect directly to well-known IXPs without the need for a
                                            separate physical port or cross-connection.
                                        </p>
                                    </div>
                                    {/* Desktop diagram */}
                                    <div className="hidden md:flex w-full justify-center items-center">
                                        <Image
                                            src={DiagramImage}
                                            alt="IX Express connectivity diagram showing ISP international presence and IXP connections"
                                        />
                                    </div>
                                    {/* Mobile diagram */}
                                    <div className="flex md:hidden w-full justify-center">
                                        <DiagramImageMobile />
                                    </div>
                                </div>
                            </section>

                            {/* Divider */}
                            <div className="border-t border-gray-100 mx-6 md:mx-12 lg:mx-[120px]" />

                            {/* SECTION 4: Testimonials */}
                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.ixExpress} />
        </>
    );
};
