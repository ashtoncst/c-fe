import Image from "next/image";
import React from "react";
import PlanInternetImage from "../../../public/images/plan-internet.png";
type Props = {
  title?: string | React.ReactNode;
  price?: string | React.ReactNode;
};
export const OddProductOfferinng = (props: Props) => {
  return (
    <div className="relative">
      <div>
        <Image
          src={PlanInternetImage}
          alt="plan-internet"
          width={196}
          height={107}
          priority={true}
          fetchPriority="high"

        />
      </div>
      <p className="absolute top-[29px] w-[191px] text-center">{props.title}</p>
      <div className="absolute top-[90px] bg-con-custom-purple rounded-[30px] text-center py-2">
        <div className="w-[196px]">{props.price}</div>
      </div>
    </div>
  );
};
