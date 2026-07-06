import React from "react";

type Props = {
  width?: number;
  height?: number;
};

export const SmallMenuIcon = ({ width = 10, height = 6 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00098 1L4.99657 5L1.00098 1"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
