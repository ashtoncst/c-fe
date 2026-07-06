"use client";
import { BannerBase } from "@/components/banner/BannerBase";
import { BannerWithText } from "@/components/banner/BannerWithText";
import { ButtonSelect } from "@/components/button/ButtonSelect";
import { InformationCard } from "@/components/card/InformationCard";
import { HeaderBase } from "@/components/header/HeaderBase";
import Image from "next/image";
import AntiDDosImage from "../../public/images/anti-ddos.png";
import BlockImage from "../../public/images/block.png";
import ConnectImage from "../../public/images/connect.png";
import PhoneBannerImage from "../../public/images/connectivity-banner.png";
import ContentPlusImage from "../../public/images/content-plus.png";
import ReceptionistImage from "../../public/images/receptionist.png";
import SatelliteImage from "../../public/images/satellite.png";
import ShutterStockImage from "../../public/images/shutterstock.jpg";
import TransportImage from "../../public/images/transport1.png";
import VARImage from "../../public/images/var.png";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import CardBase from "@/components/card/CardBase";
import { CardHightLightWithImage } from "@/components/card/CardHightLightWithImage";
import { CustomSlider } from "@/components/custom-slider/CustomSlider";
import { FAQSection } from "@/components/faq-section/FAQSection";
import { HeaderBaseResponsive } from "@/components/header/HeaderBaseResponsive";
import { HelpSection } from "@/components/help-section/HelpSection";
import { FAQ_DATA } from "@/constants/FAQSection.constant";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import DownloadIcon from "@/public/icons/DownloadIcon";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { ProgressCard } from "@/components/sections/ProgressCard";
import { ProductOfferring } from "./components/ProductOfferring";
import { PRODUCT_OFFERING } from "./constants/ServiceCategories.constant";

const related_service = [
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

const internet_solutions = [
  {
    id: 1,
    title: "High-speed Internet",
    description:
      "Delivering stable, high-speed internet for homes and businesses.",
    image: ConnectImage,
  },
  {
    id: 2,
    title: "Reliability",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: BlockImage,
  },
  {
    id: 3,
    title: "Dedicated & Priority Support",
    description:
      "Wide-reaching satellite coverage for reliable connectivity, even in remote areas.",
    image: ReceptionistImage,
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

export const ServiceCategories = () => {
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div className="mb-[-95px]">
      <div className="lg:mt-[53px]">
        <p className="lg:block hidden pl-[53px] mb-[13px] text-xs text-black">{`Connectivity Plan > Internet Plan`}</p>
        <div className="lg:block hidden">
          <HeaderBase
            id={"Internet"}
            slogan="Delivering stable, high-speed internet for homes and businesses."
          />
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="flex justify-center items-center px-[44px]">
          <BannerBase
            className="rounded-[50px] h-[292px]"
            bannerJpg={PhoneBannerImage}
          />
        </div>
      </div>
      <div className="lg:hidden pb-20 md:block xs:hidden border-none">
        <HeaderBaseResponsive
          image={"/images/internet/internet-tablet-banner.png"}
        />
        <div className="absolute w-full top-[240px] bg-white md:rounded-t-[50px] rounded-t-[35px]  mt-[58px] px-[20px] md:px-[90px] lg:mt-[76px]">
          <div className="pt-[50px]">
            <HeaderBase
              id={"Internet"}
              slogan="Delivering stable, high-speed internet for homes and businesses."
              sloganClassName=" w-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden xl:pb-[70px] block  border-none">
        <HeaderBaseResponsive
          image={"/images/internet/internet-mobile-banner.png"}
        />
        <div className="absolute w-full top-[330px] bg-white rounded-t-[50px] mt-[38px] px-[20px] md:px-[90px] lg:mt-[76px]">
          <div className="md:pt-[50px] pt-[47px]">
            <HeaderBase
              isShowButton={false}
              id={"Internet"}
              slogan="Delivering stable, high-speed internet for homes and businesses."
              sloganClassName="w-[222px]"
            />
          </div>
        </div>
      </div>
      <div className="xl:px-[122px]">
        {/* Info top section */}
        <div className="flex lg:px-0 md:px-[65px] px-[22px] justify-center items-center md:mt-[58px] mt-3">
          <div className=" flex justify-between w-full">
            <InformationCard
              title={
                <span
                  className={`font-dm-sans lg:text-[30px] md:text-[20px] text-[18px] lg:leading-[50px] md:leading-[27px] leading-[28px] text-left md:text-con-custom-green-bold text-black`}
                >
                  Lorem Ipsum
                </span>
              }
              description={
                <div className="lg:w-full lg:text-[15px] md:text-[14px] text-[11px] lg:leading-[25px] md:leading-[20px] leading-[16px] tracking-[0%] md:w-[405px] h-[69px] xs:w-[192px] lg:text-black text-black/80">
                  Le lorem ipsum est simplement du faux employe dans la
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
        <div className="border-[0.5px] lg:mt-[66px] md:mt-[29px] mt-[33px] lg:mb-0 mb-4 border-gray-300"></div>
        {/* Award Section */}
        <div className="flex lg:px-0 md:px-[65px] relative md:justify-between justify-center">
          <div className="flex md:justify-between justify-center mt-[37px] w-[530px]">
            <InformationCard
              title={
                <span className="flex flex-col justify-center items-center">
                  <span
                    className={`font-funnel xl:w-[502px] lg:w-[402px] md:text-left text-center md:w-[314px] w-[298px] font-normal lg:leading-[130%] md:leading-[45px] leading-[28px] text-con-custom-green-bold xl:text-[50px] lg:text-[38px] md:text-[30px] text-[24px]`}
                  >
                    Philippines’ Leading Internet Service Provider
                  </span>
                </span>
              }
              description={
                <>
                  <div className="md:hidden block">
                    <div className=" lg:h-[490px] md:h-[301px] w-full  mt-[39px] z-10 ">
                      <Image
                        src={VARImage}
                        className="w-full h-full pr-24"
                        alt="Award"
                        priority={true}
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                  <div
                    className={`font-dm-sans  lg:w-[257px] md:w-[238px] ml-1 flex md:justify-start md:mt-0  justify-center`}
                  >
                    <span
                      className={`font-dm-sans lg:text-[15px] md:text-[14px] md:leading-5 font-light text-[11px] leading-4 md:mt-1.5 lg:mt-[27px] mt-[27px] lg:leading-[25px]  w-[270px] md:text-left text-center`}
                    >
                      Bringing the nation closer together with internet
                      solutions built on reliability, security, and the
                      flexibility to meet your evolving needs.{" "}
                    </span>
                  </div>
                </>
              }
            />
          </div>

          <div className="md:block hidden">
            <div className=" lg:h-[490px] md:h-[301px] w-full flex justify-center items-center mt-[39px] z-10">
              <Image
                src={VARImage}
                className="w-full h-full"
                alt="Award"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
        <div className="border-[0.5px] lg:mt-[51px] md:mt-[63px] mt-[34px] border-gray-300" />
        <p
          className={`font-funnel flex justify-center items-center text-con-custom-green-bold font-normal text-[30px] lg:mt-[43px] md:mt-[51px] mt-[39px]`}
        >
          Internet Solutions
        </p>
        <div className="md:block hidden ">
          <div className="flex justify-between lg:gap-[38px] gap-4 w-full mt-10 md:px-[65px] px-4 lg:px-0">
            {internet_solutions.map((solution) => (
              <div key={solution.id} className="flex-1 min-w-0 h-full ">
                <BannerWithText
                  bannerJpg={solution.image}
                  className="relative w-full lg:h-[504px]"
                  classNameImage="absolute inset-0 w-full h-full object-cover object-center"
                  classNameDescription="relative z-10 lg:py-[34px] lg:px-2 p-5 lg:leading-[100%]  flex justify-center  items-center"
                  description={
                    <div className="text-center mt-[4px] mx-[24px]  text-white">
                      <span
                        className={`font-funnel block font-normal leading-[130%] tracking-[0%] text-[20px] lg:text-[40px]`}
                      >
                        {solution.title}
                      </span>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="block md:hidden px-[22px] mx-[22px] mt-[39px] ">
          <div className="flex justify-center">
            <div className="w-[300px]">
              <CustomSlider
                isCenter={true}
              >
                {internet_solutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="flex-1 min-w-0 h-[364px] px-3"
                  >
                    <BannerWithText
                      bannerJpg={solution.image}
                      className="relative w-full h-full"
                      classNameImage="absolute inset-0 w-full h-full object-cover object-center"
                      classNameDescription="relative z-10 p-5 flex justify-center  items-center"
                      description={
                        <div className="text-center mt-[4px] mx-[24px]  text-white">
                          <span
                            className={`font-funnel block font-normal leading-[100%] tracking-[0%] text-[18px] `}
                          >
                            {solution.title}
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
        <div className="lg:mt-[79px] md:mt-[69px] mt-[72px] lg:px-0 md:px-[55px]">
          <div className=" text-center mb-[52px]">
            <InformationCard
              title={
                <span
                  className={`font-funnel md:text-[30px] text-[24px] leading-[50px] text-left text-con-custom-green-bold`}
                >
                  Product Offerings
                </span>
              }
            />
          </div>
          <div className="flex justify-center w-full">
            <div className="lg:mb-[106px] md:mb-[89px]">
              <ProgressCard
                data={PRODUCT_OFFERING.map((product, index) => ({
                  id: product.id,
                  name: product.name,
                  description: product.description || [],
                  image: (
                    <div
                      key={product.id}
                      className="flex md:justify-center lg:items-center xl:w-[656px] w-full h-full"
                    >
                      <ProductOfferring productOffering_Data={product} />
                    </div>
                  ),
                }))}
                isList={false}
                defaultActive={PRODUCT_OFFERING[0].id}
                isShowButton={false}
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 md:mt-[74px] mt-[40px] lg:mt-[40px] md:mb-[58px] mb-[40px]"></div>
        <div className="flex xl:flex-row flex-col  relative justify-between xl:mx-0">
          <div className="flex xl:justify-between justify-center flex-shrink xl:min-w-0">
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
                  className={`font-dm-sans lg:w-auto md:w-[706px] w-[215px] flex justify-center ml-1 lg:mt-0 mt-3 xl:text-left md:text-center`}
                >
                  <span className="lg:mt-10 lg:text-[15px] md:text-[14px] lg:leading-[25px] md:leading-[20px] leading-4 font-light md:text-left text-center md:mt-2 xl:mr-[40px] md:mr-0 block">
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
                  classNameImage="md:rounded-b-[50px] "
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
        <p className=" border border-gray-100 lg:mt-[61px] md:mt-[74px] md:mb-[60px] mt-[175px] mb-[40px]"></p>
        <div className="  md:mb-[59px]">
          <div className="lg:block hidden md:mt-0 ">
            <p
              className={`font-funnel text-center  lg:mt-[61px] mt-[33px] text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px]  mx-0 font-normal lg:leading-[100%] md:leading-[45px] leading-[28px] tracking-[0%]`}
            >
              Reliable Internet,
            </p>
            <div className="flex justify-center mt-3">
              <p
                className={`font-funnel w-[255px] md:w-auto text-center lg:mt-0 text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px]  mx-0 font-normal lg:leading-[100%] md:leading-[45px] leading-[28px] tracking-[0%]`}
              >
                Backed by Real Experiences.{" "}
              </p>
            </div>
          </div>
          <div className="lg:hidden block mt-[33px]">
            <div className="flex justify-center">
              <p
                className={`font-funnel md:w-[361px] w-[255px] lg:w-[720px]  text-center  lg:mt-0 text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px]  mx-0 font-normal lg:leading-[65px] md:leading-[45px] leading-[28px] tracking-[0%]`}
              >
                Reliable Internet, Backed by Real Experiences.{" "}
              </p>
            </div>
          </div>
          <div className="md:mt-[31px] lg:mt-[53px] mt-[25px] lg:mx-[-122px] mx-15">
            <TestimonialSection />
          </div>
        </div>

        <div className="lg:px-0 md:px-0 px-[22px] w-full lg:mt-[110px] md:mt-[-42px]">
          <FAQSection FAQ_Data={FAQ_DATA} />
        </div>
        <div className="lg:hidden block border border-gray-300 lg:mt-[163px] md:mb-[63px] mb-[52px] md:mt-[45px]  mt-[33px]"></div>

        <HelpSection />
        <p className="lg:block hidden border border-gray-100 mt-[58px] mb-[38px]"></p>
      </div>
      <div className="lg:mt0 md:mt-[59px]  mt-[41px]">
        <p
          className={`font-funnel text-con-custom-green-bold md:text-[30px] text-[18px] md:leading-[50px] leading-[27px] font-normal text-center`}
        >
          Related Service Categories
        </p>
        <div className="md:block hidden">
          <div className="mt-[49px] w-full h-full">
            <div className="flex gap-6 justify-between lg:h-[480px] h-[330px] overflow-x-auto custom-scrollbar-product">
              {related_service.map((related, i) => (
                <div
                  key={related.id}
                  className="flex-shrink-0 lg:w-[378px] w-[235px]"
                >
                  <div className="relative">
                    <BannerWithText
                      bannerJpg={related.image}
                      classNameDescription="relative inset-0 z-10 p-4 flex justify-center items-center"
                      classNameImage={
                        !related.image
                          ? "hidden"
                          : "absolute inset-0 w-full lg:h-[298px] h-[155px] lg:rounded-[50px] rounded-[35px] object-cover object-top transition-transform"
                      }
                      description={
                        <div className="text-center lg:mt-[10px] mt-[-4px] mx-[50px]">
                          <p className="text-white">
                            <span
                              className={`font-funnel lg:text-[40px] text-[25px] tracking-[0%] leading-[100%] w-full font-normal block`}
                            >
                              {related.title}
                            </span>
                          </p>
                        </div>
                      }
                    />
                    <div className="flex justify-center">
                      <p
                        className={`font-dm-sans absolute lg:top-[317px] text-[15px] font-light tracking-[0%] top-[175px] lg:w-[315px] w-[237px] text-black text-center`}
                      >
                        {related.description}
                      </p>
                    </div>
                    <div className=" flex justify-center ">
                      <ButtonBase
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            sessionId: sessionCurrentId,
                            itemId: related.id,
                          });
                        }}
                        className="border border-con-custom-green absolute lg:top-[410px] top-[260px] rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
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
        <div className="md:hidden block custom-slider-container">
          <div className="flex justify-center px-[22px] mx-[22px] md:mt-[39px] mt-[19px]">
            <div className="w-[300px]">
              <CustomSlider
              >
                {related_service.map((related, i) => (
                  <div
                    key={related.id}
                    className="flex-shrink-0 lg:w-[378px] w-[235px] px-2"
                  >
                    <div className="relative">
                      <BannerWithText
                        bannerJpg={related.image}
                        className="!h-[304px]"
                        classNameDescription="relative inset-0 z-10 p-4 flex justify-center items-center"
                        classNameImage={
                          !related.image
                            ? "hidden"
                            : "absolute inset-0 w-full lg:h-[298px] h-[155px] lg:rounded-[50px] rounded-[35px] object-cover object-top transition-transform"
                        }
                        description={
                          <div className="text-center lg:mt-[10px] mt-[-4px] mx-[50px]">
                            <p className="text-white">
                              <span
                                className={`font-funnel lg:text-[40px] text-[25px] tracking-[0%] leading-[100%] w-full font-normal block`}
                              >
                                {related.title}
                              </span>
                            </p>
                          </div>
                        }
                      />
                      <div className="flex justify-center">
                        <p
                          className={`font-dm-sans absolute lg:top-[317px] text-[15px] font-light tracking-[0%] top-[175px] lg:w-[315px] w-[237px] text-black text-center`}
                        >
                          {related.description}
                        </p>
                      </div>
                      <div className=" flex justify-center ">
                        <ButtonBase
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart({
                              sessionId: sessionCurrentId,
                              itemId: related.id,
                            });
                          }}
                          className="border border-con-custom-green absolute lg:top-[410px] top-[260px] rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
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
              </CustomSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
