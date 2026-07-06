"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronButton } from "@/components/ui/ChevronButton";
import { ProgressCard } from "@/components/sections/ProgressCard";
import { ProductOfferring } from "@/modules/service-categories-module/components/ProductOfferring";
import { PRODUCT_OFFERING } from "@/modules/service-categories-module/constants/ServiceCategories.constant";
import VARImage from "../../../public/images/var.png";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const internetSolutions = [
    {
        id: 1,
        title: "High-speed Internet",
        image: "/images/connect.png",
        bullets: [
            "Delivering stable, high-speed internet for homes and businesses",
        ],
    },
    {
        id: 2,
        title: "Reliability",
        image: "/images/block.png",
        bullets: [
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers",
        ],
    },
    {
        id: 3,
        title: "Dedicated & Priority Support",
        image: "/images/receptionist.png",
        bullets: [
            "Wide-reaching satellite coverage for reliable connectivity, even in remote areas",
        ],
    },
];

export const InternetFeaturesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % internetSolutions.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(
            (prev) =>
                (prev - 1 + internetSolutions.length) % internetSolutions.length
        );
    }, []);

    return (
        <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
            <div className="max-w-[1440px] mx-auto flex flex-col">
                {/* Award Subsection */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 pt-12 min-[1025px]:pt-0">
                    {/* Left: Title + Description */}
                    <AnimateOnScroll variant="slide-in-left" className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                        <h2
                            className={`text-[35px] font-light text-[#024645] leading-[1.2] max-w-[502px] font-funnel`}
                        >
                            Philippines&apos; Leading Internet Service Provider
                        </h2>

                        {/* Award image - mobile only (between title and description) */}
                        <div className="block md:hidden w-full mt-8">
                            <div className="flex justify-center">
                                <Image
                                    src={VARImage}
                                    alt="Award"
                                    className="w-[200px] h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        <p
                            className={`mt-6 md:mt-8 text-[15px] md:text-[16px] font-light leading-[1.6] text-black max-w-[270px] font-dm-sans`}
                        >
                            Bringing the nation closer together with internet
                            solutions built on reliability, security, and the
                            flexibility to meet your evolving needs.
                        </p>
                    </AnimateOnScroll>

                    {/* Right: Award Image - desktop only */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                        <Image
                            src={VARImage}
                            alt="Award"
                            className="xl:h-[490px] md:h-[301px] w-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-16 md:mt-20 mb-16 md:mb-20" />

                {/* Internet Solutions Title */}
                <AnimateOnScroll variant="fade-up">
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center mb-4 md:mb-6 max-w-[800px] mx-auto leading-[1.2] font-funnel`}
                    >
                        Internet Solutions
                    </h2>
                </AnimateOnScroll>

                {/* Mobile: Single Card with Navigation */}
                <div className="block md:hidden">
                    <div className="px-4">
                        <div className="flex flex-col h-full">
                            {/* Image Container with Title Overlay and Navigation */}
                            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 mb-8 shadow-sm">
                                <Image
                                    src={internetSolutions[currentSlide].image}
                                    alt={internetSolutions[currentSlide].title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {internetSolutions[currentSlide].title}
                                    </h3>
                                </div>

                                {/* Navigation Chevrons */}
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                    <ChevronButton
                                        direction="left"
                                        onClick={prevSlide}
                                    />
                                </div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                    <ChevronButton
                                        direction="right"
                                        onClick={nextSlide}
                                    />
                                </div>
                            </div>

                            {/* Bullets below the image container */}
                            <div className={`px-4 font-dm-sans`}>
                                <ul className="space-y-3">
                                    {internetSolutions[currentSlide].bullets.map(
                                        (bullet, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start text-[16px] text-black font-light leading-[24px]"
                                            >
                                                <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px] mx-auto">
                    {internetSolutions.map((solution, idx) => (
                        <AnimateOnScroll key={solution.id} variant="fade-up" delay={idx * 120} className="flex flex-col h-full">
                            {/* Image Container with Title Overlay */}
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {solution.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bullets below the image container */}
                            <div className={`px-2 xl:px-4 font-dm-sans`}>
                                <ul className="space-y-2 xl:space-y-3">
                                    {solution.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-[16px] text-black font-light leading-[24px]"
                                        >
                                            <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-16 md:mt-20 mb-16 md:mb-20" />

                {/* Product Offerings */}
                <div className="xl:px-0 md:px-[55px]">
                    <AnimateOnScroll variant="fade-up" className="text-center mb-16 md:mb-20">
                        <h2
                            className={`text-[35px] font-light leading-[1.2] text-[#024645] font-funnel`}
                        >
                            Product Offerings
                        </h2>
                    </AnimateOnScroll>
                    <div className="flex justify-center w-full">
                        <div className="xl:mb-[106px] md:mb-[89px]">
                            <ProgressCard
                                data={PRODUCT_OFFERING.map((product) => ({
                                    id: product.id,
                                    name: product.name,
                                    description: product.description || [],
                                    image: (
                                        <div
                                            key={product.id}
                                            className="flex md:justify-center lg:items-center xl:w-[656px] w-full h-full"
                                        >
                                            <ProductOfferring
                                                productOffering_Data={product}
                                            />
                                        </div>
                                    ),
                                }))}
                                isList={false}
                                defaultActive={PRODUCT_OFFERING[0].id}
                                isShowButton={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
