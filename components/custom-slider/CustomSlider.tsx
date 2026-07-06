import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface CustomSliderProps {
  children: React.ReactNode;
  isCenter?: boolean;
}

export const CustomSlider = ({
  children,
  isCenter = false,
}: CustomSliderProps) => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full",
    arrows: false,
  };
  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute -right-8  -translate-y-1/2 cursor-pointer custom-slider-next ${
          isCenter ? "top-1/2" : "top-1/3"
        }`}
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
        </svg>{" "}
      </div>

      <div
        className={`absolute -left-8  -translate-y-1/2 cursor-pointer custom-slider-prev ${
          isCenter ? "top-1/2" : "top-1/3"
        }`}
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
      <Slider {...settings} className="w-full " ref={slider}>
        {children}
      </Slider>
    </div>
  );
};
