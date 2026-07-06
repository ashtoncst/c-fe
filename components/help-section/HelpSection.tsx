"use client";
import { ButtonBase } from "@/components/button/ButtonBase";
import { BodyText } from "@/components/typographies";

interface HelpSectionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export const HelpSection = ({
  title = "We're Here to Help",
  description = "Explore how Pure Fiber Internet can power your home or business. Our team is ready to assist you.",
  placeholder = "Enter your email and we'll get back to you soon",
  buttonText = "Schedule a Call",
  className = "",
}: HelpSectionProps) => {
  return (
    <div className={`lg:mt-[120px] ${className}`}>
      <p
        className={`font-funnel md:w-[401px] text-center mx-auto text-con-custom-green-bold md:text-[35px] text-[30px] font-normal md:leading-[45px] leading-[35px] tracking-[0%]`}
      >
        {title}
      </p>
      <BodyText
        size="base"
        className="text-black text-center mx-auto md:w-[398px] md:mt-0 mt-[11px] w-[263px] !text-[17px] font-light leading-[25px] tracking-[0%]"
      >
        {description}
      </BodyText>
      <div className="w-full md:w-[531px] mx-auto md:mt-10 mt-[19px] flex md:flex-row flex-col items-center md:gap-5 gap-0">
        <input
          type="text"
          placeholder={placeholder}
          className={`font-dm-sans text-center text-black md:w-[364px] w-[294px] h-[32px] border border-[#9F9FA9] rounded-full outline-none px-4 text-xs`}
        />
        <ButtonBase
          className={`font-dm-sans w-[147px] h-[24px] md:h-[32px] px-[28px] md:mt-0 mt-4 py-3 bg-con-custom-green border rounded-full text-[17px] border-con-custom-green text-white flex items-center justify-center hover:bg-con-custom-green-bold active:text-[#95FFFB]`}
          title={
            <span className="text-[13px] font-normal leading-[100%] tracking-[0%] whitespace-nowrap">
              {buttonText}
            </span>
          }
        />
      </div>
    </div>
  );
};
