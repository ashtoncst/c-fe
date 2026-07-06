"use client";

import React from "react";
import { FbIcon } from "@/assets/icons/FbIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { YoutubeIcon } from "@/assets/icons/YoutubeIcon";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const FooterLink = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <li>
    <button
      onClick={onClick}
      className="text-con-custom-green hover:text-con-custom-teal transition-colors text-[11px] md:text-[14px] leading-[30px] text-left font-dm-sans font-normal"
    >
      {children}
    </button>
  </li>
);

export const FooterDark = ({ hideCTA = false, roundedTop = false }: { hideCTA?: boolean; roundedTop?: boolean }) => {
  return (
    <footer className={`bg-[#1a1a1a] pb-3 ${roundedTop ? 'rounded-tl-[48px] rounded-tr-[48px]' : ''}`}>
      {/* We're Here to Help CTA */}
      {!hideCTA && <AnimateOnScroll variant="fade-up" className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-14 pt-16 pb-14 text-center">
        <h2 className={`text-[35px] text-white font-light leading-[1.2] mb-4 font-funnel`}>
          We&apos;re Here to Help
        </h2>
        <p className={`text-[16px] text-white font-light leading-[1.7] max-w-[400px] mx-auto mb-8 font-dm-sans`}>
          Explore how pure fiber internet can power your home or business. Our team is ready to assist you.
        </p>
        <Link
          href="/contact-us"
          className={`inline-flex items-center justify-center rounded-full px-[14px] py-[8px] text-[14px] font-normal tracking-wide text-white bg-[#009b9b] hover:bg-[#007a7a] transition-colors duration-300 font-dm-sans`}
        >
          Connect with Us
        </Link>
      </AnimateOnScroll>}

      <div className={`max-w-[1280px] mx-auto px-4 md:px-8 lg:px-14 ${hideCTA ? 'pt-6' : ''}`}>

        {/* Branding row: Logo | Company name | Social icons */}
        <div className="flex flex-row items-center justify-between gap-6 pb-4 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/icons/mainIcon.svg"
              alt="Converge Logo"
              width={186}
              height={46}
              style={{ width: "auto", height: "auto" }}
              className="brightness-0 invert"
              priority
            />
          </div>

          {/* Company legal name - Hidden on mobile, matches ref */}
          <p className={`font-dm-sans hidden md:block flex-1 text-center text-[14px] font-bold tracking-wider uppercase px-6 leading-snug text-white`}>
            CONVERGE INFORMATION AND COMMUNICATIONS TECHNOLOGY SOLUTIONS, INC.
          </p>

          {/* Social icons */}
          <div className="relative flex items-center gap-3 flex-shrink-0">
            <button
              aria-label="LinkedIn"
              className="text-con-custom-green hover:text-con-custom-teal transition-colors"
              onClick={() => openInNewTab("https://www.linkedin.com/company/convergeglobalbusiness/")}
            >
              <LinkedinIcon />
            </button>
            <button
              aria-label="Facebook"
              className="text-con-custom-green hover:text-con-custom-teal transition-colors"
              onClick={() => openInNewTab("https://www.facebook.com/ConvergeGlobalBusiness/")}
            >
              <FbIcon />
            </button>
            <button
              aria-label="YouTube"
              className="text-con-custom-green hover:text-con-custom-teal transition-colors"
              onClick={() => openInNewTab("https://www.youtube.com/@ConvergeGlobalBusiness")}
            >
              <YoutubeIcon />
            </button>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="h-px bg-white/40 mb-4 -mx-4 md:mx-0" />

        {/* Link columns */}
        <div className="grid grid-cols-[1.4fr_1fr] md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-2 md:gap-8 mb-4">

          {/* Column 1: Office Address + Contacts */}
          <div className="contents md:block md:space-y-0 md:order-none col-span-2 md:col-span-1">
            <div className="col-span-2 md:col-span-1 order-1 md:order-none self-start">
              <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
                Office Address
              </h4>
              <p className="text-[11px] md:text-[14px] font-dm-sans font-light leading-relaxed text-con-custom-green pr-2">
                10th Floor, Asian Century Center, 4th Avenue, Bonifacio Global
                City (BGC), Taguig City, 1635, Metro Manila, Philippines
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 order-3 md:order-none self-start">
              <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
                Inquiries
              </h4>
              <a
                href="mailto:globalbusiness@convergeict.com"
                className="transition-colors text-[11px] md:text-[14px] font-dm-sans font-light whitespace-nowrap text-con-custom-green hover:text-con-custom-teal"
              >
                globalbusiness@convergeict.com
              </a>
            </div>

            <div className="col-span-2 md:col-span-1 order-5 md:order-none self-start">
              <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
                Wholesale Inquiries
              </h4>
              <a
                href="mailto:globalbusinesswholesale@convergeict.com"
                className="transition-colors text-[11px] md:text-[14px] font-dm-sans font-light whitespace-nowrap text-con-custom-green hover:text-con-custom-teal"
              >
                globalbusinesswholesale@convergeict.com
              </a>
            </div>

            <div className="col-span-2 order-7 md:order-none md:col-span-1 self-start w-full md:!mt-0">
              <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
                Aftersales Support Hotline (Corporate Accounts)
              </h4>
              <p className="text-[11px] md:text-[14px] font-dm-sans font-light leading-relaxed text-con-custom-green pr-2">
                You can reach our 24/7 business customer hotline at{" "}
                <a
                  href="tel:+63286670800"
                  className="transition-colors text-con-custom-green hover:text-con-custom-teal"
                >
                  +63 2-86670800
                </a>{" "}
                or{" "}
                <a
                  href="tel:+63279020800"
                  className="transition-colors text-con-custom-green hover:text-con-custom-teal"
                >
                  2-79020800
                </a>
                .
              </p>
            </div>
          </div>

          {/* Column 2: Residential */}
          <div className="col-span-2 order-[11] md:order-none md:col-span-1 self-start">
            <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
              Residential
            </h4>
            <ul className="grid grid-cols-2 grid-rows-4 grid-flow-col md:flex md:flex-col md:grid-cols-none md:grid-rows-none md:grid-flow-row gap-x-2 gap-y-0 md:gap-y-0 md:space-y-0">
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/super-fiberx/")}>Super FiberX</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/x-plus-n/")}>Converge Netflix</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/thegamechanger/")}>The GameChanger</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/fiberx-time-of-day/")}>FiberX Time of Day</FooterLink>
            </ul>
          </div>

          {/* Column 3: Business */}
          <div className="col-span-2 order-[10] md:order-none md:col-span-1 self-start">
            <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
              Business
            </h4>
            <ul className="space-y-0">
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/sme/bizedge")}>BizEdge</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/sme/flexibiz")}>FlexiBIZ</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/sme/microbizmax")}>MicroBIZ MAX</FooterLink>
            </ul>
          </div>

          {/* Column 4: Enterprise */}
          <div className="col-span-2 order-[12] md:order-none md:col-span-1 self-start">
            <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
              Enterprise
            </h4>
            <ul className="space-y-0">
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/data")}>Data</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/dedicated-internet-access")}>Direct Internet Access</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/managed-services")}>Content Plus</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/managed-services")}>Managed SD-WAN</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/satellite-internet")}>Starlink for Business</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://www.convergeict.com/enterprise/cloud-ai-cybersecurity")}>Cloud, AI, and Cybersecurity</FooterLink>
            </ul>
          </div>

          {/* Column 5: About Converge */}
          <div className="col-span-2 md:col-span-1 order-first md:order-none md:row-span-1 self-start">
            <h4 className="font-bold text-[14px] leading-[30px] mb-0 font-dm-sans text-white">
              About Converge
            </h4>
            <ul className="space-y-0">
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/")}>About Us</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/newsroom/press-resources")}>Newsroom</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/corporate-governance")}>Governance</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/investor-relations")}>Investor Relations</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/sustainability")}>Sustainability</FooterLink>
              <FooterLink onClick={() => openInNewTab("https://corporate.convergeict.com/careers")}>Careers</FooterLink>
            </ul>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="h-px bg-white/40 mb-3 -mx-4 md:mx-0" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-5 text-center md:text-left pt-0 pb-1">
          <p className={`text-[13px] font-dm-sans text-white/90 font-light tracking-wide`}>
            @2026 Converge ICT Solutions. All rights reserved.
          </p>
          <div className={`flex flex-row items-center justify-center gap-2 md:gap-[18px] text-[12px] md:text-[13px] font-dm-sans text-white/90 font-light`}>
            <button
              className="transition-colors hover:text-white whitespace-nowrap"
              onClick={() => openInNewTab("https://corporate.convergeict.com/privacy-notice")}
            >
              Privacy Notice
            </button>
            <span className="text-white/60">|</span>
            <button
              className="transition-colors hover:text-white whitespace-nowrap"
              onClick={() => openInNewTab("https://corporate.convergeict.com/cookie-policy")}
            >
              Cookies Policy
            </button>
            <span className="text-white/60">|</span>
            <button
              className="transition-colors hover:text-white whitespace-nowrap"
              onClick={() => openInNewTab("https://corporate.convergeict.com/terms-and-conditions")}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
