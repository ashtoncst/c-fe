import Image from "next/image";
import React from "react";
import DedicatedImage from "../../../public/images/internet-card2.png";
type Props = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};
export const DelicatedCard = (props: Props) => {
  return (
    <div className="relative h-full flex flex-wrap justify-center item">
      <div className="relative h-[140px] w-[196px]">
        <Image
          src={DedicatedImage}
          alt="dedicated"
          layout="fill"
          priority={true}
          fetchPriority="high"
        />
      </div>
      <p
        className={`font-dm-sans flex justify-center items-center font-normal md:text-[18px] text-[16px] md:leading-[24px] leading-[20px] text-con-custom-green-bold tracking-[0%] absolute  left-1/2 transform -translate-x-1/2 translate-y-1/6 h-[70px] w-full px-2 text-center z-10`}
      >
        {props.title}
      </p>
      <div className="absolute  top-1/2 left-[9px] right-[9px] border-b border-con-custom-green-bold transform -translate-y-1/2"></div>{" "}
      <div className="absolute -bottom-[65px] left-0 right-0 h-[140px] md:w-[196px]">
        <p
          className={`font-dm-sans flex justify-center absolute  md:left-1/2 transform md:-translate-x-1/2  h-[70px]  items-center text-center font-normal md:text-[14px] text-[12px] md:leading-[24px] leading-[20px] text-con-custom-green-bold md:px-3 px-1 w-full tracking-[0%]`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
