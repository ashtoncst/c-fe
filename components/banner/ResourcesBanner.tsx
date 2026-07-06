import Image from "next/image";
import React from "react";
import { Header } from "@/components/layouts/Header";
import { LightHeader } from "@/components/layouts/LightHeader";
import { OurBanner } from "@/components/banner/OurBanner";

type Props = {
  imageDesktop: string;
  imageMobile: string;
  imageTablet: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export const ResourcesBanner = (props: Props) => {
  const [scrolled, setScrolled] = React.useState(false);

  const [scrollDirection, setScrollDirection] = React.useState<
    "up" | "down" | null
  >(null);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const SCROLL_THRESHOLD = 5;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrolled = currentScrollY > 10;

      if (currentScrollY > lastScrollY.current + SCROLL_THRESHOLD) {
        setScrollDirection("down");
        lastScrollY.current = currentScrollY;
      } else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
        setScrollDirection("up");
        lastScrollY.current = currentScrollY;
      }

      setScrolled(isScrolled);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="relative w-full lg:h-[728px] h-[447px] overflow-hidden ">
        <Image
          src={props.imageDesktop}
          alt="banner"
          className="w-full h-full hidden lg:block object-cover"
          layout="fill"
          priority={true}
          fetchPriority="high"
        />
        <Image
          src={props.imageMobile}
          alt="banner"
          className="w-full !h-[539px] block md:hidden object-cover  "
          layout="fill"
          priority={true}
          fetchPriority="high"
        />
        <Image
          src={props.imageTablet}
          alt="banner"
          className="w-full !h-[539px] lg:hidden md:block hidden object-cover "
          layout="fill"
          priority={true}
          fetchPriority="high"
        />
        <div
          className={`top-0 z-[9999999] ${
            scrolled
              ? "bg-white h-[94px] transition-all duration-300 shadow-md fixed w-full "
              : "bg-transparent transition-all duration-300 pt-[37px] w-full"
          }`}
        >
          {!scrolled ? <Header /> : <LightHeader isDisplayBanner={false} />}
        </div>
        <div className="hidden lg:block relative md:mt-[58px] mt-[93px] px-[20px] md:px-[90px] lg:mt-[76px]">
          <OurBanner
            title={
              <div
                className={`font-funnel text-center md:text-left text-white lg:text-[65px] md:text-[52px] text-[40px] font-normal md:leading-[53px] leading-[42px] lg:leading-[65px] tracking-[0%]`}
              >
                {props.title}
              </div>
            }
            description={
              <div
                className={`font-dm-sans mt-[18px] md:mt-0 text-center md:text-left lg:w-[371px] md:w-[227px] w-[214px]  font-thin lg:font-medium md:text-[13px] text-[10px] lg:text-[15px] text-white md:leading-[20px] leading-[100%] lg:leading-[20px] tracking-[0%]`}
              >
                {props.description}
              </div>
            }
            showButton={false}
          />
        </div>
      </div>

      <div className="bg-white w-full h-full relative">
        <div className="absolute bg-white w-full md:rounded-[55.5px] rounded-[35px] h-[140px] top-[-20px] -translate-y-1/2"></div>
      </div>
      <div
        className={`font-funnel relative block lg:hidden text-center mt-[-30px] text-con-custom-green-bold md:text-[50px] text-[38px] font-normal leading-[50px] tracking-[0%]`}
      >
        <div>{props.title}</div>
        <div
          className={`font-dm-sanstext-con-custom-green-bold md:text-[14px] text-[13px] md:mt-5 mt-2  font-[300] leading-[100%] tracking-[0%] md:w-[398px] w-[275px] mx-auto`}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};
