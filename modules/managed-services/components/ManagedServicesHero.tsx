"use client";

import { useState } from "react";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { BROCHURE_URLS } from "@/config/brochures";

export const ManagedServicesHero = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <PageHeroWithMobileCard
                title={
                    <>
                        Managed
                        <br />
                        Services
                    </>
                }
                description="Our managed services bring together disaster recovery, intelligent networking, managed WiFi, and surveillance into expert hands. Remote, real-time, and simplified business operations."
                buttonLabel="Download"
                onButtonClick={() => setModalOpen(true)}
                backgroundImage="/images/managedsurveillance/managed-services-herobg.png"
                bottomGradient="none"
            />
            <DownloadModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                downloadUrl={BROCHURE_URLS.managedServices}
            />
        </>
    );
};
