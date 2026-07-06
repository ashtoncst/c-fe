"use client";

import { useState } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const OurServicesDataPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader />
                <main className="flex-grow w-full relative -mt-[90px]">
                    {/* SECTION 1: Hero Section */}
                    <PageHeroWithMobileCard
                        title="Data"
                        description="Future-proof your inter-site operations with MEF-certified high-capacity data connectivity designed for seamless performance and protocol reliability."
                        buttonLabel="Download"
                        onButtonClick={() => setModalOpen(true)}
                        backgroundImage="/images/data/herobg.png"
                        bottomGradient="none"
                    />

                    <div className="relative z-10 md:-mt-20">
                        {/* SECTION 2: Why Our Data Solutions */}
                        <DesignedForGuestSection
                            title="Why Our Data Solutions"
                            backgroundColor="bg-white"
                            features={[
                                {
                                    id: 1,
                                    title: "Global Standardization & Interoperability",
                                    image: "/images/data/1stcard.png",
                                    bullets: [
                                        "MEF 3.0 certification ensures your Ethernet services meet international standards, enabling seamless interconnection with global partners and carriers",
                                        "Simplifies multi-site and cross-border deployments for multinational enterprises",
                                    ],
                                },
                                {
                                    id: 2,
                                    title: "Guaranteed Performance & Reliability",
                                    image: "/images/data/2ndcard.png",
                                    bullets: [
                                        "Certified services adhere to strict SLAs for latency, uptime, and packet loss, delivering predictable, high-performance connectivity",
                                        "Ensures mission-critical applications, cloud services, and business operations run smoothly without disruption",
                                    ],
                                },
                                {
                                    id: 3,
                                    title: "Enterprise-Grade Credibility & Competitive Edge",
                                    image: "/images/data/3rdcard.png",
                                    bullets: [
                                        "MEF 3.0 validation signifies verified quality, security, and compliance, differentiating your network in RFPs and client presentations",
                                        "Builds trust with stakeholders, supports premium service positioning, and strengthens market competitiveness",
                                    ],
                                },
                            ]}
                        />

                        {/* SECTION 3: International Data Solutions */}
                        <ProductsSection
                            title="International Data Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1D1D1B]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            headerClassName="mb-6"
                            products={[
                                {
                                    id: 1,
                                    title: "IPLC/IEPL",
                                    description: "Get dedicated connectivity to your international branch offices and areas with Converge Ethernet. This service connects up to 1 or 2 WAN service goes through various Trans-Asia and Trans-Pacific cable systems, so you can get the security of traditional lines with the simplicity and scalability of Ethernet technology.",
                                    image: "/images/data/1stlist.png",
                                    alignLeft: true,
                                    href: "/connectivity/transport/ethernet-international-private-line",
                                },
                                {
                                    id: 2,
                                    title: "Cloud Direct Connect",
                                    description: "Converge Cloud Direct Connect service provides a private, dedicated and high-throughput network connection between enterprise private network and public Cloud Service Providers (CSP). This service allows enterprise businesses to interact with these clouds privately as if part of their wide area network (WAN).",
                                    image: "/images/data/2ndlist.png",
                                    alignLeft: false,
                                    href: "/connectivity/transport/cloud-direct-connect",
                                },
                            ]}
                        />

                        {/* SECTION 4: Domestic Data Solutions */}
                        <ProductsSection
                            title="Domestic Data Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1D1D1B]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            headerClassName="mb-6"
                            products={[
                                {
                                    id: 1,
                                    title: "eLine, eLAN, eTree, and eAccess",
                                    description: "A dedicated, private network connectivity service that securely links various offices together using MPLS technology, running on layer 2.",
                                    image: "/images/data/3rdlist.png",
                                    alignLeft: true,
                                    href: "/connectivity/transport/metro-ethernet",
                                },
                                {
                                    id: 2,
                                    title: "IP-VPN (Layer 3)",
                                    description: "A dedicated private network connectivity service that securely links remote offices together using MPLS technology running on layer 3.",
                                    image: "/images/data/4thlist.png",
                                    alignLeft: false,
                                    href: "/connectivity/transport/ip-vpn",
                                },
                                {
                                    id: 3,
                                    // Transport via GPON detail page hidden (for future use) — no clickable link.
                                    title: "Transport via GPON",
                                    description: "FASTER is a layer 3 (IP) VPN service that offers secure and private WAN connectivity to customer's business offices, branches and remote sites using our pure fiber GPON Network.",
                                    image: "/images/data/5thlist.png",
                                    alignLeft: true,
                                },
                            ]}
                        />

                        {/* SECTION 5: Optical Transport Network Solutions */}
                        <ProductsSection
                            title="Optical Transport Network Solutions"
                            description={<></>}
                            backgroundColor="bg-[#1D1D1B]"
                            titleColor="text-white"
                            descriptionColor="text-[#cccccc]"
                            cardTextColor="text-black"
                            useMobileGrid={true}
                            headerClassName="mb-6"
                            products={[
                                {
                                    id: 1,
                                    title: "Metro Lambda",
                                    description: "Runs through a Globally Certified Carrier Ethernet Member network which provides high capacity and secured Wide Area Network (WAN) connectivity between geographically separated sites to ensure that your business continues with business-level quality. The consistent and reliable connectivity of this premium service enables seamless collaboration across different locations.",
                                    image: "/images/data/6thlist.png",
                                    alignLeft: true,
                                    href: "/connectivity/transport/optical-transport-network",
                                },
                                {
                                    id: 2,
                                    title: "Data Center Express",
                                    description: "DC Express supports different protocols to connect data centers that host your IT Services and Network Elements.",
                                    image: "/images/data/7thlist.png",
                                    alignLeft: false,
                                    href: "/connectivity/transport/dc-express",
                                },
                                {
                                    id: 3,
                                    title: "Cable Landing Express",
                                    description: "This is a dedicated ethernet service running over the DWDM network to provide seamless transport connectivity between cable landing stations. It is a special service for customers who own cable capacity, to use the Philippines as a transit point to Asia and the US.",
                                    image: "/images/data/8thlist.png",
                                    alignLeft: true,
                                    href: "/connectivity/transport/cls-express",
                                },
                            ]}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.data} />
        </>
    );
};
