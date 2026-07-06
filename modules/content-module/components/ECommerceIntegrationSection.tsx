"use client";

import React from "react";
import { ProductsSection } from "@/components/sections/ProductsSection";

const ECOMMERCE_PRODUCTS = [
    {
        id: 1,
        title: "E-commerce Integration",
        description:
            "Easily link up with existing hotel marketplaces (e.g. OLA hotelier) use your own canvas, or POS-linked with present gaming room.",
        image: "/images/contents/content-2.png",
        alignLeft: true,
    },
];

export const ECommerceIntegrationSection = (): React.JSX.Element => {
    return (
        <ProductsSection
            title="E-commerce Integration"
            description={<></>}
            backgroundColor="bg-white"
            titleColor="text-[#024645]"
            descriptionColor="text-black"
            cardTextColor="text-black"
            useMobileGrid={true}
            products={ECOMMERCE_PRODUCTS}
        />
    );
};
