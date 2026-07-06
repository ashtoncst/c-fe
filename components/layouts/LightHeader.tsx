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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileDrawer } from "@/components/header/MobileDrawer";

interface Props {
  isDisplayBanner?: boolean;
}
export const LightHeader = (props: Props) => {
  const { isDisplayBanner = true } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorageUtil.getSessionId();
  const [selectedMenu, setSelectedMenu] = useState<string[]>([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState<string>("");
  const handleOpenMenu = (id: string) => {
    if (selectedMenu.includes(id)) {
      setSelectedMenu(selectedMenu.filter((item) => item !== id));
    } else {
      setSelectedMenu([...selectedMenu, id]);
    }
  };
  const handleBackHome = () => {
    router.push("/");
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
    setSelectedMenu([]);
  };
  const handleResizeMenu = (id: string) => {
    setSelectedSubmenu(id);
  };
  // TEMP: cart functionality disabled — query disabled via `enabled: false`.
  // Restore by removing the `enabled: false` line.
  const handleGetCartNumber = useQuery({
    queryKey: ["cart-number", token],
    queryFn: () => axiosInstance.get(`/cart/${token}/count`),
    enabled: false,
  });

  const cartNumber = handleGetCartNumber.data?.data?.data?.count;
  return (
    <div className="relative w-full flex justify-between items-center h-[94px] md:px-[60px] px-5">
      <div onClick={handleBackHome} className="cursor-pointer hidden lg:block">
        <MainLogoIcon />
      </div>
      {selectedMenu.length > 0 ? (
        <div
          className="flex items-center gap-2"
          onClick={() => setSelectedMenu([])}
        >
          <span className=" rotate-90 text-black group-hover:text-con-custom-green cursor-pointer">
            <SmallMenuIcon />
          </span>
          <p className="text-black font-medium text-xs cursor-pointer"> Back</p>
        </div>
      ) : (
        <div
          onClick={handleBackHome}
          className="cursor-pointer block lg:hidden"
        >
          <MainLogoIcon width={155} height={48} />
        </div>
      )}
      <div className="absolute lg:block hidden px-[28px] py-2 top-1/2  rounded-2xl left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
        <div className="flex items-center gap-5">
          {MENU.map((item) => (
            <div
              key={item.name}
              className="relative flex items-center gap-2 cursor-pointer group "
            >
              <p
                onClick={() => router.push(item.link)}
                className={`font-dm-sans text-black font-normal text-xs group-hover:text-con-custom-green`}
              >
                {item.name}
              </p>
              {item.subMenu.length > 0 && (
                <span className="mt-[2px] text-black group-hover:text-con-custom-green">
                  <SmallMenuIcon />
                </span>
              )}
              {item.subMenu.length > 0 && (
                <div
                  className={`group-hover:block hidden absolute top-[14px] bottom-0 -left-[15px]  ${(item.subMenu as { name: string; link: string; subMenu?: { name: string; link: string }[] }[]).find(
                    (subItem) => subItem.name === selectedSubmenu
                  )?.subMenu?.length ?? 0 > 0
                      ? "w-[493px]"
                      : "w-[420px]"
                    } h-fit  z-50 rounded-full`}
                >
                  <div className=" pt-[14px]  w-full h-full bg-white rounded-[15px]">
                    {item.subMenu.map((subItem) => (
                      <div
                        onMouseMove={() => handleResizeMenu(subItem.name)}
                        onMouseLeave={() => handleResizeMenu("")}
                        key={subItem.name}
                        className={`font-dm-sans h-[25px] w-full px-[15px]  group/submenu text-black font-normal text-xs hover:text-con-custom-green`}
                      >
                        <Link href={subItem.link}>{subItem.name}</Link>
                        <div className="group-hover/submenu:block hidden  absolute top-1/2 -translate-y-1/2 left-[110px] p-2 w-fit h-full rounded-[15px] ">
                          <div className="w-full h-fit grid grid-cols-2 gap-x-[18px] gap-y-[6px] mt-[39px]">
                            {(subItem as { name: string; link: string; subMenu?: { name: string; link: string }[] }).subMenu?.map((subItem1) => (
                              <div
                                key={subItem1.name}
                                onClick={() => router.push(subItem1.link)}
                                className="w-[171px]  cursor-pointer h-[22px] bg-[#F7F7F7] hover:bg-con-custom-green hover:text-white text-black text-opacity-80 text-xs font-normal leading-[100%] tracking-[0%] rounded-full flex items-center justify-center"
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
      {/* TEMP: cart pill hidden — remove `false &&` to restore */}
      {false && isDisplayBanner && (
        <div className="hidden md:block">
          <div className="flex items-center gap-[23px]">
            <div className="relative lg:block hidden">
              <ButtonBase
                onClick={() => router.push("/cart")}
                title={
                  <p className="flex items-center gap-[5px]">
                    <span
                      className={`font-dm-sans text-white font-normal text-[13px]`}
                    >
                      Cart
                    </span>
                    <span>
                      <ArrowIcon />
                    </span>
                  </p>
                }
                className=" text-xs bg-con-custom-green rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%]"
              />
              {cartNumber > 0 && (
                <div className="absolute -top-3 right-0 w-5 h-5 bg-[#FBA20A] rounded-full flex items-center justify-center">
                  <span className="absolute text-xs font-normal leading-[100%] tracking-[0%] text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {cartNumber}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="block lg:hidden">
        <div
          onClick={() => setIsOpen(true)}
          className="h-[32px] w-[49px] cursor-pointer border bg-black border-black rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <div className="flex items-center gap-3 text-white">
            <MenuIcon />
          </div>
        </div>
      </div>
      {/* TEMP: cart disabled — set showCart={true} to restore */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} showCart={false} cartNumber={cartNumber} />
    </div>
  );
};
