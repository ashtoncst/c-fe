import React from "react";
import Image from "next/image";

export type PromoCardData = {
  title: string;
  description: string | React.ReactNode;
  date: string | React.ReactNode;
  image: string;
  buttonTitle?: string;
  getTicketsButton?: React.ReactNode;
};

type Props = {
  data: PromoCardData[];
  showButton?: boolean;
};

export const PromoCard = ({ data, showButton = true }: Props) => {
  return (
    <div className="flex flex-col gap-10 md:gap-14 xl:gap-10 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full">

          {/* Mobile + Tablet: stacked layout */}
          <div className="flex flex-col gap-6 xl:hidden">
            <div className="relative w-full h-[258px] md:h-[300px] overflow-hidden rounded-[35px] shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-3 text-center px-2">
              {showButton && item.buttonTitle && (
                <button
                  className={`font-dm-sans bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors`}
                >
                  {item.buttonTitle}
                </button>
              )}
              <h3
                className={`font-funnel font-normal text-con-custom-green-bold text-[24px] md:text-[28px] leading-[1.2]`}
              >
                {item.title}
              </h3>
              <div
                className={`font-dm-sans font-light text-[15px] md:text-[16px] leading-[1.6] text-black`}
              >
                {item.description}
              </div>
              <div
                className={`font-dm-sans font-normal text-[15px] md:text-[16px] leading-[1.6] text-black`}
              >
                {item.date}
              </div>
              {item.getTicketsButton && (
                <div className="flex justify-center mt-1">
                  {item.getTicketsButton}
                </div>
              )}
            </div>
          </div>

          {/* Desktop: side-by-side card */}
          <div
            className={`hidden xl:flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } rounded-[4rem] overflow-hidden h-[400px] shadow-lg bg-white`}
          >
            {/* Text area */}
            <div className="w-[40%] flex flex-col justify-center items-center text-center p-12 gap-4">
              {showButton && item.buttonTitle && (
                <button
                  className={`font-dm-sans bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors`}
                >
                  {item.buttonTitle}
                </button>
              )}
              <h3
                className={`font-funnel font-normal text-con-custom-green-bold text-[36px] leading-[1.15]`}
              >
                {item.title}
              </h3>
              <div
                className={`font-dm-sans font-light text-[16px] leading-[1.6] text-black max-w-[280px]`}
              >
                {item.description}
              </div>
              <div
                className={`font-dm-sans font-medium text-[16px] leading-[1.6] text-black`}
              >
                {item.date}
              </div>
              {item.getTicketsButton && (
                <div className="flex justify-center">
                  {item.getTicketsButton}
                </div>
              )}
            </div>

            {/* Image area */}
            <div className="w-[60%] relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
