import { BodyText, Caption } from "@/components/typographies";
import Image from "next/image";
import React from "react";

type Props = {
  cards: {
    id: number;
    name: string;
    country: string;
    img: string;
    desc: string;
  };
  width?: number;
  height?: number;
};

const CardBase = (props: Props) => {
  const { cards } = props;

  return (
    <div
      className={`font-dm-sans border flex justify-center bg-white border-gray-300 xl:rounded-[20px] rounded-[25px] h-full items-center  shrink-0 w-full transition-all duration-500`}
    >
      <div className={` font-dm-sans xl:pl-[23px] pl-[10px] pr-[4px]`}>
        <div className="flex xl:gap-x-5 gap-x-3 justify-center items-center">
          <div className="xl:w-[45px] md:w-[38px] w-[33px] xl:h-[45px] md:h-[38px] h-[45px] overflow-hidden rounded-full">
            {" "}
            {/* Container với overflow hidden */}
            <Image
              src={cards.img}
              alt="Avatar"
              className="w-full h-full object-cover transform "
              style={{ objectPosition: "50% 25%" }}
              width={props.width || 45}
              height={props.height || 45}
              priority={true}
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col justify-center">
            <BodyText
              as="p"
              size="md"
              weight="normal"
              className="text-gray-900 md:!text-body-md !text-body-sm md:leading-[15px] leading-[24px]"
            >
              {cards.name}
            </BodyText>
            <Caption
              as="p"
              className="text-gray-500 xl:!text-body-xs md:!text-caption !text-[9px] md:w-auto w-[92px] font-normal md:leading-7 leading-[13px]"
            >
              {cards.country}
            </Caption>
          </div>
        </div>
        <BodyText
          as="p"
          size="xs"
          className="text-black xl:!text-body-xs !text-caption xl:mt-2 md:mt-0 md:leading-[100%] md:w-auto w-[135px] mt-2 leading-[16px]"
        >
          {cards.desc}
        </BodyText>
      </div>
    </div>
  );
};

export default CardBase;
