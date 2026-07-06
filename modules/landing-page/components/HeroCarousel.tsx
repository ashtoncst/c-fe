"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { PillPagination } from '@/components/ui/PillPagination';
import { AnimateOnMount } from '@/components/ui/AnimateOnMount';
import { SLIDE_DURATION } from '@/constants/carousel';

export const SLIDES = [
    {
        id: 1,
        image: '/images/hero1stslide.png',
        alt: 'Converge global fiber network hero banner',
        title: (
            <>
                From Fiber<br />to Future
            </>
        ),
        description: (
            <>
                Where technology and humanity converge, not just to build networks, but to build futures.<br />
                For businesses, for people, for the world.
            </>
        ),
    },
    {
        id: 2,
        image: '/images/homepage-hero-global-network-1.png',
        alt: 'Converge global network visualization hero background',
        title: (
            <>
                MEF 3.0<br />Certified
            </>
        ),
        description: (
            <>
                Converge delivers MEF 3.0 certified Ethernet service—your guarantee of world-class quality, interoperability, and service agility.
            </>
        ),
    },
    {
        id: 3,
        image: '/images/homepage-hero-global-network-2.png',
        alt: 'Converge enterprise operations and connectivity hero background',
        title: (
            <>
                Wave<br />Newsletter
            </>
        ),
        description: (
            <>
                Stay ahead with exclusive insights into Converge&apos;s global tech evolution via our Wave newsletter.
            </>
        ),
    },
    {
        id: 4,
        image: '/images/homepage-hero-global-network-3.png',
        alt: 'Converge carrier ethernet certified professional global connectivity hero background',
        title: (
            <>
                Building Futures<br />Together
            </>
        ),
        description: (
            <>
                Digital infrastructure designed to bring teams, businesses, and communities closer.
            </>
        ),
    }
];

export const HeroCarousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [progressReset, setProgressReset] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        // Sync initial index without a synchronous setState in the effect body
        const initialSnap = emblaApi.selectedScrollSnap();
        if (initialSnap !== 0) {
            requestAnimationFrame(() => setSelectedIndex(initialSnap));
        }
    }, [emblaApi, onSelect]);

    // Single autoplay timer — resets completely on every slide change.
    // This replaces the embla-carousel-autoplay plugin to avoid timer race conditions.
    useEffect(() => {
        if (!emblaApi) return;

        const advance = (): void => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        };

        timerRef.current = setTimeout(advance, SLIDE_DURATION);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [emblaApi, selectedIndex, progressReset]);

    const scrollTo = useCallback((index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
        setProgressReset(prev => prev + 1);
    }, [emblaApi]);

    return (
        <>
            <section
                className="relative w-full h-[400px] md:h-[560px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden"
                aria-roledescription="carousel"
                aria-label="Hero Highlights"
            >
                {/* Embla Viewport */}
                <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                    <div className="flex w-full h-full">
                        {SLIDES.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="relative min-w-0 flex-[0_0_100%] h-full flex flex-col justify-end md:justify-start"
                                aria-hidden={selectedIndex !== index}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.alt ?? ''}
                                    fill
                                    sizes="100vw"
                                    className={`object-cover ${index === 0 ? 'object-bottom' : ''}`}
                                    priority={index === 0}
                                />
                                {/* Dark overlay for slides 1 and 3 */}
                                {(index === 0 || index === 2) && (
                                    <div className="absolute inset-0 bg-black/30 z-[5]" aria-hidden="true" />
                                )}
                                {/* Slide Content */}
                                <div
                                    className={`relative z-[10] w-full px-6 pb-[100px] md:pb-0 md:px-12 xl:px-[120px] pt-[160px] md:pt-[140px] xl:pt-[200px] max-w-[1440px] mr-auto text-white transition-opacity duration-700 delay-300 ${selectedIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div className="md:flex md:flex-row md:items-start md:justify-between xl:block">
                                        <AnimateOnMount delay={0} duration={600} className="md:w-[55%] xl:w-full">
                                            <div>
                                                <h1
                                                    className={`text-[48px] md:text-[50px] leading-[1.05] tracking-tight mb-6 md:mb-0 lg:mb-6 max-w-[640px] font-light md:font-normal xl:font-light text-center md:text-left font-funnel`}
                                                >
                                                    {slide.title}
                                                </h1>
                                            </div>
                                        </AnimateOnMount>
                                        <AnimateOnMount delay={150} duration={600} className="hidden md:block md:w-[40%] xl:w-full">
                                            <div className="md:flex md:flex-col md:items-start xl:block">
                                                <p
                                                    className={`text-[16px] md:text-[18px] max-w-[400px] mb-10 md:mb-0 xl:mb-10 font-light leading-[1.6] text-white/90 font-dm-sans`}
                                                >
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </AnimateOnMount>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*
                    Pagination Dots — tablet + desktop.
                    Sits above the OurSolutionCarousel scoop. The next section uses
                    md:-mt-20 to pull itself ~80px into the hero, so dots must clear
                    that zone vertically. md:bottom-24 = 96px from hero bottom keeps
                    them above the scoop curve and above the "Our Solution" heading.
                */}
                <div className="absolute bottom-32 md:bottom-24 xl:bottom-28 left-0 right-0 z-[50] hidden md:flex justify-center">
                    <PillPagination
                        count={SLIDES.length}
                        activeIndex={selectedIndex}
                        onSelect={scrollTo}
                        showProgress={true}
                        progressDuration={SLIDE_DURATION}
                        resetProgress={progressReset}
                    />
                </div>
            </section>

            {/* Mobile-only: white card scooping up over the hero bottom, holds description + dots */}
            <AnimateOnMount delay={0} duration={600}>
                <div className="md:hidden bg-white rounded-t-[32px] relative z-[35] -mt-8 px-6 pt-8 pb-8 text-center">
                    <div className={`text-[15px] text-[#374151] leading-[1.7] mb-6 font-dm-sans`}>
                        {SLIDES[selectedIndex]?.description}
                    </div>
                    <div className="flex justify-center">
                        <PillPagination
                            count={SLIDES.length}
                            activeIndex={selectedIndex}
                            onSelect={scrollTo}
                            showProgress={true}
                            progressDuration={SLIDE_DURATION}
                            resetProgress={progressReset}
                        />
                    </div>
                </div>
            </AnimateOnMount>
        </>
    );
};
