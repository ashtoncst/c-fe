"use client";

import React from "react";
import { ProductsSection } from "@/components/sections/ProductsSection";

const IN_ROOM_DINING_PRODUCTS = [
    {
        id: 1,
        title: "In Room Dining",
        description:
            "Virtually place Your Menu aboard hotel catering with not time-formats attribution.",
        image: "/images/contents/room.svg",
        alignLeft: true,
    },
];

export const InRoomDiningSection = (): React.JSX.Element => {
    return (
        <div id="in-room-dining">
            <ProductsSection
                title="In Room Dining"
                description={<></>}
                backgroundColor="bg-white"
                titleColor="text-[#024645]"
                descriptionColor="text-black"
                cardTextColor="text-black"
                useMobileGrid={true}
                products={IN_ROOM_DINING_PRODUCTS}
            />
        </div>
    );
};
