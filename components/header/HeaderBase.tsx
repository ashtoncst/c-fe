import React from "react";
import { ButtonBase } from "../button/ButtonBase";
import { useRouter } from "next/navigation";

type Props = {
  id: string | React.ReactNode;
  slogan?: string | React.ReactNode;
  sloganClassName?: string;
  isShowButton?: boolean;
  titleClassName?: string;
};

export const HeaderBase = (props: Props) => {
  const {
    sloganClassName = "",
    isShowButton = true,
    titleClassName = "",
  } = props;
  const router = useRouter();
  const handleBackHome = () => {
    router.push("/contact-us");
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <div
          className={`font-funnel md:text-[65px] text-[36px] text-con-custom-green-bold font-normal leading-[100%] tracking-[0%] lg:mb-6 mb-[15px] text-center capitalize ${titleClassName}`}
        >
          {props.id}
        </div>
        <div className="w-full flex justify-center items-center">
          <div
            className={`font-dm-sans text-center md:text-[17px] text-[13px] leading-[130%] font-light pb-[26px] text-black ${sloganClassName}`}
          >
            {props.slogan}
          </div>
        </div>
        {isShowButton && (
          <div className="flex space-x-[33px] justify-center items-center">
            {/* <ButtonBase
              className="border border-con-custom-green rounded-[30px] lg:h-[32px] h-[28px] bg-con-custom-green py-[7px] px-[15px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
              title={
                <div className="flex items-center gap-[5px] justify-center h-full space-x-[20px]">
                  <span>
                    <PlusIcon />
                  </span>
                  <span
                    className={`font-dm-sans text-white font-normal md:text-xs text-[11px] tracking-[0%] leading-[100%] `}
                  >
                    Add Solution
                  </span>
                </div>
              }
            /> */}
            <ButtonBase
              className="border border-con-custom-green rounded-[30px] lg:h-[32px] h-[28px] bg-con-custom-green  text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
              onClick={handleBackHome}
              title={
                <div className="flex items-center justify-center h-full py-[6px] px-[23px] space-x-[23px]">
                  <span
                    className={`font-dm-sans tracking-[0%] text-white font-normal text-[13px] leading-[100%] `}
                  >
                    Inquire for Pricing
                  </span>
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
