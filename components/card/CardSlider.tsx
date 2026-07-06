"use client";
import Image from "next/image";
import { useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardBase from "./CardBase";
import { CardHightLightWithImage } from "./CardHightLightWithImage";
import { InformationCard } from "./InformationCard";

export interface Card {
  id: number;
  name: string;
  country: string;
  img: string;
  desc: string;
}

export interface CardImage {
  id: number;
  title: string | React.ReactNode;
  img: string;
  desc: string | React.ReactNode;
  titleMain?: string;
  descMain?: string;
}

type Props = {
  cards: Card[];
  cards_image: CardImage[];
  isShowCard?: boolean;
  isBanner?: boolean;
};

// Simple responsive dot
const SimpleDot = ({
  onClick,
  active,
  totalDots,
}: {
  onClick?: () => void;
  active?: boolean;
  totalDots: number;
}) => {
  // Automatic sizing based on number of dots
  const getDotSize = () => {
    if (totalDots <= 6) return "w-9 sm:w-14 md:w-[59px]";
    if (totalDots <= 9) return "w-7 sm:w-10 md:w-12";
    if (totalDots <= 13) return "w-4 sm:w-8 md:w-10 flex-wrap";
    return "w-4 sm:w-6 md:w-8";
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${getDotSize()} h-1 rounded-full border-none cursor-pointer 
        transition-all duration-300 ease-in-out
        ${active ? "bg-con-custom-green" : "bg-gray-300 hover:bg-gray-400"}
        focus:outline-none
      `}
    />
  );
};

export const CardSlider = ({
  cards,
  cards_image,
  isShowCard = true,
  isBanner = false,
}: Props) => {
  const isClient = useIsClient();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isClient) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i: number) => (
      <SimpleDot active={i === currentSlide} totalDots={cards_image.length} />
    ),
    dotsClass: "simple-dots",
    responsive: [
      {
        breakpoint: 1023, // <= 1024px (md to lg)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 767, // <= 424px (md to lg)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full relative">
      <div className="md:-mx-[25px]">
        <Slider {...settings}>
          {cards_image.map((cardImage, index) => (
            <div key={cardImage.id || index} className="lg:px-6 md:px-[25px]">
              {isBanner ? (
                <div className="w-full flex flex-col lg:flex-row justify-between lg:py-8 relative">
                  <div className="md:flex md:justify-between  lg:pb-8 lg:mt-3 md:pb-[14px] flex-shrink-0 mb-6 lg:mb-0">
                    <InformationCard
                      title={
                        <div className="md:flex-none flex md:justify-start justify-center items-center lg:mb-0 md:mb-5">
                          <span
                            className={`font-funnel font-normal leading-[120%] lg:w-[567px] xl:max-w-[567px] max-w-[300px] lg:h-auto h-[58px] flex flex-wrap text-center md:text-left text-con-custom-green-bold lg:text-[50px] text-[26px]`}
                          >
                            {cardImage.titleMain}
                          </span>
                        </div>
                      }
                      description={
                        <div
                          className={`font-dm-sans w-full max-w-[355px] lg:h-auto h-[44px] ml-1 lg:mt-6 md:mt-[8px] mt-3 flex justify-center items-center`}
                        >
                          <span className="mr-0 md:mr-[40px] block font-light md:text-[14px] text-[11px] md:leading-[22px] tracking-[0%] leading-[16px] lg:w-[296px] w-[297px] md:w-[326px] text-black md:text-left text-center">
                            {cardImage.descMain}
                          </span>
                        </div>
                      }
                      className="w-full  flex md:justify-start justify-center"
                    />
                  </div>
                  <div className="flex w-full lg:justify-end justify-center items-center ">
                    <div className="md:mt-0 mt-[95px]">
                      <Image
                        src={cardImage.img}
                        className="object-cover rounded-[50px] lg:w-[584px] w-[363px] lg:h-[391px] h-[243px]"
                        alt={cardImage.title as string}
                        width={584}
                        height={391}
                        priority={true}
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex relative justify-between mt-[60px] ">
                  <div className="flex justify-between pt-[54px]">
                    <InformationCard
                      title={
                        <span className="flex flex-col w-[429px]">
                          <span
                            className={`font-funnel font-normal leading-[100%] text-left text-con-custom-green-bold text-[50px]`}
                          >
                            {cardImage.titleMain}
                          </span>
                          <span className="h-4 block" />
                        </span>
                      }
                      description={
                        <div
                          className={`font-dm-sans w-[375px] ml-1 mt-4`}
                        >
                          <span className=" text-[15px] font-light leading-[25px]">
                            {cardImage.descMain}
                          </span>
                        </div>
                      }
                    />
                  </div>
                  <div className="relative mr-[264px] mt-[54px] pb-[61px]">
                    <CardHightLightWithImage
                      image={cardImage.img}
                      title={cardImage.title}
                      description={cardImage.desc}
                    />
                  </div>
                  {isShowCard && (
                    <>
                      <div className="absolute xl:w-[228px] w-[201px] xl:h-[104px] h-[92px] xl:top-[31px] top-[8px] xl:right-[100px] right-2 z-100">
                        {cards.slice(0, 1).map((card) => (
                          <CardBase key={card.id} cards={card} />
                        ))}
                      </div>
                      <div className="absolute xl:w-[228px] w-[201px] xl:h-[104px] h-[92px] xl:top-40 top-[65px] xl:right-0 right-[-160px] z-100">
                        {cards.slice(1, 2).map((card) => (
                          <CardBase key={card.id} cards={card} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>

      {/* Simple responsive dots styling */}
      <style jsx global>{`
        .slider-container .simple-dots {
          position: absolute !important;
          bottom: 20px !important;
          left: 25px !important;
          display: flex !important;
          gap: 6px !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          flex-wrap: wrap !important;
          max-width: 90% !important;
        }

        .slider-container .simple-dots li {
          margin: 0 !important;
          padding: 0 !important;
        }

        @media (max-width: 1023px) {
          .slider-container .simple-dots {
            bottom: -54px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            justify-content: center !important;
            gap: 4px !important;
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .slider-container .simple-dots {
            bottom: 300px !important;
            width: 100% !important;
            gap: 5px !important;
            max-width: 95% !important;
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};
