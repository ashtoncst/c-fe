import React from 'react';
import Image from 'next/image';

const PARTNERS = [
    { name: 'Arista', src: '/images/partners/Arista.svg', alt: 'Arista Logo', width: 120, height: 40 },
    { name: 'HPE Aruba', src: '/images/partners/HPE%20Aruba.svg', alt: 'HPE Aruba Logo', width: 140, height: 40 },
    { name: 'Huawei', src: '/images/partners/Huawei.svg', alt: 'Huawei Logo', width: 120, height: 40 },
    { name: 'Cisco', src: '/images/partners/Cisco.svg', alt: 'Cisco Logo', width: 100, height: 40 },
    { name: 'Fortinet', src: '/images/partners/Fortinet.svg', alt: 'Fortinet Logo', width: 120, height: 40 },
    { name: 'H3C', src: '/images/partners/H3C.svg', alt: 'H3C Logo', width: 80, height: 40 },
    { name: 'Perle', src: '/images/partners/Perle.svg', alt: 'Perle Logo', width: 100, height: 40 },
    { name: 'Microsoft', src: '/images/partners/Microsoft.svg', alt: 'Microsoft Logo', width: 130, height: 40 },
    { name: 'Delta', src: '/images/partners/Delta.svg', alt: 'Delta Logo', width: 100, height: 40 },
    { name: 'REN3', src: '/images/partners/REN3.svg', alt: 'REN3 Logo', width: 100, height: 40 },
    { name: 'WatchGuard', src: '/images/partners/WatchGuard.svg', alt: 'WatchGuard Logo', width: 140, height: 40 },
    { name: 'NSFOCUS', src: '/images/partners/NSFOCUS.svg', alt: 'NSFOCUS Logo', width: 120, height: 40 },
    { name: 'DrayTek', src: '/images/partners/DrayTek.svg', alt: 'DrayTek Logo', width: 110, height: 40 },
    { name: 'Starlink', src: '/images/partners/Starlink.svg', alt: 'Starlink Logo', width: 120, height: 40 },
    { name: 'Packetworx', src: '/images/partners/Packetworx.svg', alt: 'Packetworx Logo', width: 130, height: 40 },
    { name: 'Bitdefender', src: '/images/partners/Bitdefender.svg', alt: 'Bitdefender Logo', width: 130, height: 40 },
    { name: 'TP-LINK Omada', src: '/images/partners/TP-LINK%20Omada.svg', alt: 'TP-LINK Omada Logo', width: 140, height: 40 },
    { name: 'Avaya', src: '/images/partners/Avaya.svg', alt: 'Avaya Logo', width: 110, height: 40 },
    { name: 'Teltonika', src: '/images/partners/Teltonika.svg', alt: 'Teltonika Logo', width: 120, height: 40 },
    { name: 'Zoom', src: '/images/partners/Zoom.svg', alt: 'Zoom Logo', width: 100, height: 40 },
    { name: 'SIDC', src: '/images/partners/SIDC.svg', alt: 'SIDC Logo', width: 100, height: 40 },
    { name: 'HIKVISION', src: '/images/partners/HIKVISION.svg', alt: 'HIKVISION Logo', width: 130, height: 40 },
    { name: 'ZTE', src: '/images/partners/ZTE.svg', alt: 'ZTE Logo', width: 80, height: 40 },
    { name: 'Dahua', src: '/images/partners/Dahua.svg', alt: 'Dahua Logo', width: 110, height: 40 },
    { name: 'YOTC', src: '/images/partners/YOTC.svg', alt: 'YOTC Logo', width: 100, height: 40 },
    { name: 'Grandstream', src: '/images/partners/Grandstream.svg', alt: 'Grandstream Logo', width: 130, height: 40 },
    { name: 'PANDUIT', src: '/images/partners/PANDUIT.svg', alt: 'PANDUIT Logo', width: 120, height: 40 },
    { name: 'Vertiv', src: '/images/partners/Vertiv.svg', alt: 'Vertiv Logo', width: 110, height: 40 },
    { name: 'DELL', src: '/images/partners/DELL.svg', alt: 'DELL Logo', width: 80, height: 40 },
];

export const InfiniteLogoStrip = () => {
    // Duplicate the partners array to create a seamless looping effect
    const duplicatedPartners = [...PARTNERS, ...PARTNERS];

    return (
        <div className="relative w-full bg-[#161616] py-14 md:py-24 flex justify-center items-center overflow-hidden">
            <div className="relative w-full max-w-[1440px]">
                {/* Edge fade gradient overlays directly over the logos */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#161616] via-[#161616]/80 to-transparent z-20 pointer-events-none" />

                <div className="relative z-10 flex overflow-hidden w-full group">
                    {/* Infinite scrolling track */}
                    <div className="flex flex-nowrap items-center w-max animate-infinite-scroll group-hover:[animation-play-state:paused] gap-6 md:gap-10 px-6">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center shrink-0 opacity-[0.30] hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                            >
                                {partner.src ? (
                                    <div className="relative flex items-center justify-center h-[16px] md:h-[30px] w-auto">
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={partner.width}
                                            height={partner.height}
                                            className="object-contain h-full w-auto"
                                        />
                                    </div>
                                ) : (
                                    <div className="text-[#E0E0E0] text-sm md:text-base font-bold tracking-widest uppercase whitespace-nowrap">
                                        {partner.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
            `}</style>
        </div>
    );
};
