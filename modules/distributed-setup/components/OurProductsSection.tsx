import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    href: string;
    alignLeft: boolean;
}

const products: Product[] = [
    {
        id: 1,
        title: "Data",
        description:
            "Future-proof your multi-site operations with MEF-certified, high-capacity fiber connectivity designed for seamless performance and absolute reliability.",
        image: "/images/landing/landing-DC.png",
        href: "/our-services/data",
        alignLeft: true,
    },
    {
        id: 2,
        title: "Dedicated Internet Access",
        description:
            "Power your business with exclusive, unshared fiber connectivity that delivers 100% committed symmetrical speeds designed to support latency-sensitive applications and mission-critical operations",
        image: "/images/homepage-hero-global-network-2.png",
        href: "/our-services/dedicated-internet-access",
        alignLeft: false,
    },
    {
        id: 3,
        title: "Fiber Broadband",
        description:
            "Power your daily operations with high-speed, 100% fiber connectivity designed for consistent performance and professional-grade reliability",
        image: "/images/fiberbanner.png",
        href: "/our-services/fiber-broadband",
        alignLeft: true,
    },
    {
        id: 4,
        title: "Satellite Internet",
        description:
            "Starlink is a satellite internet service powered by SpaceX, using low Earth orbit (LEO) satellites to deliver high-speed, low-latency internet ideal for streaming, video calls, gaming, and more, even in remote or underserved areas.",
        image: "/images/satellite.png",
        href: "/connectivity/satellite",
        alignLeft: false,
    },
];

export const OurProductsSection = () => {
    return (
        <section className="w-full bg-[#1e1e19] py-[40px] md:py-[32px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center mb-4 md:mb-6 max-w-[800px]">
                    <h2
                        className={`text-[35px] font-light text-white mb-4 font-funnel`}
                    >
                        Our Products
                    </h2>
                    <p
                        className={`hidden md:block text-[15px] md:text-[16px] text-white font-light leading-[1.6] font-dm-sans`}
                    >
                        Solutions built for everyday life, future growth, and everything in
                        between.
                    </p>
                </div>

                {/* Mobile: Grid Layout */}
                <div className="block md:hidden grid grid-cols-1 gap-6 w-full max-w-[400px]">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.href}
                            className="group bg-white rounded-[50px] overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]"
                        >
                            {/* Image at Top */}
                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${product.id === 1 ? "scale-110" : ""}`}
                                />
                            </div>

                            {/* Title at Bottom */}
                            <div className="flex items-center justify-center py-3 px-6 text-center">
                                <h3
                                    className={`text-[21px] text-[#024645] font-normal leading-tight font-dm-sans`}
                                >
                                    {product.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Desktop: Side-by-Side Layout */}
                <div className="hidden md:flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.href}
                            className={`group flex ${product.alignLeft ? "flex-row" : "flex-row-reverse"} bg-white rounded-[4rem] overflow-hidden h-[420px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                        >
                            {/* Text Area (30%) */}
                            <div className="w-[30%] p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                                <h3
                                    className={`text-[30px] text-[#024645] mb-6 leading-[28px] font-normal whitespace-pre-line font-dm-sans`}
                                >
                                    {product.title}
                                </h3>
                                <p
                                    className={`hidden xl:block text-[16px] text-black font-light leading-[24px] max-w-[320px] font-dm-sans`}
                                >
                                    {product.description}
                                </p>
                            </div>

                            {/* Image Area (70%) */}
                            <div
                                className={`w-[70%] relative overflow-hidden ${product.alignLeft
                                    ? "rounded-l-[4rem]"
                                    : "rounded-r-[4rem]"
                                    }`}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 65vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};
