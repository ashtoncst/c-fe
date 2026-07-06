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

const GOPN_FEATURES = [
  { id: 1, title: "Placeholder Feature 1", image: "/images/distributedsetup/1stcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
  { id: 2, title: "Placeholder Feature 2", image: "/images/distributedsetup/2ndcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
  { id: 3, title: "Placeholder Feature 3", image: "/images/distributedsetup/3rdcard.png", bullets: ["Placeholder benefit one", "Placeholder benefit two"] },
];

const GOPN_PRODUCTS = [
  { id: 1, title: "Placeholder Product 1", description: "Placeholder description for this product.", image: "/images/distributed-setup-hero-bg.png", alignLeft: true },
  { id: 2, title: "Placeholder Product 2", description: "Placeholder description for this product.", image: "/images/homepage-hero-global-network-2.png", alignLeft: false },
];

export const GOPNModule = (): React.JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
        <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
          <StickyHeader />
          <main className="flex-grow w-full relative -mt-[90px]">
            <PageHeroWithMobileCard
              title="Transport via GPON"
              description="A dedicated point-to-point network offering a secure and private WAN connection using our pure fiber GPON network."
              buttonLabel="Download"
              onButtonClick={() => setModalOpen(true)}
              backgroundImage="/images/distributed-setup-hero-bg.png"
              bottomGradient="none"
            />
            <div className="relative z-10 md:-mt-20">
              <DesignedForGuestSection title="Why Transport via GPON" backgroundColor="bg-white" features={GOPN_FEATURES} />
              <ProductsSection
                title="GPON Service Plans"
                description={<></>}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={GOPN_PRODUCTS}
              />
              <TestimonialSection />
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.distributedSetup} />
    </>
  );
};
