"use client";

import { BodyText } from "@/components/typographies";
import Image from "next/image";
import React, { useState } from "react";
import FrameIcon from "../../public/frame.svg";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";

type FAQItem = {
  id: number;
  title: string;
  content: string;
};

type FAQGroup = {
  id: number;
  label: string;
  faq: FAQItem[];
};

type Props = {
  nameSection?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  FAQ_Data: FAQGroup[];
};

export const FAQSection = ({
  nameSection = "Frequently Asked Questions",
  subTitle = "Solutions built for everyday life, future growth, and everything in between.",
  FAQ_Data,
}: Props) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const [openContents, setOpenContents] = useState<Set<number>>(new Set());

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setOpenContents(new Set()); // reset child content when parent closes
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleContent = (id: number) => {
    setOpenContents((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div>
      <div className="md:mt-[102px] lg:mt-[60px] flex items-center justify-center relative lg:flex-row flex-col">
        <Image
          src={FrameIcon}
          alt="Frame"
          width={232}
          height={390}
          className="w-[231px] h-[390px] scale-x-[-1] lg:block hidden"
          priority={true}
          fetchPriority="high"
        />

        <div className="lg:flex justify-center mx-auto w-full md:px-[65px] lg:px-0 relative">
          <p
            className={`font-funnel lg:absolute lg:top-32 xl:left-[-95px] xl:right-[160px] lg:left-[-170px] md:text-[30px] text-[18px] leading-[50px] md:leading-[100%] text-con-custom-green-bold lg:w-[211px] w-full font-normal lg:mb-0 md:mb-4 mb-[19px]`}
          >
            {nameSection}
          </p>
          <BodyText
            as="p"
            size="sm"
            weight="normal"
            className="lg:hidden md:block hidden leading-[100%] text-black mt-3 mb-[31px]"
          >
            {subTitle}
          </BodyText>

          <div className="flex w-full lg:justify-end">
            <div className="w-full lg:max-w-[520px] lg:max-h-[390px] h-[358px] overflow-y-auto custom-scrollbar relative">
              <div className="flex flex-col items-center lg:mr-4">
                <div className="w-[14px] h-full bg-[#EAEAEA] rounded-full" />
              </div>

              <div className="lg:mr-4 mr-1">
                {FAQ_Data.map((group, index) => {
                  const isGroupOpen = openFaqs.has(group.id);

                  return (
                    <div key={group.id} className="mb-2">
                      <div className="flex justify-between w-full items-center space-x-3 pe-2">
                        <BodyText
                          as="p"
                          size="base"
                          className="text-black text-[15px] font-semibold leading-[37px] md:flex-1"
                        >
                          {group.label}
                        </BodyText>

                        <button
                          onClick={() => toggleFaq(group.id)}
                          aria-expanded={isGroupOpen}
                          aria-controls={`faq-group-${group.id}`}
                          aria-label={isGroupOpen ? `Collapse ${group.label}` : `Expand ${group.label}`}
                          className="cursor-pointer flex-shrink-0"
                        >
                          {isGroupOpen ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon width={10} height={10} color="black" />
                          )}
                        </button>
                      </div>

                      {isGroupOpen && (
                        <div id={`faq-group-${group.id}`}>
                          {group.faq.map((faq, index) => {
                            const isContentOpen = openContents.has(faq.id);

                            return (
                              <React.Fragment key={faq.id}>
                                <div className="flex justify-between w-full items-center space-x-3 pe-2 mt-2">
                                  <div className="text-black font-light text-[15px] leading-[37px]">
                                    {faq.title}
                                  </div>

                                  <button
                                    onClick={() => toggleContent(faq.id)}
                                    aria-expanded={isContentOpen}
                                    aria-controls={`faq-content-${faq.id}`}
                                    aria-label={isContentOpen ? "Collapse answer" : "Expand answer"}
                                    className="cursor-pointer flex-shrink-0"
                                  >
                                    {isContentOpen ? (
                                      <MinusIcon />
                                    ) : (
                                      <PlusIcon
                                        width={10}
                                        height={10}
                                        color="black"
                                      />
                                    )}
                                  </button>
                                </div>

                                {isContentOpen && (
                                  <div
                                    id={`faq-content-${faq.id}`}
                                    className="text-black mt-2 font-light text-[15px] leading-[25px]"
                                  >
                                    {faq.content}
                                  </div>
                                )}

                                {index !== group.faq.length - 1 && (
                                  <div className="h-[1px] bg-con-custom-green my-2" />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      )}
                      {index !== FAQ_Data.length - 1 && (
                        <div className="h-[1px] bg-[#9F9FA9] my-2" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={FrameIcon}
          alt="Frame"
          width={232}
          height={390}
          className="w-[231px] lg:block hidden h-[390px]"
          priority={true}
          fetchPriority="high"
        />
      </div>
    </div>
  );
};
