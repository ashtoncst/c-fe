"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { Button } from "@/components/ui/Button";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { ChevronButton } from "@/components/ui/ChevronButton";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AnimateOnMount } from "@/components/ui/AnimateOnMount";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { BROCHURE_URLS } from "@/config/brochures";

const features = [
  {
    id: 1,
    title: "Connectivity Anywhere, Anytime",
    image: "/images/satellite/banner1.png",
    bullets: [
      "Delivers high-speed, low-latency satellite internet to remote, offshore, or hard-to-reach locations",
      "Enables operations in areas without terrestrial infrastructure, such as offshore facilities, rural branches, and disaster-prone areas",
    ],
  },
  {
    id: 2,
    title: "Business Continuity & Redundancy",
    image: "/images/satellite/2nd card.png",
    bullets: [
      "Acts as a powerful failover or backup link to fiber networks",
      "Ensures uninterrupted operations, protects revenue, and strengthens disaster recovery strategies",
    ],
  },
  {
    id: 3,
    title: "Rapid Deployment & Scalability",
    image: "/images/satellite/satelliteIntegrate.png",
    bullets: [
      "Quick to install and easy to scale across multiple sites globally",
      "Accelerates expansion plans and supports agile enterprise growth",
    ],
  },
];

const description = "Starlink is a satellite internet service powered by SpaceX, using low Earth orbit (LEO) satellites to provide high-speed, low-latency internet ideal for areas with limited or no terrestrial network access up to 220Mbps per terminal.";

export const SatelliteModule = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => { setCurrentSlide((prev) => Math.min(prev + 1, features.length - 1)); }, []);
  const prevSlide = useCallback(() => { setCurrentSlide((prev) => Math.max(prev - 1, 0)); }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
        <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
          <StickyHeader />
          <main className="flex-grow w-full relative -mt-[90px]">

            {/* Hero Section */}
            <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src="/images/satellite/hero-bg-satellite.png"
                  alt="Hero Background"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                  priority
                />
                {/* Top-darkening for nav readability */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,11,20,0.5) 0%, rgba(5,11,20,0.15) 25%, rgba(5,11,20,0) 45%)",
                  }}
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 20%, rgba(5,11,20,0.7) 70%, rgba(5,11,20,0.95) 100%)",
                  }}
                />
              </div>

              {/* Hero Content */}
              <div className="relative z-[10] w-full px-6 pb-[170px] md:px-12 xl:pb-0 xl:px-[120px] pt-[180px] md:pt-[160px] xl:pt-[180px] max-w-[1440px] text-white text-center md:text-left md:mr-auto">
                <AnimateOnMount delay={0} duration={600}>
                  <h1
                    className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 font-funnel`}
                  >
                    Starlink for
                    <br />
                    Business
                  </h1>
                </AnimateOnMount>
                {/* Description and button hidden on mobile/tablet, shown on desktop only */}
                <AnimateOnMount delay={150} duration={600}>
                  <div className="hidden xl:block">
                    <p className={`text-[18px] max-w-[480px] mb-10 font-light leading-[1.6] text-white/90 font-dm-sans`}>
                      {description}
                    </p>
                    <Button
                      variant="secondary"
                      size="md"
                      icon="none"
                      className="w-fit text-[14px]"
                      onClick={() => setModalOpen(true)}
                    >
                      Download
                    </Button>
                  </div>
                </AnimateOnMount>
              </div>

              {/* Satellite dish — desktop only */}
              <div className="absolute hidden xl:block z-[50] right-[12%] w-[500px] aspect-square bottom-[47px]">
                <Image
                  src="/images/satellite/rada.png"
                  alt="Starlink Terminal"
                  fill
                  sizes="500px"
                  className="object-contain"
                />
              </div>
            </section>

            {/* Mobile/Tablet: white card scooping up over the hero bottom */}
            <AnimateOnMount delay={0} duration={600}>
              <div className="xl:hidden bg-white rounded-t-[32px] relative z-[35] -mt-[70px] px-6 md:px-12 pt-8 pb-4 text-center">
                <div className={`text-[16px] text-[#000] leading-[24px] font-light mb-6 font-dm-sans`}>
                  {description}
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className={`bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-8 py-3 text-[14px] font-normal transition-colors font-dm-sans`}
                >
                  Download
                </button>
              </div>
            </AnimateOnMount>

            {/* Content Sections */}
            <div className="relative z-10 md:-mt-20">

              {/* Video Section */}
              <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden pt-20 md:pt-24 xl:pt-28 pb-20 md:pb-24 xl:pb-28 px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                  <div className="w-full mb-12">
                    <VideoPlayer
                      src="/videos/cnvrg-x-starlink.mp4"
                      title="Converge x Starlink for Business AVP"
                      className="rounded-[30px] shadow-2xl border border-gray-200"
                    />
                  </div>

                  <AnimateOnScroll variant="fade-up">
                    <h2
                      className={`text-[35px] text-[#024645] font-light text-center leading-[1.2] font-funnel`}
                    >
                      Starlink for Business: Enterprise Connectivity Without Limits
                    </h2>
                  </AnimateOnScroll>
                </div>
              </section>

              {/* Feature Cards Section */}
              <section className="w-full bg-white pb-20 md:pb-16 xl:pb-28 px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">

                  {/* Mobile: Single Card with Navigation */}
                  <div className="block md:hidden w-full">
                    <div className="flex flex-col h-full">
                      {/* Card + Chevrons row — chevrons fully outside the card */}
                      <div className="flex items-center gap-2 mb-8">
                        {/* Left Chevron */}
                        <div className="flex-shrink-0">
                          <ChevronButton
                            direction="left"
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                          />
                        </div>

                        {/* Image Container with Title Overlay */}
                        <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                          <Image
                            src={features[currentSlide].image}
                            alt={features[currentSlide].title}
                            fill
                            sizes="80vw"
                            className="object-cover"
                          />
                          {/* Title Overlay at Top */}
                          <div className="absolute inset-0 flex items-start justify-center pt-4">
                            <h3
                              className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                            >
                              {features[currentSlide].title}
                            </h3>
                          </div>
                        </div>

                        {/* Right Chevron */}
                        <div className="flex-shrink-0">
                          <ChevronButton
                            direction="right"
                            onClick={nextSlide}
                            disabled={currentSlide === features.length - 1}
                          />
                        </div>
                      </div>

                      {/* Bullets below the image container */}
                      <div className={`px-8 font-dm-sans`}>
                        <ul className="space-y-3">
                          {features[currentSlide].bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                              <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tablet/Desktop: 3-Column Grid */}
                  <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature, idx) => (
                      <AnimateOnScroll key={feature.id} variant="fade-up" delay={idx * 120}>
                      <div className="flex flex-col h-full">
                        <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            sizes="33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                            <h3 className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}>
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <div className={`px-2 xl:px-4 font-dm-sans`}>
                          <ul className="space-y-2 xl:space-y-3">
                            {feature.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                                <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      </AnimateOnScroll>
                    ))}
                  </div>

                </div>
              </section>

            </div>
          </main>

          <div className="lg:px-20">
            <Footer isDisplayBanner={true} />
          </div>
        </div>
      </div>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.satellite} />
    </>
  );
};
