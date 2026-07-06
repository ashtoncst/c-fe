import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const MinusIcon = (props: Props) => {
  const { width = 10, height = 10, className } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_5464_7007)">
        <path
          d="M9.79762 5H0.202148"
          stroke="#231F20"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5464_7007">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
