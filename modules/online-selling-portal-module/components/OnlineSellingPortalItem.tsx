import { CheckIcon } from "@/components/icon-coms/CheckIcon";
import { RemoveIcon } from "@/components/icon-coms/RemoveIcon";
import React from "react";

type Props = {
  isChecked: boolean;
  title: string;
  subtitle?: string;
  featureList?: {
    title: string;
    subList: string[];
  }[];
  onChange?: (id: string) => void;
  onRemove?: () => void;
  id: string;
};

export const OnlineSellingPortalItem = (props: Props) => {
  const { isChecked, title, subtitle, featureList, onChange, onRemove, id } =
    props;
  return (
    <div className={`font-dm-sans text-black `}>
      <div className="flex justify-between items-center lg:items-start">
        <div className="flex gap-[25px] items-center">
          <div className="cursor-pointer mt-2" onClick={() => onChange?.(id)}>
            {isChecked ? <CheckIcon /> : <CheckIcon />}
          </div>
          <div className="flex items-center">
            <p
              className={`font-dm-sans text-black text-[20px] font-medium`}
            >
              {title}
            </p>
            <div className="text-[25px] font-normal">
              <p className="font-medium text-[17px] mt-[29px] mb-[17px] text-[#444444]">
                {subtitle}
              </p>
              <ul className="list-disc pl-4 text-[15px] font-normal">
                {featureList?.map((item) => (
                  <React.Fragment key={item.title}>
                    <li key={item.title} className="list-disc mt-2">
                      {item.title}
                    </li>
                    <ul className="list-disc pl-5 mt-1">
                      {item.subList.map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div onClick={onRemove} className="cursor-pointer">
          <RemoveIcon />
        </div>
      </div>
    </div>
  );
};
