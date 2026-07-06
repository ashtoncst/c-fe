import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronButton } from "@/components/ui/ChevronButton";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const defaultFeatures = [
    {
        id: 1,
        title: "Integrated Feature Set",
        image: "/images/hospitalityfirstcolumn.png",
        bullets: [
            "All-in-one, customizable hotel guest experience.",
            "Access to bespoke SD and HD channel line up.",
        ],
    },
    {
        id: 2,
        title: "eCommerce Integration Ready",
        image: "/images/hospitalitysecondcolumn.png",
        bullets: [
            "Book digital in-room dining menu ordering seamlessly—delivered instantly to the kitchen via printer, email, or POS that can be integrated with the hotel property management system.",
        ],
    },
    {
        id: 3,
        title: "OTT Streaming Friendly",
        image: "/images/hospitalitythirdcolumn.png",
        bullets: [
            "Casting friendly with popular streaming platforms the likes of (use brand logos: Netflix, Disney Channel, Amazon Prime, AppleTV, HBOMax).",
        ],
    },
];

export interface Feature {
    id: string | number;
    title: string;
    image: string;
    bullets: string[];
}

export interface DesignedForGuestSectionProps {
    title?: React.ReactNode;
    features?: Feature[];
    backgroundColor?: string;
}

export const DesignedForGuestSection = ({
    title = "Designed for Seamless Guest Experiences",
    features = defaultFeatures,
    backgroundColor = "bg-white",
}: DesignedForGuestSectionProps = {}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, features.length - 1));
    }, [features.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    return (
        <section className={`relative w-full ${backgroundColor} rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]`}>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Title */}
                <AnimateOnScroll variant="fade-up">
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center max-w-[800px] leading-[1.2] md:pt-12 min-[1025px]:pt-0 mb-4 md:mb-6 font-funnel`}
                    >
                        {title}
                    </h2>
                </AnimateOnScroll>

                {/* Mobile: Single Card with Navigation */}
                <div className="block md:hidden w-full">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="flex-shrink-0">
                            <ChevronButton
                                direction="left"
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                            />
                        </div>
                        <div className="relative flex-1 aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-sm">
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
                                disabled={currentSlide === features.length - 1}
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

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px]">
                    {features.map((feature, idx) => (
                        <AnimateOnScroll key={feature.id} variant="fade-up" delay={idx * 120} className="flex flex-col h-full">
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
                        </AnimateOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
};
