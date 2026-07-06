'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ChevronButton } from '@/components/ui/ChevronButton';
import type { ServiceTabContent, ServiceSection, ServiceCardContent } from './ourServicesContent';
import { RequestPricingModal } from '@/components/modals/RequestPricingModal';
import { AnimateOnMount } from '@/components/ui/AnimateOnMount';

interface ServicesTabPanelProps {
  content: ServiceTabContent;
}

function resolveCardProps(card: ServiceCardContent) {
  let objectFit = card.imageObjectFit;
  let imageBg = card.imageBg;
  let imagePadding = card.imagePadding;

  if (card.imageMode === 'logo') {
    objectFit = 'contain';
    imageBg = card.imageBg ?? 'bg-black';
  } else if (card.imageMode === 'ott-tile') {
    objectFit = 'contain';
    imageBg = card.imageBg ?? 'bg-white';
    if (!imagePadding) imagePadding = '7%';
  } else if (card.imageMode === 'photo') {
    objectFit = 'cover';
    imagePadding = undefined;
  }

  return { objectFit, imageBg, imagePadding };
}

const MobileSectionCarousel = ({
  section,
  imageContainerClass,
}: {
  section: ServiceSection;
  imageContainerClass: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = section.cards.length;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.offsetWidth);
    setCurrentIndex(Math.max(0, Math.min(idx, count - 1)));
  };

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
  };

  // Extract the mobile-only height (first class before any md: prefix)
  const mobileImageClass = imageContainerClass.split(' ')[0] ?? 'h-[200px]';

  return (
    <div className="relative -mx-6">
      {/* Scroll snap track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {section.cards.map((card, i) => {
          const { objectFit, imageBg, imagePadding } = resolveCardProps(card);
          const content = (
            <>
              {/* Image */}
              <div className={`relative w-full rounded-[3rem] md:rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden ${mobileImageClass} ${imageBg ?? ''}`}>
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className={`${objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center`}
                  style={objectFit === 'contain' ? { padding: imagePadding } : undefined}
                />
              </div>
              {/* Title */}
              <h3 className={`mt-5 text-[14px] font-normal leading-tight text-[#024645] font-dm-sans`}>
                {card.title}
              </h3>
              {/* Description */}
              {card.description && (
                <p className={`mt-3 text-[12px] font-light leading-[1.7] text-black font-dm-sans`}>
                  {card.description}
                </p>
              )}
            </>
          );
          return card.href ? (
            <Link key={i} href={card.href} className="flex-[0_0_100%] snap-start px-12 text-center">
              {content}
            </Link>
          ) : (
            <div key={i} className="flex-[0_0_100%] snap-start px-12 text-center">
              {content}
            </div>
          );
        })}
      </div>

      {/* Prev */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <ChevronButton
          direction="left"
          onClick={scrollPrev}
          disabled={currentIndex === 0}
        />
      </div>
      {/* Next */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <ChevronButton
          direction="right"
          onClick={scrollNext}
          disabled={currentIndex === count - 1}
        />
      </div>
    </div>
  );
};

export const ServicesTabPanel: React.FC<ServicesTabPanelProps> = ({ content }) => {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  return (
    <div>
      {/* Tab Header inside the gray container */}
      <AnimateOnMount delay={0}>
        <div className="flex flex-col items-center text-center pt-4 mb-4 md:mb-8">
          <h3
            className={`text-[30px] text-[#024645] pt-0 md:pt-6 mb-4 font-normal font-dm-sans`}
          >
            {content.heroTitle}
          </h3>
          <p
            className={`text-[14px] md:text-[16px] text-black max-w-[700px] font-light leading-relaxed mb-6 font-dm-sans`}
          >
            {content.heroDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {content.primaryCTA.href ? (
              <Link
                href={content.primaryCTA.href}
                className="px-[14px] py-[8px] bg-con-custom-green text-white rounded-full text-[14px] font-normal font-dm-sans hover:bg-con-custom-green-bold transition-colors"
              >
                {content.primaryCTA.label}
              </Link>
            ) : (
              <button
                type="button"
                className="px-[14px] py-[8px] bg-con-custom-green text-white rounded-full text-[14px] font-normal font-dm-sans hover:bg-con-custom-green-bold transition-colors"
              >
                {content.primaryCTA.label}
              </button>
            )}
            {content.secondaryCTA && (
              <button
                type="button"
                onClick={() => setPricingModalOpen(true)}
                className="px-[14px] py-[8px] bg-con-custom-green text-white rounded-full text-[14px] font-normal font-dm-sans hover:bg-con-custom-green-bold transition-colors cursor-pointer"
              >
                {content.secondaryCTA.label}
              </button>
            )}
          </div>
        </div>
      </AnimateOnMount>

      {/* Sub-sections */}
      <div className="space-y-8">
        {content.sections.map((section, sectionIndex) => {
          const cols = section.cols ?? 2;
          const imageContainerClass = section.imageHeight ?? 'h-[200px] md:h-[240px]';

          const gridClass =
            cols === 3
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12'
              : 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12';

          return (
            <AnimateOnMount
              key={sectionIndex}
              delay={100 * (sectionIndex + 1)}
            >
              <div className="bg-gray-100 rounded-2xl p-6 md:p-6 space-y-6">
                {section.sectionTitle && (
                  <h4 className="text-[16px] md:text-[24px] text-[#024645] font-light font-funnel text-center md:text-left">
                    {section.sectionTitle}
                  </h4>
                )}

                {/* Mobile: scroll-snap carousel */}
                <div className="md:hidden">
                  <MobileSectionCarousel
                    section={section}
                    imageContainerClass={imageContainerClass}
                  />
                </div>

                {/* Desktop: grid */}
                <div className={`hidden md:grid ${gridClass}`}>
                  {section.cards.map((card, cardIndex) => {
                    const { objectFit, imageBg, imagePadding } = resolveCardProps(card);
                    const cardEl = (
                      <ServiceCard
                        key={cardIndex}
                        image={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        listItems={card.listItems}
                        ctaLabel={card.ctaLabel}
                        ctaHref={card.ctaHref}
                        imageContainerClass={card.imageHeight ?? imageContainerClass}
                        imageObjectFit={objectFit}
                        imageBg={imageBg}
                        imagePadding={imagePadding}
                        imageScaleClass={card.imageScaleClass}
                        className={card.colSpan === 2 ? 'xl:col-span-2' : ''}
                      />
                    );
                    const cardDelay =
                      100 * (sectionIndex + 1) + 60 * cardIndex;
                    const colSpanClass =
                      card.colSpan === 2 ? 'xl:col-span-2' : '';
                    return card.href ? (
                      <AnimateOnMount
                        key={cardIndex}
                        delay={cardDelay}
                        className={colSpanClass}
                      >
                        <Link href={card.href} className={colSpanClass}>
                          {cardEl}
                        </Link>
                      </AnimateOnMount>
                    ) : (
                      <AnimateOnMount
                        key={cardIndex}
                        delay={cardDelay}
                        className={colSpanClass}
                      >
                        {cardEl}
                      </AnimateOnMount>
                    );
                  })}
                </div>
              </div>
            </AnimateOnMount>
          );
        })}
      </div>
      <RequestPricingModal
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
      />
    </div>
  );
};
