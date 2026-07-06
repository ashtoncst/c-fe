"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const OurServicesDIAPage = () => {
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
                                Dedicated
                                <br />
                                Internet Access
                            </>
                        }
                        description="Power your business with exclusive, unshared fiber connectivity that delivers 100% committed symmetrical speeds designed to support latency-sensitive applications and mission-critical operations."
                        buttonLabel="Download"
                        onButtonClick={() => setModalOpen(true)}
                        backgroundImage="/images/dedicatedinternetaccess/herobg.png"
                        bottomGradient="none"
                    />

                    <div className="relative z-10 md:-mt-20">
                        {/* SECTION 2: Why Our Dedicated Internet */}
                        <DesignedForGuestSection
                            title="Why Our Dedicated Internet Access"
                            backgroundColor="bg-white"
                            features={[
                                {
                                    id: 1,
                                    title: "DIA Premium",
                                    image: "/images/dedicatedinternetaccess/1st.png",
                                    bullets: [
                                        "Enterprise-grade, always-on internet with multiple upstream IPs",
                                        "Intelligent best-route optimization for low latency and superior redundancy",
                                        "Perfect for mission-critical operations requiring reliable global reach",
                                    ],
                                },
                                {
                                    id: 2,
                                    title: "DIA Clean Pipe (Anti-DDoS)",
                                    image: "/images/dedicatedinternetaccess/2nd.png",
                                    bullets: [
                                        "Guarantees safe and secure browsing for all your enterprise sites",
                                        "Ensures no loss of business at all times with always-on protection",
                                    ],
                                },
                                {
                                    id: 3,
                                    title: "IX Express",
                                    image: "/images/dedicatedinternetaccess/3rd.png",
                                    bullets: [
                                        "Direct connection to major local and international Internet Exchanges like JPIX, Equinix, AMS-IX",
                                        "Faster routing, lower latency, and optimized global traffic",
                                    ],
                                },
                            ]}
                        />

                        {/* SECTION 3: DIA Solutions */}
                        <ProductsSection
                            title="Dedicated Internet Access Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1e1e19]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            products={[
                                {
                                    id: 1,
                                    title: "DIA Premium",
                                    description: "Converge DIA Premium delivers enterprise-grade, always-on internet with multiple upstream IPs and intelligent best-route optimization. Enjoy low latency, superior redundancy, and reliable global reach—perfect for mission-critical operations.",
                                    image: "/images/dedicatedinternetaccess/1stlist.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 2,
                                    title: "DIA Basic",
                                    description: "An economical dedicated internet solution for businesses needing reliable connectivity, with stable performance and essential redundancy ideal for cost-conscious enterprises.",
                                    image: "/images/dedicatedinternetaccess/2ndlist.png",
                                    alignLeft: false,
                                },
                                {
                                    id: 3,
                                    title: "DIA Bandwidth-on-Demand",
                                    description: "Allows customers to have access to previous bandwidth based on their dynamic demands. This gives customers the capability to burst up to 2x their subscribed bandwidth whenever they need it.",
                                    image: "/images/dedicatedinternetaccess/3rdlist.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 4,
                                    title: "DIA Clean Pipe (with Anti-DDos)",
                                    description: "Guarantees safe and secure browsing for all your enterprise sites, ensuring no loss of business at all times.",
                                    image: "/images/dedicatedinternetaccess/4thlist.png",
                                    alignLeft: false,
                                },
                                {
                                    id: 5,
                                    title: "International Private Line + Internet Protocol",
                                    description: "Combining international private line connectivity with internet protocol for robust, high-performance global connectivity.",
                                    image: "/images/dedicatedinternetaccess/5thlist.png",
                                    alignLeft: true,
                                },
                                {
                                    id: 6,
                                    title: "IPT Express",
                                    description: "IPT Express is designed for ISPs and enterprises that own their own Autonomous System (AS) number and IP prefixes. It delivers high-performance IP Transit connectivity enabling direct internet routing control, optimized traffic management, and scalable global reach.",
                                    image: "/images/dedicatedinternetaccess/6thlist.png",
                                    alignLeft: false,
                                },
                                {
                                    id: 7,
                                    title: "IX Express",
                                    description: "IX Express lets customers connect directly and instantly to major local and international Internet Exchanges like JPIX, Equinix, AMS-IX, and more. Enjoy faster routing, lower latency, and optimized global traffic for critical internet and cloud applications.",
                                    image: "/images/dedicatedinternetaccess/7thlist.png",
                                    imageClassName: "object-contain",
                                    imageContainerClassName: "bg-[#024645]",
                                    alignLeft: true,
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.dedicatedInternetAccess} />
        </>
    );
};
