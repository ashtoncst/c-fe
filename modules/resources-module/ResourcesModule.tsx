"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { PromoCard } from "./components/PromoCard";
import { ContentCard } from "@/components/card/ContentCard";
import { CustomSlider } from "@/components/custom-slider/CustomSlider";
import {
  FEATURED_ARTICLES_RESOURCE,
  PROMO_CARD_RESOURCE,
} from "./constants/Resource.constant";

export const ResourcesModule = () => {
  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader />
        <main className="flex-grow w-full relative -mt-[90px]">
          <PageHeroWithMobileCard
            title="Blog"
            description="Explore insights, news, and stories from Converge ICT Solutions."
            backgroundImage="/images/resources/banner-desktop.png"
            buttonLabel=""
            bottomGradient="none"
          />
          <div className="relative z-[40] md:-mt-20">
            <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] px-6 md:px-12 lg:px-16 xl:px-[120px] py-[24px] md:py-[32px]">
              <PromoCard data={PROMO_CARD_RESOURCE} />

              <div className="border-t border-gray-200 mt-16 md:mt-20 mb-12 md:mb-16" />

              <h2
                className={`font-funnel text-[35px] font-light text-[#024645] text-center mb-4 md:mb-6 leading-[1.2]`}
              >
                Featured Articles
              </h2>

              {/* Desktop grid */}
              <div className="hidden md:flex gap-8 lg:gap-12 justify-center custom-content-card-resource">
                {FEATURED_ARTICLES_RESOURCE.map((featuredArticle) => (
                  <ContentCard
                    id={featuredArticle.id}
                    key={featuredArticle.id}
                    title={
                      <div className="flex justify-between items-center">
                        <div>{featuredArticle.title}</div>
                      </div>
                    }
                    image={featuredArticle.image}
                    description={featuredArticle.description}
                    titleClassName="!lg:text-[25px] !text-[20px] !lg:leading-[28px] !md:leading-[22px] font-normal text-left lg:px-[34px] md:px-[22px] lg:pt-[25px] pt-[10px]"
                    descriptionClassName="text-black lg:mt-[-5px] lg:!leading-[25px] md:!leading-[15px] w-full"
                    imageClassName="!lg:h-[180px] md:!h-[148px] h-![126px] lg:rounded-[50px] md:rounded-[35px] rounded-[25px]"
                    contentContainerClassName="flex items-center justify-between"
                  />
                ))}
              </div>

              {/* Mobile carousel */}
              <div className="md:hidden px-[22px] flex justify-center h-full">
                <div className="mt-8 w-[300px] px-6 custom-padding-resource custom-content-card-resource">
                  <CustomSlider isCenter={true}>
                    {FEATURED_ARTICLES_RESOURCE.map((featuredArticle) => (
                      <div
                        key={featuredArticle.id}
                        className="relative px-1 pb-16 !flex justify-center w-full"
                      >
                        <ContentCard
                          id={featuredArticle.id}
                          title={featuredArticle.title}
                          image={featuredArticle.image}
                          description={featuredArticle.description}
                          titleClassName="md:text-left text-center font-normal text-left lg:px-[40px] md:px-[22px] lg:pt-[25px] pt-[10px]"
                          descriptionClassName="text-black w-full"
                          imageClassName="image-custom-resource w-[300px] !rounded-t-[35px]"
                          contentContainerClassName="flex items-center justify-center w-full"
                        />
                      </div>
                    ))}
                  </CustomSlider>
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
