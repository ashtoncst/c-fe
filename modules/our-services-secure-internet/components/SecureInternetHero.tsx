"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const SecureInternetHero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* Desktop and Mobile Hero with Custom Light Background Styling */}
            <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/images/hospitality-hero-bg.png"
                        alt="Secure Internet Hero Background"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-[10] w-full px-6 pb-[170px] md:px-12 xl:pb-0 xl:px-[120px] pt-[180px] md:pt-[160px] xl:pt-[180px] max-w-[1440px] text-center md:text-left md:mr-auto">
                    <h1
                        className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 text-[#038F8D] font-funnel`}
                    >
                        Secure Internet
                    </h1>
                    {/* Description and button hidden on mobile/tablet, shown on desktop */}
                    <div className="hidden xl:block">
                        <p
                            className={`text-[16px] md:text-[18px] max-w-[560px] mb-10 font-light leading-[1.6] text-black font-dm-sans`}
                        >
                            Starlink is a satellite internet service powered by SpaceX, using low Earth orbit (LEO) satellites to deliver high-speed, low-latency internet ideal for streaming, video calls, gaming, and more, even in remote or underserved areas.
                        </p>
                        <Button
                            variant="secondary"
                            size="md"
                            icon="none"
                            className="w-fit text-[14px]"
                            onClick={() => setModalOpen(true)}
                        >
                            Download
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mobile + Tablet: white card scooping up over the hero bottom */}
            <div className="xl:hidden bg-white rounded-t-[32px] relative z-[35] -mt-[70px] px-6 md:px-12 pt-8 pb-4 text-center">
                <div className={`text-[15px] text-[#374151] leading-[1.7] mb-6 font-dm-sans`}>
                    Starlink is a satellite internet service powered by SpaceX, using low Earth orbit (LEO) satellites to deliver high-speed, low-latency internet ideal for streaming, video calls, gaming, and more, even in remote or underserved areas.
                </div>
                <Button
                    variant="primary"
                    size="md"
                    icon="none"
                    className="w-fit text-[14px] mx-auto"
                    onClick={() => setModalOpen(true)}
                >
                    Download
                </Button>
            </div>

            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.secureInternet} />
        </>
    );
};