"use client";
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import { HeaderIcon } from "@/assets/icons/headerIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { SmallMenuIcon } from "@/assets/icons/SmallMenuIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { MainLogoIcon } from "@/components/icon-coms/MainLogoIcon";
import { MENU } from "@/constants";
import axiosInstance from "@/libs/axios";
import { localStorageUtil } from "@/libs/storage";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileDrawer } from "@/components/header/MobileDrawer";

interface Props {
  darkLogo?: boolean;
  isGlass?: boolean;
  scrolled?: boolean;
  forceDarkLogo?: boolean;
}
export const Header = (props: Props) => {
  const { darkLogo = false, isGlass = false, scrolled = false, forceDarkLogo = false } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string[]>([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState<string>("");
  const token = localStorageUtil.getSessionId();
  const handleBackHome = () => {
    router.push("/");
  };
  const handleOpenMenu = (id: string) => {
    if (selectedMenu.includes(id)) {
      setSelectedMenu(selectedMenu.filter((item) => item !== id));
    } else {
      setSelectedMenu([...selectedMenu, id]);
    }
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
    setSelectedMenu([]);
  };
  const handleResizeMenu = (id: string) => {
    setSelectedSubmenu(id);
  };
  return (
    <div className=" w-full flex relative justify-between items-center z-[9999999] lg:px-[60px] md:px-[32px] px-[24px]">
      <div onClick={handleBackHome} className="cursor-pointer relative lg:w-[165px] lg:h-[40px] w-[200px] h-[48px] ">
        <Image
          src="/icons/blackIcon.svg"
          alt="mainIcon"
          width={200}
          height={40}
          priority={true}
          fetchPriority="high"
          style={{ width: "auto", height: "auto" }}
          className={`absolute inset-0 object-left object-contain transition-opacity duration-300 ease-in-out ${darkLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        />
        <Image
          src="/icons/mainIcon.svg"
          alt="mainIcon"
          width={159}
          height={46}
          priority={true}
          fetchPriority="high"
          style={{ width: "auto", height: "auto" }}
          className={`absolute inset-0 object-left object-contain transition-opacity duration-300 ease-in-out ${darkLogo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        />
      </div>
      <div className={`absolute xl:block hidden px-[20px] py-[2px] top-1/2 rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit transition-[background-color_350ms_ease-in-out,border-color_350ms_ease-in-out,box-shadow_350ms_ease-in-out,backdrop-filter_350ms_ease-in-out] ${scrolled ? 'bg-transparent border-transparent shadow-none backdrop-blur-none' : isGlass ? 'bg-[#024645]' : 'bg-con-custom-green-bold border-transparent shadow-none'}`}>
        <div className="flex items-center gap-5">
          {MENU.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 group py-2 ${item.subMenu.length === 0 ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <p
                onClick={item.subMenu.length === 0 ? () => item.link.startsWith("http") ? window.open(item.link, "_blank", "noopener,noreferrer") : router.push(item.link) : undefined}
                className={`font-dm-sans font-normal text-[18px] transition-colors duration-300 ease-in-out ${item.subMenu.length === 0 ? 'cursor-pointer' : 'cursor-default'} ${scrolled ? 'text-black group-hover:text-gray-800' : 'text-white group-hover:text-con-custom-green'}`}
              >
                {item.name}
              </p>
              {item.subMenu.length > 0 && (
                <span className={`mt-[2px] transition-all duration-200 ease-in-out group-hover:rotate-180 ${scrolled ? 'text-black group-hover:text-gray-800' : 'text-white group-hover:text-con-custom-green'}`}>
                  <SmallMenuIcon />
                </span>
              )}
              {item.subMenu.length > 0 && (
                <div
                  className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out absolute top-[46px] left-0 right-0 rounded-t-[15px] h-fit z-50`}
                >
                  <div className={`py-[14px] w-full h-fit text-white rounded-[15px] bg-con-custom-green-bold shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${item.subMenu.length >= 6 ? "grid grid-cols-2 gap-x-4 gap-y-1" : ""}`}>
                    {item.subMenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        onMouseMove={() => handleResizeMenu(subItem.name)}
                        onMouseLeave={() => handleResizeMenu("")}
                        className={`font-dm-sans px-[28px] py-[6px] group/submenu font-normal text-[18px] hover:text-con-custom-green whitespace-nowrap`}
                      >
                        <Link
                          href={subItem.link}
                          {...(subItem.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {subItem.name}
                        </Link>

                        <div className="opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible translate-x-1 group-hover/submenu:translate-x-0 transition-all duration-200 ease-out absolute top-1/2 -translate-y-1/2 left-[130px] p-2 w-fit h-full rounded-[15px]">
                          <div className="w-full h-fit grid grid-cols-2 gap-x-[18px] gap-y-[6px] mt-[39px]">
                            {(subItem as { name: string; link: string; subMenu?: { name: string; link: string }[] }).subMenu?.map((subItem1) => (
                              <div
                                key={subItem1.name}
                                onClick={() => router.push(subItem1.link)}
                                className="w-[171px]   cursor-pointer h-[22px] bg-[#01504F] hover:bg-white hover:text-con-custom-green text-white text-xs font-normal leading-[100%] tracking-[0%] rounded-full flex items-center justify-center"
                              >
                                <span>{subItem1.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full block xl:hidden">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            data-testid="mobile-menu-button"
            className="h-[48px] w-[48px] cursor-pointer flex flex-col items-center justify-center gap-[5px] rounded-[14px] bg-white"
          >
            <span className="block w-[20px] h-[2px] rounded-full bg-black" />
            <span className="block w-[20px] h-[2px] rounded-full bg-black" />
            <span className="block w-[20px] h-[2px] rounded-full bg-black" />
          </button>
        </div>
      </div>
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} showCart={false} />
      <div className="flex items-center gap-[23px]">
        {/* <ButtonBase
          title={
            <p className="flex items-center gap-[5px]">
              <span
                className={`font-dm-sans text-white font-normal text-xs`}
              >
                Login
              </span>
            </p>
          }
          className="border text-xs border-white rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%]"
        /> */}
      </div>
    </div>
  );
};
