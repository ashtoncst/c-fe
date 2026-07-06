import { ButtonBase } from "@/components/button/ButtonBase";
import { useRouter } from "next/navigation";

type Props = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  showButton?: boolean;
};

export const OurBanner = (props: Props) => {
  const { title, description, showButton = true } = props;
  const router = useRouter();
  const handlePartnerWithUs = () => {
    router.push("/contact-us");
  };
  return (
    <div className="text-black  gap-5 xl:gap-0">
      <div className="flex lg:flex-col lg:gap-[18px] md:flex-row flex-col md:justify-between justify-center items-center lg:items-start">
        <div>
          <div
            className={`font-funnel text-center md:text-left text-white lg:text-[65px] md:text-[52px] text-[40px] font-normal md:leading-[53px] leading-[42px] lg:leading-[65px] tracking-[0%]`}
          >
            {title ? (
              title
            ) : (
              <>
                Our <br /> Partners
              </>
            )}
          </div>
        </div>

        <div
          className={`font-dm-sans mt-[18px] md:mt-0 text-center md:text-left lg:w-[371px] md:w-[227px] w-[214px]  font-thin lg:font-medium md:text-[13px] text-[10px] lg:text-[15px] text-white md:leading-[20px] leading-[100%] lg:leading-[20px] tracking-[0%]`}
        >
          {description ? (
            description
          ) : (
            <>
              Working hand in hand with our partners to create stronger
              connections, greater opportunities, and a smarter digital future.
            </>
          )}
        </div>
      </div>

      {showButton && (
        <div className="flex items-center justify-center lg:justify-start gap-[33px] md:mt-[69px] mt-[36px]">
          <ButtonBase
            onClick={handlePartnerWithUs}
            className={`font-dm-sans font-normal md:px-[45px] px-[17px] lg:py-[11px] py-[6px] hover:text-black active:text-con-custom-green-bold bg-white border rounded-full text-[14px] border-con-custom-green-bold text-con-custom-green-bold`}
            title="Partner with Us"
          />
        </div>
      )}
    </div>
  );
};
