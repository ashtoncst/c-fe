import { PlusIcon } from "@/assets/icons/PlusIcon";
import { ButtonBase } from "@/components/button/ButtonBase";

import { LinkTypography } from "@/components/typographies/LinkTypography";
import { usePostCart } from "@/hooks/useCart";
import { localStorageUtil } from "@/libs/storage";

import { useRouter } from "next/navigation";
interface Service {
  id: string;
  service: string | React.ReactNode;
  basic_value: string | React.ReactNode;
  premium_value: string | React.ReactNode;
  basic_isCheck: React.ReactNode;
  premium_isCheck: React.ReactNode;
}

interface Category {
  name: string;
  services: Service[];
}

interface Plan {
  id: string;
  name: string;
  categories: Category[];
}

type Props = {
  PlanData: Plan[];
};

export const ProductPlanTable = (props: Props) => {
  const { PlanData } = props;
  const router = useRouter();
  const { mutate: addToCart } = usePostCart({});
  const sessionCurrentId = localStorageUtil.getSessionId();
  return (
    <div className="custom-scrollbar-table h-full">
      {" "}
      <div className="bg-[#F5F5F5] lg:rounded-b-[50px] md:min-w-[1290px] min-w-[775px]">
        <div>
          <div className="grid grid-cols-5 ">
            <div className="col-span-3"></div>
            <div className="col-span-2  grid grid-cols-2">
              {/* Basic */}
              <div className="flex flex-col justify-center items-center py-6 md:ml-0 ml-[-102px] ">
                <p
                  className={`font-funnel font-normal text-[20px] text-con-custom-green-bold leading-[100%] tracking-[0%]`}
                >
                  Basic
                </p>
                <ButtonBase
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      sessionId: sessionCurrentId,
                      itemId: 64,
                    });
                  }}
                  className={`font-dm-sans font-normal mt-[12px] px-[21px] py-2 bg-con-custom-green border rounded-full text-[14px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                  title={
                    <div className="flex items-center gap-[14px]">
                      <PlusIcon width={11} height={11} />
                      <span
                        className={`font-dm-sans text-[13px] font-normal leading-[100%] tracking-[0%] pr-[5px]`}
                      >
                        Add Item
                      </span>
                    </div>
                  }
                />
              </div>

              {/* Premium */}
              <div className="flex flex-col justify-center items-center py-6 md:ml-0 ml-[-40px] ">
                <p
                  className={`font-funnel font-normal text-con-custom-green-bold text-[20px] leading-[100%] tracking-[0%]`}
                >
                  Premium
                </p>
                <ButtonBase
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      sessionId: sessionCurrentId,
                      itemId: 65,
                    });
                  }}
                  className={`font-dm-sans font-normal mt-[12px] px-[11px] py-2 bg-con-custom-green border rounded-full text-[14px] text-white hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
                  title={
                    <div className="flex items-center gap-[14px]">
                      <PlusIcon width={11} height={11} />
                      <span
                        className={`font-dm-sans text-[13px] mr-[25px] font-normal leading-[100%] tracking-[0%] pr-[5px]`}
                      >
                        Add Item
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          {PlanData.map((plan) => (
            <div
              key={plan.id}
              className={`font-dm-sans grid md:grid-cols-5 grid-cols-4  border-t border-[#999999]`}
            >
              <div className="md:col-span-3 col-span-2 pl-4 py-[57px]">
                {plan.categories.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="grid md:grid-cols-4 grid-cols-3 pb-[31px]"
                  >
                    <div className="col-span-1 flex justify-center text-xs font-light text-black">
                      {catIndex === 0 ? plan.name : ""}
                    </div>
                    <div className="col-span-1 flex justify-center text-xs font-light leading-[100%] tracking-[0%] text-black px-2 mt-[2.5px]">
                      {category.name}
                    </div>
                    <div className="md:col-span-2 col-span-1 flex flex-col space-y-[18px] md:pr-4">
                      {category.services.map((service) => (
                        <div
                          key={service.id}
                          className={`font-dm-sans text-xs font-light tracking-[0%] text-black leading-[140%] md:w-full w-[61px]`}
                        >
                          {service.service}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-2  border-l w-full h-full border-[#999999]">
                <div className="grid grid-cols-2 w-full h-full">
                  <div className="col-span-1 flex justify-center">
                    <div className="pt-[53px]">
                      {plan.categories.map((category, catIndex) => (
                        <div
                          key={catIndex}
                          className={`lg:space-y-[18px] md:space-y-[19px] space-y-[18px] ${
                            catIndex < plan.categories.length - 1
                              ? "lg:mb-[31px] md:mb-[37px] mb-[31px]"
                              : ""
                          }`}
                        >
                          {category.services.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-center text-xs"
                            >
                              {item.basic_value == ""
                                ? item.basic_isCheck
                                : item.basic_value}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center border-l border-[#999999]">
                    <div className="pt-[53px]">
                      {plan.categories.map((category, catIndex) => (
                        <div
                          key={catIndex}
                          className={`lg:space-y-[18px] md:space-y-[19px] space-y-[18px]  ${
                            catIndex < plan.categories.length - 1
                              ? "lg:mb-[31px] md:mb-[37px] mb-[31px]"
                              : ""
                          }`}
                        >
                          {category.services.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-center text-xs"
                            >
                              {item.basic_value == ""
                                ? item.premium_isCheck
                                : item.premium_value}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
