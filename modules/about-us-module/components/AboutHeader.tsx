"use client";
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { SmallMenuIcon } from "@/assets/icons/SmallMenuIcon";
import { ButtonBase } from "@/components/button/ButtonBase";
import { MainLogoIcon } from "@/components/icon-coms/MainLogoIcon";
import { MENU } from "@/constants";
import axiosInstance from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { localStorageUtil } from "@/libs/storage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AboutHeader = () => {
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
  // TEMP: cart functionality disabled — restore by removing `enabled: false`
  const handleGetCartNumber = useQuery({
    queryKey: ["cart-number", token],
    queryFn: () => axiosInstance.get(`/cart/${token}/count`),
    enabled: false,
  });

  const cartNumber = handleGetCartNumber.data?.data?.data?.count;
  return (
    <div className=" w-full flex relative justify-between items-center z-[9999999] lg:px-[60px] md:px-[32px] px-[24px]">
      <div onClick={handleBackHome} className="cursor-pointer ">
        <Image
          src="/icons/newUpdateBlackIcon.svg"
          alt="mainIcon"
          width={165}
          height={40}
          priority={true}
          className="lg:w-[165px] lg:h-[40px] w-[100px] h-[24px] "
          fetchPriority="high"
        />
      </div>
      <div className="absolute lg:block hidden px-[28px]  top-1/2 bg-con-custom-green-bold  rounded-2xl left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
        <div className="flex items-center gap-5">
          {MENU.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 cursor-pointer group py-2 "
            >
              <p
                onClick={() => router.push(item.link)}
                className={`font-dm-sans text-white font-normal text-[13px] group-hover:text-con-custom-green`}
              >
                {item.name}
              </p>
              {item.subMenu.length > 0 && (
                <span className="mt-[2px] text-white group-hover:text-con-custom-green">
                  <SmallMenuIcon />
                </span>
              )}
              {item.subMenu.length > 0 && (
                <div
                  className={`group-hover:block hidden  absolute top-[33px]  left-0 ${
                    (item.subMenu as { name: string; link: string; subMenu?: { name: string; link: string }[] }[]).find(
                      (subItem) => subItem.name === selectedSubmenu
                    )?.subMenu?.length ?? 0 > 0
                      ? "w-[520px]"
                      : "w-full"
                  } rounded-t-[15px] h-fit  z-50 `}
                >
                  {" "}
                  <div className=" pt-[14px]  w-full h-fit  text-white rounded-[15px]  bg-con-custom-green-bold ">
                    {item.subMenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        onMouseMove={() => handleResizeMenu(subItem.name)}
                        onMouseLeave={() => handleResizeMenu("")}
                        className={`font-dm-sans px-[15px] h-[25px]  group/submenu  font-normal text-xs hover:text-con-custom-green`}
                      >
                        <Link href={subItem.link}>{subItem.name}</Link>

                        <div className="group-hover/submenu:block hidden  absolute top-1/2 -translate-y-1/2 left-[130px] p-2 w-fit h-full rounded-[15px] ">
                          <div className="w-full h-fit grid grid-cols-2 gap-x-[18px] gap-y-[6px] mt-[39px]">
                            {(subItem as { name: string; link: string; subMenu?: { name: string; link: string }[] }).subMenu?.map((subItem1) => (
                              <div
                                key={subItem1.name}
                                onClick={() => router.push(subItem1.link)}
                                className="w-[171px]  cursor-pointer h-[22px] bg-[#01504F] hover:bg-white hover:text-con-custom-green text-white text-[10px] font-normal leading-[100%] tracking-[0%] rounded-full flex items-center justify-center"
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
      <div className=" w-full block lg:hidden">
        {" "}
        <div className="w-full flex justify-end">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="h-[32px] w-[49px] cursor-pointer border bg-black border-black rounded-2xl flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-3 text-white">
              {/* <p className="text-black text-[15px] font-medium">Menus</p> */}
              {/* {isOpen ? 'X' : <MenuIcon />} */}
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute -top-[37px] left-0 right-0 w-full h-fit bg-white z-50  ">
          <div className="flex items-center justify-between pt-[16px] px-[20px]">
            <div
              onClick={handleBackHome}
              className="cursor-pointer hidden lg:block"
            >
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
                <p className="text-black font-medium text-xs cursor-pointer">
                  {" "}
                  Back
                </p>
              </div>
            ) : (
              <div
                onClick={handleBackHome}
                className="cursor-pointer block lg:hidden"
              >
                <MainLogoIcon width={99} height={24} />
              </div>
            )}
            <div
              onClick={handleCloseMenu}
              className="h-[36px] w-[104px] cursor-pointer border bg-white border-black rounded flex items-center justify-center gap-2"
            >
              <div className="flex items-center gap-3 text-black">
                <p className="text-black text-[15px] font-medium">Menus</p>
                {isOpen ? "X" : <MenuIcon />}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-[24px] gap-[32px] w-full h-full px-[20px] bg-white">
            {selectedMenu.length === 0
              ? MENU.map((item) => (
                  <div
                    className={`font-funnel text-nowrap text-[14px] flex items-center justify-between w-full font-medium text-black`}
                    key={item.name}
                    onClick={() => handleOpenMenu(item.name)}
                  >
                    {item.name}
                    {item.subMenu.length > 0 && (
                      <span className="mt-[2px] text-black -rotate-90">
                        <SmallMenuIcon />
                      </span>
                    )}
                  </div>
                ))
              : (MENU.map((it) => it.subMenu).flat() as { name: string; link: string; subMenu?: { name: string; link: string }[] }[])
                  .map((item) => (
                    <div
                      className={`font-funnel text-nowrap text-[14px]  w-full font-medium text-black`}
                      key={item.name}
                      onClick={() => router.push(item.link)}
                    >
                      <div className="flex items-center gap-2 justify-between ">
                        {item.name}
                        {item?.subMenu && item.subMenu.length > 0 && (
                          <span
                            className={`mt-[2px] text-black -rotate-90 cursor-pointer`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenMenu(item.name);
                            }}
                          >
                            <SmallMenuIcon />
                          </span>
                        )}
                      </div>

                      {selectedMenu.includes(item.name) && (
                        <div className="flex flex-col gap-[32px] mt-[32px] px-5">
                          {item.subMenu?.map((item) => (
                            <div
                              // onClick={() => handleOpenMenu(item.name)}
                              className={`font-funnel cursor-pointer text-nowrap text-[14px] flex items-center justify-between w-full font-medium text-black`}
                              key={item.name}
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(item.link);
                              }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
          </div>
          {/* TEMP: cart button hidden — remove `false &&` to restore */}
          {false && (
          <div className="mt-6 space-y-4 px-[20px]">
            <ButtonBase
              title={
                <p className="flex items-center gap-[5px]">
                  <span
                    onClick={() => router.push("/cart")}
                    className={`font-dm-sans text-black k font-normal text-[13px]`}
                  >
                    Cart
                  </span>
                  <span className=" relative w-5 h-5 bg-[#FBA20A] rounded-full flex items-center justify-center">
                    {cartNumber > 0 && (
                      <span className=" absolute text-xs font-normal leading-[100%] tracking-[0%] text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {cartNumber}
                      </span>
                    )}
                  </span>
                </p>
              }
              className=" text-xs flex justify-center bg-white border border-black rounded py-2 px-[14px] text-black font-normal leading-[100%] tracking-[0%] w-full"
            />
          </div>
          )}
          <div className="h-4"></div>
        </div>
      )}
      {/* TEMP: desktop cart pill hidden — remove `false &&` to restore */}
      {false && (
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
            className="border text-[14px] font-dm-sans border-white rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%]"
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
      )}
    </div>
  );
};
