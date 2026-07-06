import React from "react";

export interface HelpCTAButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export interface HelpCTAProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryButton?: HelpCTAButtonProps;
  secondaryButton?: HelpCTAButtonProps;
  backgroundColor?: string;
}

export const HelpCTA = ({
  title = "We're Here to Help",
  description = "Explore how pure fiber internet can power your home or business. Our team is ready to assist you.",
  primaryButton = {
    label: "Connect with Us",
    className: "bg-[#009b9b] text-white hover:bg-[#008282] transition-colors",
  },
  secondaryButton,
  backgroundColor = "bg-white",
}: HelpCTAProps = {}) => {
  const isDark = /1e1e19|1a1a1a|111111|000000|bg-black/.test(backgroundColor);
  const titleColor = isDark ? "text-white" : "text-[#024645]";

  return (
    <section
      className={`relative w-full ${backgroundColor} py-6 md:py-[28px] flex flex-col items-center justify-center px-6`}
    >
      {/* Top divider — mobile only */}
      <div className="w-full max-w-[400px] h-px bg-gray-200 mb-8 md:hidden" />
      <h2
        className={`text-[35px] font-light ${titleColor} mb-4 text-center whitespace-nowrap font-funnel`}
      >
        {title}
      </h2>
      <p
        className={`text-[14px] md:text-[16px] text-black mb-8 text-center max-w-[400px] leading-[1.6] font-light font-dm-sans`}
      >
        {description}
      </p>
      <div
        className={`flex flex-col md:flex-row gap-4 items-center justify-center font-dm-sans`}
      >
        <button
          onClick={primaryButton.onClick}
          className={`${
            primaryButton.className ||
            "bg-[#009b9b] text-white hover:bg-[#008282] transition-colors"
          } rounded-full px-[14px] py-[8px] text-[14px] font-normal font-dm-sans flex items-center justify-center gap-2`}
        >
          {primaryButton.icon}
          {primaryButton.label}
        </button>
        {secondaryButton && (
          <button
            onClick={secondaryButton.onClick}
            className={`${
              secondaryButton.className ||
              "bg-[#8b5bd4] text-white hover:bg-[#724ab0] transition-colors"
            } rounded-full px-[14px] py-[8px] text-[14px] font-normal font-dm-sans flex items-center justify-center gap-2`}
          >
            {secondaryButton.icon}
            {secondaryButton.label}
          </button>
        )}
      </div>
    </section>
  );
};

/** @deprecated Use HelpCTA instead */
export const DigitalInfrastructureHelpCTA = HelpCTA;
export type {
  HelpCTAProps as DigitalInfrastructureHelpCTAProps,
  HelpCTAButtonProps as ButtonProps,
};
