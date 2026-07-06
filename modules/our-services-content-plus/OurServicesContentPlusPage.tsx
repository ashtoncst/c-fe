"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";
import { CONTENT_PLUS_GUEST_FEATURES } from "./content-plus-guest-features";

export const OurServicesContentPlusPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    {/* SECTION 1: Hero Section */}
                    <PageHeroWithMobileCard
                        title={
                            <>
                                Content
                                <br />
                                Plus
                            </>
                        }
                        description="More than internet, Converge Content Plus is a resilient, high-performance digital ecosystem that empowers you to exceed guest expectations and drive operational excellence."
                        buttonLabel="Download"
                        onButtonClick={() => setModalOpen(true)}
                        backgroundImage="/images/content-plus-hero-bg.png"
                        bottomGradient="none"
                    />

                    <div className="relative z-10 md:-mt-20">
                        {/* SECTION 2: Why Content Plus */}
                        <DesignedForGuestSection
                            title="Designed for Seamless Guest Experiences"
                            backgroundColor="bg-white"
                            features={CONTENT_PLUS_GUEST_FEATURES}
                        />

                        {/* SECTION 3: Content Plus Solutions */}
                        <ProductsSection
                            title="Live TV"
                            description={<></>}
                            backgroundColor="bg-[#1e1e19]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            headerClassName="mb-6 md:mb-20"
                            topGridCards={[
                                {
                                    id: 1,
                                    title: (
                                        <>
                                            Live Channel
                                            <br />
                                            Packages
                                        </>
                                    ),
                                    description: (
                                        <>
                                            Choice of Basic Channels or Premium Channels.
                                            <br />
                                            Watch your favorite live tv shows: Kids, Sports, News,
                                            <br />
                                            and General Entertainment
                                        </>
                                    ),
                                    image: "/images/our-services/content-plus/converge-content-plus-live-channel-packages.webp",
                                },
                                {
                                    id: 2,
                                    title: (
                                        <>
                                            Secure
                                            <br />
                                            Chromecast
                                        </>
                                    ),
                                    description: (
                                        <>
                                            No need for other equipment (dongle).
                                            <br />
                                            Stream your current movies and series
                                            <br />
                                            on the hotel TV.
                                        </>
                                    ),
                                    image: "/images/our-services/content-plus/converge-content-plus-secure-chromecast.webp",
                                },
                            ]}
                            products={[
                                {
                                    id: 1,
                                    title: "In Room Dining",
                                    description: (
                                        <>
                                            <strong>Virtually Host Your Menu</strong>
                                            <br />
                                            Instant food ordering with
                                            <br />
                                            real-time kitchen notification.
                                        </>
                                    ),
                                    image: "/images/contents/in room dining.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 2,
                                    title: "OTT Apps",
                                    description: "Netflix, Disney+, Youtube, and the like - all in one. Auto logout feature after guest check out or configurable on the interface. Quick log-in via OTT app QR.",
                                    image: "/images/our-services/content-plus/converge-content-plus-ott-apps.png",
                                    imageClassName: "object-contain p-8 md:p-12 xl:p-16",
                                    alignLeft: false,
                                },
                                {
                                    id: 3,
                                    title: "E-commerce\nIntegration", // Using white space CSS to handle line breaks if necessary, but will use ReactNode
                                    description: "Sleek digital in-room dining menu ordering seamlessly—delivered instantly to the kitchen via printer, email, or POS that can be integrated with the hotel property management system.",
                                    image: "/images/contents/ecommerceintegration.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 4,
                                    title: "Hotel Information",
                                    description: (
                                        <>
                                            <strong>Inform Guest About the Hotel</strong>
                                            <br />
                                            Display floor guides, restaurant and
                                            <br />
                                            facility information, running bills, special
                                            <br />
                                            promotions, and live flight and weather
                                            <br />
                                            updates—all customizable on the TV.
                                        </>
                                    ),
                                    image: "/images/contents/hotelinformation.png",
                                    alignLeft: false,
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.contentPlus} />
        </>
    );
};
