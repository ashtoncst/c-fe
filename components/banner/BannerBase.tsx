import Image, { StaticImageData } from "next/image";
import React from "react";
type Props = {
  bannerJpg: StaticImageData;
  className?: string;
  width?: number;
  height?: number;
};

export const BannerBase = (props: Props) => {
  return (
    <div>
      <Image
        src={props.bannerJpg}
        className={`${props.className}`}
        alt="City banner"
        width={props.width}
        height={props.height}
        priority={true}
        fetchPriority="high"

      />
    </div>
  );
};
