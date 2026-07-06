export const SkeletonLanding = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[157px] md:h-[227px] rounded-[50px] overflow-hidden bg-con-background-skeleton flex items-center justify-center animate-pulse">
        <div className="w-[120px] h-[120px] border-[9px] border-[#fff] border-opacity-50 border-t-[#038F8D] rounded-full animate-spin"></div>
      </div>
      <div className="bg-con-background-skeleton-content w-full md:h-[26px] mt-[32px] rounded-[100px] animate-pulse"></div>
      <div className="bg-con-background-skeleton-content w-full mt-[12px] h-[15px] rounded-[100px] animate-pulse"></div>
      <div className="bg-con-background-skeleton-content w-full mt-[12px] h-[15px] rounded-[100px] animate-pulse"></div>
      <div className="bg-con-background-skeleton-content w-[129px] h-[32px] mt-[44px] rounded-[100px] animate-pulse md:block hidden"></div>
    </div>
  );
};
