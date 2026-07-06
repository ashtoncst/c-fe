"use client";

import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/layouts/Footer";
import { ColocationHero } from "./components/ColocationHero";
import { MultiEdgeSection } from "@/modules/data-center-module/components/MultiEdgeSection";
import { Modal } from "@/components/modal/Modal";
import { DATA_CENTER_CARD, DATA_CENTER_LOCATION, PARAMETERS, DESCRIPTION } from "./constants";
import CloseIcon from "@/public/icons/CloseIcon";

export const ColocationDataCenter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(DATA_CENTER_LOCATION[0].name);

    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <main className="flex-grow w-full">
                    <ColocationHero />
                    <div className="relative mt-4 md:mt-0 xl:-mt-[94px]">
                        <MultiEdgeSection />
                    </div>

                    {/* Data Center Location Cards */}
                    <section className="px-6 md:px-12 lg:px-16 xl:px-[120px] py-16 md:py-20 xl:py-24">
                        <div className="flex flex-col md:flex-row gap-6 xl:gap-8">
                            {DATA_CENTER_CARD.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-1 cursor-pointer group"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-t-[40px]">
                                        <Image
                                            src={item.img}
                                            alt={typeof item.title === "string" ? item.title : "Data Center"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                                        <div className="absolute top-8 left-8">
                                            <p className={`font-funnel text-white text-[32px] md:text-[36px] leading-[1.15] font-normal`}>
                                                {item.title}
                                            </p>
                                            <p className={`font-dm-sans text-white/80 text-[13px] font-light mt-2`}>
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="bg-[#F7F7F7] rounded-b-[40px] px-8 py-6">
                                        <div className={`font-dm-sans text-[14px] md:text-[15px] text-[#374151] font-light leading-[1.8]`}>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>

            {/* Location Detail Modal */}
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <div
                        className={`font-dm-sans text-[15px] font-normal leading-[100%] text-black w-[95%] px-5 h-[800px] overflow-auto lg:w-[900px] lg:h-fit absolute top-1/2 left-1/2 rounded-[50px] -translate-x-1/2 -translate-y-1/2 bg-white md:px-[88px] pb-[71px]`}
                    >
                        <div
                            className="absolute top-[29px] right-[32px] cursor-pointer"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <CloseIcon />
                        </div>
                        <div className="mt-[38px] grid grid-cols-5">
                            {DATA_CENTER_LOCATION.map((item, index) => (
                                <div
                                    key={index}
                                    className={index === 0 ? "col-span-2 flex justify-end pr-[30px]" : "pl-[50px] col-span-3"}
                                >
                                    <div
                                        className={`font-dm-sans ${
                                            currentLocation === item.name
                                                ? "text-con-custom-green pb-[7px] w-fit border-b-[1px] border-con-custom-green"
                                                : "text-[#9F9FA9] hover:text-con-custom-green"
                                        } text-[15px] font-normal leading-[20px] cursor-pointer`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentLocation(item.name);
                                        }}
                                    >
                                        <p className="text-[20px] font-normal">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-5 mt-10">
                            <div className="col-span-2">
                                <p className="text-[15px] font-light leading-[100%]">Parameters</p>
                            </div>
                            <div className="col-span-3 pl-[50px]">
                                <p className="text-[15px] font-light leading-[20px]">Description</p>
                            </div>
                        </div>
                        <div className="mt-3.5 border-t border-[#9F9FA9] font-light" />
                        <div className="mt-4 font-light">
                            {PARAMETERS.map((item, index) => (
                                <div key={index} className="grid grid-cols-5 py-[4px]">
                                    <div className="col-span-2 pr-4">
                                        <p className="text-[15px] font-light leading-[20px]">{item}</p>
                                    </div>
                                    <div className="col-span-3 pl-[50px]">
                                        <p className="text-[15px] font-light leading-[20px]">{DESCRIPTION[index]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
