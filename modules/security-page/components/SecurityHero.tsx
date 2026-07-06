"use client";

import { useState } from "react";
import { PageHeroWithMobileCard, type PageHeroProps } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const SecurityHero = (props: PageHeroProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = props.onButtonClick ?? (() => setModalOpen(true));

    return (
        <>
            <PageHeroWithMobileCard
                title={props.title ?? "Anti-DDoS"}
                description={
                    props.description ??
                    "The evolution of Enterprise-grade Connectivity. Giving you not just dedicated but secured Internet Access."
                }
                buttonLabel={props.buttonLabel ?? "Download"}
                onButtonClick={handleButtonClick}
                backgroundImage={props.backgroundImage ?? "/images/security/newBanner.svg"}
                bottomGradient={props.bottomGradient ?? "none"}
            />

            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.antiDdos} />
        </>
    );
};
