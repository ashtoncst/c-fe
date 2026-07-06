"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronButton } from "@/components/ui/ChevronButton";

interface Feature {
    id: string | number;
    title: string;
    image: string;
    bullets: string[];
}

interface CableSystemVideoSectionProps {
    title?: React.ReactNode;
    features: Feature[];
    backgroundColor?: string;
}

export const CableSystemVideoSection = ({
    title = "Why Our Cable Systems",
    features,
    backgroundColor = "bg-white",
}: CableSystemVideoSectionProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = useCallback(() => { setCurrentSlide((prev) => (prev + 1) % features.length); }, [features.length]);
    const prevSlide = useCallback(() => { setCurrentSlide((prev) => (prev - 1 + features.length) % features.length); }, [features.length]);

    return (
        <section className={`relative w-full ${backgroundColor} rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]`}>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Video Placeholder */}
                <div className="w-full max-w-[1200px] aspect-video bg-black rounded-[30px] flex items-center justify-center relative overflow-hidden group shadow-2xl mb-16 md:mb-20 border border-gray-200">
                    <p className="text-white text-xl font-medium z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                        Placeholder for Video
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>

                {/* Section Title */}
                <h2
                    className={`text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] pt-0 mb-4 md:mb-6 xl:mb-8 font-funnel`}
                >
                    {title}
                </h2>

                {/* Mobile: Single Card Carousel */}
                <div className="block md:hidden w-full">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex-shrink-0">
                                <ChevronButton direction="left" onClick={prevSlide} className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]" />
                            </div>
                            <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                                <Image
                                    src={features[currentSlide].image}
                                    alt={features[currentSlide].title}
                                    fill
                                    sizes="80vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-center pt-4">
                                    <h3 className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}>
                                        {features[currentSlide].title}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <ChevronButton direction="right" onClick={nextSlide} className="!bg-gray-300 hover:!bg-gray-400 !text-gray-700 !border-gray-300 w-[26px] h-[48px]" />
                            </div>
                        </div>
                        <div className={`px-8 font-dm-sans`}>
                            <ul className="space-y-3">
                                {features[currentSlide].bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                                        <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tablet/Desktop: 3-Column Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col h-full">
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="33vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3 className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}>
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                            <div className={`px-2 xl:px-4 font-dm-sans`}>
                                <ul className="space-y-2 xl:space-y-3">
                                    {feature.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start text-[16px] text-black font-light leading-[24px]">
                                            <span className="min-w-[6px] h-[6px] rounded-full bg-[#038F8D] mt-2 mr-3 flex-shrink-0"></span>
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
