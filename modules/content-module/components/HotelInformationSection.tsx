"use client";

import React from "react";
import { ProductsSection } from "@/components/sections/ProductsSection";

const HOTEL_INFORMATION_PRODUCTS = [
    {
        id: 1,
        title: "Hotel Information",
        description:
            "Inform Guest About the Hotel facility, tour guides, integrated spa, reservations, and live right-you can then customize all activities catering to them.",
        image: "/images/contents/hoteln.svg",
        alignLeft: true,
    },
];

export const HotelInformationSection = (): React.JSX.Element => {
    return (
        <div id="hotel-information">
            <ProductsSection
                title="Hotel Information"
                description={<></>}
                backgroundColor="bg-white"
                titleColor="text-[#024645]"
                descriptionColor="text-black"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={HOTEL_INFORMATION_PRODUCTS}
            />
        </div>
    );
};
