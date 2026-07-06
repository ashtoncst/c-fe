"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { FAQSection } from "@/components/faq-section/FAQSection";
import { FAQ_DATA } from "@/constants/FAQSection.constant";
import { HelpSection } from "@/components/help-section/HelpSection";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import { ChevronButton } from "@/components/ui/ChevronButton";

import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import MetroEthernetImage from "../../../public/images/selling/image3.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";

const relatedServices = [
    {
        id: 13,
        title: "IP VPN",
        description:
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
        image: IpVpnImage,
    },
    {
        id: 2,
        title: "Transport via GPON",
        description:
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
        image: GponImage,
    },
    {
        id: 9,
        title: "Dedicated Internet Access",
        description:
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
        image: DedicatedInternetAccessImage,
    },
    {
        id: 12,
        title: "Metro Ethernet",
        description:
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
        image: MetroEthernetImage,
    },
];

export const SecurityProductsSection = () => {
    const { mutate: addToCart } = usePostCart({});
    const sessionCurrentId = localStorageUtil.getSessionId();
    const [currentRelatedSlide, setCurrentRelatedSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const nextRelatedSlide = () => {
        setCurrentRelatedSlide((prev) => (prev + 1) % relatedServices.length);
    };

    const prevRelatedSlide = () => {
        setCurrentRelatedSlide(
            (prev) => (prev - 1 + relatedServices.length) % relatedServices.length
        );
    };

    return (
        <div className="w-full">
            {/* Testimonials - Dark Section */}
            <section className="w-full bg-[#1e1e19] pt-10 md:pt-[40px] pb-10 md:pb-[40px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                    <h2
                        className={`text-[35px] font-light text-white text-center mb-4 leading-[1.2] font-funnel`}
                    >
                        Peace of Mind,
                    </h2>
                    <h2
                        className={`text-[35px] font-light text-white text-center mb-4 md:mb-6 leading-[1.2] font-funnel`}
                    >
                        Proven by Real Stories
                    </h2>
                    <div className="w-full">
                        <TestimonialSection dark />
                    </div>
                </div>
            </section>

            {/* FAQ Section - White background */}
            <section className="w-full bg-white py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto">
                    <FAQSection FAQ_Data={FAQ_DATA} />
                </div>
            </section>

            {/* Help Section */}
            <section className="w-full bg-white py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="border-t border-gray-200 mb-12 md:mb-16" />
                    <HelpSection />
                </div>
            </section>

            {/* Related Services Section */}
            <section className="w-full bg-white py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                    <div className="border-t border-gray-100 w-full mb-10 md:mb-14 hidden xl:block" />
                    <h2
                        className={`text-[35px] font-light text-[#024645] text-center mb-4 md:mb-6 leading-[1.3] font-funnel`}
                    >
                        Related Service Categories
                    </h2>

                    {/* Desktop: 4-column grid */}
                    <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
                        {relatedServices.map((service) => (
                            <div
                                key={service.id}
                                className="flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[220px] xl:h-[260px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-top"
                                    />
                                    {/* Title overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4">
                                        <h3
                                            className={`text-white text-[20px] xl:text-[24px] text-center font-normal leading-tight drop-shadow-md font-dm-sans`}
                                        >
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description + Button */}
                                <div className="flex flex-col items-center p-5 flex-1">
                                    <p
                                        className={`text-[14px] font-light leading-[1.5] text-black text-center mb-5 font-dm-sans`}
                                    >
                                        {service.description}
                                    </p>
                                    <ButtonBase
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart({
                                                sessionId: sessionCurrentId,
                                                itemId: service.id,
                                            });
                                        }}
                                        className="border border-[#038F8D] rounded-[30px] bg-[#038F8D] text-white hover:bg-[#024645] active:text-[#95FFFB] cursor-pointer transition-colors duration-200"
                                        title={
                                            <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                                                <PlusIcon />
                                                <span
                                                    className={`text-white font-normal text-[13px] leading-[100%] pr-[5px] font-dm-sans`}
                                                >
                                                    Add Item
                                                </span>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Single card with chevron nav */}
                    <div className="block md:hidden w-full">
                        <div className="px-2">
                            <div className="flex flex-col items-center">
                                {/* Card */}
                                <div className="w-full max-w-[320px] rounded-[2rem] overflow-hidden bg-white shadow-md">
                                    {/* Image with nav */}
                                    <div className="relative w-full h-[200px] overflow-hidden">
                                        <Image
                                            src={relatedServices[currentRelatedSlide].image}
                                            alt={relatedServices[currentRelatedSlide].title}
                                            fill
                                            sizes="100vw"
                                            className="object-cover object-top"
                                        />
                                        {/* Title overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4">
                                            <h3
                                                className={`text-white text-[20px] text-center font-normal leading-tight drop-shadow-md font-dm-sans`}
                                            >
                                                {relatedServices[currentRelatedSlide].title}
                                            </h3>
                                        </div>

                                        {/* Chevron nav */}
                                        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                            <ChevronButton direction="left" onClick={prevRelatedSlide} />
                                        </div>
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                            <ChevronButton direction="right" onClick={nextRelatedSlide} />
                                        </div>
                                    </div>

                                    {/* Description + Button */}
                                    <div className="flex flex-col items-center p-5">
                                        <p
                                            className={`text-[13px] font-light leading-[1.5] text-black text-center mb-5 font-dm-sans`}
                                        >
                                            {relatedServices[currentRelatedSlide].description}
                                        </p>
                                        <ButtonBase
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart({
                                                    sessionId: sessionCurrentId,
                                                    itemId: relatedServices[currentRelatedSlide].id,
                                                });
                                            }}
                                            className="border border-[#038F8D] rounded-[30px] bg-[#038F8D] text-white hover:bg-[#024645] active:text-[#95FFFB] cursor-pointer transition-colors duration-200"
                                            title={
                                                <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                                                    <PlusIcon />
                                                    <span
                                                        className={`text-white font-normal text-[13px] leading-[100%] pr-[5px] font-dm-sans`}
                                                    >
                                                        Add Item
                                                    </span>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Slide indicators */}
                                <div className="flex gap-2 mt-6">
                                    {relatedServices.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setCurrentRelatedSlide(idx)}
                                            className={`w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
                                                idx === currentRelatedSlide
                                                    ? "bg-[#038F8D]"
                                                    : "bg-gray-300"
                                            }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
