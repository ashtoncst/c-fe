"use client";

import React from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { FooterDark } from "@/components/layouts/FooterDark";
import { HeroCarousel } from "./components/HeroCarousel";
import { OurSolutionCarousel } from "./components/OurSolutionCarousel";
import { OurServicesSection } from "./components/OurServicesSection";
import { OurPartnersSection } from "./components/OurPartnersSection";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

export const LandingPage = () => {
  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader />
        <main className="flex-grow w-full relative -mt-[90px]">
          <HeroCarousel />
          <OurSolutionCarousel />
          <OurServicesSection />
          <OurPartnersSection />
          <TestimonialSection />
        </main>
        <FooterDark />
      </div>
    </div>
  );
};
