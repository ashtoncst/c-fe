"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import DiagramIPTImage from "../../public/images/iptexpress/DiagramIPTExpress.svg";
import DiagramIPTExpressMobile from "@/public/icons/DiagramIPTExpressMobile";
import { BROCHURE_URLS } from "@/config/brochures";

const IPT_EXPRESS_FEATURES = [
    {
        id: 1,
        title: "Ability to Select",
        image: "/images/iptexpress/shutterstock_151587.png",
        bullets: [
            "Choose from available IP transit locations: US, Hong Kong, and Singapore",
            "Select based on your network's traffic patterns and target destinations",
        ],
    },
    {
        id: 2,
        title: "Flexible Resource Allocation",
        image: "/images/iptexpress/shutterstock_245709.jpg",
        bullets: [
            "Get different bandwidth allocations for each of your target destinations",
            "Unlike typical DIA or IP Transit — true flexibility for modern networks",
        ],
    },
    {
        id: 3,
        title: "Direct Peering In No Time",
        image: "/images/iptexpress/shutterstock.png",
        bullets: [
            "Peer directly to global ISPs using our vast IPL capacity",
            "Readily available 100G interconnections to target Global ISPs",
        ],
    },
];

export const IPTExpressModule = (): React.JSX.Element => {
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
                                    IPT
                                    <br />
                                    Express
                                </>
                            }
                            description="Agile transit for modern networks — total control over routes, bandwidth, and destinations."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/iptexpress/converge.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Key Benefits */}
                            <DesignedForGuestSection
                                title="Why IPT Express"
                                backgroundColor="bg-white"
                                features={IPT_EXPRESS_FEATURES}
                            />

                            {/* SECTION 3: Route Control Diagram */}
                            <section className="bg-white py-[24px] md:py-[32px]">
                                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[120px]">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-4 md:mb-6">
                                        <h2
                                            className={`text-[35px] font-light text-[#024645] leading-[1.2] max-w-[420px] font-funnel`}
                                        >
                                            For ISPs and businesses with their own AS and IPs, IPT Express offers:
                                        </h2>
                                        <p
                                            className={`text-[15px] md:text-[16px] text-black font-light leading-[1.7] max-w-[480px] font-dm-sans`}
                                        >
                                            Fast, reliable IP transit with low-latency connectivity, full BGP support, and
                                            enhanced network control — built for performance and scale. Fully control your
                                            upstream utilization and optimize resources based on your network demand.
                                        </p>
                                    </div>
                                    {/* Desktop diagram */}
                                    <div className="hidden md:flex w-full justify-center items-center">
                                        <Image
                                            src={DiagramIPTImage}
                                            alt="IPT Express network diagram showing route control and AS connectivity"
                                        />
                                    </div>
                                    {/* Mobile diagram */}
                                    <div className="flex md:hidden w-full justify-center">
                                        <DiagramIPTExpressMobile />
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
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.iptExpress} />
        </>
    );
};
