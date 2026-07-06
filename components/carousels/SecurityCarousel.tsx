"use client";
import React, { useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { InformationCard } from "@/components/card/InformationCard";
import { SimpleDot } from "./SimpleDot";

export interface SecurityCardImage {
  id: number;
  img?: string;
  titleMain?: string | React.ReactNode;
  descMain?: string | React.ReactNode;
  customCard?: React.ReactNode;
}

type Props = {
  cards_image: SecurityCardImage[];
};

export const SecurityCarousel = (props: Props) => {
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
      <SimpleDot
        active={i === currentSlide}
        totalDots={props.cards_image.length}
      />
    ),
    dotsClass: "simple-dots",
  };

  return (
    <div className="slider-container w-full relative">
      <div className="-mx-6 md:-mx-[25px]">
        <Slider {...settings}>
          {props.cards_image.map((cardImage, index) => (
            <div key={cardImage.id || index} className="px-6 md:px-[25px]">
              <div className="w-full flex flex-col lg:flex-row justify-between relative">
                <div className="flex justify-between  pb-8 md:pb-[61px] flex-shrink-0 mb-6 lg:mb-0">
                  <InformationCard
                    title={
                      <span
                        className={`font-funnel font-normal leading-[100%] w-[437px] flex flex-wrap text-left text-con-custom-green-bold text-3xl md:text-[50px]`}
                      >
                        {cardImage.titleMain}
                      </span>
                    }
                    description={
                      <div
                        className={`font-dm-sans w-full max-w-[355px] ml-1 mt-6 md:mt-10`}
                      >
                        <span className="mt-6 md:mt-10 mr-6 md:mr-[40px] block text-sm md:text-[14px] leading-[22px] w-[296px] text-gray-700">
                          {cardImage.descMain}
                        </span>
                      </div>
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row flex-shrink min-w-0">
                  {cardImage.customCard}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slider-container .simple-dots {
          position: absolute !important;
          bottom: 15% !important;
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

        @media (max-width: 768px) {
          .slider-container .simple-dots {
            bottom: 60px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            justify-content: center !important;
            gap: 4px !important;
          }
        }

        @media (max-width: 480px) {
          .slider-container .simple-dots {
            gap: 3px !important;
            max-width: 95% !important;
          }
        }
      `}</style>
    </div>
  );
};
