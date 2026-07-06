import React from "react";
import { DM_Sans } from "next/font/google";
import { ButtonBase } from "@/components/button/ButtonBase";

import { BannerWithText } from "@/components/banner/BannerWithText";

import { Funnel_Display } from "next/font/google";
import { CustomSliderForTransport } from "@/components/custom-slider/CustomSliderForTransport";
import { RELATED_SERVICES_Faster } from "@/modules/transport-module/constants/Faster.constant";
import { PlusIcon } from "@/assets/icons/PlusIcon";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
type Props = {
  recommendations: any;
};

export const AIResponseImage = (props: Props) => {
  // [SECURITY FIX] Removed console.log that printed the full recommendations
  // payload (product data from the AI backend) to the browser console.
  return (
    <div>
      <p
        className={`${dmSans.className} text-xs leading-[18px] tracking-[0%] font-normal `}
      >
        Great question! You’ve come the right place. We have a view solution
        that we can provide for your use case. Here are some our
        recommendations.
      </p>

      <div className="md:block hidden md:mt-[49px] mt-[19px] w-full h-full">
        <div className="flex gap-6 justify-between lg:h-[480px] md:h-[300px] overflow-x-auto custom-scrollbar-product">
          {props?.recommendations.map((related: any, i: any) => (
            <div
              key={related.id}
              className="flex-shrink-0 lg:w-[378px] w-[235px]"
            >
              <div className="relative">
                <BannerWithText
                  bannerJpg="/images/selling/image1.png"
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
                          className={`${funnelDisplay.className} lg:text-[40px] text-[25px] tracking-[0%] leading-[100%] w-full font-normal block`}
                        >
                          {related.name}
                        </span>
                      </p>
                    </div>
                  }
                />
                <div className="flex justify-center">
                  <p
                    className={`${dmSans.className} absolute lg:top-[317px] text-[15px] font-light tracking-[0%] top-[175px] lg:w-[315px] w-[222px] text-black text-center`}
                  >
                    {related.description}
                  </p>
                </div>
                <div className=" flex justify-center ">
                  <ButtonBase
                    className="border-[0.5px] border-con-custom-green absolute lg:top-[410px] top-[260px] rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
                    title={
                      <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                        <PlusIcon />
                        <span
                          className={`${dmSans.className} text-white font-normal text-[13px] leading-[100%] pr-[5px]`}
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
  );
};
