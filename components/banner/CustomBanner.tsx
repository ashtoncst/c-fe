import { ButtonBase } from "@/components/button/ButtonBase";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  isDisplayButton: boolean;
  className: string;
  subHeading?: string | React.ReactNode;
};

export const CustomBanner = (props: Props) => {
  const router = useRouter();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={`text-black  gap-5 xl:gap-0 ${props.className}`}>
      <div className="flex flex-col lg:gap-[18px]  md:justify-between justify-center items-center lg:items-start">
        {props?.subHeading && (
          <p
            className={`font-dm-sans mt-[18px] md:mt-0 text-center lg:text-left lg:w-[371px] md:w-[227px] w-[214px]  font-thin lg:font-medium md:text-[13px] text-[10px] lg:text-[15px] text-black md:leading-[20px] leading-[100%] lg:leading-[20px] tracking-[0%]`}
          >
            {props?.subHeading}
          </p>
        )}
        <div>
          <p
            className={`font-funnel text-center md:text-left text-black lg:text-[65px] md:text-[52px] text-[40px] font-normal md:leading-[53px] leading-[42px] lg:leading-[65px] tracking-[0%]`}
          >
            {props.title}
          </p>
        </div>

        <p
          className={`font-dm-sans mt-[18px] md:mt-0 text-[#1D1D1B] text-center md:text-left lg:w-[371px] md:w-[227px] w-[214px]  font-thin lg:font-normal md:text-[13px] text-[10px] lg:text-[15px]  md:leading-[20px] leading-[100%] lg:leading-[20px] tracking-[0%]`}
        >
          {props.subtitle}
        </p>
      </div>
      {props.isDisplayButton && (
        <div className="flex items-center justify-center lg:justify-start gap-[33px] md:mt-[69px] mt-[36px]">
          <ButtonBase
            onClick={() => router.push("/contact-us")}
            className={`font-dm-sans font-normal hover:bg-white active:text-con-custom-green-bold hover:text-black md:px-[45px] px-[17px] lg:py-[11px] py-[6px] bg-black border rounded-full text-[14px] border-black text-black`}
            title="Inquire for Pricing"
          />
        </div>
      )}
    </div>
  );
};
