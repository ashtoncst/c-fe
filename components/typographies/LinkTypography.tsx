import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const LinkTypography = (props: Props) => {
  return (
    <div
      className={`text-con-custom-green text-[12px] lg:text-[15px] hover:text-[#024645] font-normal leading-[100%] font-dm-sans ${props.className} cursor-pointer`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
