"use client";
import React, { useCallback, useState } from "react";
import { ButtonBase } from "./ButtonBase";
import VectorIcon from "@/assets/icons/VectorIcon";

type Props = { title: string | React.ReactNode };

export const ButtonSelect = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const downloadFiles = [
    { id: "fileA", name: "Download File A", url: "/path-to-file-a.pdf" },
    { id: "fileB", name: "Download File A", url: "/path-to-file-b.pdf" },
    { id: "fileC", name: "Download File A", url: "/path-to-file-c.pdf" },
  ];
  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const handleDownload = (url: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="mt-3">
      <div className="flex justify-end">
        <ButtonBase
          onClick={handleOpen} // Thêm onClick vào đây
          className="rounded-[30px] bg-con-custom-green py-2 lg:px-[14px] md:px-[15px] xs:px-[10px] text-white cursor-pointer hover:bg-con-custom-green-bold active:text-[#95FFFB] text-[14px] font-normal font-dm-sans"
          title={
            <span className="flex items-center gap-[12px]">
              <span
                className={`font-dm-sans text-white font-normal text-[14px] leading-[100%] py-[2px]`}
              >
                {props.title}
              </span>
              <span
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }  xs:hidden  lg:block`}
              >
                <VectorIcon />
              </span>
            </span>
          }
        />
      </div>

      {isOpen && (
        <div className="w-full bg-white z-10 h-[120px] custom-scrollbar">
          {downloadFiles.map((file) => (
            <div
              key={file.id}
              onClick={() => handleDownload(file.url, file.name)}
              className={`font-dm-sans  py-2 px-1 font-normal hover:bg-gray-50 cursor-pointer border-b border-gray-500 tracking-[0%] last:border-b-0`}
            >
              <span className="text-[11px] text-gray-00 px-2 leading-[100%] text-black tracking-[0%] text-nowrap">
                {file.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
