"use client";

import React from "react";
import { ProductsSection } from "@/components/sections/ProductsSection";

const OTT_APPS_PRODUCTS = [
    {
        id: 1,
        title: "OTT Streaming",
        description:
            "Integrations allow you to let guests use their own auth-signed Media for other guest in your hotel—simply log in and access them—brought to you by Converge Technology.",
        image: "/images/contents/content-3.png",
        alignLeft: false,
    },
];

export const OTTAppsSection = (): React.JSX.Element => {
    return (
        <div id="ott-apps">
            <ProductsSection
                title="OTT Apps"
                description={<></>}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={OTT_APPS_PRODUCTS}
            />
        </div>
    );
};
