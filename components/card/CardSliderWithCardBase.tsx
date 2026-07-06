"use client";
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
  classNameDescription?: string;
  classNameImageContainer?: string;
  classNameTitle?: string;
  classNameContainer?: string;
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
    if (totalDots < 6) return "w-[35px] xl:w-[86px] h-[4px] xl:h-[6px]  ";
    if (totalDots <= 9) return "w-7 xl:w-[55px] h-[4px] xl:h-[7px] !gap-1";
    if (totalDots <= 13) return "w-5 xl:w-[55px] h-[4px] xl:h-[7px] flex-wrap";
    return "w-4 sm:w-6 md:w-8";
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${getDotSize()} h-2 rounded-full border-none cursor-pointer 
        transition-all duration-300 ease-in-out
         ${active ? "bg-con-custom-green" : "bg-gray-300 hover:bg-gray-400"}
        focus:outline-none
      `}
    />
  );
};

export const CardSliderWithCardBase = ({
  cards,
  cards_image,
  isShowCard = true,
  classNameDescription,
  classNameImageContainer,
  classNameTitle,
  classNameContainer,
}: Props) => {
  const isClient = useIsClient();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isClient) return null;

  // Dynamic gap based on number of dots
  const dotGap = cards_image.length < 6 ? "19px" : "8px";

  const settings = {
    dots: cards_image.length > 1,
    infinite: cards_image.length > 1,
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
  };

  return (
    <div className="slider-container xl:w-full lg:px-0 relative">
      <div className="">
        <Slider {...settings}>
          {cards_image.map((cardImage, index) => (
            <div
              key={cardImage.id || index}
              className="!flex md:flex-row flex-col justify-center "
            >
              <div className="flex md:flex-row flex-col gap-x-[56px] relative justify-between lg:w-full md:w-[745px]">
                <div className="flex xl:order-1 md:order-2 order-1 md:justify-between justify-center xl:pt-[40px] pt-[20px] md:pt-[188px]">
                  <InformationCard
                    title={
                      <span className="flex flex-col justify-center items-center w-full h-full ">
                        <span
                          className={`font-funnel xl:w-[428px] lg:w-[358px] md:w-[293px] w-[275px] font-normal lg:leading-[100%] md:leading-[40px] leading-7 tracking-[0%] text-center md:text-left text-con-custom-green-bold xl:text-[50px] text-[24px] md:text-[30px] md:h-full h-[56px] mb-[-10px] ${classNameTitle}`}
                        >
                          {cardImage.titleMain}
                        </span>
                      </span>
                    }
                    description={
                      <div className="flex  w-full md:h-[80px] md:mt-12 mt-[14px]  h-[48px] justify-center md:justify-start lg: items-center">
                        <div
                          className={`font-dm-sans xl:w-[375px] md:w-[301px] w-[297px] h-full text-center md:text-left  lg:mt-4 md:mt-0 mt-3 ${classNameDescription}`}
                        >
                          <span className="lg:text-[15px] md:text-[14px] w-full text-[11px] md:text-left text-center font-light lg:leading-[25px] leading-4 md:leading-[20px] tracking-[0%] text-black ">
                            {cardImage.descMain}
                          </span>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="md:hidden block mt-6">
                  <div className="dots-container"></div>
                </div>
                <div
                  className={`w-full flex justify-center xl:order-2 md:order-1 order-2 ${classNameContainer}`}
                >
                  <div className="relative flex md:flex-row flex-col justify-center w-[351px]  md:mt-0 mt-[-20px] md:w-full  md:h-auto">
                    <div className="lg:flex lg:w-full lg:justify-end">
                      <div
                        className={`xl:mr-[264px]  xl:w-[420px] md:w-[360px] mr-[0px] xl:mt-[54px] mt-[100px] md:pb-[61px] pb-[11px] ${classNameImageContainer}`}
                      >
                        <CardHightLightWithImage
                          image={cardImage.img}
                          title={cardImage.title}
                          description={cardImage.desc}
                          classNameImage="shadow-lg "
                        />
                      </div>
                      {isShowCard && (
                        <div className="flex justify-between ">
                          <div className="md:absolute md:w-[228px] shadow-lg rounded-[25px] w-[170px] h-[121px] lg:h-[104px] md:h-[92px] xl:top-[31px] md:top-0  md:bottom-[-55px] bottom-[-66px]  xl:right-[100px] md:right-2 right-0 z-100">
                            {cards.slice(0, 1).map((card) => (
                              <CardBase key={card.id} cards={card} />
                            ))}
                          </div>
                          <div className="md:absolute md:w-[228px] shadow-lg rounded-[25px] w-[170px] h-[121px] lg:h-[104px] md:h-[92px] xl:top-40 md:bottom-[-135px] bottom-[-66px] md:top-[65px] top-[-225px] xl:right-0 md:right-[-160px] md:left-auto left-0 z-100">
                            {cards.slice(1, 2).map((card) => (
                              <CardBase key={card.id} cards={card} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Simple responsive dots styling */}
      <style jsx global>{`
        .slider-container .simple-dots {
          position: absolute !important;
          bottom: 90px !important;
          left: 10px !important;
          display: flex !important;
          gap: ${dotGap} !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          flex-wrap: wrap !important;
          width: 40% !important;
        }

        .slick-slide {
          padding: 0 10px !important;
        }
        .slider-container .simple-dots li {
          margin: 0 !important;
          padding: 0 !important;
        }
        @media (max-width: 1279px) {
          .slider-container .simple-dots {
            top: 440px !important;
            left: 58% !important;
            transform: translateX(-1%) !important;
            justify-content: start !important;
            gap: 4px !important;
          }
        }
        @media (max-width: 1023px) {
          .slider-container .simple-dots {
            position: absolute !important;
            top: 440px !important;
            left: 60% !important;
            transform: translateX(-1%) !important;
            justify-content: start !important;
            width: fit-content !important;
          }
        }
        @media (max-width: 767px) {
          .slider-container .simple-dots {
            top: auto !important;
            bottom: 525px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            position: relative !important;
            margin-top: 20px !important;
            margin-bottom: 30px !important;
            justify-content: center !important;
            width: fit-content !important;
          }
        }
      `}</style>
    </div>
  );
};
