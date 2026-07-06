"use client";
import { Header } from "@/components/layouts/Header";
import { Banner } from "@/modules/landing-page/components/Banner";
import Image from "next/image";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <div className="relative w-full h-[728px]">
            <Image
              src="/images/banner.png"
              alt="banner"
              className="w-full h-full"
              layout="fill"
              priority={true}
              fetchPriority="high"

            />
            <div className="pt-[37px] px-[60px]">
              <Header />
            </div>
            <div className="relative mt-[76px] px-[90px]">
              <Banner />
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[728px]">
            <Image
              src="/images/banner.png"
              alt="banner"
              className="w-full h-full"
              layout="fill"
              priority={true}
              fetchPriority="high"

            />
            <div className="pt-[37px] px-[60px]">
              <Header />
            </div>
            <div className="relative mt-[76px] px-[90px]">
              <Banner />
            </div>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
};
