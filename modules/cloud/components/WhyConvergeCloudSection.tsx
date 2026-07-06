"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronButton } from "@/components/ui/ChevronButton";

const features = [
    {
        id: 1,
        title: "In Country",
        image: "/images/cloud/1stcard.png",
        bullets: [
            "We keep your data in the Philippines. This ensures our infrastructure fully meets all local data residency and regulatory compliance requirements.",
        ],
    },
    {
        id: 2,
        title: "No Bill Shock",
        image: "/images/cloud/2ndcard.png",
        bullets: [
            "We offer the country's first fixed fee cloud subscription model with no hidden fees, eliminating the financial uncertainty of global providers.",
        ],
    },
    {
        id: 3,
        title: "Localized Solutions & Support",
        image: "/images/cloud/3rdcard.png",
        bullets: [
            "We offer localized cloud solutions and dedicated, 24/7 Filipino-led support. Our team understands the local landscape, ensuring quick resolution in your language and time zone.",
        ],
    },
];

export const WhyConvergeCloudSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden pt-4 md:pt-6 xl:pt-10 pb-8 md:pb-16 xl:pb-28 px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">

                {/* Section Title */}
                <h2 className="text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] pt-4 md:pt-4 mb-4 md:mb-6 xl:mb-8 font-funnel">
                    Why Converge Cloud
                </h2>

                {/* Mobile: Single Card with Navigation */}
                <div className="block md:hidden w-full">
                    <div className="flex flex-col h-full">
                        {/* Card + Chevrons row */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex-shrink-0">
                                <ChevronButton
                                    direction="left"
                                    onClick={prevSlide}
                                    className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]"
                                />
                            </div>

                            {/* Image with Title Overlay */}
                            <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                                <Image
                                    src={features[currentSlide].image}
                                    alt={features[currentSlide].title}
                                    fill
                                    sizes="80vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-center pt-4">
                                    <h3 className="text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans">
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

                        {/* Bullets below image */}
                        <div className="px-8 font-dm-sans">
                            <ul className="space-y-3">
                                {features[currentSlide].bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                                        <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Desktop: 3-column Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col h-full">
                            {/* Image with Title Overlay */}
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3 className="text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bullets */}
                            <div className="px-2 xl:px-4 font-dm-sans">
                                <ul className="space-y-2 xl:space-y-3">
                                    {feature.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                                            <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
