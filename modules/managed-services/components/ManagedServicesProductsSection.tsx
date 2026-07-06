"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";


const products = [
    {
        id: 1,
        title: "DRaaS",
        description: "Disaster Recovery as a Service",
        image: "/images/managedsurveillance/draas.png",
        link: "/connectivity/managed-services/draas",
        alignLeft: true,
    },
    {
        id: 2,
        title: "SD-WAN",
        description: "A connectivity that works for you. Stabilize & secure your network across multiple locations.",
        image: "/images/managedsurveillance/sd-wan.png",
        link: "/connectivity/managed-services/sd-wan",
        alignLeft: false,
    },
    {
        id: 3,
        title: "Managed Wi-Fi",
        description: "Seamless and consistent Wi-Fi that's expertly managed. Simple, fast and reliable.",
        image: "/images/managedsurveillance/managed-wifi.png",
        link: "/connectivity/managed-services/managed-wifi",
        alignLeft: true,
    },
    {
        id: 4,
        title: "Managed Surveillance",
        description: "Secure, Monitor, Protect - Managed by Experts",
        image: "/images/managedsurveillance/managed-surveillance.png",
        link: "/connectivity/managed-services/managed-surveillance",
        alignLeft: false,
    },
];

interface MobileProductCardProps {
    product: typeof products[0];
}

const MobileProductCard = ({ product }: MobileProductCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-[50px] overflow-hidden flex flex-col">
            <Link
                href={product.link}
                className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]"
            >
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                </div>
                {/* Title */}
                <div className="flex items-center justify-center px-6 pt-6 text-center">
                    <h3 className={`text-[21px] text-[#024645] font-normal leading-tight font-dm-sans`}>
                        {product.title}
                    </h3>
                </div>
            </Link>
            {/* Expandable description (sibling of Link so the Read More button doesn't trigger navigation) */}
            <div className="px-6 pb-6 pt-3 w-full text-center">
                <div className={`text-[15px] text-black font-light leading-relaxed overflow-hidden transition-all duration-300 font-dm-sans ${isExpanded ? "max-h-[500px]" : "max-h-[48px]"}`}>
                    <p>{product.description}</p>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`text-[13px] text-[#038F8D] font-medium mt-2 hover:text-[#027573] transition-colors duration-200 cursor-pointer font-dm-sans`}
                >
                    {isExpanded ? "Read Less ›" : "Read More ›"}
                </button>
            </div>
        </div>
    );
};

export const ManagedServicesProductsSection = () => {
    return (
        <section className="w-full bg-[#1e1e19] py-[24px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Header */}
                <AnimateOnScroll variant="fade-up" className="text-center mb-4 md:mb-6 max-w-[800px]">
                    <h2 className={`text-[35px] font-light text-white mb-4 font-funnel`}>
                        Our Managed Solutions
                    </h2>
                    <p className={`text-[15px] md:text-[16px] text-white font-light leading-[1.6] font-dm-sans`}>
                        The essential services your business needs.
                    </p>
                </AnimateOnScroll>

                {/* Mobile: Expandable Cards */}
                <div className="md:hidden grid grid-cols-1 gap-6 w-full max-w-[400px]">
                    {products.map((product) => (
                        <MobileProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Desktop: Side-by-Side Layout with Link */}
                <AnimateOnScroll variant="fade-up" delay={150} className="hidden md:flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.link}
                            className={`group flex ${product.alignLeft ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-[4rem] overflow-hidden min-h-[400px] md:h-[420px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                        >
                            <div className="w-full md:w-[30%] p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                                <h3 className={`text-[30px] text-[#024645] mb-6 leading-[28px] font-normal whitespace-pre-line font-dm-sans`}>
                                    {product.title}
                                </h3>
                                <p className={`hidden xl:block text-[16px] text-black font-light leading-[24px] max-w-[320px] font-dm-sans`}>
                                    {product.description}
                                </p>
                            </div>
                            <div className={`w-full md:w-[70%] relative min-h-[300px] md:min-h-full overflow-hidden ${product.alignLeft ? "md:rounded-l-[4rem]" : "md:rounded-r-[4rem]"}`}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 65vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>
                        </Link>
                    ))}
                </AnimateOnScroll>
            </div>
        </section>
    );
};
