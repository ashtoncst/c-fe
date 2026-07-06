import React from "react";
import Image from "next/image";

export type PromoCardReleaseData = {
  id: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
  buttonTitle?: string;
};

type Props = {
  data: PromoCardReleaseData[];
  isShowButton?: boolean;
};

export const PromoCardRelease = (props: Props) => {
  const { data, isShowButton = true } = props;
  return (
    <div className="lg:space-y-16 md:space-y-12 space-y-[30px]">
      <div className=" justify-between lg:items-center">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`lg:space-y-[18px] md:space-y-[8px] space-y-[13px] md:mt-0 mt-5 `}
          >
            {isShowButton && item.buttonTitle && (
              <div className="flex justify-center">
                <button
                  className={`font-dm-sans bg-con-custom-green text-white hover:bg-con-custom-green-bold rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors`}
                >
                  {item.buttonTitle}
                </button>
              </div>
            )}

            <div className="lg:space-y-[26px] md:mt-[56px] mt-[36px] md:space-y-[8px] space-y-[6px]">
              <div
                className={`font-funnel md:block hidden font-normal  text-con-custom-green-bold lg:text-[50px] md:text-[26px] text-[24px] lg:leading-[55px] leading-[28px] tracking-[0%] w-full`}
              >
                {item.title}
              </div>
              {item.image && (
                <div
                  className={`relative w-full lg:h-[422px] md:h-[236px] h-[258px] lg:mb-0 md:mb-6 `}
                >
                  <Image
                    src={item.image}
                    alt="banner"
                    className="w-full h-full lg:rounded-[50px] rounded-[35px] md:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    layout="fill"
                    priority={true}
                    fetchPriority="high"
                  />
                </div>
              )}
              <div
                className={`font-funnel block md:hidden pt-3 md:pb-[15px] pb-1 w-[298px] font-normal text-con-custom-green-bold lg:text-[50px] md:text-[26px] text-[24px] lg:leading-[55px] leading-[28px] tracking-[0%] mb-1`}
              >
                {item.title}
              </div>
              <div className="lg:space-y-[10px] md:space-y-0 space-y-[6px] flex flex-col  lg:justify-start md:justify-between">
                <div
                  className={`font-dm-sans font-light lg:text-[20px] md:text-[16px] text-[15px] lg:leading-[25px] leading-[1.6] tracking-[0%] w-full text-black`}
                >
                  {item.description}
                </div>
                {item.date && (
                  <div className="flex flex-col md:gap-3 ">
                    <div
                      className={`font-dm-sans lg:mt-0 md:mt-6 mt-0 font-medium lg:text-[20px] md:text-[16px] text-[15px] leading-[1.6] tracking-[0%] text-black`}
                    >
                      {item.date}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
