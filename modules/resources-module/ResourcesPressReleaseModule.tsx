"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { PromoCardRelease } from "./components/PromoCardRelease";
import { ChevronButton } from "@/components/ui/ChevronButton";
import {
  FEATURED_ARTICLES_RESOURCE_PRESS_RELEASE,
  PROMO_CARD_RESOURCE_PRESS_RELEASE,
} from "./constants/ResourcePressRelease.constant";

export const ResourcesPressReleaseModule = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const articles = FEATURED_ARTICLES_RESOURCE_PRESS_RELEASE;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  }, [articles.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  }, [articles.length]);

  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader />
        <main className="flex-grow w-full relative -mt-[90px]">
          <PageHeroWithMobileCard
            title="Press Release"
            description="The latest news and announcements from Converge ICT Solutions."
            backgroundImage="/images/resources/press-release/banner-desktop.png"
            buttonLabel=""
            bottomGradient="none"
          />
          <div className="relative z-10 mt-4 md:mt-0 xl:-mt-20">
            <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
              <div className="max-w-[1440px] mx-auto flex flex-col items-center w-full">
                <PromoCardRelease data={PROMO_CARD_RESOURCE_PRESS_RELEASE} />

                <div className="border-t border-gray-200 mt-16 md:mt-20 mb-12 md:mb-16 w-full" />

                <h2
                  className={`font-funnel text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] mb-4 md:mb-6`}
                >
                  Featured Articles
                </h2>

                {/* Mobile + Tablet: chevron carousel */}
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="flex-shrink-0">
                        <ChevronButton
                          direction="left"
                          onClick={prevSlide}
                          className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                        />
                      </div>
                      <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                        <Image
                          src={articles[currentSlide].image}
                          alt={articles[currentSlide].title}
                          fill
                          sizes="80vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent flex items-start justify-center pt-4">
                          <h3
                            className={`text-white text-[22px] text-center px-8 leading-[1.1] drop-shadow-md font-medium font-funnel`}
                          >
                            {articles[currentSlide].title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronButton
                          direction="right"
                          onClick={nextSlide}
                          className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                        />
                      </div>
                    </div>
                    <div className={`px-8 font-dm-sans`}>
                      <p className="text-[14px] text-black leading-[1.5]">
                        {articles[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop: 3-column grid */}
                <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                  {articles.map((article) => (
                    <div key={article.id} className="flex flex-col h-full">
                      <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent flex items-start justify-center pt-4 xl:pt-10">
                          <h3
                            className={`text-white text-[24px] text-center px-6 leading-[30px] drop-shadow-md font-normal lg:hidden font-dm-sans`}
                          >
                            {article.title}
                          </h3>
                          <h3
                            className={`text-white text-[28px] text-center px-8 leading-[1.1] drop-shadow-md font-medium hidden lg:block font-funnel`}
                          >
                            {article.title}
                          </h3>
                        </div>
                      </div>
                      <div className={`px-2 xl:px-4 font-dm-sans`}>
                        <p className="text-[14px] xl:text-[15px] text-black font-light xl:font-normal leading-[20px] xl:leading-[1.5]">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
