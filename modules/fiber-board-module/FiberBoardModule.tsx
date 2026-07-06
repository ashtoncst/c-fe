"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const FiberBoardModule = () => {
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
                                    Broadband
                                </>
                            }
                            description="Power your daily operations with high-speed, 100% fiber connectivity designed for consistent performance and professional-grade reliability."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/fiberboard/fiber-board-banner-tablet.png"
                            bottomGradient="none"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Why Our Fiber Broadband (3-card features) */}
                            <DesignedForGuestSection
                                title="Why Our Fiber Broadband"
                                backgroundColor="bg-white"
                                features={[
                                    {
                                        id: 1,
                                        title: "High-speed Internet",
                                        image: "/images/connect.png",
                                        bullets: [
                                            "Delivering stable, high-speed internet for homes and businesses",
                                            "Pure fiber infrastructure for unmatched bandwidth and stability",
                                        ],
                                    },
                                    {
                                        id: 2,
                                        title: "Reliability",
                                        image: "/images/block.png",
                                        bullets: [
                                            "Secure, reliable, and flexible connections to link your branches, offices, and data centers",
                                            "Always-on protection for mission-critical applications",
                                        ],
                                    },
                                    {
                                        id: 3,
                                        title: "Dedicated & Priority Support",
                                        image: "/images/receptionist2.png",
                                        bullets: [
                                            "Dedicated technical support team",
                                            "Priority incident response and resolution",
                                        ],
                                    },
                                ]}
                            />

                            {/* SECTION 3: Testimonials (renders its own section + heading) */}
                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.fiberBroadband} />
        </>
    );
};
