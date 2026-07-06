import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { InformationCard } from "@/components/card/InformationCard";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  isShowButton?: boolean;
  data: {
    id: string;
    name: string;
    description: string[] | React.ReactNode[];
    image: string | React.ReactNode;
  }[];
  defaultActive: string;
  className?: string;
  isList?: boolean;
};

export const ProgressCard = (props: Props) => {
  const { isShowButton = false } = props;
  const { data, defaultActive = data[0].id, className, isList = true } = props;
  const [active, setActive] = useState(defaultActive);
  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className={`flex justify-between mt-[53px] ${className}`}>
      <div className="flex h-fit">
        <div className="flex flex-col items-center mr-4">
          <div className="w-[4px] md:w-[14px] h-full bg-[#EAEAEA] rounded-full relative"></div>
        </div>

        <div className="flex flex-col  gap-6 relative">
          {data.map((product) =>
            product.id === active ? (
              <div
                key={product.id}
                onClick={() => handleActive(product.id)}
                className="cursor-pointer relative h-full"
              >
                <div className="absolute  top-0 bottom-0 w-[4px] md:w-[14px] md:-left-[30px] lg:h-[100px] md:h-[92px] h-[50px] -left-[20px]  bg-con-custom-green rounded-full" />

                <InformationCard
                  title={
                    <div className="flex space-x-3">
                      <div className="flex justify-center items-center">
                        <span className="w-[6px] h-[6px] bg-con-custom-green-bold rounded-full"></span>
                      </div>
                      <span
                        className={`font-funnel lg:text-[24px] lg:w-full md:w-[183px] md:text-[20px] text-[18px]  lg:leading-[30px] md:leading-[20px] leading-[16px] font-normal text-left text-con-custom-green-bold`}
                      >
                        {product.name}
                      </span>
                    </div>
                  }
                  description={
                    <>
                      <div className="md:hidden block">
                        {typeof data.find((product) => product.id === active)
                          ?.image === "string" ? (
                          <Image
                            src={
                              data.find((product) => product.id === active)
                                ?.image as string
                            }
                            alt="Starlink"
                            width={621}
                            height={349}
                            priority={true}
                            fetchPriority="high"
                            className="rounded-[50px] lg:w-[621px] w-[339px] lg:h-[349px] h-[304px]"
                          />
                        ) : (
                          (data.find((product) => product.id === active)
                            ?.image as React.ReactNode)
                        )}
                      </div>
                      <div className="lg:w-[300px] md:w-[154px]  mt-[18px] md:ml-4 w-full pr-2">
                        <span
                          className={`font-dm-sans lg:text-[15px] md:text-[14px] text-[11px] lg:leading-[15px] md:leading-[20px] leading-[16px] font-light space-y-[30px]`}
                        >
                          {product.description?.map((item, index) => (
                            <span key={index} className=" flex gap-2">
                              <span>{isList ? "•" : ""}</span>{" "}
                              <span className="md:w-full w-[233px] md:pl-0 pl-2 md:leading-[24px] leading-[16px]">
                                {item}
                              </span>
                            </span>
                          ))}
                        </span>
                      </div>
                    </>
                  }
                />
                {isShowButton && (
                  <div className="lg:block hidden">
                    <div className="space-x-[38px] flex mt-[26px]">
                      <ButtonBase
                        className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
                        title={
                          <div className="flex items-center justify-center my-2 mx-5">
                            <span
                              className={`font-dm-sans text-white font-normal text-[13px] leading-[100%]`}
                            >
                              Learn More
                            </span>
                          </div>
                        }
                      />
                      <ButtonBase
                        className="border border-con-custom-green rounded-[30px] bg-con-custom-green text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]"
                        title={
                          <div className="flex items-center justify-center my-2 mx-5 space-x-[8px]">
                            <PlusIcon />
                            <span
                              className={`font-dm-sans text-white font-normal text-[13px] leading-[100%] pr-[5px]`}
                            >
                              Add Item
                            </span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                key={product.id}
                onClick={() => handleActive(product.id)}
                className="text-[#C4C4C4] text-[16px] leading-[24px] font-normal cursor-pointer"
              >
                • {product.name}
              </div>
            )
          )}
        </div>
      </div>
      <div className="md:block hidden">
        {typeof data.find((product) => product.id === active)?.image ===
        "string" ? (
          <Image
            src={data.find((product) => product.id === active)?.image as string}
            alt="Starlink"
            width={621}
            height={349}
            priority={true}
            fetchPriority="high"
            className="rounded-[50px] lg:w-[621px] w-[339px] lg:h-[349px] h-[304px]"
          />
        ) : (
          (data.find((product) => product.id === active)
            ?.image as React.ReactNode)
        )}
      </div>
    </div>
  );
};
