"use client";

import React, { useState, useEffect } from "react";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { Footer } from "@/components/layouts/Footer";
import { PageHeroWithMobileCard } from "@/components/hero/PageHero";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { CustomizableInterfaceSection } from "./components/CustomizableInterfaceSection";
import { TVStreamingSection } from "./components/TVStreamingSection";
import { BROCHURE_URLS } from "@/config/brochures";

export const ContentModule = (): React.JSX.Element => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
                <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                    <StickyHeader />
                    <main className="flex-grow w-full relative -mt-[90px]">
                        {/* SECTION 1: Hero */}
                        <PageHeroWithMobileCard
                            title={
                                <>
                                    Content
                                    <br />
                                    Plus
                                </>
                            }
                            description="Deliver exceptional guest experiences with Content Plus—a streaming, high-performance digital ecosystem that ensures you're always ahead of current and future operational excellence."
                            buttonLabel="Download"
                            onButtonClick={() => setModalOpen(true)}
                            backgroundImage="/images/content-plus-hero-bg.png"
                            bottomGradient="none"
                            imagePosition="center 65%"
                        />

                        <div className="relative z-10 md:-mt-20">
                            {/* SECTION 2: #customizable-interface */}
                            <CustomizableInterfaceSection />

                            {/* SECTION 3: #tv-streaming — includes Live TV grid + all sub-sections */}
                            <TVStreamingSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} downloadUrl={BROCHURE_URLS.content} />
        </>
    );
};
