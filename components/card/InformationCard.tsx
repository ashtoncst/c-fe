import React from "react";

type Props = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};
export const InformationCard = (props: Props) => {
  return (
    <div className="flex flex-col ">
      <div className={`${props.className} font-funnel`}>
        {props.title}
      </div>
      <div className="md:flex-none flex justify-center lg:justify-start w-full">
        <div
          className={`${props.className} font-dm-sans  lg:font-light font-normal lg:text-[15px] md:text-[14px] text-[11px] lg: md:leading-[20px] leading-4 tracking-[0%] text-black lg:w-full lg:mt-0 md:w-full md:mt-2 mt-0 `}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};
