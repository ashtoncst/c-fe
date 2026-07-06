"use client";

import Image from "next/image";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import CardBase from "@/components/card/CardBase";
import { CardHightLightWithImage } from "@/components/card/CardHightLightWithImage";
import { FAQSection } from "@/components/faq-section/FAQSection";
import { HelpSection } from "@/components/help-section/HelpSection";
import { FAQ_DATA } from "@/constants/FAQSection.constant";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import ShutterStockImage from "../../../public/images/shutterstock.jpg";
import TransportImage from "../../../public/images/transport1.png";
import SatelliteImage from "../../../public/images/satellite.png";
import ContentPlusImage from "../../../public/images/content-plus.png";
import AntiDDosImage from "../../../public/images/anti-ddos.png";

const cards = [
    {
        id: 1,
        name: "Lara Vespera",
        country: "Lorem Ipsum, Country",
        img: "/images/fiberdedicated/new-avt.svg",
        desc: "Lorem ipsum dolor sit amet.",
    },
    {
        id: 2,
        name: "Anna Smith",
        country: "Lorem Ipsum, Country",
        img: "/images/fiberdedicated/new-avt.svg",
        desc: "Lorem ipsum dolor sit amet",
    },
];

const relatedServices = [
    {
        id: 2,
        title: "Transport",
        description:
            "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
        image: TransportImage,
    },
    {
        id: 3,
        title: "Satellite",
        description:
            "Delivering stable, high-speed internet for homes and businesses.",
        image: SatelliteImage,
    },
    {
        id: 4,
        title: "Content Plus",
        description:
            "Redefining the digital experience of your customers with amazing content",
        image: ContentPlusImage,
    },
    {
        id: 5,
        title: "Anti-DDoS",
        description:
            "The evolution of enterprise connectivity, delivering dedicated and secure internet access.",
        image: AntiDDosImage,
    },
];

export const InternetProductsSection = () => {
    const { mutate: addToCart } = usePostCart({});
    const sessionCurrentId = localStorageUtil.getSessionId();

    return (
        <section className="w-full bg-[#1e1e19] pt-24 pb-20 px-6 md:px-12 lg:px-16 xl:px-[120px]">
            <div className="max-w-[1440px] mx-auto flex flex-col">
                {/* Use Cases Subsection */}
                <div className="flex xl:flex-row flex-col relative justify-between">
                    <div className="flex xl:justify-between justify-center flex-shrink xl:min-w-0">
                        <div className="flex flex-col w-full md:justify-start justify-center md:items-start items-center">
                            <h2
                                className={`font-funnel font-light xl:text-left text-center text-white text-[35px] leading-[1.2] xl:w-auto md:w-[706px]`}
                            >
                                Use Cases On Our Clients
                            </h2>
                            <div
                                className={`font-dm-sans lg:w-auto md:w-[706px] w-[215px] flex justify-center ml-1 lg:mt-0 mt-3 xl:text-left md:text-center`}
                            >
                                <span className="lg:mt-10 lg:text-[15px] md:text-[14px] lg:leading-[25px] md:leading-[20px] leading-4 font-light text-white md:text-left text-center md:mt-2 xl:mr-[40px] md:mr-0 block">
                                    Le Lorem Ipsum est simplement du faux texte employe
                                    dans la composition et la mise en page avant imp
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="xl:flex-none flex justify-center xl:mt-0 md:mt-[50px] mt-[25px]">
                        <div className="relative md:w-[630px] xl:w-[672px]">
                            <div className="xl:mt-[19px] xl:w-[408px] w-[360px]">
                                <CardHightLightWithImage
                                    image={ShutterStockImage}
                                    classNameImage="md:rounded-b-[50px]"
                                    classNameDescription="!w-[253px] md:ml-0 ml-7"
                                    title="IPT Express on Company A"
                                    description="Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp"
                                />
                            </div>
                            <div className="absolute md:w-[228px] shadow-xl rounded-[25px] w-[170px] h-[121px] xl:h-[104px] md:h-[92px] xl:top-[-4%] md:top-[-4%] bottom-[-135px] xl:right-[15%] md:right-[16%] md:left-auto left-0 z-[100]">
                                {cards.slice(0, 1).map((card) => (
                                    <CardBase key={card.id} cards={card} />
                                ))}
                            </div>
                            <div className="absolute md:w-[228px] shadow-xl rounded-[25px] w-[170px] h-[121px] lg:h-[104px] md:h-[92px] lg:right-0 md:top-[27%] bottom-[-135px] right-[0%] z-[100]">
                                {cards.slice(1, 2).map((card) => (
                                    <CardBase key={card.id} cards={card} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 lg:mt-[61px] md:mt-[74px] md:mb-[60px] mt-[175px] mb-[40px]" />

                {/* Testimonials */}
                <div className="md:mb-[59px]">
                    <div className="lg:block hidden md:mt-0">
                        <h2
                            className={`font-funnel text-center lg:mt-[61px] mt-[33px] text-white text-[35px] mx-0 font-light leading-[1.2]`}
                        >
                            Reliable Internet,
                        </h2>
                        <div className="flex justify-center mt-3">
                            <p
                                className={`font-dm-sans w-[255px] md:w-auto text-center lg:mt-0 text-white lg:text-[50px] md:text-[30px] text-[24px] mx-0 font-normal lg:leading-[1] md:leading-[45px] leading-[28px]`}
                            >
                                Backed by Real Experiences.
                            </p>
                        </div>
                    </div>
                    <div className="lg:hidden block mt-[33px]">
                        <div className="flex justify-center">
                            <p
                                className={`font-dm-sans md:w-[361px] w-[255px] lg:w-[720px] text-center lg:mt-0 text-white lg:text-[50px] md:text-[30px] text-[24px] mx-0 font-normal lg:leading-[65px] md:leading-[45px] leading-[28px]`}
                            >
                                Reliable Internet, Backed by Real Experiences.
                            </p>
                        </div>
                    </div>
                    <div className="md:mt-[31px] lg:mt-[53px] mt-[25px]">
                        <TestimonialSection />
                    </div>
                </div>

                {/* FAQ */}
                <div className="lg:px-0 md:px-0 px-[22px] w-full lg:mt-[110px] md:mt-[-42px]">
                    <FAQSection FAQ_Data={FAQ_DATA} />
                </div>

                {/* Divider */}
                <div className="lg:hidden block border-t border-white/10 lg:mt-[163px] md:mb-[63px] mb-[52px] md:mt-[45px] mt-[33px]" />

                {/* Help Section */}
                <HelpSection />

                {/* Divider */}
                <div className="lg:block hidden border-t border-white/10 mt-[58px] mb-[38px]" />

                {/* Related Service Categories */}
                <div className="lg:mt-0 md:mt-[59px] mt-[41px]">
                    <h2
                        className={`font-funnel text-white text-[35px] font-light leading-[1.3] text-center`}
                    >
                        Related Service Categories
                    </h2>

                    {/* Desktop: Horizontal Scroll */}
                    <div className="md:block hidden">
                        <div className="mt-[49px] w-full h-full">
                            <div className="flex gap-6 justify-between lg:h-[480px] h-[330px] overflow-x-auto custom-scrollbar-product">
                                {relatedServices.map((related) => (
                                    <div
                                        key={related.id}
                                        className="flex-shrink-0 lg:w-[calc(25%-18px)] w-[235px]"
                                    >
                                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg h-full flex flex-col">
                                            {/* Image */}
                                            <div className="relative w-full lg:h-[298px] h-[155px] overflow-hidden">
                                                <Image
                                                    src={related.image}
                                                    alt={related.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 25vw"
                                                    className="object-cover object-top"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col items-center justify-between flex-1 px-6 py-5">
                                                <div className="text-center">
                                                    <h3
                                                        className={`font-dm-sans lg:text-[24px] text-[18px] text-[#024645] font-normal mb-2`}
                                                    >
                                                        {related.title}
                                                    </h3>
                                                    <p
                                                        className={`font-dm-sans text-[14px] font-light text-black text-center leading-[1.5]`}
                                                    >
                                                        {related.description}
                                                    </p>
                                                </div>

                                                <ButtonBase
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addToCart({
                                                            sessionId:
                                                                sessionCurrentId,
                                                            itemId: related.id,
                                                        });
                                                    }}
                                                    className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB] mt-4 cursor-pointer"
                                                    title={
                                                        <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                                                            <PlusIcon />
                                                            <span
                                                                className={`font-dm-sans text-white font-normal text-[13px] leading-[100%] pr-[5px]`}
                                                            >
                                                                Add Item
                                                            </span>
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Horizontal Scroll */}
                    <div className="md:hidden block mt-[19px]">
                        <div className="flex gap-4 overflow-x-auto custom-scrollbar-product pb-4 px-2">
                            {relatedServices.map((related) => (
                                <div
                                    key={related.id}
                                    className="flex-shrink-0 w-[260px]"
                                >
                                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg h-[380px] flex flex-col">
                                        {/* Image */}
                                        <div className="relative w-full h-[155px] overflow-hidden flex-shrink-0">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                sizes="260px"
                                                className="object-cover object-top"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col items-center justify-between flex-1 px-5 py-4">
                                            <div className="text-center">
                                                <h3
                                                    className={`font-dm-sans text-[18px] text-[#024645] font-normal mb-2`}
                                                >
                                                    {related.title}
                                                </h3>
                                                <p
                                                    className={`font-dm-sans text-[13px] font-light text-black text-center leading-[1.5]`}
                                                >
                                                    {related.description}
                                                </p>
                                            </div>

                                            <ButtonBase
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart({
                                                        sessionId:
                                                            sessionCurrentId,
                                                        itemId: related.id,
                                                    });
                                                }}
                                                className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB] mt-3 cursor-pointer"
                                                title={
                                                    <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                                                        <PlusIcon />
                                                        <span
                                                            className={`font-dm-sans text-white font-normal text-[13px] leading-[100%] pr-[5px]`}
                                                        >
                                                            Add Item
                                                        </span>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
