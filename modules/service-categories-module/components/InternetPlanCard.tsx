import Image from "next/image";
import React from "react";
import PlanInternetImage from "../../../public/images/plan-internet.png";
type Props = {
  title?: string | React.ReactNode;
  price?: string | React.ReactNode;
};
export const InternetPlanCard = (props: Props) => {
  return (
    <div className="relative md:flex md:justify-center ">
      <div className="xl:w-[196px] xl:h-[107px] md:w-[127px] w-[115px] md:h-[90px] h-[80px]">
        <Image
          src={PlanInternetImage}
          alt="plan-internet"
          width={196}
          height={107}
          priority={true}
          fetchPriority="high"
        />
      </div>
      <p
        className={`font-dm-sans  xl:px-4 w-full px-2 xl:text-[18px] lg:text-xs text-xs font-normal lg:leading-[24px] leading-[18px] tracking-[0%] text-con-custom-green-bold absolute xl:top-[29px] lg:top-[9px] md:top-[18px] top-[12px] text-center`}
      >
        {props.title}
      </p>
      <div className="absolute xl:top-[90px] md:top-[55px] top-[48px] bg-con-custom-purple rounded-[30px] text-center py-2 w-full">
        <div
          className={`font-dm-sans xl:text-[18px] text-xs font-normal xl:leading-[24px] leading-[18px] tracking-[0%] text-white `}
        >
          {props.price}
        </div>
      </div>
    </div>
  );
};
