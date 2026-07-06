import Image from "next/image";
import React from "react";
import DedicatedImage from "../../../public/images/internet-card2.png";
type Props = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};
export const IXAndIPTEpressCard = (props: Props) => {
  return (
    <div className="relative h-full flex flex-wrap justify-center">
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
        className={`font-dm-sans flex justify-center items-center font-normal text-[18px] leading-[24px] text-con-custom-green-bold tracking-[0%] absolute  left-1/2 transform -translate-x-1/2 translate-y-1/6 px-3 h-[140px]  text-center z-10`}
      >
        {props.title}
      </p>
    </div>
  );
};
