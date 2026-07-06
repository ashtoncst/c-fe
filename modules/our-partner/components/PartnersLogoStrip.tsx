import React from "react";
import Image from "next/image";

export const PARTNERS = [
    { name: "Ekinops", src: "/images/partners/Ekinops.svg", alt: "Ekinops Logo", width: 174, height: 40 },
    { name: "Fortinet", src: "/images/partners/Fortinet.svg", alt: "Fortinet Logo", width: 120, height: 40 },
    { name: "TP-LINK Omada", src: "/images/partners/TP-LINK%20Omada.svg", alt: "TP-LINK Omada Logo", width: 140, height: 40 },
    { name: "Ruijie | Reyee", src: "/images/partners/Ruijie-Reyee.svg", alt: "Ruijie Reyee Logo", width: 224, height: 40 },
    { name: "Cisco", src: "/images/partners/Cisco.svg", alt: "Cisco Logo", width: 100, height: 40 },
    { name: "Ubiquiti", src: "/images/partners/Ubiquiti.svg", alt: "Ubiquiti Logo", width: 136, height: 40 },
    { name: "YOTC", src: "/images/partners/YOTC.svg", alt: "YOTC Logo", width: 100, height: 40 },
    { name: "Teltonika", src: "/images/partners/Teltonika.svg", alt: "Teltonika Logo", width: 120, height: 40 },
    { name: "Huawei", src: "/images/partners/Huawei.svg", alt: "Huawei Logo", width: 120, height: 40 },
    { name: "H3C", src: "/images/partners/H3C.svg", alt: "H3C Logo", width: 80, height: 40 },
    { name: "Starlink", src: "/images/partners/Starlink.svg", alt: "Starlink Logo", width: 120, height: 40 },
];

const duplicatedPartners = [...PARTNERS, ...PARTNERS];

export const PartnersLogoStrip = () => {

    return (
        <section className="w-full bg-[#F5F5F5] py-[24px] md:py-[32px]">
            {/* Section heading */}
            <div className="text-center mb-4 md:mb-6 px-6">
                <h2
                    className={`text-[35px] font-light text-[#024645] leading-[1.3] mb-4 font-funnel`}
                >
                    Our Partners
                </h2>
                <p
                    className={`text-[18px] text-black font-light leading-[1.7] max-w-[580px] mx-auto font-dm-sans`}
                >
                    We collaborate with industry-leading global partners to deliver
                    reliable, future-ready solutions.
                </p>
            </div>

            {/* Infinite scrolling logo strip */}
            <div className="relative w-full overflow-hidden">
                {/* Edge fade gradients using light background color */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F5F5F5] via-[#F5F5F5]/80 to-transparent z-20 pointer-events-none" />

                <div className="relative z-10 flex overflow-hidden w-full group">
                    <div className="flex flex-nowrap items-center w-max animate-partners-scroll group-hover:[animation-play-state:paused] gap-12 md:gap-20 px-6">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
                            >
                                <div className="relative flex items-center justify-center h-[32px] md:h-[40px] w-auto">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        width={partner.width}
                                        height={partner.height}
                                        className="object-contain h-full w-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
