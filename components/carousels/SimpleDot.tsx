type SimpleDotProps = {
  onClick?: () => void;
  active?: boolean;
  totalDots: number;
};

/** Shared dot indicator used in carousels. Auto-sizes based on total dot count. */
export const SimpleDot = ({ onClick, active, totalDots }: SimpleDotProps) => {
  const getDotSize = () => {
    if (totalDots <= 6) return "w-9 sm:w-14 md:w-[59px]";
    if (totalDots <= 9) return "w-7 sm:w-10 md:w-12";
    if (totalDots <= 13) return "w-4 sm:w-8 md:w-10 flex-wrap";
    return "w-4 sm:w-6 md:w-8";
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${getDotSize()} h-1 rounded-full border-none cursor-pointer
        transition-all duration-300 ease-in-out
        ${active ? "bg-con-custom-green" : "bg-gray-300 hover:bg-gray-400"}
        focus:outline-none
      `}
    />
  );
};
