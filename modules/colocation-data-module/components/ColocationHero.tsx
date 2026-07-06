"use client";

import Image from "next/image";
import { Header } from "@/components/layouts/Header";

export const ColocationHero = () => {
    return (
        <>
            <section className="relative w-full h-[400px] md:h-[400px] xl:h-[75vh] xl:min-h-[750px] xl:max-h-[1200px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/images/colocation/colocation-1.png"
                        alt="Colocation Data Center Hero Background"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Header — absolute inside hero, disappears on scroll */}
                <div className="absolute top-0 left-0 right-0 z-[99999] bg-transparent pt-8 md:pt-[36px]">
                    <Header isGlass={true} darkLogo={false} scrolled={false} />
                </div>

                {/* Hero Content */}
                <div className="relative z-[10] w-full px-6 pb-[100px] md:pb-0 md:px-12 lg:px-16 xl:px-[120px] pt-[170px] md:pt-[146px] xl:pt-[166px] max-w-[1440px] text-center md:text-left md:mr-auto">
                    <h1
                        className={`text-[48px] md:text-[50px] md:leading-[53px] md:font-normal xl:text-[65px] xl:leading-[1.05] xl:font-light leading-[1.05] tracking-tight mb-6 max-w-[640px] font-light text-center md:text-left mx-auto md:mx-0 text-white font-funnel`}
                    >
                        Colocation Data Centers
                    </h1>
                    {/* Description shown only on desktop (xl+) inside the hero */}
                    <div className="hidden xl:block">
                        <p
                            className={`text-[16px] md:text-[18px] max-w-[560px] font-light leading-[1.6] text-white/90 font-dm-sans`}
                        >
                            Ensure your servers are professionally managed for optimal performance, keeping critical data and applications running smoothly and reliably.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mobile + Tablet: white card scooping up over hero bottom */}
            <div className="xl:hidden bg-white rounded-t-[32px] relative z-[35] -mt-[70px] px-6 md:px-12 pt-8 pb-4 text-center">
                <div className={`text-[15px] text-[#374151] leading-[1.7] font-dm-sans`}>
                    Ensure your servers are professionally managed for optimal performance, keeping critical data and applications running smoothly and reliably.
                </div>
            </div>
        </>
    );
};
