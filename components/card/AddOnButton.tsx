import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";
import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
};
export const AddOnButton = (props: Props) => {
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  // TEMP: cart functionality disabled — remove this early return to restore the button
  return null;
  return (
    <div className="w-full h-[78px] text-black flex items-center justify-between px-[19px] py-[22px] border border-[#038F8D] rounded-[50px]">
      <div className={`font-dm-sans`}>
        <p className="text-[15px] font-medium  leading-[25px] ">
          {props.title}
        </p>
        <p className="text-[10px] w-[150px] font-thin leading-[100%] ">
          {props.description}
        </p>
      </div>
      <ButtonBase
        onClick={(e) => {
          e.stopPropagation();
          addToCart({
            sessionId: sessionCurrentId,
            itemId: props.id,
          });
        }}
        className={`font-dm-sans font-normal px-[11px] py-2 bg-con-custom-green border rounded-full text-[14px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
        title={
          <div className="flex items-center md:gap-[14px] gap-2">
            <PlusIcon width={12} height={12} className="md:hidden" />
            <PlusIcon width={16} height={16} className="hidden md:block" />
            <span className="text-[14px] font-normal pr-[5px]">Add Item</span>
          </div>
        }
      />
    </div>
  );
};
