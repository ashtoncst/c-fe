import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  bannerJpg: StaticImageData | string;
  description?: string | React.ReactNode;
  classNameImage?: string;
  classNameDescription?: string;
  ClassNameObjectPosition?: string;
  className?: string;
  width?: number;
  height?: number;
  shadow?: boolean;
};

export const BannerWithText = (props: Props) => {
  const { ClassNameObjectPosition = "20% 50%" } = props;
  return (
    <div
      className={`relative xl:h-[504px] md:h-[275px] h-[364px] overflow-hidden lg:rounded-[50px] rounded-[35px] ${props.className}`}
    >
      <div>
        <div className={`${props.classNameDescription}`}>
          {props.description}
        </div>
      </div>
      <div>
        {props.shadow && (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 z-[5]"></div>
        )}
        <Image
          src={props.bannerJpg}
          className={` ${props.classNameImage} ${ClassNameObjectPosition}`}
          alt="City banner"
          priority={true}
          fetchPriority="high"
        />
      </div>
    </div>
  );
};
