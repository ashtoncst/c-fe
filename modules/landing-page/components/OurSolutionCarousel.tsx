"use client";

import { useState, useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PillPagination } from '@/components/ui/PillPagination';
import { ChevronButton } from '@/components/ui/ChevronButton';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const SOLUTIONS = [
    {
        id: 1,
        title: 'Distributed Setup',
        description: 'Reliable connectivity for multiple locations that keeps your entire business operation synced and productive.',
        image: '/images/our-solution-distributed-setup.png',
        href: '/our-solution/distributed-setup',
    },
    {
        id: 2,
        title: 'Hospitality',
        description: 'Transform your guest experience with integrated entertainment and smart connectivity solutions that drive loyalty and operational efficiency.',
        image: '/images/our-solution-hospitality.png',
        href: '/our-solution/hospitality',
    },
    {
        id: 3,
        title: 'Digital Infrastructure',
        description: 'Secure and scale your mission-critical operations on a robust foundation of high-performance data and cloud environments.',
        image: '/images/our-solution-digital-infrastructure.png',
        href: '/our-solution/digital-infrastructure',
    },
];

const n = SOLUTIONS.length;

const SLIDE_TRANSITION = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';

export const OurSolutionCarousel = () => {
    const [dotIndex, setDotIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const trackRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const widthRef = useRef(0);
    const idxRef = useRef(0);
    const busyRef = useRef(false);

    const jumpTo = useCallback((idx: number) => {
        const track = trackRef.current;
        if (!track) return;
        track.style.transition = 'none';
        track.style.transform = `translate3d(-${idx * widthRef.current}px, 0, 0)`;
        idxRef.current = idx;
        void track.offsetWidth;
        track.style.transition = SLIDE_TRANSITION;
    }, []);

    const slideTo = useCallback((idx: number) => {
        const track = trackRef.current;
        if (!track) return;
        track.style.transition = SLIDE_TRANSITION;
        track.style.transform = `translate3d(-${idx * widthRef.current}px, 0, 0)`;
        idxRef.current = idx;
    }, []);

    useLayoutEffect(() => {
        const node = measureRef.current;
        if (!node) return;

        const init = () => {
            widthRef.current = node.getBoundingClientRect().width;
            busyRef.current = false;
            jumpTo(idxRef.current);
            setVisible(true);
        };

        init();
        const ro = new ResizeObserver(init);
        ro.observe(node);
        return () => ro.disconnect();
    }, [jumpTo]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onEnd = (e: TransitionEvent) => {
            if (e.target !== track || e.propertyName !== 'transform') return;
            busyRef.current = false;
        };

        track.addEventListener('transitionend', onEnd);
        return () => track.removeEventListener('transitionend', onEnd);
    }, []);

    const next = useCallback(() => {
        if (busyRef.current) return;
        if (idxRef.current >= n - 2) return;
        busyRef.current = true;
        const newIdx = idxRef.current + 1;
        slideTo(newIdx);
        setDotIndex(newIdx);
    }, [slideTo]);

    const prev = useCallback(() => {
        if (busyRef.current) return;
        if (idxRef.current <= 0) return;
        busyRef.current = true;
        const newIdx = idxRef.current - 1;
        slideTo(newIdx);
        setDotIndex(newIdx);
    }, [slideTo]);

    const goTo = useCallback((realIdx: number) => {
        if (busyRef.current) return;
        if (realIdx === idxRef.current) return;
        busyRef.current = true;
        slideTo(realIdx);
        setDotIndex(realIdx);
    }, [slideTo]);

    return (
        <section
            className="w-full pt-8 md:pt-10 xl:pt-[40px] pb-[24px] md:pb-[32px] bg-white md:rounded-t-[64px] xl:rounded-t-[96px] md:-mt-20 xl:-mt-20 relative z-[40]"
            aria-label="Our Solutions"
        >
            {/* Title */}
            <AnimateOnScroll variant="fade-up" className="px-6 md:px-12 xl:px-[120px] text-center mb-4 md:mb-6">
                <h2
                    className={`text-[35px] text-[#038F8D] md:text-[#024645] font-light tracking-tight font-funnel`}
                >
                    Our Solution
                </h2>
            </AnimateOnScroll>

            {/* Mobile: vertical card stack */}
            <div className="xl:hidden px-4 min-[480px]:px-12 flex flex-col gap-5 min-[480px]:gap-8 pb-10">
                {SOLUTIONS.map((item, idx) => (
                    <AnimateOnScroll key={item.id} variant="fade-up" delay={idx * 100} className="rounded-[20px] min-[480px]:rounded-[40px] bg-[#222222] overflow-hidden min-[480px]:flex min-[480px]:flex-row min-[480px]:items-stretch">
                        <div className="relative w-full aspect-square max-h-[420px] min-[480px]:aspect-auto min-[480px]:max-h-none min-[480px]:w-[45%] min-[480px]:h-auto min-[480px]:flex-shrink-0 min-[480px]:min-h-[280px]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="px-5 py-6 min-[480px]:px-10 min-[480px]:py-10 text-center min-[480px]:text-left flex flex-col min-[480px]:justify-center flex-1">
                            <h3 className={`text-[20px] min-[480px]:text-[28px] font-normal text-white mb-3 min-[480px]:mb-4 leading-tight tracking-[0.02em] font-dm-sans`}>
                                {item.title}
                            </h3>
                            <p className={`text-[14px] min-[480px]:text-[15px] text-white/80 leading-[1.65] min-[480px]:leading-[1.6] mb-6 min-[480px]:mb-8 font-light font-dm-sans`}>
                                {item.description}
                            </p>
                            <Link
                                href={item.href}
                                scroll={true}
                                aria-label={`Explore ${item.title} solution`}
                                className={`inline-flex items-center justify-center gap-2 min-[480px]:w-fit px-4 py-2 rounded-full bg-[#009e96] hover:bg-[#00857e] text-white text-[14px] font-normal transition-colors duration-200 font-dm-sans`}
                            >
                                Explore Solution
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>

            {/* Desktop: horizontal carousel */}
            <AnimateOnScroll variant="fade-in" duration={800} className="hidden xl:block">
                <div className="relative w-full pl-12 xl:pl-[120px]">
                    {/* Viewport — hidden until first measurement to prevent wrong-position flash */}
                    <div className="overflow-hidden" style={{ visibility: visible ? 'visible' : 'hidden' }}>
                        {/* Track — position/transition driven entirely via DOM ref */}
                        <div
                            ref={trackRef}
                            className="flex -ml-6 xl:-ml-8"
                            style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                        >
                            {SOLUTIONS.map((item, i) => (
                                <div
                                    key={`${i}-${item.id}`}
                                    ref={i === 0 ? measureRef : null}
                                    className="relative min-w-0 flex-[0_0_63%] xl:flex-[0_0_45%] h-[340px] pl-6 xl:pl-8"
                                >
                                    <div className="flex flex-row rounded-[24px] bg-[#222222] h-full border border-white/5 overflow-hidden">
                                        {/* Image */}
                                        <div className="relative w-[38%] h-full flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="38vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 flex flex-col justify-center text-left px-8 py-8 min-w-0">
                                            <h3 className={`text-[28px] font-normal text-white mb-3 leading-tight tracking-tight font-dm-sans`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-[16px] font-normal text-white mb-6 leading-[1.65] font-dm-sans`}>
                                                {item.description}
                                            </p>
                                            <Link
                                                href={item.href}
                                                scroll={true}
                                                aria-label={`Explore ${item.title} solution`}
                                                className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-[#009e96] hover:bg-[#00857e] text-white text-[14px] font-normal transition-colors duration-200 font-dm-sans`}
                                            >
                                                Explore Solution
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Prev */}
                    <div className="absolute left-6 xl:left-[40px] top-1/2 -translate-y-1/2 z-30">
                        <ChevronButton direction="left"  onClick={prev} disabled={dotIndex === 0} />
                    </div>
                    {/* Next */}
                    <div className="absolute right-6 xl:right-[40px] top-1/2 -translate-y-1/2 z-30">
                        <ChevronButton direction="right" onClick={next} disabled={dotIndex === n - 2} />
                    </div>
                </div>

                {/* Dot pagination — desktop only */}
                <div className="mt-12 flex justify-center">
                    <PillPagination count={n - 1} activeIndex={dotIndex} onSelect={goTo} />
                </div>
            </AnimateOnScroll>
        </section>
    );
};
