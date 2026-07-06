"use client";

import { useState } from "react";
import { PageHeroWithMobileCard, type PageHeroProps } from "@/components/hero/PageHero";
import { BrochureDropdownModal, type BrochureOption } from "@/components/modals/BrochureDropdownModal";
import { BROCHURE_URLS } from "@/config/brochures";

const DISTRIBUTED_SETUP_BROCHURES: BrochureOption[] = [
    { label: "Distributed Setup Brochure", url: BROCHURE_URLS.distributedSetup },
    { label: "Intelligent Campus Brochure", url: BROCHURE_URLS.intelligentCampus },
];

export type { PageHeroProps as DistributedSetupHeroProps };

export const DistributedSetupHero = (props: PageHeroProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = props.onButtonClick ?? (() => setModalOpen(true));

    return (
        <>
            <PageHeroWithMobileCard
                title={props.title ?? "Distributed Setup"}
                description={props.description ?? "Unlock new possibilities with our robust, globally certified transport and dedicated internet services. We provide API-secured, high-capacity networking solutions from Metro Ethernet (EIPL/VPN) seamlessly right to ensure guaranteed business continuity and seamless collaboration across all your separated sites."}
                buttonLabel={props.buttonLabel ?? "Download"}
                onButtonClick={handleButtonClick}
                backgroundImage={props.backgroundImage ?? "/images/distributed-setup-hero-bg.png"}
                bottomGradient={props.bottomGradient ?? "none"}
            />

            <BrochureDropdownModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                brochures={DISTRIBUTED_SETUP_BROCHURES}
            />
        </>
    );
};
