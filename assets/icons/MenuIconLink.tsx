import React from "react";

type Props = {
  width?: number;
  height?: number;
};

export const MenuIconLink = ({ width = 6, height = 10 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5.00441L1 9"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
