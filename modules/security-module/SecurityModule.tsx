"use client";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { BannerBase } from "@/components/banner/BannerBase";
import { BannerWithText } from "@/components/banner/BannerWithText";
import { ButtonBase } from "@/components/button/ButtonBase";
import { ButtonSelect } from "@/components/button/ButtonSelect";
import { InformationCard } from "@/components/card/InformationCard";
import { HeaderBase } from "@/components/header/HeaderBase";
import Image from "next/image";
import SecurityBanner from "../../public/images/security/newBanner.svg";

import { FAQSection } from "@/components/faq-section/FAQSection";
import { SECURITY_PRODUCTS, SECURITY_PRODUCTS_CARD } from "@/constants";
import { FAQ_DATA } from "@/constants/FAQSection.constant";
import { ProgressCard } from "@/components/sections/ProgressCard";
import { SecurityCarousel } from "@/components/carousels/SecurityCarousel";
import {
  RELATED_SERVICE_SECURITY,
  SECURITY_CARDS_MOCK,
  SECURITY_PRODUCTS_MOCK,
} from "@/modules/security-module/constants";
import DownloadIcon from "@/public/icons/DownloadIcon";
import { TestimonialSection } from "@/components/ui/TestimonialSection";
import { HeaderBaseResponsive } from "@/components/header/HeaderBaseResponsive";
import { LinkTypography } from "@/components/typographies/LinkTypography";
import { ContentCard } from "@/components/card/ContentCard";
import { CustomSliderWithDot } from "@/components/custom-slider/CustomSliderWithDot";
import { CustomSliderForTransport } from "@/components/custom-slider/CustomSliderForTransport";
import { HelpSection } from "@/components/help-section/HelpSection";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import { v4 as uuidv4 } from "uuid";

export const SecurityModule = () => {
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div>
      <div className="mt-[53px] lg:block hidden">
        <p
          className={`font-dm-sans font-light tracking-[0%] leading-[100%] pl-[53px]  mb-8 text-xs text-black`}
        >{`Connectivity+++ Plan > Security Solution > Anti-DDOS`}</p>
        <HeaderBase
          id={"Anti-DDoS"}
          slogan="The evolution of Enterprise-grade Connectivity. Giving you not just dedicated but secured Internet Access."
          sloganClassName="w-[300px]"
        />
      </div>

      <div className="w-full relative -mt-[30px] px-[44px] lg:block hidden">
        <BannerBase
          className=" w-full h-[351px] rounded-[50px]"
          bannerJpg={SecurityBanner}
        />
      </div>
      <div className="lg:hidden pb-10 md:block xs:hidden border-none">
        <HeaderBaseResponsive image={"/images/security/tablet.png"} />
        <div className="absolute w-full top-[238px] bg-white rounded-t-[50px]  mt-[58px] px-[20px] md:px-[90px] xl:mt-[76px]">
          <div className="pt-[50px]">
            <HeaderBase
              id={"Anti-DDoS"}
              slogan="The evolution of Enterprise-grade Connectivity. Giving you not just dedicated but secured Internet Access."
              sloganClassName="lg:w-[235px] w-[374px] !text-con-custom-green-bold"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden pb-20 block  border-none">
        <HeaderBaseResponsive
          image={"/images/security/mobile.png"}
          className="object-cover object-center"
        />
        <div className="absolute w-full top-[330px] bg-white rounded-t-[35px]  mt-[58px] px-[20px] md:px-[90px] xl:mt-[76px]">
          <div className="pt-[28px]">
            <p
              className={`font-dm-sans leading-[100%] font-light text-center text-[9px] md:mb-5 mb-3 text-black`}
            >{`Connectivity+++ Plan > Security Solution > Anti-DDOS`}</p>
            <HeaderBase
              id={"Anti-DDoS"}
              slogan="Seamless and consistent Wi-Fi that’s expertly managed. Simple, fast and reliable."
              sloganClassName="lg:w-[235px] w-[293px] !text-con-custom-green-bold"
              isShowButton={true}
            />
          </div>
        </div>
      </div>
      <div className="xl:px-[122px]">
        {/* Info top section */}
        <div className="flex justify-center items-center md:pt-[100px]">
          <div className=" md:px-[65px] px-[22px] lg:px-0  flex justify-between w-full">
            <InformationCard
              title={
                <span
                  className={`font-dm-sans lg:text-[30px] md:text-[20px] lg:leading-[50px] md:leading-[27px] font-normal text-left text-black lg:text-con-custom-green-bold`}
                >
                  Lorem Ipsum
                </span>
              }
              description={
                <div className="lg:w-full md:w-[405px] h-[69px] xs:w-[192px] lg:text-black text-black/80">
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
            />{" "}
          </div>
        </div>
        <p className="border-t border-con-custom-text-gray mt-[62px] xl:mb-[76px] md:mb-[59px] mb-[35px]" />
        <div className="xl:block hidden">
          <SecurityCarousel cards_image={SECURITY_CARDS_MOCK} />
        </div>
        <div className="xl:hidden block">
          <div className="flex justify-center items-center md:mb-3 mb-5">
            <p
              className={`font-funnel text-con-custom-green-bold md:text-[30px] text-[24px] md:w-full w-[233px] md:leading-[45px] leading-[28px] font-normal text-center`}
            >
              What is DDoS Attack?{" "}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p
              className={`font-dm-sans text-black md:text-con-custom-green-bold px-0 md:w-full w-[252px] md:px-[129px] md:text-[14px] text-[11px] leading-4 md:leading-[100%] font-light text-center`}
            >
              A distributed denial-of-service (DDoS) attack is an attempt to
              exhaust network, server or application resources so that they are
              no longer available to intended users and in some cases an attempt
              to cover up or distract from other exfiltration or theft of data
              activities.
            </p>
          </div>
          <LinkTypography className="text-con-custom-green-bold mb-2 text-[14px] leading-[50px] font-light text-center">
            {`Read more about DDoS attack >`}
          </LinkTypography>
          <div className="hidden md:block xl:hidden px-[65px]">
            <div className="w-full grid grid-cols-2 gap-[22px]  grid-rows-1 auto-rows-fr">
              <div className="w-full h-full flex">
                <ContentCard
                  id={uuidv4()}
                  description="DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems referred to as “botnets” or “zombie armies” as sources of attack traffic which can include computers and other networked resources such as IoT devices."
                  image="/images/security/ddos.png"
                  descriptionClassName="text-black"
                  contentContainerClassName="w-full flex-1"
                />
              </div>
              <div className="w-full h-full flex">
                <ContentCard
                  id={uuidv4()}
                  description="Motivations for DDoS attacks tend to be financial, philosophical or political in nature."
                  image="/images/security/system.png"
                  descriptionClassName="text-black"
                  contentContainerClassName="w-full flex-1"
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden mt-[15px] px-[16px]">
            <CustomSliderWithDot cards_image={2}>
              <div className="w-full h-full">
                <ContentCard
                  id={uuidv4()}
                  description="DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems referred to as “botnets” or “zombie armies” as sources of attack traffic which can include computers and other networked resources such as IoT devices."
                  image="/images/security/mobileDDos.png"
                  descriptionClassName="text-black"
                  imageClassName="h-[296px]"
                  customImageSize="h-[296px]"
                  customTitleContainerClassName="!mt-[-76px]  text-center"
                  classContainer="!shadow-none"
                />
              </div>
              <div className="w-full h-full">
                <ContentCard
                  id={uuidv4()}
                  description="Motivations for DDoS attacks tend to be financial, philosophical or political in nature."
                  image="/images/security/system.png"
                  descriptionClassName="text-black"
                  imageClassName="h-[296px]"
                  customImageSize="h-[296px]"
                  customTitleContainerClassName="!mt-[-76px] text-center"
                  classContainer="!shadow-none"
                />
              </div>
            </CustomSliderWithDot>
          </div>
        </div>
        <p className="border-t border-con-custom-text-gray md:mt-[76px] mt-0 mb-[43px]" />
        {/* Service Categories */}
        <p className="text-con-custom-green-bold md:text-[30px] text-[24px] leading-7 md:leading-[50px] font-normal text-center">
          Anti-DDoS Solutions{" "}
        </p>
        <div className="mt-[53px] px-[65px] lg:px-0 hidden md:block">
          <ProgressCard
            data={SECURITY_PRODUCTS_MOCK.map((product) => ({
              id: product.id || "",
              name: product.name,
              description: product.description || [],
              image: product.image || "",
            }))}
            defaultActive="Hybrid Anti-DDOS Solutions Strategy"
            isList={false}
            className="items-center"
          />
        </div>
        <div className="mt-[38px] block md:hidden px-[45px]">
          <div className="flex justify-center">
            <div className="w-[300px]">
              <CustomSliderForTransport
                slideToShow={1}
                isCenter={false}
              >
                {SECURITY_PRODUCTS_MOCK.map((item) => (
                  <div key={item.id} className="w-full h-full px-[10px]">
                    <div className="relative w-full h-[157px] rounded-[35px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        priority={true}
                        fetchPriority="high"
                        className="object-cover rounded-[35px]"
                      />
                    </div>
                    <p
                      className={`font-funnel md:text-black text-con-custom-green-bold mt-4 text-center text-[15px] font-[300] md:leading-[25px] leading-4 tracking-[0%]`}
                    >
                      {item.name}
                    </p>
                    <div className="flex justify-center items-center">
                      <p
                        className={`font-dm-sans text-black mt-2 text-center md:text-[15px] w-[208px] text-[11px] font-[300] md:leading-[25px] leading-3 tracking-[0%]`}
                      >
                        {item.description.map((it, index) => (
                          <span
                            key={index}
                            className="text-black md:text-[11px]  text-[9px] font-[300] md:leading-[25px] leading-4 tracking-[0%] "
                          >
                            {it}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </CustomSliderForTransport>
            </div>
          </div>
        </div>
        <div className="hidden md:block ">
          <div className="mt-[128px] px-[65px] lg:px-0 grid lg:h-[660px] h-[360px] grid-cols-3 lg:gap-x-[30px] gap-x-[20px]">
            {SECURITY_PRODUCTS_CARD.map((item) => (
              <div
                key={item.id}
                className="border border-[#D3D3D3] rounded-[50px] shadow-con-custom-shadow-security"
              >
                <div className="relative w-full lg:h-[504px] md:h-[364px]">
                  <Image
                    src={item.image}
                    alt={item.id}
                    layout="fill"
                    className="object-cover rounded-[50px]"
                    priority={true}
                    fetchPriority="high"
                  />
                  <div className="lg:block hidden">
                    <p
                      className={`font-funnel absolute top-[34px] w-full left-1/2 text-center -translate-x-1/2 text-white text-[40px] font-normal leading-[120%] tracking-[0%]`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>

                <ul
                  className={`font-dm-sans lg:ml-4 ml-2 xl:py-[36px] md:py-[25px] px-[32px] text-black text-[15px] font-[300] leading-[25px] tracking-[0%] list-none`}
                >
                  {item.description.map((item) => (
                    <li
                      key={item}
                      className="relative text-black md:text-[15px] text-[11px] font-[300] leading-[25px] tracking-[0%] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-con-custom-green-bold before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="block md:hidden ">
          <div className="flex justify-center">
            <div className="w-[300px]">
              <div className="mt-[128px]  lg:px-0 md:grid h-[660px] grid-cols-3 gap-x-[30px] custom-slider-security-module">
                <CustomSliderForTransport
                  slideToShow={1}
                  isCenter={true}
                >
                  {SECURITY_PRODUCTS.map((item) => (
                    <div
                      key={item.title}
                      className="border border-[#D3D3D3] rounded-[50px] shadow-con-custom-shadow-security"
                    >
                      <div className="relative w-full h-[404px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          priority={true}
                          fetchPriority="high"
                          className="object-cover rounded-[35px]"
                        />
                        <p
                          className={`font-funnel absolute top-[24px] left-1/2 text-center -translate-x-1/2 text-white lg:text-[40px] md:text-[24px] text-[18px] font-normal md:leading-[30px] leading-[25px] tracking-[0%]`}
                        >
                          {item.title}
                        </p>
                      </div>

                      <ul
                        className={`font-dm-sans ml-4 py-[36px] px-[32px] text-black md:text-[15px] text-[11px] font-[300] leading-[25px] tracking-[0%] list-none`}
                      >
                        {item.description.map((item) => (
                          <li
                            key={item}
                            className="relative text-black text-[15px] font-[300] leading-[25px] tracking-[0%] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:bg-con-custom-green-bold before:rounded-full"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CustomSliderForTransport>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block border border-gray-300 md:mt-[188px] mt-4  mb-[54px]"></div>
        <div className="xl:mt-[104px] md:mt-[357px]">
          <div>
            <p
              className={`font-funnel text-center mt-[57px] text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px]  font-normal leading-[100%] tracking-[0%]`}
            >
              Peace of Mind,{" "}
            </p>
            <p
              className={`font-funnel text-center md:mt-3 mt-1  text-con-custom-green-bold lg:text-[50px] md:text-[30px] text-[24px]  font-normal leading-[100%] tracking-[0%]`}
            >
              Proven by Real Stories{" "}
            </p>
          </div>
          <div className="md:mt-[31px] xl:mt-[53px] mt-[25px] xl:mx-[-122px] mx-15">
            <TestimonialSection />
          </div>
        </div>
        <div className=" md:px-0 px-[22px] w-full">
          <FAQSection FAQ_Data={FAQ_DATA} />
        </div>
        <div className="lg:hidden block border border-gray-300 md:mt-[45px] mt-[89px]   xl:mb-[52px] md:mb-[63px] mb-[53px]"></div>
        <HelpSection />
        <p className="lg:block hidden border border-gray-100 mt-[58px] mb-[38px]"></p>
      </div>
      <div className="w-full flex flex-col md:px-10 justify-center lg:mt-0 md:mt-[65px] mt-[63px]">
        <p
          className={`font-funnel text-con-custom-green-bold md:text-[30px] text-[18px] md:leading-[50px] leading-[27px] tracking-[0%] font-normal text-center`}
        >
          Related Service Categories
        </p>
        <div className="md:block hidden mt-[49px] w-full h-full">
          <div className="flex gap-6 justify-between lg:h-[480px] h-[330px] overflow-x-auto custom-scrollbar-product">
            {RELATED_SERVICE_SECURITY.map((related, i) => (
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
                      className={`font-dm-sans absolute lg:top-[317px] text-[15px] font-light tracking-[0%] top-[175px] lg:w-[315px] w-[235px] text-black text-center`}
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
        <div className="block md:hidden px-[22px] mx-[22px] md:mt-[39px] mt-[19px]">
          <CustomSliderForTransport
          >
            {RELATED_SERVICE_SECURITY.map((related, i) => (
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
                      className={`font-dm-sans absolute lg:top-[317px] text-[15px] font-light tracking-[0%] top-[175px] lg:w-[315px] md:w-[222px] w-full text-black text-center`}
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
          </CustomSliderForTransport>
        </div>
      </div>
    </div>
  );
};
