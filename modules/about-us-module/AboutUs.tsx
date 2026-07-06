"use client";

import { CustomSliderForTransport } from "@/components/custom-slider/CustomSliderForTransport";
import { Footer } from "@/components/layouts/Footer";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { ChevronButton } from "@/components/ui/ChevronButton";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";
import { RELATED_ARTICLES } from "@/modules/about-us-module/constants";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const SERVICES = [
  "Internet",
  "Transport",
  "Satellite",
  "Content",
  "Security",
  "Managed Services",
  "Colocation",
];

// CEO (index 1) is placed in the center column of the 3-col grid
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Maria Grace Uy",
    title: "Co-founder and President of Converge ICT Solutions since 2007",
    img: "/images/about-us/maria.png",
  },
  {
    id: 2,
    name: "Dennis Anthony H. Uy",
    title: "Co-founder and CEO of Converge ICT Solutions since 2007",
    img: "/images/about-us/athony.png",
    isCeo: true,
  },
  {
    id: 3,
    name: "Sherie Ng",
    title:
      "Chief Commercial Advisor, Converge Managing Director, Converge Singapore",
    img: "/images/about-us/Sherie.png",
  },
];

export const AboutUsModule = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [serviceSlide, setServiceSlide] = useState(0);
  const nextService = useCallback(() => setServiceSlide(p => (p + 1) % SERVICES.length), []);
  const prevService = useCallback(() => setServiceSlide(p => (p - 1 + SERVICES.length) % SERVICES.length), []);

  const [articleSlide, setArticleSlide] = useState(0);
  const nextArticle = useCallback(() => setArticleSlide(p => (p + 1) % RELATED_ARTICLES.length), []);
  const prevArticle = useCallback(() => setArticleSlide(p => (p - 1 + RELATED_ARTICLES.length) % RELATED_ARTICLES.length), []);

  return (
    <>
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader forceDarkLogo={true} />
        <main className="flex-grow w-full relative -mt-[90px]">
          <PageHeroWithMobileCard
            title={
              <>
                Innovating
                <br />
                the Future
              </>
            }
            description="We are a team of innovators who are passionate about building the future."
            backgroundImage="/images/about-us/about-us.png"
            buttonLabel="Download"
            onButtonClick={() => setModalOpen(true)}
            bottomGradient="none"
            titleClassName="!text-[#038F8D]"
            descriptionClassName="!text-black"
          />
          <div className="relative z-[40] md:-mt-20">
            <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] px-6 md:px-12 lg:px-16 xl:px-[120px] py-[24px] md:py-[32px]">

              {/* Description — tablet only (mobile sees it in white card; desktop sees it in hero) */}
              <p className={`font-dm-sans hidden md:block xl:hidden text-[16px] text-black leading-[24px] font-light text-center mb-10 md:mb-14 max-w-[560px] mx-auto`}>
                We are a team of innovators who are passionate about building the future.
              </p>

              {/* Vision & Mission */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 max-w-4xl mx-auto mb-16 md:mb-20">
                {/* Vision */}
                <AnimateOnScroll variant="slide-in-left" className="flex flex-col items-center md:items-start text-center md:text-left md:pr-16">
                  <span className={`font-dm-sans text-[#038F8D] text-[12px] font-semibold uppercase tracking-widest mb-3`}>
                    Vision
                  </span>
                  <h2 className={`font-funnel text-[35px] text-[#024645] font-light leading-[1.2] mb-4`}>
                    Technology
                    <br />
                    Leadership
                  </h2>
                  <p className={`font-dm-sans text-[15px] font-light leading-[1.7] text-black max-w-[320px]`}>
                    To be the foremost technology leader that powers the digital
                    journeys of tomorrow, uplifting the human spirit and moving
                    the country forward.
                  </p>
                </AnimateOnScroll>

                {/* Vertical divider (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
                {/* Horizontal rule (mobile) */}
                <hr className="md:hidden border-t border-gray-200" />

                {/* Mission */}
                <AnimateOnScroll variant="slide-in-right" className="flex flex-col items-center md:items-start text-center md:text-left md:pl-16">
                  <span className={`font-dm-sans text-[#038F8D] text-[12px] font-semibold uppercase tracking-widest mb-3`}>
                    Mission
                  </span>
                  <h2 className={`font-funnel text-[35px] text-[#024645] font-light leading-[1.2] mb-4`}>
                    Connecting
                    <br />
                    People
                  </h2>
                  <p className={`font-dm-sans text-[15px] font-light leading-[1.7] text-black max-w-[320px]`}>
                    To bridge the digital divide by connecting people, ideas,
                    and opportunities, empowering a smarter and more inclusive
                    future for all.
                  </p>
                </AnimateOnScroll>
              </div>

              {/* Our Services */}
              <div className="mt-16 md:mt-20">
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6">
                  <h2 className={`font-funnel text-[35px] font-light text-[#024645] leading-[1.2]`}>
                    Our Services
                  </h2>
                  <p className={`font-dm-sans mt-4 text-[15px] font-light leading-[1.7] text-black max-w-[398px] mx-auto`}>
                    Solutions built for everyday life, future growth, and
                    everything in between.
                  </p>
                </AnimateOnScroll>

                {/* Mobile + Tablet: 3-card carousel */}
                <div className="block xl:hidden w-full">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex-shrink-0">
                      <ChevronButton
                        direction="left"
                        onClick={prevService}
                        className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                      />
                    </div>
                    <div className="flex flex-1 gap-3">
                      {[0, 1, 2].map((offset) => {
                        const index = (serviceSlide + offset) % SERVICES.length;
                        return (
                          <div key={index} className="flex-1 relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-gray-100 shadow-sm">
                            <Image
                              src={`/images/about-us/about${index + 1}.png`}
                              alt={SERVICES[index]}
                              fill
                              sizes="30vw"
                              className="object-cover"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent flex items-start justify-center pt-3">
                              <h3 className={`text-white text-[14px] text-center px-2 leading-[1.2] drop-shadow-md font-medium font-funnel`}>
                                {SERVICES[index]}
                              </h3>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronButton
                        direction="right"
                        onClick={nextService}
                        className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop: existing slider */}
                <div className="xl:px-[96px] px-[72px] hidden xl:block">
                  <CustomSliderForTransport
                    isDisplayArrow={true}
                    slideToShow={4}
                    isCenter={true}
                    arrowStyle="dark"
                  >
                    {SERVICES.map((item, index) => (
                      <div key={index} className="w-full xl:px-[22px]">
                        <div className="w-full h-[399px] relative">
                          <Image
                            src={`/images/about-us/about${index + 1}.png`}
                            alt={item}
                            layout="fill"
                            priority={true}
                            fetchPriority="high"
                          />
                          <p className="text-white text-[28px] font-normal leading-[30px] tracking-[0%] absolute top-[27px] left-1/2 -translate-x-1/2">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CustomSliderForTransport>
                </div>
              </div>

              {/* Meet Our Team */}
              <div className="mt-16 md:mt-20">
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6">
                  <h2 className={`font-funnel text-[35px] font-light text-[#024645] leading-[1.2]`}>
                    Meet Our Team
                  </h2>
                </AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <AnimateOnScroll
                      key={member.id}
                      variant="fade-up"
                      delay={idx * 120}
                      className={`relative rounded-[35px] overflow-hidden shadow-md bg-white ${
                        member.isCeo ? "ring-2 ring-[#038F8D]/30 shadow-lg" : ""
                      }`}
                    >
                      <div className="w-full h-[300px] md:h-[260px] lg:h-[300px] relative">
                        <Image
                          src={member.img}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="px-6 py-5 border-t border-gray-100">
                        <p className={`font-dm-sans text-[#024645] text-[17px] font-medium leading-snug mb-1`}>
                          {member.name}
                        </p>
                        <p className={`font-dm-sans text-black text-[13px] font-light leading-[1.6]`}>
                          {member.title}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16 md:mt-20">
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6">
                  <h2 className={`font-funnel text-[35px] font-light text-[#024645] leading-[1.2]`}>
                    Related Articles
                  </h2>
                </AnimateOnScroll>

                {/* Tablet + Desktop: GloballyCertified-style grid */}
                <AnimateOnScroll variant="fade-up" delay={150} className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px] mx-auto">
                  {RELATED_ARTICLES.map((article) => (
                    <div key={article.id} className="flex flex-col h-full">
                      <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                        <Image
                          src={article.image.src}
                          alt={article.description}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className={`px-2 xl:px-4 font-dm-sans`}>
                        <p className="text-[14px] xl:text-[15px] text-black font-light xl:font-normal leading-[20px] xl:leading-[1.5]">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </AnimateOnScroll>

                {/* Mobile: GloballyCertified-style carousel */}
                <div className="block md:hidden w-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="flex-shrink-0">
                        <ChevronButton
                          direction="left"
                          onClick={prevArticle}
                          className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                        />
                      </div>
                      <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                        <Image
                          src={RELATED_ARTICLES[articleSlide].image.src}
                          alt={RELATED_ARTICLES[articleSlide].description}
                          fill
                          sizes="80vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronButton
                          direction="right"
                          onClick={nextArticle}
                          className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                        />
                      </div>
                    </div>
                    <div className={`px-8 font-dm-sans`}>
                      <p className="text-[14px] text-black leading-[1.5]">
                        {RELATED_ARTICLES[articleSlide].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
    <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.gbgOmnibus} />
    </>
  );
};
