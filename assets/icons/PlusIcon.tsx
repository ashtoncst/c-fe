import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
};

export const PlusIcon = (props: Props) => {
  const { width = 16, height = 16, className, color = "white" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="7.61133"
        y1="-2.42841e-08"
        x2="7.61133"
        y2="16"
        stroke={color}
      />
      <line x1="16" y1="7.61108" y2="7.61108" stroke={color} />
    </svg>
  );
};
