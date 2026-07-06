"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ChevronButton } from "@/components/ui/ChevronButton";

const defaultFeatures = [
    {
        id: 1,
        title: "Simplified, End-to-End Network Management",
        image: "/images/managedsurveillance/1st column.png",
        bullets: [
            "From design and deployment to 24/7 monitoring and maintenance, we fully manage your network infrastructure.",
            "Reduced IT complexity and more focus on core business priorities.",
        ],
    },
    {
        id: 2,
        title: "Enterprise-Grade Security & Performance",
        image: "/images/managedsurveillance/2nd column.png",
        bullets: [
            "Optimized configurations, proactive monitoring, and advanced security controls keep your network secure and high-performing.",
            "Ensures uninterrupted operations, protects revenue, and strengthens disaster recovery strategies.",
        ],
    },
    {
        id: 3,
        title: "Flexible Investment Model",
        image: "/images/managedsurveillance/3rd column.png",
        bullets: [
            "Choose a subscription-based OPEX model for predictable monthly costs or a CAPEX model for asset ownership.",
        ],
    },
];

export interface Feature {
    id: string | number;
    title: string;
    image: string;
    bullets: string[];
}

export interface DesignedForBusinessSectionProps {
    title?: React.ReactNode;
    features?: Feature[];
    backgroundColor?: string;
}

export const DesignedForBusinessSection = ({
    title = "Secure, Simplified, Scalable Networks",
    features = defaultFeatures,
    backgroundColor = "bg-white",
}: DesignedForBusinessSectionProps = {}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    }, [features.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    }, [features.length]);

    return (
        <section className={`relative w-full ${backgroundColor} rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden pt-10 md:pt-24 pb-20 md:pb-16 xl:pb-28 px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]`}>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Title */}
                <AnimateOnScroll variant="fade-up">
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center mb-4 md:mb-6 xl:mb-8 max-w-[800px] leading-[1.2] font-funnel`}
                    >
                        {title}
                    </h2>
                </AnimateOnScroll>

                {/* Mobile: Carousel Slider */}
                <div className="block md:hidden w-full">
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
                                src={features[currentSlide].image}
                                alt={features[currentSlide].title}
                                fill
                                sizes="80vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-start justify-center pt-10">
                                <h3 className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}>
                                    {features[currentSlide].title}
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
                    <div className={`px-4 font-dm-sans`}>
                        <ul className="space-y-3">
                            {features[currentSlide].bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start text-[16px] font-light text-black leading-[24px]">
                                    <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature, idx) => (
                        <AnimateOnScroll
                            key={feature.id}
                            variant="fade-up"
                            delay={idx * 120}
                            className="flex flex-col h-full"
                        >
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
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
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};
