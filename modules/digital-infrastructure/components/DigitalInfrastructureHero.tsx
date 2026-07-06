"use client";

import { useState } from "react";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { BrochureDropdownModal, type BrochureOption } from "@/components/modals/BrochureDropdownModal";
import { BROCHURE_URLS } from "@/config/brochures";

// Digital Infrastructure brochure now serves the Omnibus brochure; the Converge
// Cloud brochure file now holds CSI's Cloud brochure (see /public/brochures).
export const DIGITAL_INFRA_BROCHURES: BrochureOption[] = [
    { label: "Omnibus Brochure", url: BROCHURE_URLS.gbgOmnibus },
    { label: "Converge Cloud Brochure", url: BROCHURE_URLS.convergeCloud },
];

export const DigitalInfrastructureHero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <PageHeroWithMobileCard
                title={
                    <>
                        Digital
                        <br />
                        Infrastructure
                    </>
                }
                description="Digital infrastructure is the backbone of modern business. Converge Global designs and deploys infrastructure that supports performance, security, and long-term innovation—whether on-premise, cloud-based, or hybrid, we ensure your systems are built to handle today's demands and tomorrow's growth."
                buttonLabel="Download"
                onButtonClick={() => setModalOpen(true)}
                backgroundImage="/images/digital-infrastructure-hero-bg.png"
                bottomGradient="none"
            />
            <BrochureDropdownModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                brochures={DIGITAL_INFRA_BROCHURES}
            />
        </>
    );
};