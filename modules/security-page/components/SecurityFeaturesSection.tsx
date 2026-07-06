"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ProgressCard } from "@/components/sections/ProgressCard";
import { ChevronButton } from "@/components/ui/ChevronButton";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const ddosCards = [
    {
        id: 1,
        image: "/images/security/ddos.png",
        description:
            'DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems referred to as \u201Cbotnets\u201D or \u201Czombie armies\u201D as sources of attack traffic which can include computers and other networked resources such as IoT devices.',
    },
    {
        id: 2,
        image: "/images/security/system.png",
        description:
            "Motivations for DDoS attacks tend to be financial, philosophical or political in nature.",
    },
];

const antiDdosSolutions = [
    {
        id: "Hybrid Anti-DDOS Solutions Strategy",
        name: "Hybrid Anti-DDOS Solutions Strategy",
        description: [
            "Combines the agility of mitigating DDoS attacks through local scrubbing center (within Converge Network) and the capacity of Cloud DDoS protection for large volume attacks.",
        ],
        image: "/images/security/securityTouch.png",
    },
    {
        id: "Dedicated Gateway",
        name: "Dedicated Gateway",
        description: ["Dedicated gateway for Anti-DDoS subscribers"],
        image: "/images/security/Internet_1.2.png",
    },
];

const defenseCards = [
    {
        id: 1,
        title: "On-Premises Defenses",
        image: "/images/security/security-1.1.png",
        bullets: [
            "Quick, simple mitigation",
            "Local scrubbing center, faster recovery",
            "40Gbps mitigation capacity",
        ],
    },
    {
        id: 2,
        title: "Hybrid Defenses",
        image: "/images/security/security-2.1.png",
        bullets: [
            "Integrated Solution",
            "Fastest Time to Mitigation",
            "Defeats Largest DDoS Attacks",
        ],
    },
    {
        id: 3,
        title: "Cloud Defenses",
        image: "/images/security/security-3.1.png",
        bullets: [
            "Advance Mitigation",
            "Global Cloud Scrubbing Centers",
            "Defeats the Largest DDoS Attacks",
        ],
    },
];

export const SecurityFeaturesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % defenseCards.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + defenseCards.length) % defenseCards.length);
    }, []);

    return (
        <section className="relative w-full bg-white rounded-t-[64px] xl:rounded-t-[96px] overflow-hidden py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px] z-[40]">
            <div className="max-w-[1440px] mx-auto flex flex-col">
                {/* DDoS Explanation subsection */}
                <AnimateOnScroll variant="fade-up" className="flex flex-col items-center mb-16 md:mb-20">
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center md:pt-12 min-[1025px]:pt-0 mb-6 leading-[1.2] font-funnel`}
                    >
                        What is DDoS Attack?
                    </h2>
                    <p
                        className={`text-[15px] md:text-[16px] font-light leading-[1.6] text-[#024645] text-center max-w-[800px] mb-4 font-dm-sans`}
                    >
                        A distributed denial-of-service (DDoS) attack is an attempt to
                        exhaust network, server or application resources so that they are no
                        longer available to intended users and in some cases an attempt to
                        cover up or distract from other exfiltration or theft of data
                        activities.
                    </p>
                </AnimateOnScroll>

                {/* DDoS Info Cards */}
                <AnimateOnScroll variant="fade-up" delay={150} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
                    {ddosCards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-[2rem] overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[220px] md:h-[280px]">
                                <Image
                                    src={card.image}
                                    alt={`DDoS illustration ${card.id}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <p
                                    className={`text-[15px] md:text-[16px] font-light leading-[1.6] text-black font-dm-sans`}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </AnimateOnScroll>

                <div className="w-full border-t border-gray-200 mb-16 md:mb-20" />

                {/* Anti-DDoS Solutions subsection */}
                <AnimateOnScroll variant="fade-up" className="flex flex-col items-center mb-12">
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center mb-4 leading-[1.2] font-funnel`}
                    >
                        Anti-DDoS Solutions
                    </h2>
                </AnimateOnScroll>

                <div className="hidden md:block mb-16 md:mb-20">
                    <ProgressCard
                        data={antiDdosSolutions.map((product) => ({
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            image: product.image,
                        }))}
                        defaultActive="Hybrid Anti-DDOS Solutions Strategy"
                        isList={false}
                        className="items-center"
                    />
                </div>

                {/* Mobile Anti-DDoS Solutions */}
                <div className="block md:hidden mb-16">
                    <div className="flex flex-col gap-8">
                        {antiDdosSolutions.map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <div className="relative w-full h-[200px] rounded-[2rem] overflow-hidden mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <h3
                                    className={`text-[18px] font-medium text-[#024645] text-center mb-2 font-funnel`}
                                >
                                    {item.name}
                                </h3>
                                <p
                                    className={`text-[15px] font-light leading-[1.6] text-black text-center font-dm-sans`}
                                >
                                    {item.description[0]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Defense Cards - Desktop: 3-column grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 xl:gap-12 w-full max-w-[1280px] mx-auto">
                    {defenseCards.map((card) => (
                        <div key={card.id} className="flex flex-col h-full">
                            {/* Image Container with Title Overlay */}
                            <div className="relative w-full aspect-[3/4] xl:aspect-[4/5] rounded-[1.5rem] xl:rounded-[3rem] overflow-hidden bg-gray-100 mb-6 xl:mb-8 shadow-sm">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-4 xl:pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bullets below the image container */}
                            <div className={`px-2 xl:px-4 font-dm-sans`}>
                                <ul className="space-y-2 xl:space-y-3">
                                    {card.bullets.map((bullet, idx) => (
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
                        </div>
                    ))}
                </div>

                {/* Defense Cards - Mobile: Single card with chevron nav */}
                <div className="block md:hidden">
                    <div className="px-4">
                        <div className="flex flex-col h-full">
                            {/* Image Container with Title Overlay and Navigation */}
                            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 mb-8 shadow-sm">
                                <Image
                                    src={defenseCards[currentSlide].image}
                                    alt={defenseCards[currentSlide].title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                                {/* Title Overlay at Top */}
                                <div className="absolute inset-0 flex items-start justify-center pt-10">
                                    <h3
                                        className={`text-white text-[30px] text-center px-8 leading-[1.1] drop-shadow-md font-normal font-dm-sans`}
                                    >
                                        {defenseCards[currentSlide].title}
                                    </h3>
                                </div>

                                {/* Navigation Chevrons */}
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                    <ChevronButton direction="left" onClick={prevSlide} />
                                </div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                    <ChevronButton direction="right" onClick={nextSlide} />
                                </div>
                            </div>

                            {/* Bullets below the image container */}
                            <div className={`px-4 font-dm-sans`}>
                                <ul className="space-y-3">
                                    {defenseCards[currentSlide].bullets.map((bullet, idx) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
