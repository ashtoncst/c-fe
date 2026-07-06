import React, { useState } from 'react';
import { useIsClient } from '@/hooks/useIsClient';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface CustomSliderProps {
  children: React.ReactNode;
  cards_image: number;
}
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
    if (totalDots <= 6) return 'w-[35px] xl:w-[59px] h-[4px] xl:h-[7px]  ';
    if (totalDots <= 9) return 'w-7 xl:w-[55px] h-[4px] xl:h-[7px] ';
    if (totalDots <= 13) return 'w-5 xl:w-[55px] h-[4px] xl:h-[7px] flex-wrap';
    return 'w-4 sm:w-6 md:w-8';
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
          ${getDotSize()} h-2 rounded-full border-none cursor-pointer 
          transition-all duration-300 ease-in-out
          ${active ? 'bg-con-custom-green' : 'bg-gray-300 hover:bg-gray-400'}
          focus:outline-none
        `}
    />
  );
};

export const CustomSliderWithDot = ({
  children,
  cards_image,
}: CustomSliderProps) => {
  const slider = React.useRef(null);
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
      <SimpleDot active={i === currentSlide} totalDots={cards_image} />
    ),
    dotsClass: 'simple-dots',
  };
  return (
    <div className="slider-container relative w-full h-full">
      <Slider {...settings} className="w-full " ref={slider}>
        {children}
      </Slider>
      <style jsx global>{`
        .slider-container .simple-dots {
          position: absolute !important;
          bottom: 90px !important;
          left: 25px !important;
          display: flex !important;
          gap: 6px !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          flex-wrap: wrap !important;
          max-width: 90% !important;
        }

        .slick-slide {
          padding: 0 10px !important;
        }

        .slider-container .simple-dots li {
          margin: 0 !important;
          padding: 0 !important;
        }

        @media (max-width: 1280px) {
          .slider-container .simple-dots {
            top: 440px !important;
            left: 420px !important;
            transform: translateX(-1%) !important;
            justify-content: center !important;
            gap: 4px !important;
          }
        }

        @media (max-width: 767px) {
          .slider-container .simple-dots {
            top: auto !important;
            bottom: 25px !important;
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
