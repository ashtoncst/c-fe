"use client";

import React from "react";
import { ProductsSection } from "@/components/sections/ProductsSection";

const TV_STREAMING_TOP_CARDS = [
    {
        id: 1,
        title: "Live Channel Packages",
        description:
            "Choice of Basic Channels or Premium Channels. Watch your favorite live tv shows: Kids, Sports, News, and General Entertainment.",
        image: "/images/contents/tvsteam1.png",
    },
    {
        id: 2,
        title: "Secure Chromecast",
        description:
            "No need for other equipment (dongle). Stream your current movies and series on the hotel TV.",
        image: "/images/contents/tvsteam2.png",
    },
];

const TV_STREAMING_PRODUCTS = [
    {
        id: "in-room-dining",
        title: "In Room Dining",
        description: (
            <>
                <strong className="block mb-1 font-bold">Virtually Host Your Menu</strong>
                Instant food ordering with real-time kitchen notification.
            </>
        ),
        image: "/images/contents/room.svg",
        alignLeft: true,
    },
    {
        id: "ott-apps",
        title: "OTT Apps",
        description:
            "Netflix, Disney+, Youtube, and the like – all in one. Auto logout feature after guest check out configurable on the interface. Quick log-in via OTT app QR.",
        image: "/images/contents/content-3.png",
        alignLeft: false,
    },
    {
        id: "ecommerce-integration",
        title: "E-commerce Integration",
        description:
            "Sleek digital in-room dining menu ordering seamlessly—delivered instantly to the kitchen via printer, email, or POS that can be integrated with the hotel property management system.",
        image: "/images/contents/content-2.png",
        alignLeft: true,
    },
    {
        id: "hotel-information",
        title: "Hotel Information",
        description: (
            <>
                <strong className="block mb-1 font-bold">Inform Guest About the Hotel</strong>
                Display floor guides, restaurant and facility information, running bills, special promotions, and live flight and weather updates—all customizable on the TV.
            </>
        ),
        image: "/images/contents/hoteln.svg",
        alignLeft: false,
    },
];

export const TVStreamingSection = (): React.JSX.Element => {
    return (
        <div id="tv-streaming">
            <ProductsSection
                title="Live TV"
                description={<></>}
                backgroundColor="bg-[#1e1e19]"
                titleColor="text-white"
                descriptionColor="text-white"
                cardTextColor="text-black"
                cardTitleColor="text-[#038F8D]"
                topGridCards={TV_STREAMING_TOP_CARDS}
                products={TV_STREAMING_PRODUCTS}
            />
        </div>
    );
};
