"use client";

import { useState } from "react";
import { DownloadModal } from "./DownloadModal";

export interface BrochureOption {
    label: string;
    url: string;
}

interface BrochureDropdownModalProps {
    isOpen: boolean;
    onClose: () => void;
    brochures: BrochureOption[];
}

export const BrochureDropdownModal = ({ isOpen, onClose, brochures }: BrochureDropdownModalProps) => {
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

    if (!isOpen) return null;

    // Single brochure — skip selection, go straight to DownloadModal
    if (brochures.length === 1) {
        return <DownloadModal isOpen={isOpen} onClose={onClose} downloadUrl={brochures[0].url} />;
    }

    // If a brochure has been selected, show the DownloadModal for it
    if (selectedUrl) {
        return (
            <DownloadModal
                isOpen={isOpen}
                onClose={() => {
                    setSelectedUrl(null);
                    onClose();
                }}
                downloadUrl={selectedUrl}
            />
        );
    }

    // Brochure selection step
    const handleClose = () => {
        setSelectedUrl(null);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
            onClick={handleClose}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

            <div
                className="relative z-10 bg-white rounded-2xl shadow-xl w-full max-w-[480px] px-8 py-8"
                onClick={(e) => e.stopPropagation()}
            >
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

                <h1 className={`text-[36px] leading-tight text-[#038F8D] text-center font-normal mb-3 font-dm-sans`}>
                    Select a Brochure
                </h1>
                <p className={`text-center text-gray-600 text-[14px] leading-relaxed mb-6 px-2 font-dm-sans`}>
                    Choose which brochure you would like to download.
                </p>

                <div className="space-y-3">
                    {brochures.map((brochure) => (
                        <button
                            key={brochure.url}
                            onClick={() => setSelectedUrl(brochure.url)}
                            className={`w-full text-left px-5 py-4 rounded-xl border border-gray-200 hover:border-[#038F8D] hover:bg-[#038F8D]/5 transition-colors cursor-pointer group font-dm-sans`}
                        >
                            <span className="text-[15px] font-medium text-gray-800 group-hover:text-[#038F8D] transition-colors">
                                {brochure.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
