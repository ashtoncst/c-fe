"use client";

import React, { useState } from "react";

type Props = {};

export const ContactUsModule = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    mobile: "",
    inquiry: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const LIMITS = {
    name: 100,
    email: 254,
    company: 150,
    address: 300,
    mobile: 20,
    inquiry: 2000,
  };

  const validateFields = (): boolean => {
    const errors: Record<string, string> = {};
    const { name, email, company, address, mobile, inquiry } = formData;

    if (!name.trim()) errors.name = "Name is required.";
    else if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

    if (!email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Please enter a valid email address.";

    if (!company.trim()) errors.company = "Company name is required.";
    else if (company.trim().length < 2) errors.company = "Company name must be at least 2 characters.";

    if (!address.trim()) errors.address = "Office address is required.";
    else if (address.trim().length < 5) errors.address = "Please enter a complete address.";

    if (!mobile.trim()) errors.mobile = "Mobile number is required.";
    else if (!/^[+]?[\d\s\-()]{7,20}$/.test(mobile.trim())) errors.mobile = "Please enter a valid phone number.";

    if (!inquiry.trim()) errors.inquiry = "Inquiry is required.";
    else if (inquiry.trim().length < 10) errors.inquiry = "Please provide more details (at least 10 characters).";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const limit = LIMITS[name as keyof typeof LIMITS];
    if (limit && value.length > limit) return;
    setFormData({ ...formData, [name]: value });
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateFields()) return;
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...formData }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send. Please try again.");
      }

      setShowThankYou(true);
      setFormData({ name: "", email: "", company: "", address: "", mobile: "", inquiry: "" });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="px-6 md:px-12 py-6 md:py-10 lg:py-16 max-w-[1200px] mx-auto">
        {/* Page Header */}
        <h1
          className={`font-funnel text-con-custom-green-bold md:text-[40px] text-[32px] font-light leading-tight mb-8 lg:mb-10`}
        >
          Contact Us
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Detail Info Section */}
          <h2
            className={`font-funnel text-[22px] md:text-[24px] font-light text-con-custom-green-bold mb-5 lg:mb-6`}
          >
            Detail Info
          </h2>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[60px] gap-y-5 lg:gap-y-0">
            {/* Left Column */}
            <div className={`flex flex-col space-y-5 font-dm-sans`}>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[15px] font-normal text-black">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={LIMITS.name}
                  placeholder="Enter your full name"
                  className={`w-full h-[42px] rounded-full border px-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white ${fieldErrors.name ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.name && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.name}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[15px] font-normal text-black">Business Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={LIMITS.email}
                  placeholder="name@yourcompany.com"
                  className={`w-full h-[42px] rounded-full border px-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white ${fieldErrors.email ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.email && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.email}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[15px] font-normal text-black">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={LIMITS.company}
                  placeholder="Enter your company name"
                  className={`w-full h-[42px] rounded-full border px-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white ${fieldErrors.company ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.company && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.company}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-[15px] font-normal text-black">Office Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  maxLength={LIMITS.address}
                  placeholder="Street, Barangay, City / Municipality, Province"
                  className={`w-full h-[42px] rounded-full border px-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white ${fieldErrors.address ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.address && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.address}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className={`flex flex-col font-dm-sans`}>
              <div className="flex flex-col space-y-1.5 mb-5">
                <label className="text-[15px] font-normal text-black">Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={LIMITS.mobile}
                  placeholder="+63-912-3456789"
                  className={`w-full h-[42px] rounded-full border px-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white ${fieldErrors.mobile ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.mobile && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.mobile}</p>}
              </div>

              <div className="flex flex-col space-y-1.5 flex-grow">
                <div className="flex justify-between items-center">
                  <label className="text-[15px] font-normal text-black">Inquiry <span className="text-red-500">*</span></label>
                  <span className="text-[11px] text-gray-400">{formData.inquiry.length}/{LIMITS.inquiry}</span>
                </div>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  maxLength={LIMITS.inquiry}
                  placeholder="Share a brief description of your inquiry"
                  className={`w-full min-h-[120px] flex-grow rounded-2xl border p-5 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] text-gray-800 placeholder-gray-500 placeholder:text-[14px] placeholder:font-dm-sans placeholder:font-normal text-[14px] bg-white resize-y ${fieldErrors.inquiry ? 'border-red-400' : 'border-gray-400'}`}
                />
                {fieldErrors.inquiry && <p className="text-red-500 text-[12px] mt-0.5">{fieldErrors.inquiry}</p>}
              </div>

              <div className="mt-3 mb-8 md:mb-0 flex flex-col items-center">
                <p className="text-[12px] text-black text-center mb-3">
                  Thank you for your inquiry.<br />
                  We will provide our response as soon as possible.
                </p>

                {errorMessage && (
                  <p className="text-red-500 text-[13px] text-center mb-3">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-con-custom-green hover:bg-con-custom-green-bold disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full py-[8px] px-[14px] transition-colors duration-300 text-[14px] font-normal font-dm-sans cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Request for more information"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/40">
          <div className="relative bg-white rounded-3xl px-16 py-12 text-center shadow-2xl max-w-[420px] w-[90%]">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className={`font-funnel text-con-custom-green text-[36px] font-medium mb-3`}>
              Thank You
            </h2>
            <p className={`font-dm-sans text-black text-[15px] leading-relaxed`}>
              We&apos;ve received your inquiry and our team<br />will be in touch shortly.
            </p>
          </div>
        </div>
      )}

      {/* Google Maps Section */}
      <div className="w-full bg-[#1A1A1A] rounded-t-[64px] xl:rounded-t-[96px] relative z-10 -mt-6 pb-10">
        <div className="max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-[120px] pt-14 md:pt-16 mx-auto">
          <div className="w-full h-[260px] md:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden mb-8 border border-gray-800">
            <div className="relative w-full h-full pointer-events-none">
              <iframe
                src="https://maps.google.com/maps?q=Asian+Century+Center,+BGC,+Taguig,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Converge Global Business Location"
                tabIndex={-1}
              />
            </div>
          </div>

          <div className={`font-dm-sans text-center`}>
            <p className="text-white text-[13px] md:text-[15px] lg:text-[17px] font-light leading-relaxed px-2 md:px-0">
              CONVERGE GLOBAL BUSINESS. 10th Floor, Asian Century Center, 4th
              Avenue, Bonifacio Global City (BGC), Taguig City, 1635, Metro
              Manila, Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
