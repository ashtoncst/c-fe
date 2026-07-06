"use client";
import { MainLogoIcon } from "@/components/icon-coms/MainLogoIcon";
import { MENU } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { createPortal } from "react-dom";
import { X, ChevronDown } from "lucide-react";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    showCart?: boolean;
    cartNumber?: number;
}

export const MobileDrawer = ({ isOpen, onClose, showCart = false, cartNumber = 0 }: MobileDrawerProps) => {
    const router = useRouter();
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
    const mounted = useIsClient();

    // Lock body scroll when drawer is open, compensate for scrollbar width
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const toggleAccordion = (menuName: string) => {
        setExpandedMenus((prev) =>
            prev.includes(menuName)
                ? prev.filter((name) => name !== menuName)
                : [...prev, menuName]
        );
    };

    const handleNavigate = (link: string) => {
        onClose();
        if (link.startsWith("http")) {
            window.open(link, "_blank", "noopener,noreferrer");
            return;
        }
        router.push(link);
    };

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Overlay Backdrop */}
            <div
                className={`fixed inset-0 z-[2147483645] bg-black/30 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-[2147483646] w-[85vw] max-w-[400px] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col rounded-l-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div onClick={() => handleNavigate("/")} className="cursor-pointer">
                        <MainLogoIcon width={160} height={37} />
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                        aria-label="Close menu"
                    >
                        <X size={20} className="text-black" />
                    </button>
                </div>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                    {MENU.map((item) => {
                        const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                        const isExpanded = expandedMenus.includes(item.name);

                        return (
                            <div key={item.name} className="w-full flex flex-col border-b border-gray-50 last:border-0 pb-3 mb-3">
                                <div
                                    className={`flex items-center justify-between w-full py-2 cursor-pointer group`}
                                    onClick={() => {
                                        if (hasSubMenu) {
                                            toggleAccordion(item.name);
                                        } else {
                                            handleNavigate(item.link);
                                        }
                                    }}
                                >
                                    <span
                                        className={`font-funnel text-xl font-semibold text-gray-900 group-hover:text-con-custom-green transition-colors`}
                                    >
                                        {item.name}
                                    </span>
                                    {hasSubMenu && (
                                        <span
                                            className={`text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-con-custom-green" : "rotate-0"
                                                }`}
                                        >
                                            <ChevronDown size={22} />
                                        </span>
                                    )}
                                </div>

                                {/* Submenu Accordion */}
                                {hasSubMenu && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[700px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-4 pl-4 py-2">
                                            {item.subMenu.map((subItem) => (
                                                <div
                                                    key={subItem.name}
                                                    className={`font-dm-sans text-base font-normal text-black hover:text-con-custom-green cursor-pointer`}
                                                    onClick={() => handleNavigate(subItem.link)}
                                                >
                                                    {subItem.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                {showCart && (
                    <div className="px-6 py-6 border-t border-gray-100 bg-gray-50 rounded-bl-2xl">
                        <button
                            onClick={() => handleNavigate("/cart")}
                            className="w-full py-3 px-4 bg-con-custom-green text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#024645] transition-colors"
                        >
                            <span className={`font-dm-sans font-medium tracking-wide`}>View Cart</span>
                            {cartNumber > 0 && (
                                <span className="w-5 h-5 bg-[#FBA20A] rounded-full flex items-center justify-center text-xs font-semibold text-black mb-[1px]">
                                    {cartNumber}
                                </span>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>,
        document.body
    );
};
