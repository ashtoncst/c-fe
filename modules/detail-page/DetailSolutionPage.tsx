"use client";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { BannerBase } from "@/components/banner/BannerBase";
import { BannerWithOverlay } from "@/components/banner/BannerWithOverlay";
import { BannerWithText } from "@/components/banner/BannerWithText";
import { ButtonBase } from "@/components/button/ButtonBase";
import { ButtonSelect } from "@/components/button/ButtonSelect";
import CardBase from "@/components/card/CardBase";
import { CardHightLightWithImage } from "@/components/card/CardHightLightWithImage";
import { InformationCard } from "@/components/card/InformationCard";
import { FAQSection } from "@/components/faq-section/FAQSection";
import { HeaderBase } from "@/components/header/HeaderBase";
import {
  NEW_INTERNET_PRODUCTS,
  SERVICE_CATEGORIES,
  TRANSPORT_PRODUCTS,
} from "@/constants";
import { FAQ_DATA } from "@/constants/FAQSection.constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AwardImage from "../../public/images/award1.png";
import CenterImage from "../../public/images/center.png";
import CityBanner from "../../public/images/city-banner.jpg";
import LaunchDeckImage from "../../public/images/Launchdeck.png";
import PhoneImage from "../../public/images/phone1.png";
import SatelliteImage from "../../public/images/satellite.png";
import ShutterStockImage from "../../public/images/shutterstock.jpg";
import TransportImage from "../../public/images/transport1.png";
import { TestimonialSection } from "@/components/ui/TestimonialSection";

import { MenuIconLink } from "@/assets/icons/MenuIconLink";
import { CustomSlider } from "@/components/custom-slider/CustomSlider";
import { HeaderBaseResponsive } from "@/components/header/HeaderBaseResponsive";
import { HelpSection } from "@/components/help-section/HelpSection";
import { LinkTypography } from "@/components/typographies/LinkTypography";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import { SkeletonLanding } from "@/modules/landing-page/components/SkeletonLanding";
import { SolutionCard } from "@/components/ui/SolutionCard";
import DownloadIcon from "@/public/icons/DownloadIcon";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const connectivitySolutions = [
  {
    id: 1,
    title: "Internet",
    description:
      "Delivering stable, high-speed internet for homes and businesses",
    image: PhoneImage,
  },
  {
    id: 2,
    title: "Transport",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers",
    image: TransportImage,
  },
  {
    id: 3,
    title: "Satellite",
    description:
      "Wide-reaching satellite coverage for reliable connectivity, even in remote areas",
    image: SatelliteImage,
  },
];

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
const questions = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 5,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 6,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 7,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 8,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
];
type Props = {
  id?: string;
};

export const DetailSolutionPage = ({ id }: Props) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedService, setSelectedService] = useState<string>("internet");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  const getSelectedService = () => {
    switch (selectedService) {
      case "internet":
        return NEW_INTERNET_PRODUCTS;
      case "transport":
        return TRANSPORT_PRODUCTS;
    }
  };
  const getSubtitle = () => {
    switch (selectedService) {
      case "internet":
        return (
          <span>
            Delivering stable, high-speed internet
            <span className="md:block mt-1"> for homes and businesses.</span>
          </span>
        );
      case "transport":
        return (
          <span>
            Connecting your business,
            <span className="block mt-1"> wherever it grows. </span>
          </span>
        );
      case "satellite":
        return (
          <span>
            Reliable, high-speed satellite internet for businesses,{" "}
            <span className="block mt-1">
              {" "}
              powered by Starlink’s cutting-edge network.
            </span>
          </span>
        );
      case "content":
        return (
          <span>
            Redefining the digital experience of your{" "}
            <span className="block mt-1"> customers with amazing content </span>
          </span>
        );
      case "security":
        return (
          <span>
            The evolution of Enterprise-grade Connectivity. Giving you{" "}
            <span className="block mt-1">
              {" "}
              not just dedicated but secured Internet Access.{" "}
            </span>
          </span>
        );
      case "managed-services":
        return (
          <span>
            Seamless support and smarter{" "}
            <span className="block mt-1"> management for your operations </span>
          </span>
        );
      case "colocation":
        return (
          <span>
            Ensure your servers are professionally managed for optimal
            performance,{" "}
            <span className="block mt-1">
              {" "}
              keeping critical data and applications running smoothly and
              reliably.{" "}
            </span>
          </span>
        );
    }
  };
  const handleGenerateLink = () => {
    switch (selectedService) {
      case "internet":
        return "/connectivity/internet";
      case "transport":
        return "/connectivity/transport";
      case "content":
        return "/connectivity/content";
      case "security":
        return "/connectivity/security";
      case "managed-services":
        return "/connectivity/managed-services";
      case "colocation":
        return "/connectivity/colocation";
      case "satellite":
        return "/connectivity/satellite";
    }
  };
  useEffect(() => {
    const startId = setTimeout(() => setIsLoading(true), 0);
    const endId = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(startId);
      clearTimeout(endId);
    };
  }, [selectedService]);
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

    dotsClass: "simple-dots",
    responsive: [
      {
        breakpoint: 1023, // <= 1024px (md to lg)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425, // <= 424px (md to lg)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <div className="mt-[84px] lg:block hidden">
        <HeaderBase
          id={id}
          slogan="Make your business do more with top-class connectivity"
          sloganClassName="lg:w-[235px] w-[190px]"
        />
      </div>
      <div className="lg:block hidden">
        <div className="flex justify-center items-center mt-[61px] px-[44px] ">
          <BannerBase
            className="rounded-[50px] object-cover object-bottom h-[259px]"
            bannerJpg={CityBanner}
          />
        </div>
      </div>
      <div className="lg:hidden pb-10 md:block xs:hidden border-none">
        <HeaderBaseResponsive image={"/images/city-full-screen.png"} />
        <div className="absolute w-full top-[238px] bg-white rounded-t-[50px]  mt-[58px] px-[20px] md:px-[90px] lg:mt-[76px]">
          <div className="pt-[50px]">
            <HeaderBase
              id={id || "Connectivity"}
              slogan="Make your business do more with top-class connectivity"
              sloganClassName="lg:w-[235px] w-[190px] !text-con-custom-green-bold"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden pb-[42px] block  border-none">
        <HeaderBaseResponsive
          image={"/images/connectivity/newBanner.png"}
          className="object-cover  object-[72%_17%]"
        />
        <div className="absolute w-full top-[330px] bg-white rounded-t-[35px]  mt-[58px] px-[20px] md:px-[90px] lg:mt-[76px]">
          <div className="pt-[50px]">
            <HeaderBase
              id={id || "Connectivity"}
              slogan="Make your business do more with top-class connectivity"
              titleClassName="!text-con-custom-green-bold"
              sloganClassName="lg:w-[235px] w-[190px] !text-con-custom-green-bold"
              isShowButton={false}
            />
          </div>
        </div>
      </div>
      <div className="xl:px-[122px] md:px-0">
        {/* Info top section */}
        <div className="flex justify-center items-center md:mt-[58px] md:mx-[65px] xs:mx-[22px] xl:mx-0">
          <div className=" flex justify-between w-full">
            <InformationCard
              title={
                <span
                  className={`font-dm-sans lg:text-[30px] md:text-[20px] text-[18px] lg:leading-[50px] md:leading-[27px] tracking-[0%] font-normal text-left text-black lg:text-con-custom-green-bold`}
                >
                  Lorem Ipsum
                </span>
              }
              description={
                <div className="lg:w-full md:w-[405px] md:leading-[25px] lg:text-black text-black/80 leading-[16px] h-[69px] w-[209px]">
                  Le Lorem Ipsum est simplement du faux texte employe dans la
                  composition et la mise en page avant imp
                </div>
              }
            />
            <ButtonSelect
              title={
                <span>
                  <span className="xs:block cursor-pointer lg:hidden mx-[6px] z-10">
                    <DownloadIcon />
                  </span>
                  <span className="block xs:hidden lg:block">Download</span>
                </span>
              }
            />
          </div>
        </div>

        <div className="border md:mt-[44px] mt-[39px] xl:mb-[-97px] border-gray-200"></div>

        {/* Award Section */}
        {/* Award Section */}
        <div className="flex xs:px-[22px] z-0 md:px-0 xs:flex-col relative justify-between w-full md:flex-col xl:flex-row xl:mx-0 ">
          <div className="flex xs:flex-col md:mx-[62px] z-10 xs:mb-[96px] md:mb-0 xl:mx-0 md:justify-between xl:justify-center xl:mt-[0px] md:mt-[52px] xs:mt-[32px] xl:w-[370px] md:w-[370px]">
            <InformationCard
              title={
                <span className="flex flex-col w-full items-center md:items-start">
                  {" "}
                  {/* Sửa lại class cho container ngoài */}
                  <span
                    className={`font-funnel font-normal xl:w-[370px] md:w-[500px] xs:w-[298px] md:leading-[100%] md:text-left xs:text-center text-con-custom-green-bold xl:text-[30px] md:text-[30px] xs:text-[24px] xs:leading-[28px] tracking-[0%]`}
                  >
                    Award-winning Connectivity
                  </span>
                </span>
              }
              description={
                <div
                  className={`font-dm-sans xl:w-[355px] md:w-[361px] ml-1 xl:mt-10 md:mt-1`}
                >
                  <div className="xs:block md:hidden w-full">
                    <div className="flex justify-center w-full">
                      <div className="xs:w-[211px] xs:mt-[90px] flex justify-center items-center z-10">
                        <Image
                          src={AwardImage}
                          className="max-w-full h-full object-contain"
                          alt="Award"
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold md:mt-0 mt-2 md:mb-0 mb-[15px] xl:text-[15px] md:text-[14px] text-[13px] tracking-[0%] leading-[19px] xl:leading-[25px] md:leading-[20px] md:text-left flex w-full xs:justify-center md:justify-start">
                    The Philippine&apos;s Fastest Internet Provider
                  </span>
                  <div className="xs:w-full xs:flex md:flex-none xs:justify-center md:justify-start">
                    <span className="text-black xl:mt-8 xl:text-[15px] md:text-[14px] tracking-[0%] text-[11px] font-light leading-[16px] xl:leading-[25px] md:leading-[20px] md:text-left text-center md:mt-4 md:block xl:w-[312px] md:w-[361px] w-[293px]">
                      With its three more awards, including Best Internet Video
                      Experience, Best Internet Gaming Experience, and Top Rated
                      Internet Provider, Converge is recognized as the most
                      awarded internet provider in Philippines.
                    </span>
                  </div>
                </div>
              }
            />
          </div>

          {/* Background large image */}
          <div className="xl:hidden block absolute xs:left-1/2 lg:left-1/2 md:left-auto md:right-0 lg:right-auto  xs:-translate-x-1/2 md:translate-x-0 xl:-translate-x-1/2 xs:top-[-70px] md:top-[-200px] xl:top-[-280px] transform ">
            <div className="md:w-[461px] xs:w-[240px] max-w-full md:h-[919px] xs:h-[455px] overflow-hidden z-0">
              <Image
                src={CenterImage}
                className="max-w-full h-full object-cover object-left"
                alt="City banner"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Award image */}
          <div className="xl:block hidden">
            <div className="xl:w-[864px] xs:hidden md:block md:order-3 xs:order-2  md:mx-[16px] xl:mx-0 xl:h-[829px] md:w-[427px] md:h-[319px] flex xl:justify-center md:justify-start items-center xl:mt-[0px] md:mt-[19px] z-10">
              <Image
                src="/images/connectivity/award-winning.png"
                className="max-w-full h-full object-contain"
                width={864}
                height={829}
                alt="Award"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="xl:hidden block ">
            <div className="xl:w-[512px] xs:hidden md:block md:order-3 xs:order-2  lg:mx-[-45px] md:mx-[16px] xl:mx-0 xl:h-[382px] md:w-[427px] md:h-[319px] flex xl:justify-center md:justify-start items-center xl:mt-[84px] md:mt-[19px] z-10">
              <Image
                src={AwardImage}
                className="max-w-full h-full object-contain"
                alt="Award"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Connectivity Solutions */}
        <div className="border border-gray-300 xl:mt-[-47px] lg:mt-0 md:mt-[-35px] mt-[-60px]" />
        <div className="flex w-full justify-center">
          <p
            className={`font-funnel md:w-auto w-[233px] text-center md:leading-7 leading-9 md:text-auto flex justify-center items-center text-con-custom-green-bold font-normal text-[35px] mt-[43px]`}
          >
            Connectivity Solutions
          </p>
        </div>
        <div className="md:block hidden ">
          <div className="flex justify-between lg:gap-[38px] gap-4 w-full mt-10 px-4 md:px-[65px] lg:px-0">
            {connectivitySolutions.map((solution) => (
              <div key={solution.id} className="flex-1 min-w-0 h-full  ">
                <BannerWithText
                  bannerJpg={solution.image}
                  className="relative w-full h-full"
                  classNameImage="absolute inset-0 w-full h-full object-cover object-left object-bottom"
                  classNameDescription="relative z-10 p-5 flex justify-center  items-center"
                  shadow={true}
                  description={
                    <div className="text-center mt-[4px] mx-[24px]  text-white">
                      <span
                        className={`font-funnel block font-normal leading-[100%] tracking-[0%] text-[20px] lg:text-[40px]`}
                      >
                        {solution.title}
                      </span>
                      <span
                        className={`font-dm-sans block font-light mt-3 text-gray-300 text-[14px] lg:text-[15px] leading-[20px] lg:w-[241px] w-[175px] px-1`}
                      >
                        {solution.description}
                      </span>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="block md:hidden px-[22px] mx-[22px] mt-[39px]">
          <div className="flex justify-center">
            <div className="w-[300px]">
              <CustomSlider
                isCenter={true}
              >
                {connectivitySolutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="flex-1 min-w-0 h-[364px] lg:h-[504px] px-3"
                  >
                    <BannerWithText
                      bannerJpg={solution.image}
                      className="relative w-full h-full"
                      classNameImage="absolute inset-0 w-full h-full object-cover object-center"
                      classNameDescription="relative z-10 p-5 flex justify-center items-center"
                      description={
                        <div className="text-center mt-[4px] mx-[24px]  text-white">
                          <span
                            className={`font-funnel block font-normal leading-[100%] tracking-[0%] text-[20px] lg:text-[40px]`}
                          >
                            {solution.title}
                          </span>
                          <span
                            className={`font-dm-sans block font-light mt-3 text-gray-300 text-[14px] lg:text-[15px] leading-[20px] lg:w-[241px] w-[175px]`}
                          >
                            {solution.description}
                          </span>
                        </div>
                      }
                    />
                  </div>
                ))}
              </CustomSlider>
            </div>
          </div>
        </div>
        {/* Service Categories */}
        <div className="xl:mt-[74px] md:mt-[117px] mt-[54px] xl:mx-0 md:mx-[64px] flex flex-col md:justify-start  justify-center *:lg:justify-center lg:text-center text-center md:text-left">
          <InformationCard
            title={
              <span
                className={`font-dm-sans text-[35px] leading-[45px] lg:text-center md:text-left text-center text-con-custom-green-bold`}
              >
                Our Services
              </span>
            }
            description={
              <div className="w-full flex lg:justify-center">
                <div
                  className={`font-dm-sans w-[195px] md:w-[500px] mx-auto md:mx-0 text-center md:text-left text-black text-[17px] lg:text-center tracking-[0%] md:font-normal lg:leading-[23px] md:leading-[100%] leading-[23px] lg:font-light lg:w-[323px] `}
                >
                  Solutions built for everyday life, future growth, and
                  everything in between.
                </div>
              </div>
            }
          />
        </div>

        {/* <div className="mt-[50px] px-[450px] flex flex-wrap justify-between gap-5"> */}
        <div className="xl:mt-[50px] mt-[33px] xl:px-[118px] px-[64px] flex  md:justify-start justify-between xl:space-x-[54px] md:space-x-[40px] xl:justify-center lg:w-[400px] xl:mx-auto  gap-5">
          {SERVICE_CATEGORIES.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(item.link)}
              className={`font-dm-sans ${
                selectedService === item.link
                  ? "text-con-custom-green pb-[7px] border-b-[1px] border-con-custom-green"
                  : "text-[#9F9FA9] hover:text-con-custom-green"
              } text-[15px] font-normal leading-[20px] cursor-pointer tracking-[0%]`}
            >
              <p className="lg:text-[20px] text-[14px] font-normal leading-[100%] tracking-[0%]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Internet Solution */}
        <div className={`font-dm-sans mt-[43px]`}>
          <SolutionCard
            className="xl:px-[55px] md:px-[44px] px-[24px] md:pt-[41px] pt-[28px] pb-[60px] bg-[#F5F5F5] xl:rounded-[50px]"
          >
              <div className={` text-black`}>
                <div className="flex md:items-center justify-between">
                  <p
                    className={`font-funnel  text-black md:text-con-custom-green-bold text-[25px] lg:text-[50px] font-normal leading-[100%] tracking-[0%]`}
                  >
                    {
                      SERVICE_CATEGORIES.find(
                        (item) => item.link === selectedService
                      )?.title
                    }
                  </p>{" "}
                  <div className="space-y-[9px]">
                    <ButtonBase
                      className={`font-dm-sans font-normal md:px-[11px] px-2 md:py-2 py-[6.14px] bg-con-custom-green border rounded-full text-[14px] border-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                      title={
                        <div className="flex items-center gap-[14px]">
                          <PlusIcon width={10} height={10} />
                          <p className="text-[13px] font-normal leading-[100%] text-nowrap tracking-[0%]">
                            Add Internet Service
                          </p>
                        </div>
                      }
                    />
                    {/* <div className="flex justify-center">
                      {["internet", "transport", "managed-services"].includes(
                        selectedService
                      ) && (
                        <p
                          className={`font-dm-sans text-right  mt-1 text-black text-[9px] lg:text-xs font-[300] leading-[100%] tracking-[0%]`}
                        >
                          Include 6 products below
                        </p>
                      )}
                    </div> */}
                  </div>
                </div>
                <p className="lg:mt-[30px] md:mt-0 mt-[-7px] md:w-full w-[145px] text-[15px] font-[300] leading-[22px] tracking-[0%]">
                  {getSubtitle()}
                </p>

                <LinkTypography
                  onClick={() => router.push(handleGenerateLink() || "")}
                  className="mt-5 lg:mt-[50px] flex items-center gap-[10px] "
                >
                  <span>Learn More</span>
                  <span>
                    <MenuIconLink />
                  </span>
                </LinkTypography>

                <div className="block md:hidden">
                  {selectedService !== "satellite" &&
                    selectedService !== "security" &&
                    selectedService !== "managed-services" &&
                    selectedService !== "colocation" && (
                      <div className="mt-8 w-full px-6 block md:hidden">
                        <CustomSlider
                        >
                          {
                            selectedService !== "satellite" &&
                            selectedService !== "security" &&
                            selectedService !== "managed-services" &&
                            selectedService !== "colocation" &&
                            (isLoading
                              ? Array.from({
                                  length: getSelectedService()?.length || 0,
                                }).map((_, index) => (
                                  <SkeletonLanding key={index} />
                                ))
                              : getSelectedService()?.map((item, index) => (
                                  <div
                                    key={index}
                                    className="w-full group cursor-pointer px-2"
                                    onClick={() => router.push(item.link || "")}
                                  >
                                    <div className=" relative group-hover:border group-hover:border-con-custom-teal w-full  h-[157px] rounded-[35px] overflow-hidden">
                                      <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        className="object-cover"
                                        priority={true}
                                        fetchPriority="high"
                                      />
                                    </div>
                                    <p
                                      className={`font-funnel line-clamp-1 xl:line-clamp-2  group-hover:text-con-custom-green mt-4 text-con-custom-green-bold lg:text-[24px] text-[15px] font-normal leading-[16px] tracking-[0%] text-center`}
                                    >
                                      {item.title}
                                    </p>
                                    <p
                                      className={`font-dm-sans ${
                                        selectedService === "internet"
                                          ? "h-[50px]"
                                          : "h-[80px]"
                                      }  line-clamp-3 group-hover:text-con-custom-green mt-2 w-[200px] text-black text-[11px] lg:text-[15px] font-[300] lg:leading-[25px] leading-[16px] tracking-[0%] text-center mx-auto`}
                                    >
                                      {item.description}
                                    </p>
                                  </div>
                                )))
                          }
                        </CustomSlider>
                      </div>
                    )}
                  {selectedService === "satellite" && (
                    <>
                      <div className="flex flex-col md:flex-row items-center justify-between md:flex-wrap lg:flex-nowrap gap-y-5 lg:gap-y-0 mt-[47px]">
                        <div className="flex flex-col items-center gap-4">
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Fast
                          </p>{" "}
                          <div
                            className={`font-dm-sans flex items-center gap-2`}
                          >
                            <p className="flex flex-col gap-2 font-light text-[15px] leading-[100%] tracking-[0%] text-center">
                              <span>40-220+ Mbps</span> Download
                            </p>
                            <p className="flex flex-col gap-2 text-center font-light text-[15px] leading-[100%] tracking-[0%] px-3  border-x border-[#00000066]">
                              <span>8-25+ Mbps</span> Upload
                            </p>
                            <p className="flex flex-col gap-2 text-center font-light text-[15px] leading-[100%] tracking-[0%]">
                              <span>20-50ms</span> Latency
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          {" "}
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Anywhere
                          </p>{" "}
                          <p
                            className={`font-dm-sans w-[203px] text-black text-[15px] font-[300] text-center leading-[25px] tracking-[0%]`}
                          >
                            Connect almost any site in the Philippines.
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          {" "}
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Integrated
                          </p>{" "}
                          <p
                            className={`font-dm-sans w-[321px] text-black text-[15px] font-[300] text-center leading-[25px] tracking-[0%]`}
                          >
                            Converge takes care of everything with seamless
                            integration, from installation to monitoring and
                            management.
                          </p>
                        </div>
                      </div>
                      <div className="mt-[60px] relative w-full h-[762px] rounded-[50px] ">
                        <Image
                          src="/images/landing/landing-starLink-1.png"
                          alt="satellite"
                          layout="fill"
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="hidden md:block">
                  {selectedService !== "satellite" &&
                    selectedService !== "security" &&
                    selectedService !== "managed-services" &&
                    selectedService !== "colocation" && (
                      <div
                        className={`mt-8 grid ${
                          selectedService === "internet"
                            ? "grid-cols-2"
                            : "grid-cols-3 lg:h-[950px] h-[800px]"
                        } lg:gap-x-[30px] lg:gap-y-[87px] gap-x-[21px] gap-y-[67px]  overflow-y-auto custom-scrollbar
                lg:-mr-[80px] lg:pr-[65px] `}
                      >
                        {isLoading
                          ? Array.from({
                              length: getSelectedService()?.length || 0,
                            }).map((_, index) => (
                              <SkeletonLanding key={index} />
                            ))
                          : getSelectedService()?.map((item, index) => (
                              <div
                                key={index}
                                className="w-full group cursor-pointer"
                                onClick={() => router.push(item.link || "")}
                              >
                                <div className=" relative group-hover:border group-hover:border-con-custom-teal w-full lg:h-[227px] h-[155px] rounded-[50px] overflow-hidden">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    className="object-cover"
                                    priority={true}
                                    fetchPriority="high"
                                  />
                                </div>
                                <p
                                  className={`font-funnel line-clamp-1 xl:line-clamp-2 group-hover:text-con-custom-green mt-6 text-con-custom-green-bold lg:text-[24px] text-[20px] font-normal leading-[30px] tracking-[0%]`}
                                >
                                  {item.title}
                                </p>
                                <p
                                  className={`font-dm-sans ${
                                    selectedService === "internet"
                                      ? "h-[50px]"
                                      : "h-[80px]"
                                  } w-full line-clamp-3 group-hover:text-con-custom-green  mt-2 text-black text-[14px] lg:text-[15px] font-[300] lg:leading-[18px] leading-[20px] tracking-[0%]`}
                                >
                                  {item.description}
                                </p>
                                <ButtonBase
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart({
                                      sessionId: sessionCurrentId,
                                      itemId: item.id,
                                    });
                                  }}
                                  className={`font-dm-sans ${
                                    item.title === "CLS Express" &&
                                    "xl:mt-[50px] 2xl:mt-[20px]"
                                  } mt-[20px]  px-[11px] py-2 bg-con-custom-green border rounded-full text-[13px] border-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                                  title={
                                    <div className="flex items-center gap-[14px]">
                                      <PlusIcon width={16} height={16} />
                                      <p className="text-[13px] font-normal leading-[100%] tracking-[0%] pr-[5px]">
                                        Add Item
                                      </p>
                                    </div>
                                  }
                                />
                              </div>
                            ))}
                      </div>
                    )}
                  {selectedService === "satellite" && (
                    <>
                      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-y-5 lg:gap-y-0 mt-[47px]">
                        <div className="flex flex-col items-center gap-4">
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Fast
                          </p>{" "}
                          <div
                            className={`font-dm-sans flex items-center gap-2`}
                          >
                            <p className="flex flex-col gap-2 font-light text-[15px] leading-[100%] tracking-[0%] text-center">
                              <span>40-220+ Mbps</span> Download
                            </p>
                            <p className="flex flex-col gap-2 text-center font-light text-[15px] leading-[100%] tracking-[0%] px-3  border-x border-[#00000066]">
                              <span>8-25+ Mbps</span> Upload
                            </p>
                            <p className="flex flex-col gap-2 text-center font-light text-[15px] leading-[100%] tracking-[0%]">
                              <span>20-50ms</span> Latency
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          {" "}
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Anywhere
                          </p>{" "}
                          <p
                            className={`font-dm-sans w-[203px] text-black text-[15px] font-[300] text-center leading-[25px] tracking-[0%]`}
                          >
                            Connect almost any site in the Philippines.
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          {" "}
                          <p
                            className={`font-funnel  text-con-custom-green-bold text-[24px] font-normal leading-[30px] tracking-[0%]`}
                          >
                            Integrated
                          </p>{" "}
                          <p
                            className={`font-dm-sans w-[321px] text-black text-[15px] font-[300] text-center leading-[25px] tracking-[0%]`}
                          >
                            Converge takes care of everything with seamless
                            integration, from installation to monitoring and
                            management.
                          </p>
                        </div>
                      </div>
                      <div className="mt-[60px] relative w-full h-[762px] rounded-[50px]">
                        <Image
                          src="/images/landing/landing-starLink-1.png"
                          alt="satellite"
                          layout="fill"
                          priority={true}
                          fetchPriority="high"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
          </SolutionCard>
        </div>
        <div className="border border-gray-300 md:mt-[74px] mt-[40px] lg:mt-[97px] mb-[58px] md:block hidden"></div>
        <div className="flex xl:flex-row flex-col  relative justify-between xl:mx-0">
          <div className="flex xl:justify-between justify-center flex-shrink xl:min-w-0 md:mt-0 mt-10">
            <InformationCard
              title={
                <span className="flex flex-col w-full md:justify-start justify-center md:items-start items-center">
                  <span
                    className={`font-funnel font-normal md:leading-[100%] xl:text-left text-center text-con-custom-green-bold xl:text-[50px] md:text-[30px] text-[24px] leading-[28px] xl:w-auto md:w-[706px] w-[195px]`}
                  >
                    Use Cases On Our Clients
                  </span>
                </span>
              }
              description={
                <div
                  className={`font-dm-sans lg:w-auto md:w-[706px] w-[215px] flex justify-center ml-1 lg:mt-0 md:mt-1 xl:text-left md:text-center`}
                >
                  <span className="lg:mt-10 mt-[12px] lg:text-[15px] md:text-[14px] lg:leading-[25px] md:leading-[20px] leading-[16px] md:text-left text-center md:mt-2 xl:mr-[40px] md:mr-0 block">
                    Le Lorem Ipsum est simplement du faux texte employe dans la
                    composition et la mise en page avant imp
                  </span>
                </div>
              }
            />
          </div>

          <div className="xl:flex-none flex justify-center xl:mt-0 md:mt-[50px] mt-[25px]">
            <div className="relative md:w-[630px] xl:w-[672px]">
              <div className="xl:mt-[19px] xl:w-[408px] w-[360px]">
                <CardHightLightWithImage
                  image={ShutterStockImage}
                  classNameImage="md:rounded-b-[50px] rounded-b-none "
                  classNameDescription="!w-[253px] md:ml-0 ml-7"
                  title="IPT Express on Company A"
                  description="Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp"
                />
              </div>
              <div className="absolute md:w-[228px] shadow-xl rounded-[25px] w-[170px] h-[121px] xl:h-[104px] md:h-[92px] xl:top-[-4%] md:top-[-4%] bottom-[-135px] xl:right-[15%] md:right-[16%] md:left-auto left-0 z-100">
                {cards.slice(0, 1).map((card) => (
                  <CardBase key={card.id} cards={card} />
                ))}
              </div>
              <div className="absolute md:w-[228px] shadow-xl rounded-[25px]  w-[170px] h-[121px] lg:h-[104px] md:h-[92px]  lg:right-0 md:top-[27%] bottom-[-135px] right-[0%] z-100">
                {cards.slice(1, 2).map((card) => (
                  <CardBase key={card.id} cards={card} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 lg:mt-[61px] lg:mb-[57px] mt-[175px] mb-[33px] lg:block md:hidden block"></div>
        <div className="lg:space-y-[53px] space-y-[30px] md:mb-[146px]  lg:mt-0 md:mt-[87px] mt-0">
          <div className="flex justify-center">
            <p
              className={`font-funnel text-center text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px] lg:w-[504px] md:w-[384px] w-[195px] font-normal lg:leading-[65px] md:leading-[45px] leading-[28px] tracking-[0%]`}
            >
              Connectivity that Fits Your Life or Business.
            </p>
          </div>
          <div className="md:mt-[31px] lg:mt-[53px] mt-[25px] lg:mx-[-122px] mx-15">
            <TestimonialSection />
          </div>
        </div>
        <div className="md:px-0 px-[22px] w-full">
          <FAQSection FAQ_Data={FAQ_DATA} />
        </div>
        <div className="lg:border-none border lg:mt-[-39px] border-gray-300 md:mt-[82px] mt-[53px] md:mb-[63px] mb-[52px] lg:mb-0"></div>
        <HelpSection />
        <div className="border border-gray-300 mt-[58px] mb-[38px] lg:block hidden "></div>
      </div>
      <div className="xl:px-[44px] md:px-[64px] px-[21px] xl:mt-0 md:mt-[82px] mt-[65px]">
        <p
          className={`font-funnel text-con-custom-green-bold sm:text-2xl md:text-[30px] text-[18px] leading-[28px] md:leading-[50px] tracking-[0%] sm:mb-12 md:mb-[31px]  font-normal text-center`}
        >
          Other Solution Package
        </p>
        <BannerWithOverlay
          title="Connectivity+++"
          description="Build a strong foundation for your business with advanced solutions"
          bannerImage={LaunchDeckImage}
        />
      </div>
    </div>
  );
};
