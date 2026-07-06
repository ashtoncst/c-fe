import { ButtonBase } from "@/components/button/ButtonBase";
import { useRouter } from "next/navigation";

type Props = {};

export const Banner = (props: Props) => {
  const router = useRouter();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="text-black  gap-5 xl:gap-0">
      <div className="flex lg:flex-col lg:gap-[18px] md:flex-row flex-col md:justify-between justify-center items-center lg:items-start">
        <div>
          <p
            className={`font-funnel text-center md:text-left text-white md:text-[65px] text-[40px] leading-[100%] font-light tracking-[0%]`}
          >
            From Fiber <br /> to Future
          </p>
        </div>

        <p
          className={`font-dm-sans mt-[18px] md:mt-0 text-center md:text-left lg:w-[371px] md:w-[227px] w-[214px] text-[12px] font-light md:text-[17px] leading-[25px] text-white tracking-[0%]`}
        >
          Where technology and humanity converge, not just to build networks,
          but to build futures. For businesses, for people, for the world.{" "}
        </p>
      </div>
      {/* <div className="h-[347px] w-[494px] bg-white rounded-[23px] p-5 lg:block hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="text-black">
              <SmallMenuIcon width={10} height={5} />
            </div>
            <p
              className={`font-dm-sans text-black text-[20.19px] font-semibold leading-[100%] tracking-[0%]`}
            >
              Offerings
            </p>
          </div>
          <div>
            <ButtonBase
              className={`font-dm-sans px-[15.31px] py-[5px] bg-black border rounded-full text-[8px] font-normal leading-[11.54px] tracking-[0%] border-black text-white`}
              title="View All Offerings"
            />
          </div>
        </div>
        <div className="w-full h-[275px] mt-2 grid grid-cols-5 gap-[15px]">
          <div className="col-span-4 grid grid-rows-2 gap-[15px]">
            <div className="row-span-1 bg-black bg-opacity-5 rounded-[10px]"></div>
            <div className="row-span-1 bg-black bg-opacity-5 rounded-[10px]"></div>
          </div>
          <div className="col-span-1 bg-black bg-opacity-5 rounded-[10px]"></div>
        </div>
      </div> */}
      <div className="flex items-center justify-center lg:justify-start gap-[33px] md:mt-[69px] mt-[36px] md:mb-[69px] mb-[36px]">
        {/* <ButtonBase
          className={`font-dm-sans md:px-[45px] px-[17px] lg:py-[11px] py-[6px] hover:text-black active:text-con-custom-green-bold bg-white border rounded-full text-[13px] border-con-custom-green-bold text-con-custom-green-bold`}
          title="View All Offerings"
        /> */}
        <ButtonBase
          onClick={() => router.push("/contact-us")}
          className={`font-dm-sans font-normal bg-black border border-black text-white xs:!bg-black xs:!border-black xs:!text-white rounded-full px-[14px] py-[8px] text-[14px] leading-[20px] hover:bg-white hover:text-black hover:border-black active:text-con-custom-green-bold transition-colors duration-200`}
          title="Inquire for Pricing"
        />
      </div>
    </div>
  );
};
