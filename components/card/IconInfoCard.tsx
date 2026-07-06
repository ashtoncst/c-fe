import React from "react";

export interface IconInfoCardProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
}
export const IconInfoCard = (props: IconInfoCardProps) => {
  return (
    <div
      className={`relative w-full flex flex-wrap flex-col justify-between  text-center ${props.className}  rounded-[45px] lg:h-[283px] h-[208px]`}
    >
      <div className="flex-1 flex justify-center items-center md:rounded-[45px] rounded-[38px]  ">
        {props.icon}
      </div>
      <div className="flex flex-col justify-center bg-white lg:h-[159px] h-[112px] items-center content-end border border-[#D3D3D3] md:rounded-[45px] rounded-[38px] space-y-2 z-10">
        <p
          className={`font-funnel lg:w-[155px] md:w-[132px] w-[100px] md:px-[10px] mt-[25px]  lg:text-[22px] md:text-[18px] text-[16px] font-normal lg:leading-[26px] md:leading-[22px] leading-[20px] tracking-[0%] text-con-custom-green  `}
        >
          {props.title}
        </p>
        <p
          className={`font-dm-sans lg:w-[155px] lg:mx-[30px] md:px-[10px] md:w-[144px] w-[117px]  lg:text-[12px] md:text-[10px] text-[9px]  font-normal lg:leading-[120%] leading-[120%] tracking-[0%]  pb-[26px]  text-black `}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
