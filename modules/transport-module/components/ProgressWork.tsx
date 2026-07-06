import { InformationCard } from "@/components/card/InformationCard";
import Image from "next/image";
import WorkBannerMobile from "../../../public/images/metroethernet/man-see-city.png";
import WorkBanner from "../../../public/images/metroethernet/shuttersctock_154725.jpg";

type Props = {
  PROGRESS: any;
  onProgressChange?: (id: number) => void;
};

export const ProgressWork = ({ PROGRESS, onProgressChange }: Props) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex h-fit">
        <div className="flex flex-col items-center mr-4">
          <div className="lg:w-[14px] md:w-[5px] w-1 h-full bg-[#EAEAEA] rounded-full relative"></div>
        </div>

        <div className="flex flex-col lg:gap-[45px] gap-[22px] relative">
          {PROGRESS.map((progress: any) =>
            progress.active ? (
              <div
                key={progress.id}
                onClick={() => onProgressChange?.(progress.id)}
                className="cursor-pointer relative h-full"
              >
                <div className="absolute md:h-[77px] h-[50px] top-0 bottom-0 lg:w-[14px] md:w-[5px] w-1 lg:-left-[30px] md:-left-[21px] -left-[20px] bg-con-custom-green rounded-full" />

                <InformationCard
                  title={
                    <div className="flex space-x-3">
                      <div className="flex items-center justify-center">
                        <span className="w-[6px] h-[6px] bg-con-custom-green-bold rounded-full "></span>
                      </div>
                      <span
                        className={`font-funnel lg:text-[24px] text-[16px] md:text-[20px] tracking-[0%] leading-[30px] font-normal text-left text-con-custom-green-bold uppercase`}
                      >
                        {progress.title}
                      </span>
                    </div>
                  }
                  description={
                    <div className="lg:mt-2 md:mt-[31px] mt-[19px] md:ml-[18px] ml-6">
                      <div
                        className={`font-dm-sans lg:hidden block lg:text-[15px] text-black md:text-[14px] text-[11px] md:leading-[15px] leading-[16px] font-light`}
                      >
                        <div className="md:mb-[31px] mb-[22px]">
                          <Image
                            src={WorkBannerMobile}
                            className="object-cover w-full lg:rounded-[50px] rounded-[34px] h-[169px]"
                            alt={"Work Banner"}
                            priority={true}
                            fetchPriority="high"
                          />
                        </div>
                        <div className="md:w-[484px] w-[233px] md:mb-0 mb-[30px] md:leading-[21px] leading-[16px]">
                          {progress.desc}
                        </div>
                      </div>
                      <span
                        className={`font-dm-sans w-[484px] lg:block hidden text-[15px] leading-[24px] font-light`}
                      >
                        {progress.desc}
                      </span>
                    </div>
                  }
                />
              </div>
            ) : (
              <div
                key={progress.id}
                onClick={() => onProgressChange?.(progress.id)}
                className="text-[#C4C4C4] text-[16px] leading-[24px] font-normal uppercase cursor-pointer hover:text-[#A0A0A0] transition-colors duration-200"
              >
                • {progress.title}
              </div>
            )
          )}
        </div>
      </div>

      <div className="lg:block hidden">
        <Image
          src={WorkBanner}
          className="object-cover rounded-[50px] h-[391px]"
          alt={"Work Banner"}
          width={521}
          height={349}
          priority={true}
          fetchPriority="high"
        />
      </div>
    </div>
  );
};
