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

const MANAGED_WIFI_FEATURES = [
    {
        id: 1,
        title: "Resource Allocation",
        image: "/images/managedwifi/computer-screen.png",
        bullets: [
            "Intelligent bandwidth allocation ensures critical business applications always get priority",
            "Optimize network resources across all connected devices and departments",
        ],
    },
    {
        id: 2,
        title: "Operational Efficiency",
        image: "/images/managedwifi/receptionist.png",
        bullets: [
            "Reduce IT overhead with fully managed wireless infrastructure",
            "24/7 monitoring, maintenance, and support included",
        ],
    },
    {
        id: 3,
        title: "Reliable Network Provider",
        image: "/images/managedwifi/city.png",
        bullets: [
            "Enterprise-grade hardware with guaranteed uptime SLAs",
            "Nationwide coverage backed by Converge's fiber backbone",
        ],
    },
];

const MANAGED_WIFI_PRODUCTS = [
    {
        id: 1,
        alignLeft: true,
        title: "Hospitality",
        description:
            "Seamless high-speed WiFi for hotels, resorts, and hospitality venues — enhancing guest satisfaction.",
        image: "/images/managedwifi/waiter.png",
    },
    {
        id: 2,
        alignLeft: false,
        title: "Healthcare",
        description:
            "Secure, reliable wireless networks for hospitals and clinics — supporting critical medical systems.",
        image: "/images/managedwifi/doctor.png",
    },
    {
        id: 3,
        alignLeft: true,
        title: "Education",
        description:
            "Scalable WiFi solutions for schools and universities — connecting students and enabling digital learning.",
        image: "/images/managedwifi/teacher.png",
    },
];

export const ManagedWifiModule = (): React.JSX.Element => {
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
                                    Managed
                                    <br />
                                    WiFi
                                </>
                            }
                            description="Enterprise-grade wireless infrastructure managed end-to-end — ensuring seamless coverage, security, and performance across your entire organization."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/homepage-hero-global-network-2.png"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: Why Choose Managed WiFi */}
                            <DesignedForGuestSection
                                title="Why Choose Managed WiFi"
                                backgroundColor="bg-white"
                                features={MANAGED_WIFI_FEATURES}
                            />

                            {/* SECTION 3: Managed WiFi Solutions */}
                            <ProductsSection
                                title="Managed WiFi Solutions"
                                description={<></>}
                                backgroundColor="bg-[#1e1e19]"
                                titleColor="text-white"
                                descriptionColor="text-white"
                                cardTextColor="text-black"
                                useMobileGrid={true}
                                products={MANAGED_WIFI_PRODUCTS}
                            />

                            {/* SECTION 4: Testimonials */}
                            <TestimonialSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.managedWifi} />
        </>
    );
};
