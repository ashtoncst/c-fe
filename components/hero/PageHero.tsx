"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimateOnMount } from "@/components/ui/AnimateOnMount";

export interface PageHeroProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cardDescription?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
  extraButtonLabel?: string;
  onExtraButtonClick?: () => void;
  backgroundImage?: string;
  bottomGradient?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imagePosition?: string;
}

export const PageHero = ({
  title = (
    <>
      Distributed
      <br />
      Setup
    </>
  ),
  description = "Unlock new possibilities with our robust, globally certified transport and dedicated internet services.",
  buttonLabel = "Download",
  onButtonClick,
  backgroundImage = "/images/distributed-setup-hero-bg.png",
  bottomGradient = "none",
  titleClassName = "",
  descriptionClassName = "",
}: PageHeroProps = {}) => {
  return (
    <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Bottom gradient for text legibility */}
        {bottomGradient !== "none" && bottomGradient !== "transparent" && (
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ background: bottomGradient }}
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-[10] w-full px-6 md:px-12 lg:px-[120px] pt-[200px] md:pt-[220px] lg:pt-[240px] max-w-[1440px] text-white text-center md:text-left md:mr-auto">
        <AnimateOnMount delay={0} duration={600}>
          <h1
            className={`text-[40px] md:text-[65px] leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 font-funnel ${titleClassName}`}
          >
            {title}
          </h1>
        </AnimateOnMount>
        {/* Description and button hidden on mobile, shown on desktop */}
        <AnimateOnMount delay={150} duration={600}>
          <div className="hidden md:block">
            <p
              className={`text-[16px] md:text-[18px] max-w-[560px] mb-10 font-light leading-[1.6] text-white/90 font-dm-sans ${descriptionClassName}`}
            >
              {description}
            </p>
            {buttonLabel && (
              <Button
                variant="secondary"
                size="md"
                icon="none"
                className="w-fit text-[14px]"
                onClick={onButtonClick}
              >
                {buttonLabel}
              </Button>
            )}
          </div>
        </AnimateOnMount>
      </div>
    </section>
  );
};

// Mobile white card component for distributed setup style pages
export const PageHeroWithMobileCard = ({
  title = (
    <>
      Distributed
      <br />
      Setup
    </>
  ),
  description = "Unlock new possibilities with our robust, globally certified transport and dedicated internet services.",
  buttonLabel = "Download",
  onButtonClick,
  extraButtonLabel,
  onExtraButtonClick,
  backgroundImage = "/images/distributed-setup-hero-bg.png",
  bottomGradient = "none",
  titleClassName = "",
  descriptionClassName = "",
  imagePosition = "center",
  cardDescription,
}: PageHeroProps = {}) => {
  const resolvedCardDescription = cardDescription !== undefined ? cardDescription : description;
  return (
    <>
      <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            priority
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" aria-hidden="true" />
          {/* Bottom gradient for text legibility */}
          {bottomGradient !== "none" && bottomGradient !== "transparent" && (
            <div
              className="absolute inset-0 z-[2] pointer-events-none"
              style={{ background: bottomGradient }}
            />
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-[10] w-full px-6 pb-[170px] md:px-12 xl:pb-0 xl:px-[120px] pt-[180px] md:pt-[160px] xl:pt-[180px] max-w-[1440px] text-white text-center md:text-left md:mr-auto">
          <AnimateOnMount delay={0} duration={600}>
            <h1
              className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 font-funnel ${titleClassName}`}
            >
              {title}
            </h1>
          </AnimateOnMount>
          {/* Description and button hidden on mobile/tablet, shown on desktop */}
          <AnimateOnMount delay={150} duration={600}>
            <div className="hidden xl:block">
              <p
                className={`text-[16px] md:text-[18px] max-w-[560px] mb-10 font-light leading-[1.6] text-white/90 font-dm-sans ${descriptionClassName}`}
              >
                {description}
              </p>
              <div className="flex items-center gap-3">
                {extraButtonLabel && (
                  <Button
                    variant="secondary"
                    size="md"
                    icon="none"
                    className="w-fit text-[14px]"
                    onClick={onExtraButtonClick}
                  >
                    {extraButtonLabel}
                  </Button>
                )}
                {buttonLabel && (
                  <Button
                    variant="secondary"
                    size="md"
                    icon="none"
                    className="w-fit text-[14px] !text-[#024645]"
                    onClick={onButtonClick}
                  >
                    {buttonLabel}
                  </Button>
                )}
              </div>
            </div>
          </AnimateOnMount>
        </div>
      </section>

      {/* Mobile/Tablet: white card scooping up over the hero bottom */}
      <AnimateOnMount delay={0} duration={600} className="relative z-[35]">
        <div className="xl:hidden bg-white rounded-t-[32px] relative z-[35] -mt-[70px] px-6 md:px-12 pt-8 pb-4 text-center">
          {resolvedCardDescription && (
            <div className={`text-[16px] text-[#000] leading-[24px] font-light mb-6 font-dm-sans`}>
              {resolvedCardDescription}
            </div>
          )}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {extraButtonLabel && (
              <button
                onClick={onExtraButtonClick}
                className={`bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors font-dm-sans`}
              >
                {extraButtonLabel}
              </button>
            )}
            {buttonLabel && (
              <button
                onClick={onButtonClick}
                className={`bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors font-dm-sans`}
              >
                {buttonLabel}
              </button>
            )}
          </div>
        </div>
      </AnimateOnMount>
    </>
  );
};
