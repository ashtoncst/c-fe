"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const DataCenterHero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/images/datacenter/datacenter-herobg.png"
                        alt="Data Center Hero Background"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-[10] w-full px-6 pb-[170px] md:px-12 xl:pb-0 xl:px-[120px] pt-[180px] md:pt-[160px] xl:pt-[166px] max-w-[1440px] text-white text-center md:text-left md:mr-auto">
                    <h1
                        className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 font-funnel`}
                    >
                        Data Centers
                    </h1>
                    {/* Description and button hidden on mobile/tablet, shown on desktop only */}
                    <div className="hidden xl:block">
                        <p
                            className={`text-[16px] md:text-[18px] max-w-[560px] mb-10 font-light leading-[1.6] text-white/90 font-dm-sans`}
                        >
                            Move your essential IT infrastructure into our certified, high-capacity data centers designed for exceptional performance and reliability. This solution provides the highly available power, cooling, physical security, and resilient network connections necessary to safeguard your data and applications.
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

            {/* Mobile + Tablet: white card scooping up over hero bottom */}
            <div className="xl:hidden bg-white rounded-t-[32px] relative z-[35] -mt-[70px] px-6 md:px-12 pt-8 pb-4 text-center">
                <div className={`text-[16px] text-[#000] leading-[24px] font-light mb-6 font-dm-sans`}>
                    Move your essential IT infrastructure into our certified, high-capacity data centers designed for exceptional performance and reliability. This solution provides the highly available power, cooling, physical security, and resilient network connections necessary to safeguard your data and applications.
                </div>
                <button
                    onClick={() => setModalOpen(true)}
                    className={`bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors font-dm-sans`}
                >
                    Download
                </button>
            </div>

            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.dataCenters} />
        </>
    );
};
