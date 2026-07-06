"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { ChevronButton } from "@/components/ui/ChevronButton";
import { BROCHURE_URLS } from "@/config/brochures";

const features = [
    {
        id: 1,
        title: "Global Standard",
        image: "/images/distributedsetup/1stcard.png",
        bullets: [
            "Seamless interconnection with global carriers",
            "Faster partner onboarding",
            "Reduced integration friction for multinational clients",
        ],
    },
    {
        id: 2,
        title: "Assured Service Performance & Quality",
        image: "/images/distributedsetup/2ndcard.png",
        bullets: [
            "Guaranteed performance (latency, jitter, packet loss)",
            "Reliability & SLA compliance",
            "Assured service definitions and technical standards",
        ],
    },
    {
        id: 3,
        title: "Dedicated & Priority Support",
        image: "/images/distributedsetup/3rdcard.png",
        bullets: [
            "24/7 hotline support",
            "Dedicated technical support team",
            "Priority incident response and resolution",
        ],
    },
];

export const GloballyCertifiedSection = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, features.length - 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    return (
        <>
            <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Title */}
                <h2
                    className={`text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] md:pt-16 min-[1025px]:pt-8 mb-4 md:mb-6 font-funnel`}
                >
                    Globally Certified Ethernet Connectivity Solutions
                </h2>

                {/* Mobile: Single Card with Navigation */}
                <div className="block md:hidden w-full">
                    <div className="flex flex-col h-full">
                        {/* Card + Chevrons row — chevrons fully outside the card */}
                        <div className="flex items-center gap-2 mb-8">
                            {/* Left Chevron */}
                            <div className="flex-shrink-0">
                                <ChevronButton
                                    direction="left"
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                />
                            </div>

                            {/* Image Container with Title Overlay */}
                            <div className="relative flex-1 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
                                <Image
                                    src={features[currentSlide].image}
                                    alt={features[currentSlide].title}
                                    fill
                                    sizes="80vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-4">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {features[currentSlide].title.split(" ").map((word, i) => (
                                            <span key={i}>
                                                {word}
                                                {i === 0 && features[currentSlide].title === "Global Standard" ? (
                                                    <br />
                                                ) : (
                                                    " "
                                                )}
                                            </span>
                                        ))}
                                    </h3>
                                </div>
                            </div>

                            {/* Right Chevron */}
                            <div className="flex-shrink-0">
                                <ChevronButton
                                    direction="right"
                                    onClick={nextSlide}
                                    disabled={currentSlide === features.length - 1}
                                />
                            </div>
                        </div>

                        {/* Bullets below the image container */}
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

                {/* Desktop: Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col h-full">
                            {/* Image Container with Title Overlay */}
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bullets below the image container */}
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
        <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.globallyCertified} />
        </>
    );
};

