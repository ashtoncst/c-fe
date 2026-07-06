"use client";
import { ButtonBase } from "@/components/button/ButtonBase";
import { Modal } from "@/components/modal/Modal";
import { ADD_ON_LIST, ITEM_LIST } from "@/constants/OnlineSellingMock";
import { OnlineSellingPortalCard } from "@/modules/online-selling-portal-module/components/OnlineSellingPortalCard";
import { OnlineSellingPortalItem } from "@/modules/online-selling-portal-module/components/OnlineSellingPortalItem";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useOnlineSellingPortal,
  useRemoveOnlineSellingPortal,
} from "./hooks/useOnlineSellingPortal";
import { localStorageUtil } from "@/libs/storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/libs/axios";
import { toast } from "react-hot-toast";
import { CustomSliderForTransport } from "@/components/custom-slider/CustomSliderForTransport";

type Props = {};
type TOnlineSellingPortalData = {
  id: string;
  itemId: string;
  productName: string;
  itemName: string;
  itemType: string;
  description: string;
  price: number;
  contractTerm: number;
  targetAudience: string;
  productCategory: string;
  addedAt: string;
};
export const OnlineSellingPortalModule = (props: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedItem, setSelectedItem] = useState<string[]>(["1", "2"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<{
    name: boolean;
    email: boolean;
    companyName: boolean;
    officeAddress: boolean;
    mobileNumber: boolean;
  }>({
    name: false,
    email: false,
    companyName: false,
    officeAddress: false,
    mobileNumber: false,
  });
  const [form, setForm] = useState<{
    name: string;
    email: string;
    companyName: string;
    officeAddress: string;
    mobileNumber: string;
  }>({
    name: "",
    email: "",
    companyName: "",
    officeAddress: "",
    mobileNumber: "",
  });
  const sessionId = localStorageUtil.getSessionId();
  const { data: onlineSellingPortalData } = useOnlineSellingPortal(sessionId);
  const { mutate: removeOnlineSellingPortal } = useRemoveOnlineSellingPortal(
    {}
  );
  const removeAllCardItemMutation = useMutation({
    mutationFn: () =>
      axiosInstance.delete(`/cart/clear`, {
        data: {
          sessionId: sessionId,
        },
      }),
    onSuccess: () => {
      // toast.success('All card items removed');
      setIsModalOpen(true);
      queryClient.invalidateQueries({ queryKey: ["cart-number"] });
      queryClient.invalidateQueries({ queryKey: ["online-selling-portal"] });
      setForm({
        name: "",
        email: "",
        companyName: "",
        officeAddress: "",
        mobileNumber: "",
      });
    },
    onError: () => {
      toast.error("Failed to remove all card items");
    },
  });
  const handleSubmitMutation = useMutation({
    mutationFn: () =>
      axiosInstance.post(`/cart/convert`, {
        sessionId: sessionId,
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: "+1234567890",
      }),
    onSuccess: () => {
      toast.success("Pricing Request Sent");
      removeAllCardItemMutation.mutate();
    },
    onError: () => {
      toast.error("Failed to submit pricing request");
    },
  });
  const handleSelectItem = (id: string) => {
    if (selectedItem.includes(id)) {
      setSelectedItem((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedItem((prev) => [...prev, id]);
    }
  };
  const handleRemoveOnlineSellingPortal = (id: string) => {
    removeOnlineSellingPortal({ itemId: id, sessionId });
  };
  const handleConvertItemType = (itemType: string) => {
    switch (itemType) {
      case "solution":
        return "Solution Package";
      case "category":
        return "Service Category";
      case "product":
        return "Product Offering";
    }
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => ({ ...prev, name: false }));
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => ({ ...prev, email: false }));
    setForm((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => ({ ...prev, companyName: false }));
    setForm((prev) => ({ ...prev, companyName: e.target.value }));
  };
  const handleChangeOfficeAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError((prev) => ({ ...prev, officeAddress: false }));
    setForm((prev) => ({ ...prev, officeAddress: e.target.value }));
  };
  const handleChangeMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => ({ ...prev, mobileNumber: false }));
    setForm((prev) => ({ ...prev, mobileNumber: e.target.value }));
  };

  const handleSubmit = () => {
    // [SECURITY FIX] Removed console.log(form) that was printing the full
    // contact form object — including name, email, company, address, and mobile
    // number — to the browser console on every submit attempt, leaking PII.
    if (form.name === "") {
      setError((prev) => ({ ...prev, name: true }));
    }
    if (form.email === "") {
      setError((prev) => ({ ...prev, email: true }));
    }
    if (form.companyName === "") {
      setError((prev) => ({ ...prev, companyName: true }));
    }
    if (form.officeAddress === "") {
      setError((prev) => ({ ...prev, officeAddress: true }));
    }
    if (form.mobileNumber === "") {
      setError((prev) => ({ ...prev, mobileNumber: true }));
    }
    if (
      form.email !== "" &&
      form.name !== "" &&
      form.companyName !== "" &&
      form.officeAddress !== "" &&
      form.mobileNumber !== ""
    ) {
      handleSubmitMutation.mutate();
    }
  };
  return (
    <div className="lg:px-[90px] pt-[99px] md:px-[62px] px-5">
      <p
        className={`font-funnel  text-[50px] font-normal text-con-custom-green-bold`}
      >
        Cart
      </p>
      {/* <p
        className={`font-funnel  text-[50px] font-normal text-con-custom-green-bold`}
      >
        Selling Portal
      </p> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-11 gap-[65px]">
        <div className="col-span-1 py-[42px] border-t-[0.5px]   border-[#999999] ">
          {onlineSellingPortalData?.items.map(
            (item: TOnlineSellingPortalData, index: number) => (
              <div key={item.id} className="">
                <OnlineSellingPortalItem
                  key={item.id}
                  isChecked={selectedItem.includes(item.id)}
                  id={item.id}
                  title={
                    item.productName +
                    " - " +
                    handleConvertItemType(item.itemType)
                  }
                  //subtitle={item.itemName}
                  //featureList={item.featureList}
                  onChange={() => handleSelectItem(item.id)}
                  onRemove={() => handleRemoveOnlineSellingPortal(item.itemId)}
                />

                <div className="border-t-[0.5px] border-[#999999] my-[40px]"></div>
              </div>
            )
          )}
        </div>
        <div className="col-span-1  lg:pr-[24px] hidden lg:block">
          <div className="bg-[#F5F5F5] py-[41px] px-[48px] rounded-3xl">
            <p
              className={`font-funnel text-[30px] font-normal text-con-custom-green-bold`}
            >
              Detail Info{" "}
            </p>
            <div className="mt-[65px] space-y-4">
              <div className={`font-dm-sans text-black space-y-[14px]`}>
                <p className="text-[15px] font-light">Name</p>
                <input
                  type="text"
                  className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChangeName}
                />
                {error.name && (
                  <p className="text-[10px] font-light text-red-500">
                    This field is required
                  </p>
                )}
              </div>
              <div className={`font-dm-sans text-black space-y-[14px]`}>
                <p className="text-[15px] font-light">Business Email</p>
                <input
                  type="text"
                  className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                  placeholder="name@yourcompany.com"
                  value={form.email}
                  onChange={handleChangeEmail}
                />
                {error.email && (
                  <p className="text-[10px] font-light text-red-500">
                    This field is required
                  </p>
                )}
              </div>
              <div className={`font-dm-sans text-black space-y-[14px]`}>
                <p className="text-[15px] font-light">Company Name</p>
                <input
                  type="text"
                  className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                  placeholder="Enter your company name"
                  value={form.companyName}
                  onChange={handleChangeCompanyName}
                />
                {error.companyName && (
                  <p className="text-[10px] font-light text-red-500">
                    This field is required
                  </p>
                )}
              </div>
              <div className={`font-dm-sans text-black space-y-[14px]`}>
                <p className="text-[15px] font-light">Office Address</p>
                <input
                  type="text"
                  className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                  placeholder="Street, Barangay, City / Municipality, Province"
                  value={form.officeAddress}
                  onChange={handleChangeOfficeAddress}
                />
                {error.officeAddress && (
                  <p className="text-[10px] font-light text-red-500">
                    This field is required
                  </p>
                )}
              </div>
              <div className={`font-dm-sans text-black space-y-[14px]`}>
                <p className="text-[15px] font-light">Mobile Number</p>
                <input
                  type="text"
                  className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                  placeholder="+63-912-345-6789"
                  value={form.mobileNumber}
                  onChange={handleChangeMobileNumber}
                />
                {error.mobileNumber && (
                  <p className="text-[10px] font-light text-red-500">
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <div className="mt-[22px]">
              <ButtonBase
                title={
                  <p className="flex items-center gap-[5px] ">
                    <span
                      className={`font-dm-sans text-white font-normal text-[13px]`}
                    >
                      Request for more information
                    </span>
                  </p>
                }
                className=" text-[14px] font-dm-sans w-full bg-con-custom-green rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%] flex justify-center"
                onClick={handleSubmit}
              />
              <p className="text-[10px] font-light mt-[10px] text-center">
                Thank you for your inquiry. We will provide our response as soon
                as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[20px] font-medium text-black  mb-[56px]">Add-Ons</p>
      <div className="lg:w-[60%]  w-full overflow-x-auto hidden lg:block">
        <div className="w-full flex items-center gap-[23px]">
          {ADD_ON_LIST.map((item, index) => (
            <OnlineSellingPortalCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden px-[22px]  md:mt-[39px] mt-[19px]">
        <div className="flex w-full justify-center">
          <div className="w-[300px]">
            <CustomSliderForTransport
              isDisplayArrow={true}
              slideToShow={1}
              isCenter={true}
            >
              {ADD_ON_LIST.map((item, index) => (
                <OnlineSellingPortalCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  className="w-full h-full px-5"
                />
              ))}
            </CustomSliderForTransport>
          </div>
        </div>
      </div>
      <div className="mt-[50px] block lg:hidden ">
        <div className="bg-[#F5F5F5] p-5 rounded-3xl">
          <p
            className={`font-funnel text-[30px] font-normal text-con-custom-green-bold`}
          >
            Detail Info{" "}
          </p>
          <div className="mt-[20px] space-y-4">
            <div className={`font-dm-sans text-black space-y-[14px]`}>
              <p className="text-[15px] font-light">Name</p>
              <input
                type="text"
                className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChangeName}
              />
              {error.name && (
                <p className="text-[10px] font-light text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <div className={`font-dm-sans text-black space-y-[14px]`}>
              <p className="text-[15px] font-light">Business Email</p>
              <input
                type="text"
                className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                placeholder="name@yourcompany.com"
                value={form.email}
                onChange={handleChangeEmail}
              />
              {error.email && (
                <p className="text-[10px] font-light text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <div className={`font-dm-sans text-black space-y-[14px]`}>
              <p className="text-[15px] font-light">Company Name</p>
              <input
                type="text"
                className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                placeholder="Enter your company name"
                value={form.companyName}
                onChange={handleChangeCompanyName}
              />
              {error.companyName && (
                <p className="text-[10px] font-light text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <div className={`font-dm-sans text-black space-y-[14px]`}>
              <p className="text-[15px] font-light">Office Address</p>
              <input
                type="text"
                className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                placeholder="Street, Barangay, City / Municipality, Province"
                value={form.officeAddress}
                onChange={handleChangeOfficeAddress}
              />
              {error.officeAddress && (
                <p className="text-[10px] font-light text-red-500">
                  This field is required
                </p>
              )}
            </div>
            <div className={`font-dm-sans text-black space-y-[14px]`}>
              <p className="text-[15px] font-light">Mobile Number</p>
              <input
                type="text"
                className="w-full outline-none h-[37px] rounded-full bg-white px-[17px] text-black"
                placeholder="+63-912-345-6789"
                value={form.mobileNumber}
                onChange={handleChangeMobileNumber}
              />
              {error.mobileNumber && (
                <p className="text-[10px] font-light text-red-500">
                  This field is required
                </p>
              )}
            </div>
          </div>
          <div className="mt-[22px]">
            <ButtonBase
              title={
                <p className="flex items-center gap-[5px] ">
                  <span
                    className={`font-dm-sans text-white font-normal text-[13px]`}
                  >
                    Request for more information
                  </span>
                </p>
              }
              onClick={handleSubmit}
              className=" text-[14px] font-dm-sans w-full bg-con-custom-green rounded-2xl py-2 px-[14px] text-white font-normal leading-[100%] tracking-[0%] flex justify-center"
            />
            <p className="text-[10px] font-light mt-[10px] text-center">
              Thank you for your inquiry. We will provide our response as soon
              as possible.
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[353px] p-5 h-[184px] md:p-0 md:w-[500px] md:h-[345px] bg-white rounded-3xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p
                className={`font-funnel text-nowrap text-[16px] md:text-[28px] text-center font-medium text-black`}
              >
                Pricing Request Sent
              </p>
              <p
                className={`font-dm-sans text-[14px] md:text-[16px] mt-[10px] font-light text-black text-center `}
              >
                Your pricing details have been sent. We&apos;ll prepare your pricing
                within the next few hours.{" "}
              </p>
              <ButtonBase
                className={`font-dm-sans font-normal mt-[20px] md:mt-[40px]  px-[11px] py-2 bg-con-custom-green border rounded-full text-[14px] border-con-custom-green text-white w-full`}
                title={
                  <div className="flex items-center gap-[14px]">
                    <p className="text-xs font-normal leading-[100%] tracking-[0%] w-full">
                      Back to Homepage
                    </p>
                  </div>
                }
                onClick={() => router.push("/")}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
