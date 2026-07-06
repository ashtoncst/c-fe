"use client";

import React from "react";
import { DesignedForGuestSection } from "@/modules/hospitality/components/DesignedForGuestSection";

const CUSTOMIZABLE_INTERFACE_FEATURES = [
    {
        id: 1,
        title: "Integrated Feature-Set Platform",
        image: "/images/hospitalityfirstcolumn.png",
        bullets: [
            "All-in-one guest support for in-room assistance",
            "Complete with QR, etc. IP-centric room controls for modern hotel rooms",
        ],
    },
    {
        id: 2,
        title: "eCommerce Integration Ready",
        image: "/images/hospitalitysecondcolumn.png",
        bullets: [
            "Show custom in-room cart, valet, ordering your resort—whatever you want the guest to access, they can engage with seamlessly and intuitively",
        ],
    },
    {
        id: 3,
        title: "OTT Streaming Friendly",
        image: "/images/hospitalitythirdcolumn.png",
        bullets: [
            "Living made easy with popular streaming platforms",
            "OTT apps, if your resort offers Telco Plus, they can login to their Netflix, Disney+ subscription and more",
        ],
    },
];

export const CustomizableInterfaceSection = (): React.JSX.Element => {
    return (
        <div id="customizable-interface">
            <DesignedForGuestSection
                title="Designed for Seamless Guest Experiences"
                backgroundColor="bg-white"
                features={CUSTOMIZABLE_INTERFACE_FEATURES}
            />
        </div>
    );
};
