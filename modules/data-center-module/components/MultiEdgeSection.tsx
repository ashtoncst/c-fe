"use client";

import { useState } from "react";
import { MapIcon } from "@/assets/icons/MapIcon";
import { DATA_CENTER_SERVICE_SOLUTION } from "@/modules/colocation-data-module/constants";
import { LocationPopup } from "./LocationPopup";

// Hand-tuned vertical offsets so each popup sits next to its map pin,
// carried over from the previous per-location SVG positioning.
const POPUP_TOP_DESKTOP: Record<number, string> = {
    1: "top-[60px]",
    2: "top-[120px]",
    3: "top-[220px]",
    4: "top-[270px]",
    5: "top-[60px]",
    6: "top-[180px]",
    7: "top-[480px]",
};

const POPUP_TOP_MOBILE: Record<number, string> = {
    1: "top-[35px]",
    2: "top-[78px]",
    3: "top-[98px]",
    4: "top-[118px]",
    5: "top-[98px]",
    6: "top-[128px]",
    7: "top-[250px]",
};

export const MultiEdgeSection = () => {
    const [currentItem, setCurrentItem] = useState(1);

    const location =
        DATA_CENTER_SERVICE_SOLUTION[currentItem - 1] ?? DATA_CENTER_SERVICE_SOLUTION[0];

    return (
        <section className="relative w-full bg-gray-50 rounded-t-[64px] xl:rounded-t-[96px] z-[40]">
            {/* Desktop */}
            <div className="hidden md:flex items-start justify-center gap-x-16 lg:gap-x-24 px-[60px] xl:px-[100px] py-16 xl:py-24">
                {/* Left: info card */}
                <div className="shrink-0 w-[260px] lg:w-[300px] bg-white rounded-[32px] shadow-md p-8 lg:p-10">
                    <h2
                        className={`font-funnel text-[24px] lg:text-[28px] leading-[1.2] font-normal text-[#024645] mb-6`}
                    >
                        High-capacity Converge Data Centers
                    </h2>
                    <p
                        className={`font-dm-sans text-[14px] lg:text-[15px] font-light leading-[1.7] text-[#374151]`}
                    >
                        Reliable, secure data center hosting on a resilient pure fiber
                        network—ensuring uninterrupted service and trusted server
                        management.
                    </p>
                </div>

                {/* Right: map + popup */}
                <div className="relative flex justify-center">
                    <div className="relative">
                        <MapIcon
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                            width="480"
                            height="665"
                        />
                        <div
                            className={`absolute z-10 -right-[30px] lg:-right-[40px] ${POPUP_TOP_DESKTOP[currentItem] ?? "top-[60px]"}`}
                        >
                            <LocationPopup
                                status={location.title}
                                name={location.desc[0]}
                                image={location.image}
                                className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden block px-5 py-12">
                {/* White info card */}
                <div className="bg-white rounded-[24px] shadow-md p-6 mb-8">
                    <h2
                        className={`font-funnel text-[22px] leading-[1.25] font-normal text-[#024645] mb-4`}
                    >
                        High-capacity Converge Data Centers
                    </h2>
                    <p
                        className={`font-dm-sans text-[14px] font-light leading-[1.7] text-[#374151]`}
                    >
                        Reliable, secure data center hosting on a resilient pure fiber
                        network—ensuring uninterrupted service and trusted server
                        management.
                    </p>
                </div>

                {/* Philippines map — scaled to mobile width */}
                <div className="flex justify-center overflow-visible">
                    <div className="relative">
                        <MapIcon
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                            width="280"
                            height="388"
                        />
                        <div
                            className={`absolute z-10 -right-[20px] ${POPUP_TOP_MOBILE[currentItem] ?? "top-[35px]"}`}
                        >
                            <LocationPopup
                                status={location.title}
                                name={location.desc[0]}
                                image={location.image}
                                className="w-[220px] h-[240px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
