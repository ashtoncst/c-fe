import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface CustomSliderForTransport {
  children: React.ReactNode;
  isCenter?: boolean;
  isDisplayArrow?: boolean;
  slideToShow?: number;
  arrowStyle?: "teal" | "dark";
}

export const CustomSliderForTransport = ({
  children,
  isCenter = false,
  isDisplayArrow = true,
  slideToShow = 1,
  arrowStyle = "teal",
}: CustomSliderForTransport) => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slideToShow || 1,
    slidesToScroll: 1,
    className: "w-full",
    arrows: false,
  };

  const verticalPos = isCenter ? "top-1/2" : "top-1/4";

  return (
    <div className="relative w-full h-full">
      {isDisplayArrow && arrowStyle === "dark" && (
        <button
          aria-label="Next"
          className={`absolute -right-[56px] -translate-y-1/2 z-10 flex items-center justify-center w-[44px] h-[64px] rounded-[32px] bg-black/70 hover:bg-black/80 border border-white/10 text-white transition-all duration-200 cursor-pointer custom-slider-next-transport ${verticalPos}`}
          onClick={() => {
            if (slider.current) {
              (slider.current as unknown as Slider).slickNext();
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[1px]">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {isDisplayArrow && arrowStyle === "dark" && (
        <button
          aria-label="Previous"
          className={`absolute -left-[56px] -translate-y-1/2 z-10 flex items-center justify-center w-[44px] h-[64px] rounded-[32px] bg-black/70 hover:bg-black/80 border border-white/10 text-white transition-all duration-200 cursor-pointer custom-slider-prev-transport ${verticalPos}`}
          onClick={() => {
            if (slider.current) {
              (slider.current as unknown as Slider).slickPrev();
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-[1px]">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {isDisplayArrow && arrowStyle === "teal" && (
        <div
          className={`absolute -right-8  -translate-y-1/2 cursor-pointer custom-slider-next-transport ${verticalPos}`}
          onClick={() => {
            if (slider.current) {
              (slider.current as unknown as Slider).slickNext();
            }
          }}
        >
          <svg
            width="16"
            height="30"
            viewBox="0 0 16 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999999 0.999999L15 15.0154L1 29"
              stroke="#038F8D"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {isDisplayArrow && arrowStyle === "teal" && (
        <div
          className={`absolute -left-8  -translate-y-1/2 cursor-pointer custom-slider-prev-transport ${verticalPos}`}
          onClick={() => {
            if (slider.current) {
              (slider.current as unknown as Slider).slickPrev();
            }
          }}
        >
          <svg
            width="16"
            height="30"
            viewBox="0 0 16 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0.999999L0.999999 15.0154L15 29"
              stroke="#038F8D"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      <Slider {...settings} className="w-full " ref={slider}>
        {children}
      </Slider>
    </div>
  );
};
