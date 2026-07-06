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

const SEAH2X_FEATURES = [
  { id: 1, title: "Placeholder Feature 1", image: "/images/distributedsetup/1stcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
  { id: 2, title: "Placeholder Feature 2", image: "/images/distributedsetup/2ndcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
  { id: 3, title: "Placeholder Feature 3", image: "/images/distributedsetup/3rdcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
];

const SEAH2X_PRODUCTS = [
  { id: 1, title: "Placeholder Product 1", description: "Placeholder description for this product.", image: "/images/distributed-setup-hero-bg.png", alignLeft: true },
  { id: 2, title: "Placeholder Product 2", description: "Placeholder description for this product.", image: "/images/homepage-hero-global-network-2.png", alignLeft: false },
];

export const SEAH2XModule = (): React.JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
        <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
          <StickyHeader />
          <main className="flex-grow w-full relative -mt-[90px]">
            <PageHeroWithMobileCard
              title="SEA-H2X"
              description="Build your intra-Asia backbone with a submarine cable system spanning key economies, unlocking reliable high-speed routes for Asia's digital growth."
              buttonLabel="Download"
              onButtonClick={() => setModalOpen(true)}
              backgroundImage="/images/distributed-setup-hero-bg.png"
              bottomGradient="none"
            />
            <div className="relative z-10 md:-mt-20">
              <DesignedForGuestSection title="Why SEA-H2X" backgroundColor="bg-white" features={SEAH2X_FEATURES} />
              <ProductsSection
                title="SEA-H2X Plans"
                description={<></>}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={SEAH2X_PRODUCTS}
              />
              <TestimonialSection />
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.cableSystem} />
    </>
  );
};
