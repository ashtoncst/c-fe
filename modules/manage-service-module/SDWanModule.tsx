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

const sdwanFeatures = [
  {
    id: 1,
    title: "Intelligent Traffic Routing",
    image: "/images/sdwan/technology-earth1.png",
    bullets: [
      "Dynamically routes traffic across multiple WAN links for optimal performance.",
      "Application-aware policies prioritize critical business traffic automatically.",
    ],
  },
  {
    id: 2,
    title: "Built-In Security",
    image: "/images/our-services/security/converge-security-on-premises-defenses.webp",
    bullets: [
      "End-to-end encryption across all enterprise sites and remote locations.",
      "Integrated firewall and threat detection keep your network protected.",
    ],
  },
  {
    id: 3,
    title: "Centralized Management",
    image: "/images/sdwan/sd-wan-mobile-banner.png",
    bullets: [
      "Single-pane-of-glass visibility across all branch locations and WAN links.",
      "Zero-touch provisioning reduces deployment time and operational overhead.",
    ],
  },
];

const sdwanProducts = [
  {
    id: 1,
    title: "SD-WAN\nEssentials",
    description:
      "Entry-level SD-WAN for growing businesses needing reliable multi-site connectivity with centralized management.",
    bullets: [
      "Up to 5 branch sites",
      "Dual WAN link aggregation",
      "Basic QoS and traffic shaping",
      "24/7 NOC monitoring",
    ],
    image: "/images/clouddirectconnect/female-work.jpg",
    alignLeft: true,
  },
  {
    id: 2,
    title: "SD-WAN\nAdvanced",
    description:
      "Comprehensive SD-WAN for mid-size enterprises requiring advanced security, analytics, and application performance.",
    bullets: [
      "Up to 20 branch sites",
      "Multi-link load balancing & failover",
      "Application-aware routing policies",
      "Integrated security & threat prevention",
    ],
    image: "/images/management/management-3.jpg",
    alignLeft: false,
  },
  {
    id: 3,
    title: "SD-WAN\nEnterprise",
    description:
      "Full-featured SD-WAN for large enterprises with complex multi-site topologies, cloud integration, and compliance needs.",
    bullets: [
      "Unlimited branch sites",
      "Cloud on-ramp for AWS, Azure, GCP",
      "Advanced analytics and SLA reporting",
      "Dedicated account management & SLA",
    ],
    image: "/images/homepage-hero-global-network-2.png",
    alignLeft: true,
  },
];

export const SDWanModule = (): React.JSX.Element => {
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
                  SD-WAN
                </>
              }
              description="Intelligent, software-defined networking that dynamically routes traffic for optimal performance, security, and cost efficiency across all your enterprise locations."
              buttonLabel="Download"
              onButtonClick={() => setModalOpen(true)}
              backgroundImage="/images/sdwan/technology-earth1.png"
            />

            <div className="relative z-10 md:-mt-20">
              <DesignedForGuestSection
                title="Why SD-WAN"
                features={sdwanFeatures}
                backgroundColor="bg-white"
              />

              <ProductsSection
                title="SD-WAN Service Plans"
                description={<></>}
                products={sdwanProducts}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                useMobileGrid={true}
              />

              <TestimonialSection />
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.sdWan} />
    </>
  );
};
