import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import React from "react";

type Props = {
  id: string | number;
  img: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export const OnlineSellingPortalCard = (props: Props) => {
  const { img, title, description, id, className } = props;
  const { mutate: addToCart, isPending, isSuccess } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div
      className={` w-[242px] text-black h-full md:w-full font-dm-sans ${props.className}`}
    >
      <div className="w-full h-[125px] overflow-hidden rounded-[25px] relative">
        {img}
      </div>
      <div className="mt-[20px]">
        <div className="h-full">
          <p className="text-[15px] font-medium lg:my-[16px] mt-[10px] text-center h-[66px]">
            {title}
          </p>
        </div>
        <div className="flex justify-center mt-[15px]">
          <p className="text-[10px] text-black/60 md:leading-[100%] leading-[13px] md:w-auto w-[171px] font-normal text-center h-[52px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonBase
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              sessionId: sessionCurrentId,
              itemId: id,
            });
          }}
          className={`font-dm-sans mt-[40px]  px-[11px] py-2 bg-con-custom-green border rounded-full border-con-custom-green text-white`}
          title={
            <div className="flex items-center gap-[14px]">
              <PlusIcon width={14} height={14} />
              <p className="text-[13px] font-normal leading-[100%] tracking-[0%] pr-[5px]">
                Add Item
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};
