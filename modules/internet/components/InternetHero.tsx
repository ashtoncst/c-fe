"use client";

import { useState } from "react";
import { PageHeroWithMobileCard, type PageHeroProps } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const InternetHero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <PageHeroWithMobileCard
                title="Internet"
                description="Delivering stable, high-speed internet for homes and businesses."
                buttonLabel="Download"
                onButtonClick={() => setModalOpen(true)}
                backgroundImage="/images/internet/internet-tablet-banner.png"
                bottomGradient="none"
            />

            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.internet} />
        </>
    );
};
