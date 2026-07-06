"use client";

import { useState } from "react";
import { MapIcon } from "@/assets/icons/MapIcon";
import { Location1 } from "@/assets/icons/colocation-pop-up/Location1";
import { Location2 } from "@/assets/icons/colocation-pop-up/Location2";
import { Location3 } from "@/assets/icons/colocation-pop-up/Location3";
import { Location4 } from "@/assets/icons/colocation-pop-up/Location4";
import { Location5 } from "@/assets/icons/colocation-pop-up/Location5";
import { Location6 } from "@/assets/icons/colocation-pop-up/Location6";
import { Location7 } from "@/assets/icons/colocation-pop-up/Location7";

export const MultiEdgeSection = () => {
    const [currentItem, setCurrentItem] = useState(1);

    const handleDisplayPopupMobile = () => {
        switch (currentItem) {
            case 1:
                return (
                    <div className="absolute z-10 top-[35px] -right-[20px]">
                        <Location1 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 2:
                return (
                    <div className="absolute z-10 top-[78px] -right-[20px]">
                        <Location2 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 3:
                return (
                    <div className="absolute z-10 top-[98px] -right-[20px]">
                        <Location3 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 4:
                return (
                    <div className="absolute z-10 top-[118px] -right-[20px]">
                        <Location4 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 5:
                return (
                    <div className="absolute z-10 top-[98px] -right-[20px]">
                        <Location5 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 6:
                return (
                    <div className="absolute z-10 top-[128px] -right-[20px]">
                        <Location6 className="w-[220px] h-[240px]" />
                    </div>
                );
            case 7:
                return (
                    <div className="absolute z-10 top-[250px] -right-[20px]">
                        <Location7 className="w-[220px] h-[240px]" />
                    </div>
                );
            default:
                return (
                    <div className="absolute z-10 top-[35px] -right-[20px]">
                        <Location1 className="w-[220px] h-[240px]" />
                    </div>
                );
        }
    };

    const handleDisplayPopup = () => {
        switch (currentItem) {
            case 1:
                return (
                    <div className="absolute z-10 top-[60px] -right-[30px] lg:-right-[40px]">
                        <Location1 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 2:
                return (
                    <div className="absolute z-10 top-[120px] -right-[30px] lg:-right-[40px]">
                        <Location2 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 3:
                return (
                    <div className="absolute z-10 top-[220px] -right-[30px] lg:-right-[40px]">
                        <Location3 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 4:
                return (
                    <div className="absolute z-10 top-[270px] -right-[30px] lg:-right-[40px]">
                        <Location4 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 5:
                return (
                    <div className="absolute z-10 top-[60px] -right-[30px] lg:-right-[40px]">
                        <Location5 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 6:
                return (
                    <div className="absolute z-10 top-[180px] -right-[30px] lg:-right-[40px]">
                        <Location6 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            case 7:
                return (
                    <div className="absolute z-10 top-[480px] -right-[30px] lg:-right-[40px]">
                        <Location7 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
            default:
                return (
                    <div className="absolute z-10 top-[60px] -right-[30px] lg:-right-[40px]">
                        <Location1 className="w-[240px] h-[260px] lg:w-[290px] lg:h-[310px]" />
                    </div>
                );
        }
    };

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
                        {handleDisplayPopup()}
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
                        {handleDisplayPopupMobile()}
                    </div>
                </div>
            </div>
        </section>
    );
};
