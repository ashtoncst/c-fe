"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StickyHeader } from "@/components/layouts/StickyHeader";
import { FooterDark } from "@/components/layouts/FooterDark";
import { NotifyModal } from "@/components/modals/NotifyModal";

const notifyBtnClass = `font-dm-sans font-normal bg-[#038F8D] border border-[#038F8D] text-white rounded-full md:px-[38px] px-[18px] md:py-2 py-[6px] text-[14px] leading-[20px] hover:bg-white hover:text-[#038F8D] hover:border-[#038F8D] transition-colors duration-200 cursor-pointer`;

export const ComingSoonModule = () => {
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    return (
        <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
            <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
                <StickyHeader forceDarkLogo={true} />
                <main className="flex-grow w-full relative -mt-[90px]">
                    {/* Hero Section */}
                    <section
                        className="relative w-full h-[50vh] min-h-[320px] max-h-[450px] md:min-h-[400px] md:max-h-[550px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden"
                        style={{ background: "linear-gradient(160deg, #b8ecee 0%, #cdf3f3 25%, #e2f9f9 55%, #f0fbfb 80%, #f5fdfd 100%)" }}
                    >
                        {/* Background image — responsive */}
                        <div className="absolute inset-0 z-0 md:hidden">
                            <Image
                                src="/images/mobilebg-comingsoon.png"
                                alt="Coming Soon background"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 z-0 hidden md:block lg:hidden">
                            <Image
                                src="/images/tabletbg-comingsoon.png"
                                alt="Coming Soon background"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 z-0 hidden lg:block">
                            <Image
                                src="/images/comingsoon.png"
                                alt="Coming Soon background"
                                fill
                                sizes="100vw"
                                className="object-cover object-right"
                                priority
                            />
                        </div>

                        {/* Hero Content — desktop only */}
                        <div className="relative z-10 w-full px-6 xl:px-[120px] pt-[220px] xl:pt-[240px] max-w-[1440px] mr-auto hidden lg:block">
                            <h1
                                className={`font-funnel text-[35px] font-light leading-[1.05] tracking-tight text-[#024645] mb-5`}
                            >
                                Coming<br />Soon
                            </h1>

                            <p className={`font-dm-sans text-[17px] text-black font-light leading-[1.6] mb-8`}>
                                Something powerful is in motion.<br />
                                Be the first one to know!
                            </p>

                            <button
                                onClick={() => setIsNotifyOpen(true)}
                                className={`font-dm-sans ${notifyBtnClass}`}
                            >
                                Notify me
                            </button>
                        </div>
                    </section>

                    {/* Mobile: Coming Soon content between hero and footer */}
                    <div className="lg:hidden bg-[#1a1a1a] rounded-t-[32px] relative z-10 -mt-8 px-6 md:px-12 pt-10 pb-10 text-center">
                        <h1
                            className={`font-funnel text-[36px] font-light leading-[1.1] tracking-tight text-[#038F8D] mb-5`}
                        >
                            Coming Soon
                        </h1>

                        <p className={`font-dm-sans text-[15px] text-white font-light leading-[1.6] mb-8`}>
                            Something powerful is in motion.<br />
                            Be the first one to know!
                        </p>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setIsNotifyOpen(true)}
                                className={`font-dm-sans ${notifyBtnClass}`}
                            >
                                Notify me
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="hidden lg:block -mt-16 relative z-10">
                        <FooterDark hideCTA roundedTop />
                    </div>
                    <div className="lg:hidden relative z-10">
                        <FooterDark hideCTA />
                    </div>
                </main>
                {isNotifyOpen && <NotifyModal isOpen={isNotifyOpen} onClose={() => setIsNotifyOpen(false)} />}
            </div>
        </div>
    );
};
