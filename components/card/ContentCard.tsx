import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import Image from "next/image";
import React from "react";

type Props = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  isDisplayButton?: boolean;
  id: number | string;
  image: string;
  imageClassName?: string;
  price?: string;
  contentContainerClassName?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  getTicketsButton?: React.ReactNode;
  customImageSize?: string;
  customTitleContainerClassName?: string;
  showPrice?: boolean;
  customImageClassName?: string | React.ReactNode;
  classContainer?: string | React.ReactNode;
};
export const ContentCard = (props: Props) => {
  const { showPrice = false } = props;
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div
      className={`relative border border-[#D3D3D3] md:rounded-[50px] md:shadow-lg rounded-[35px] custom-content-card ${props.classContainer} `}
    >
      <div
        className={` md:rounded-[50px] rounded-[35px] w-full overflow-hidden lg:h-[325px] md:h-[236px] ${props.imageClassName}`}
      >
        <div
          className={`md:relative absolute top-0 left-0 w-full md:h-full h-[157px] image ${props.customImageSize}`}
        >
          <Image
            src={props.image}
            alt="tv"
            layout="fill"
            className={`lg:rounded-[50px] md:rounded-[35px] rounded-[25px] image-custom object-cover object-[50%_20%] ${props.customImageClassName}`}
            priority={true}
            fetchPriority="high"
          />
        </div>
      </div>
      <div
        className={`md:mt-0 md:px-0 px-[22px] mt-[74px] md:pt-0 pt-[97px] custom-padding ${props.customTitleContainerClassName}`}
      >
        <div
          className={`font-funnel lg:text-[30px] md:text-[20px] text-[15px] font-normal lg:leading-[100%] tracking-[0%] md:leading-[30px] leading-[21px] text-con-custom-green-bold ${props.titleClassName}`}
        >
          {props.title}
        </div>
        <div
          className={`lg:pt-[25px] md:pt-3 lg:px-[41px] md:mt-0 mt-3 md:mb-0 mb-3 h-full md:px-[22px] lg:pb-[36px] md:pb-7 ${props.contentContainerClassName}`}
        >
          <div className="flex flex-col">
            <div
              className={`font-dm-sans lg:text-[15px] md:text-[14px] text-[11px] font-light lg:leading-[25px] md:leading-[20px] leading-[16px] text-[#D3D3D3] ${props.descriptionClassName}`}
            >
              {props.description}
            </div>
            <div className="md:block hidden">
              {props.getTicketsButton && (
                <div className="flex justify-start items-start mt-3 w-full">
                  <div className="flex-shrink-0">{props.getTicketsButton}</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between mb-5">
            {props.showPrice && (
              <div className={`font-dm-sans lg:hidden block`}>
                <div className="text-[11px] leading-4 font-medium">
                  Pricing per month (VAT-ex)
                </div>
                <div className="text-[11px] leading-4 font-light tracking-[0%]">
                  {props.price}
                </div>
              </div>
            )}
            {/* TEMP: cart "Add Product" hidden — remove `false &&` to restore */}
            {false && props.isDisplayButton && (
              <ButtonBase
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    sessionId: sessionCurrentId,
                    itemId: props.id as number,
                  });
                }}
                className={`font-dm-sans font-normal w-[130px] px-[11px] md:py-2 py-1 bg-con-custom-green border rounded-full text-[14px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                title={
                  <div className="flex items-center gap-[14px]">
                    <PlusIcon width={12} height={12} className="md:hidden" />
                    <PlusIcon
                      width={16}
                      height={16}
                      className="hidden md:block"
                    />
                    <span className="text-[14px] font-normal text-nowrap">
                      Add Product
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
