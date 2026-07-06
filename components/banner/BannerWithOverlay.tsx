import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { BannerBase } from "./BannerBase";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";

type Props = {
  title: string;
  description: string;
  bannerImage: StaticImageData | string;
  onLearnMore?: () => void;
  onAddSolution?: () => void;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export const BannerWithOverlay = ({
  title,
  description,
  bannerImage,

  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: Props) => {
  const router = useRouter();
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  const handleLearnMore = () => {
    router.push("/connectivity");
  };
  const handleAddSolution = () => {
    addToCart({
      sessionId: sessionCurrentId,
      itemId: 1,
    });
    addToCart({
      sessionId: sessionCurrentId,
      itemId: 2,
    });
    addToCart({
      sessionId: sessionCurrentId,
      itemId: 3,
    });
  };
  return (
    <div className="flex relative justify-center items-center md:mt-[31px] mt-[13px] lg:mt-[41px] -mb-[70px]">
      <div className="flex justify-center items-center">
        <div className="absolute lg:top-1/2 top-10 lg:left-[92px] left-[35px] transform lg:-translate-y-1/2">
          <p
            className={`font-funnel lg:text-[50px] md:text-[30px] text-[18px] font-normal tracking-[0%] text-white md:leading-[100%] leading-[27px] md:pb-6 pb-[7px] capitalize ${titleClassName}`}
          >
            {title}
          </p>
          <div className="w-full flex justify-start items-center lg:mb-10 md:mb-[95px] mb-[37px]">
            <p
              className={`font-dm-sans text-white lg:text-[15px] md:w-[271px] w-[132px] md:text-[14px] text-[11px] lg:leading-[100%] md:leading-[20px] leading-[16px] tracking-[0%] ${descriptionClassName}`}
            >
              {description}
            </p>
          </div>
          <div className="md:block hidden">
            <div className="space-x-[33px] flex justify-start">
              <ButtonBase
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMore();
                }}
                className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
                title={
                  <div className="flex items-center gap-[5px] h-[32px] justify-center py-2 px-6 space-x-[23px]">
                    <span
                      className={`font-dm-sans text-white font-normal text-[13px] leading-[100%]`}
                    >
                      Learn More
                    </span>
                  </div>
                }
              />
              {/* TEMP: cart "Add Solution" hidden — remove `false &&` to restore */}
              {false && (
              <ButtonBase
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddSolution();
                }}
                className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
                title={
                  <div className="flex items-center gap-[5px] justify-center py-2 px-6 gap-x-[23px]">
                    <span>
                      <PlusIcon width={16} height={16} />
                    </span>
                    <span
                      className={`font-dm-sans text-white font-normal text-[13px] leading-[100%]`}
                    >
                      Add Solution
                    </span>
                  </div>
                }
              />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <BannerBase
          className={`lg:rounded-[50px] rounded-[35px] object-cover lg:object-[60%_32%] object-[10%_0%] md:h-[325px] h-[157px] ${className}`}
          bannerJpg={bannerImage as StaticImageData}
        />
        <div className="md:hidden block">
          <div className="flex w-full justify-center mt-[19px] gap-x-[19px]">
            <ButtonBase
              onClick={(e) => {
                e.stopPropagation();
                handleLearnMore();
              }}
              className="border border-con-custom-green w-[84px] md:rounded-[30px] rounded-[14px] bg-con-custom-green h-[18px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
              title={
                <div className="flex items-center gap-[5px] justify-center space-x-[23px]">
                  <span
                    className={`font-dm-sans text-white font-normal md:text-[13px] text-[9px] leading-[100%]`}
                  >
                    Learn More
                  </span>
                </div>
              }
            />
            {/* TEMP: cart "Add Solution" hidden — remove `false &&` to restore */}
            {false && (
            <ButtonBase
              onClick={(e) => {
                e.stopPropagation();
                handleAddSolution();
              }}
              className="border border-con-custom-green md:rounded-[30px] rounded-[14px] w-[84px] bg-con-custom-green h-[18px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
              title={
                <div className="flex items-center gap-[5px] justify-center px-2">
                  <span>
                    <PlusIcon
                      width={16}
                      height={16}
                      className="md:w-4 md:h-4 w-[7px] h-[7px]"
                    />
                  </span>
                  <span
                    className={`font-dm-sans text-white font-normal md:text-[13px] text-[9px] tracking-[0%] leading-[100%]`}
                  >
                    Add Solution
                  </span>
                </div>
              }
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
