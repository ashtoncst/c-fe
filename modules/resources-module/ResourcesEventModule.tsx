"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { PromoCard } from "./components/PromoCard";
import { PROMO_CARD_RESOURCE_EVENT } from "./constants/ResourceEvent.constant";

export const ResourcesEventModule = () => {
  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader />
        <main className="flex-grow w-full relative -mt-[90px]">
          <PageHeroWithMobileCard
            title="Events"
            description="Discover upcoming and past Converge ICT Solutions events."
            backgroundImage="/images/resources/event/banner-desktop.png"
            buttonLabel=""
            bottomGradient="none"
          />
          <div className="relative z-10 md:-mt-20">
            <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
              <div className="max-w-[1440px] mx-auto flex flex-col items-center w-full">
                <PromoCard data={PROMO_CARD_RESOURCE_EVENT} />
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
