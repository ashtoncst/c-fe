"use client";
import React from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

export const ManagedSurveillanceModule = (): React.JSX.Element => {
  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
        <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
          <StickyHeader />
          <main className="flex-grow w-full relative -mt-[90px]">
            <PageHeroWithMobileCard
              backgroundImage="/images/security/herobg.png"
              title={
                <>
                  Managed
                  <br />
                  Surveillance
                </>
              }
              description="AI-powered video surveillance and monitoring solutions — protecting your facilities, assets, and people with intelligent threat detection and 24/7 management."
              buttonLabel=""
            />
            <div className="relative z-10 md:-mt-20">
              <DesignedForGuestSection
                title="Why Managed Surveillance"
                backgroundColor="bg-white"
                features={[
                  {
                    id: 1,
                    title: "AI-Powered Analytics",
                    image: "/images/managedsurveillance/1st column.png",
                    bullets: [
                      "Real-time intelligent threat detection and facial recognition.",
                      "Automated alerts for suspicious activity, loitering, and perimeter breaches.",
                      "Behavioral analysis that reduces false alarms and prioritizes genuine threats.",
                    ],
                  },
                  {
                    id: 2,
                    title: "24/7 Remote Monitoring",
                    image: "/images/managedsurveillance/2nd column.png",
                    bullets: [
                      "Round-the-clock monitoring by trained security operations center professionals.",
                      "Rapid incident response with direct coordination to on-site security teams.",
                      "Live video feeds accessible from any device, anywhere in the world.",
                    ],
                  },
                  {
                    id: 3,
                    title: "Compliance & Data Retention",
                    image: "/images/managedsurveillance/3rd column.png",
                    bullets: [
                      "Secure cloud storage with configurable retention periods to meet regulatory requirements.",
                      "Audit-ready footage retrieval and chain-of-custody documentation.",
                      "End-to-end encrypted video streams compliant with data privacy standards.",
                    ],
                  },
                ]}
              />
              <ProductsSection
                title="Surveillance Solutions"
                description={<></>}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={[
                  {
                    id: 1,
                    title: "SMB Surveillance",
                    description:
                      "Affordable, scalable camera systems designed for small and medium businesses. Easy deployment with cloud-based management and remote access.",
                    bullets: [
                      "Plug-and-play IP camera setup",
                      "Cloud video storage and playback",
                      "Mobile app for remote monitoring",
                    ],
                    image: "/images/managedsurveillance/safety.png",
                    alignLeft: true,
                  },
                  {
                    id: 2,
                    title: "Enterprise Surveillance",
                    description:
                      "High-density camera networks with AI analytics built for large campuses, industrial facilities, and multi-site enterprises requiring centralized oversight.",
                    bullets: [
                      "Multi-site unified management dashboard",
                      "AI-driven anomaly detection and alerts",
                      "Integration with access control and HR systems",
                    ],
                    image: "/images/managedsurveillance/global.png",
                    alignLeft: false,
                  },
                  {
                    id: 3,
                    title: "Retail & Public Space",
                    description:
                      "Purpose-built surveillance for retail environments and public areas, combining loss prevention analytics with crowd management insights.",
                    bullets: [
                      "People-counting and heat-mapping analytics",
                      "Point-of-sale exception reporting",
                      "License plate recognition for parking areas",
                    ],
                    image: "/images/managedsurveillance/pos.png",
                    alignLeft: true,
                  },
                ]}
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
