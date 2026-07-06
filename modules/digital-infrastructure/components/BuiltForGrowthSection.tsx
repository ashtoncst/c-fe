import Image from "next/image";
import { useState, useCallback } from "react";
import { ChevronButton } from "@/components/ui/ChevronButton";

const features = [
    {
        id: 1,
        title: "Predictable Costs, Unlimited Potential",
        image: "/images/digitalinfrastructure/1stcard.png",
        bullets: [
            "Simplify IT budgeting with fixed peso payments.",
            "Eliminate forex risks and reinvest your savings into innovation.",
        ],
    },
    {
        id: 2,
        title: "Champion Data Sovereignty",
        image: "/images/digitalinfrastructure/2ndcard.png",
        bullets: [
            "Guarantee data sovereignty with local Philippine storage.",
            "Ensure full Data Privacy Act compliance and eliminate offshore risks.",
        ],
    },
    {
        id: 3,
        title: "Unlocking Reliability with Local Support",
        image: "/images/digitalinfrastructure/3rdcard.png",
        bullets: [
            "Access 24/7 expert local support.",
            "Get fast, relevant solutions tailored specifically to the Philippine business landscape.",
        ],
    },
];

export const BuiltForGrowthSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, features.length - 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    return (
        <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Title */}
                <h2
                    className={`text-[35px] font-light text-[#024645] text-center md:pt-12 min-[1025px]:pt-0 mb-4 md:mb-6 max-w-[800px] leading-[1.2] font-funnel`}
                >
                    Built for the Philippines. Designed for Your Growth
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
                                        {features[currentSlide].title}
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

                {/* Tablet/Desktop: Grid Layout */}
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
                                    <h3 className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}>
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
    );
};
