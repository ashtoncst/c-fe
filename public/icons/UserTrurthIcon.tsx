import React from "react";
interface Props {
  width?: number;
  height?: number;
  className?: string;
}
export const UserTrustIcon = ({
  width = 48,
  height = 75,
  className,
}: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0173 0H24.0123C18.8178 0 14.6068 4.17651 14.6068 9.3285V9.3334C14.6068 14.4854 18.8178 18.6619 24.0123 18.6619H24.0173C29.2118 18.6619 33.4228 14.4854 33.4228 9.3334V9.3285C33.4228 4.17651 29.2118 0 24.0173 0Z"
        fill="white"
      />
      <path
        d="M41.269 75L46.4653 69.8463C47.4522 68.8675 48.0049 67.546 48.0049 66.1658V49.4616C48.0049 43.4123 45.582 37.6126 41.269 33.335V75.0049V75Z"
        fill="white"
      />
      <path
        d="M6.73589 75L1.53963 69.8463C0.552688 68.8675 0 67.546 0 66.1658V49.4616C0 43.4123 2.42295 37.6126 6.73589 33.335V75.0049V75Z"
        fill="white"
      />
      <path
        d="M41.269 33.3301L40.3857 32.454C36.6403 28.7392 31.5575 26.6494 26.2576 26.6494H22.9958C16.8965 26.6494 11.0488 29.0525 6.73589 33.3301H41.269Z"
        fill="white"
      />
    </svg>
  );
};
