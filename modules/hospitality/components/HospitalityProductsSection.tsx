import Image from "next/image";

const products = [
    {
        id: 1,
        title: "Content Plus",
        description:
            "Is our answer to your need for innovation. We don't just provide internet; we build resilient, high-performance digital ecosystems that empower you to exceed guest expectations and drive operational excellence.",
        image: "/images/hospitalityourproductsfirstlist.png",
        alignLeft: true, // Text left, Image right
    },
    {
        id: 2,
        title: "Managed WIFI",
        description:
            "Power every guest stay with fast, secure, and seamless connectivity across your entire property—from rooms to public spaces.\n\nOur fully managed solution covers design, deployment, 24/7 monitoring — ensuring consistent performance without adding strain to your IT team.",
        image: "/images/hospitalityourproductssecondlist.png",
        alignLeft: false, // Image left, Text right
    },
];

export const HospitalityProductsSection = () => {
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
                        <div
                            key={product.id}
                            className="bg-white rounded-[50px] overflow-hidden shadow-lg flex flex-col"
                        >
                            {/* Image at Top */}
                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
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
                        </div>
                    ))}
                </div>

                {/* Desktop: Side-by-Side Layout */}
                <div className="hidden md:flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`flex ${product.alignLeft ? "flex-row" : "flex-row-reverse"
                                } bg-white rounded-[4rem] overflow-hidden h-[420px] shadow-2xl`}
                        >
                            {/* Text Area (30%) */}
                            <div className="w-[30%] p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                                <h3
                                    className={`text-[30px] text-[#024645] mb-6 leading-[28px] font-normal whitespace-pre-line font-dm-sans`}
                                >
                                    {product.title}
                                </h3>
                                <p
                                    className={`hidden xl:block text-[16px] text-black font-light leading-[24px] max-w-[320px] whitespace-pre-line font-dm-sans`}
                                >
                                    {product.description}
                                </p>
                            </div>

                            {/* Image Area (70%) */}
                            <div className={`w-[70%] relative overflow-hidden ${product.alignLeft
                                ? "rounded-l-[4rem]"
                                : "rounded-r-[4rem]"
                                }`}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 65vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
