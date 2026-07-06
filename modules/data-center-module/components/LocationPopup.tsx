import Image from "next/image";

interface LocationPopupProps {
    status: string;
    name: string;
    image: string;
    className?: string;
}

/**
 * Map popup card for a data center / cable landing station. Replaces the
 * baked-in Location1–7 SVG exports so status, name, and photo come from
 * DATA_CENTER_SERVICE_SOLUTION instead of requiring a design re-export.
 * The outer box keeps the old SVG canvas footprint so the hand-tuned
 * per-location offsets in MultiEdgeSection still line up with the map pins;
 * the card itself grows with its content so long station names never clip.
 */
export const LocationPopup = ({ status, name, image, className = "" }: LocationPopupProps) => {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute left-[4.3%] top-0 w-[75.5%] overflow-hidden rounded-[30px] md:rounded-[34px] lg:rounded-[42px] bg-white border border-[#D3D3D3] shadow-lg">
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="240px"
                        className="object-cover"
                    />
                </div>
                <div className="px-5 pt-3 pb-5 md:px-6 md:pt-4 md:pb-6 lg:px-8 lg:pb-7">
                    <p className="font-dm-sans text-[12px] md:text-[13px] lg:text-[15px] font-light text-gray-900 mb-1">
                        {status}
                    </p>
                    <h3 className="font-funnel text-[17px] md:text-[19px] lg:text-[23px] leading-[1.15] font-normal text-[#024645]">
                        {name}
                    </h3>
                </div>
            </div>
        </div>
    );
};
