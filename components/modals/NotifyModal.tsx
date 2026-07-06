"use client";

import { useState } from "react";

interface NotifyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NotifyModal = ({ isOpen, onClose }: NotifyModalProps) => {
    const [step, setStep] = useState<"form" | "thankyou">("form");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const LIMITS = { name: 100, company: 150, email: 254 };

    if (!isOpen) return null;

    const validateFields = (): boolean => {
        const errors: Record<string, string> = {};
        if (!name.trim()) errors.name = "Name is required.";
        else if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
        if (!company.trim()) errors.company = "Company name is required.";
        else if (company.trim().length < 2) errors.company = "Company name must be at least 2 characters.";
        if (!email.trim()) errors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Please enter a valid email address.";
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validateFields()) return;
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "newsletter",
                    name,
                    email,
                    company,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to send. Please try again.");
            }

            setStep("thankyou");
        } catch (err) {
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setStep("form");
            setName("");
            setCompany("");
            setEmail("");
            setErrorMessage("");
            setFieldErrors({});
        }, 200);
    };

    return (
        <div
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
            onClick={handleClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

            {/* Modal Card */}
            <div
                className="relative z-10 bg-white rounded-2xl shadow-xl w-full max-w-[480px] px-8 py-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {step === "form" ? (
                    <>
                        <h1
                            className={`text-[36px] leading-tight text-[#038F8D] text-center font-normal mb-3 font-dm-sans`}
                        >
                            Get Notified
                        </h1>

                        <p
                            className={`text-center text-gray-600 text-[14px] leading-relaxed mb-6 px-2 font-dm-sans`}
                        >
                            Enter your details below and we&apos;ll notify you as soon as
                            this service launches.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="notify-name"
                                    className={`block text-gray-800 text-[13px] font-medium mb-1.5 font-dm-sans`}
                                >
                                    Name
                                </label>
                                <input
                                    id="notify-name"
                                    type="text"
                                    placeholder="First name, last name"
                                    value={name}
                                    maxLength={LIMITS.name}
                                    onChange={(e) => { setName(e.target.value); if (fieldErrors.name) setFieldErrors((p) => { const n = { ...p }; delete n.name; return n; }); }}
                                    className={`w-full rounded-full border px-5 py-2 text-[14px] text-gray-800 placeholder-gray-500 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] transition-colors bg-white ${fieldErrors.name ? "border-red-400" : "border-gray-400"} font-dm-sans`}
                                />
                                {fieldErrors.name && <p className="text-red-500 text-[12px] mt-1">{fieldErrors.name}</p>}
                            </div>

                            {/* Company Name */}
                            <div>
                                <label
                                    htmlFor="notify-company"
                                    className={`block text-gray-800 text-[13px] font-medium mb-1.5 font-dm-sans`}
                                >
                                    Company Name
                                </label>
                                <input
                                    id="notify-company"
                                    type="text"
                                    placeholder="Enter your company name"
                                    value={company}
                                    maxLength={LIMITS.company}
                                    onChange={(e) => { setCompany(e.target.value); if (fieldErrors.company) setFieldErrors((p) => { const n = { ...p }; delete n.company; return n; }); }}
                                    className={`w-full rounded-full border px-5 py-2 text-[14px] text-gray-800 placeholder-gray-500 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] transition-colors bg-white ${fieldErrors.company ? "border-red-400" : "border-gray-400"} font-dm-sans`}
                                />
                                {fieldErrors.company && <p className="text-red-500 text-[12px] mt-1">{fieldErrors.company}</p>}
                            </div>

                            {/* Business Email */}
                            <div>
                                <label
                                    htmlFor="notify-email"
                                    className={`block text-gray-800 text-[13px] font-medium mb-1.5 font-dm-sans`}
                                >
                                    Business Email Address
                                </label>
                                <input
                                    id="notify-email"
                                    type="email"
                                    placeholder="name@yourcompany.com"
                                    value={email}
                                    maxLength={LIMITS.email}
                                    onChange={(e) => { setEmail(e.target.value); if (fieldErrors.email) setFieldErrors((p) => { const n = { ...p }; delete n.email; return n; }); }}
                                    className={`w-full rounded-full border px-5 py-2 text-[14px] text-gray-800 placeholder-gray-500 outline-none focus:border-[#038F8D] focus:ring-1 focus:ring-[#038F8D] transition-colors bg-white ${fieldErrors.email ? "border-red-400" : "border-gray-400"} font-dm-sans`}
                                />
                                {fieldErrors.email && <p className="text-red-500 text-[12px] mt-1">{fieldErrors.email}</p>}
                            </div>

                            {/* Submit */}
                            <div className="pt-2">
                                {errorMessage && (
                                    <p className={`text-red-500 text-[13px] text-center mb-3 font-dm-sans`}>{errorMessage}</p>
                                )}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`bg-[#038F8D] hover:bg-[#027573] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors cursor-pointer font-dm-sans`}
                                    >
                                        {isSubmitting ? "Sending..." : "Notify Me"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                ) : (
                    /* Thank You step */
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-[#038F8D]/10 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#038F8D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h1
                            className={`text-[36px] leading-tight text-[#038F8D] font-normal mb-3 font-dm-sans`}
                        >
                            Thank You
                        </h1>
                        <p
                            className={`text-gray-600 text-[14px] leading-relaxed mb-8 px-2 font-dm-sans`}
                        >
                            We&apos;ll notify you as soon as this service launches.
                            Stay tuned!
                        </p>
                        <button
                            onClick={handleClose}
                            className={`bg-[#038F8D] hover:bg-[#027573] text-white rounded-full px-[14px] py-[8px] text-[14px] font-normal transition-colors cursor-pointer font-dm-sans`}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
