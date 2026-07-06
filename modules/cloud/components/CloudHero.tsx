"use client";

import { PageHeroWithMobileCard } from "@/components/hero/PageHero";

export const CLOUD_LEARN_MORE_URL = "https://convergecloud.com";

export const CloudHero = () => {
    return (
        <PageHeroWithMobileCard
            title="Converge Cloud"
            description="Running on the most advanced fiber network and the only operational data center in the Philippines with an active Uptime Tier III Design & Facility Certification for both Design & Facility."
            buttonLabel="Learn More"
            onButtonClick={() => {
                window.location.href = CLOUD_LEARN_MORE_URL;
            }}
            backgroundImage="/images/cloud/bg-hero-cloud.png"
            bottomGradient="none"
            imagePosition="center"
        />
    );
};
