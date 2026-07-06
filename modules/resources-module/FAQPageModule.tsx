"use client";

import { FooterDark } from "@/components/layouts/FooterDark";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { ResourcesFAQSection } from "./components/ResourcesFAQSection";

export const FAQPageModule = () => {
  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader forceDarkLogo={true} isAlwaysWhite={true} />

        <main className="flex-grow w-full">
          <div className="pt-0 md:pt-4 xl:pt-12 pb-6 md:pb-8 xl:pb-20 px-6 md:px-8 lg:px-20 max-w-[1400px] mx-auto w-full">
            <ResourcesFAQSection />
          </div>
        </main>

        <FooterDark />
      </div>
    </div>
  );
};
