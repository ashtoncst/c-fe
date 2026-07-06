import { DelicatedCard } from "./DelicatedCard";
import { InternetPlanCard } from "./InternetPlanCard";
import { IXAndIPTEpressCard } from "./IXAndIPTEpressCard";
import { FiberBoardBandPlanCard } from "./FiberBoardBandPlanCard";

type Props = {
  productOffering_Data: {
    id: string;
    name: string;
    description: string[];
    productOffering: Array<{
      id: string;
      title: string;
      description?: string;
    }>;
  };
};

export const ProductOfferring = (props: Props) => {
  const itemCount = props.productOffering_Data.productOffering.length;
  const isOdd = itemCount % 2 === 1;
  const isFiberPlanId =
    props.productOffering_Data.id === "fiber-day" ||
    props.productOffering_Data.id === "fiber-peak";

  const handleGenerateInternetCardById = () => {
    switch (props.productOffering_Data.id) {
      case "fiber-day":
        return props.productOffering_Data.productOffering.map(
          (product, index) => (
            <div key={`${product.id}-${index}`}>
              <FiberBoardBandPlanCard
                title={product.title}
                price={product.description}
              />
            </div>
          )
        );

      case "fiber-peak":
        return props.productOffering_Data.productOffering.map(
          (product, index) => (
            <div key={`${product.id}-${index}`}>
              <InternetPlanCard
                title={product.title}
                price={product.description}
              />
            </div>
          )
        );
      case "dedicated":
        return props.productOffering_Data.productOffering.map(
          (product, index) => (
            <div key={`${product.id}-${index}`} className="h-[140px]">
              <DelicatedCard
                title={product.title}
                description={product.description}
              />
            </div>
          )
        );
      case "ix":
        return props.productOffering_Data.productOffering.map(
          (product, index) => (
            <div key={`${product.id}-${index}`} className="h-[140px]">
              <IXAndIPTEpressCard
                title={product.title}
                description={product.description}
              />
            </div>
          )
        );
      case "ipt":
        return props.productOffering_Data.productOffering.map(
          (product, index) => (
            <div key={`${product.id}-${index}`} className="h-[140px]">
              <IXAndIPTEpressCard
                title={product.title}
                description={product.description}
              />
            </div>
          )
        );
    }
  };

  return (
    <div>
      {isOdd && isFiberPlanId ? (
        <div>
          <div className="md:block hidden">
            <div className="grid grid-cols-2 md:flex md:flex-wrap xl:h-[137px] lg:h-[97px] md:h-[87px] xl:w-full lg:w-[450px] w-full justify-end lg:space-x-[34px] space-x-[15px]">
              {props.productOffering_Data.productOffering
                .slice(0, 3)
                .map((plan, index) => (
                  <div className="mb-[56px]" key={`${plan.id}-top-${index}`}>
                    <InternetPlanCard
                      title={
                        <span
                          className={`font-dm-sans xl:text-[18px]  md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-con-custom-green-bold`}
                        >
                          {plan.title}
                        </span>
                      }
                      price={
                        <span
                          className={`font-dm-sans xl:text-[18px] md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-white`}
                        >
                          {plan.description}
                        </span>
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="md:hidden block mt-5">
            <div className="grid grid-cols-2  w-full  gap-x-[22px] h-full md:pl-0 pl-[15px]">
              {props.productOffering_Data.productOffering.map((plan, index) => (
                <div
                  className="md:mb-[56px] mb-3"
                  key={`${plan.id}-top-${index}`}
                >
                  <InternetPlanCard
                    title={
                      <span
                        className={`font-dm-sans lg:text-[18px] md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-con-custom-green-bold`}
                      >
                        {plan.title}
                      </span>
                    }
                    price={
                      <span
                        className={`font-dm-sans lg:text-[18px] md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-white`}
                      >
                        {plan.description}
                      </span>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:block hidden">
            <div className="flex flex-wrap h-[137px] justify-center mt-[24px] lg:space-x-[34px] space-x-[22px]">
              {props.productOffering_Data.productOffering
                .slice(3, 5)
                .map((plan, index) => (
                  <div className="mb-[56px]" key={`${plan.id}-bottom-${index}`}>
                    <InternetPlanCard
                      title={
                        <span
                          className={`font-dm-sans xl:text-[18px] md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-con-custom-green-bold`}
                        >
                          {plan.title}
                        </span>
                      }
                      price={
                        <span
                          className={`font-dm-sans xl:text-[18px] md:text-xs font-normal lg:leading-[24px] md:leading-[18px] leading-[16px] text-white`}
                        >
                          {plan.description}
                        </span>
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            props.productOffering_Data.id === "dedicated"
              ? "grid grid-cols-2 md:gap-x-[32px] gap-x-[15px] md:gap-y-[27px] gap-y-[27px] md:pl-0 ml-[15px] mt-3"
              : "grid md:grid-cols-3 grid-cols-2 lg:gap-[34px] gap-[15px] md:pl-0 pl-[15px] mt-3"
          }`}
        >
          {handleGenerateInternetCardById()}
        </div>
      )}
    </div>
  );
};
