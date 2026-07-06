"use client";
import { BannerWithText } from "@/components/banner/BannerWithText";
import { CustomSliderForTransport } from "@/components/custom-slider/CustomSliderForTransport";
import { StaticImageData } from "next/image";
import { ButtonBase } from "../button/ButtonBase";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";

interface RelatedService {
  id: string | number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

interface RelatedServicesSectionProps {
  title?: string;
  services: RelatedService[];
  className?: string;
}

export const RelatedServicesSection = ({
  title = "Related Service Categories",
  services,
  className = "",
}: RelatedServicesSectionProps) => {
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div
      className={`w-full flex flex-col md:px-10 justify-center lg:mt-0 md:mt-[178px] mt-[61px] ${className}`}
    >
      <p
        className={`font-funnel text-con-custom-green-bold md:text-[30px] text-[18px] md:leading-[50px] leading-[27px] tracking-[0%] font-normal text-center`}
      >
        {title}
      </p>

      {/* Desktop version */}
      <div className="md:block hidden mt-[49px] w-full h-full">
        <div className="flex gap-6 justify-between lg:h-[480px] h-[330px] overflow-x-auto custom-scrollbar-product">
          {services.map((related) => (
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
                {/* TEMP: cart "Add Item" hidden — remove `false &&` to restore */}
                {false && (
                <div className="flex justify-center w-full mb-3">
                  <ButtonBase
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden px-[22px] mx-[22px] md:mt-[39px] mt-[19px]">
        <div className="flex justify-center">
          <div className="w-[300px]">
            <CustomSliderForTransport>
              {services.map((related) => (
                <div
                  key={related.id}
                  className="flex-shrink-0 lg:w-[378px] w-[235px] px-2"
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
                    {/* TEMP: cart "Add Item" hidden — remove `false &&` to restore */}
                    {false && (
                    <div className="flex justify-center w-full mb-3 mt-[-100px]">
                      <ButtonBase
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          addToCart({
                            sessionId: sessionCurrentId,
                            itemId: related.id,
                          });
                        }}
                        className={`font-dm-sans  px-4 py-2 bg-con-custom-green border rounded-full leading-[100%] tracking-[0%] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                        title={
                          <div className="flex items-center gap-[14px]">
                            <PlusIcon width={16} height={16} />
                            <p className="text-[13px] font-normal pr-[5px]">
                              Add Item
                            </p>
                          </div>
                        }
                      />
                    </div>
                    )}
                  </div>
                </div>
              ))}
            </CustomSliderForTransport>
          </div>
        </div>
      </div>
    </div>
  );
};
