import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { MobileProductCard } from "./MobileProductCard";
import { MobileTopGridCard } from "./MobileTopGridCard";

export interface Product {
  id: string | number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  bullets?: string[];
  image: string;
  imageClassName?: string;
  imageContainerClassName?: string;
  alignLeft: boolean;
  href?: string;
}

export interface TopGridCard {
  id: string | number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  image: string;
  href?: string;
}

export interface ProductsSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  products?: Product[];
  topGridCards?: TopGridCard[];
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  cardTextColor?: string;
  cardTitleColor?: string;
  useMobileGrid?: boolean;
  showMobileDescription?: boolean;
  className?: string;
  headerClassName?: string;
}

export const ProductsSection = ({
  title = "Our Products",
  description = "Solutions built for everyday life, future growth, and everything in between.",
  products = [],
  topGridCards = [],
  backgroundColor = "bg-[#000000]",
  titleColor = "text-white",
  descriptionColor = "text-white",
  cardTextColor = "text-black",
  cardTitleColor = "text-[#024645]",
  useMobileGrid = false,
  showMobileDescription = true,
  className = "",
  headerClassName = "mb-4 md:mb-6",
}: ProductsSectionProps = {}) => {
  return (
    <section className={`w-full ${backgroundColor} px-6 md:px-12 lg:px-16 xl:px-[120px] ${className || "py-[40px] md:py-[32px]"}`}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <AnimateOnScroll variant="fade-up" className={`text-center ${headerClassName} max-w-[800px]`}>
          <h2
            className={`text-[35px] font-light ${titleColor} mb-4 font-funnel`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`hidden md:block text-[15px] md:text-[16px] ${descriptionColor} font-light leading-[1.6] font-dm-sans`}
            >
              {description}
            </p>
          )}
        </AnimateOnScroll>

        {/* Top Grid Cards */}
        {topGridCards && topGridCards.length > 0 && (
          <>
            {/* Mobile: expandable cards */}
            <div className="md:hidden w-full max-w-[400px] flex flex-col gap-6 mb-10">
              {topGridCards.map((card) => (
                <MobileTopGridCard key={card.id} card={card} />
              ))}
            </div>

            {/* Desktop: static grid */}
            <AnimateOnScroll variant="fade-up" delay={150} className="hidden md:grid md:grid-cols-2 w-full max-w-[1280px] gap-8 mb-10 md:mb-12 items-stretch">
              {topGridCards.map((card) => {
                const cardClassName = "group bg-black rounded-[2rem] overflow-hidden flex flex-col justify-between";
                const imgClassName = card.href
                  ? "object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  : "object-contain";

                const inner = (
                  <>
                    <div className="p-10 pb-0 flex-grow flex flex-col items-center">
                      <h3 className={`text-[30px] text-white w-full text-left mb-8 font-normal leading-[38px] font-dm-sans`}>
                        {card.title}
                      </h3>
                      <div className="relative w-full aspect-video md:aspect-[4/3] max-w-[320px] max-h-[160px] flex justify-center items-center mb-10">
                        <Image
                          src={card.image}
                          alt="Grid Card Image"
                          fill
                          sizes="50vw"
                          className={imgClassName}
                        />
                      </div>
                    </div>
                    <div className="bg-white px-8 py-8 w-full text-center">
                      <p className={`text-[16px] text-black font-light leading-[24px] mx-auto font-dm-sans`}>
                        {card.description}
                      </p>
                    </div>
                  </>
                );

                return card.href ? (
                  <Link
                    key={card.id}
                    href={card.href}
                    className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={card.id} className={cardClassName}>
                    {inner}
                  </div>
                );
              })}
            </AnimateOnScroll>
          </>
        )}

        {/* Product Cards List */}
        {useMobileGrid ? (
          <>
            {/* Mobile: Grid Layout */}
            <div className="grid md:hidden grid-cols-1 gap-6 w-full max-w-[400px]">
              {products.map((product) => {
                if (showMobileDescription) {
                  return (
                    <MobileProductCard
                      key={product.id}
                      product={product}
                      cardTitleColor={cardTitleColor === "text-gray-600" ? "text-[#024645]" : cardTitleColor}
                    />
                  );
                }

                const cardClassName = "group bg-white rounded-[50px] overflow-hidden flex flex-col";
                const imgClassName = product.href
                  ? `${product.imageClassName || "object-cover"} transition-transform duration-500 ease-out group-hover:scale-110`
                  : product.imageClassName || "object-cover";

                const inner = (
                  <>
                    {/* Image at Top */}
                    <div className={`relative w-full h-[240px] overflow-hidden flex-shrink-0 ${product.imageContainerClassName || ""}`}>
                      <Image
                        src={product.image}
                        alt={typeof product.title === 'string' ? product.title : "Product Image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={imgClassName}
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
                  </>
                );

                return product.href ? (
                  <Link
                    key={product.id}
                    href={product.href}
                    className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={product.id} className={cardClassName}>
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Desktop: Side-by-Side Layout */}
            <AnimateOnScroll variant="fade-up" delay={150} className="hidden md:flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
              {products.map((product) => {
                const cardClassName = `group flex ${product.alignLeft ? "flex-row" : "flex-row-reverse"} bg-white rounded-[4rem] overflow-hidden h-[420px]`;
                const imgClassName = product.href
                  ? `${product.imageClassName || "object-cover"} transition-transform duration-500 ease-out group-hover:scale-110`
                  : product.imageClassName || "object-cover";

                const inner = (
                  <>
                    {/* Text Area (30%) */}
                    <div className="w-[30%] p-6 lg:p-8 flex flex-col justify-center items-center text-center">
                      <h3
                        className={`text-[30px] ${cardTitleColor} mb-6 font-normal leading-[28px] font-dm-sans whitespace-pre-line`}
                      >
                        {product.title}
                      </h3>
                      <div
                        className={`hidden xl:block text-[16px] ${cardTextColor} font-light leading-[24px] max-w-[320px] font-dm-sans`}
                      >
                        {product.description}
                      </div>

                      {(product.bullets && product.bullets.length > 0) && (
                        <ul className={`space-y-3 w-fit text-left mt-6 font-dm-sans`}>
                          {product.bullets.map((bullet, idx) => (
                            <li key={idx} className={`flex items-start text-[14px] ${cardTextColor} font-light`}>
                              <span className="min-w-[7px] h-[7px] rounded-full bg-[#009b9b] mr-3 mt-1.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Image Area (70%) */}
                    <div className={`w-[70%] relative overflow-hidden ${product.alignLeft
                      ? "rounded-l-[4rem]"
                      : "rounded-r-[4rem]"
                      } ${product.imageContainerClassName || ""}`}>
                      <Image
                        src={product.image}
                        alt={typeof product.title === 'string' ? product.title : "Product Image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 65vw"
                        className={imgClassName}
                      />
                    </div>
                  </>
                );

                return product.href ? (
                  <Link
                    key={product.id}
                    href={product.href}
                    className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={product.id} className={cardClassName}>
                    {inner}
                  </div>
                );
              })}
            </AnimateOnScroll>
          </>
        ) : (
          <AnimateOnScroll variant="fade-up" delay={150} className="flex flex-col gap-4 xl:gap-6 w-full max-w-[1280px]">
            {products.map((product) => {
              const cardClassName = `group flex flex-col ${product.alignLeft ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-[4rem] overflow-hidden min-h-[350px] md:h-[420px]`;
              const imgClassName = product.href
                ? `${product.imageClassName || "object-cover"} transition-transform duration-500 ease-out group-hover:scale-110`
                : product.imageClassName || "object-cover";

              const inner = (
                <>
                  {/* Text Area (35%) */}
                  <div className="w-full md:w-[35%] p-10 md:p-12 lg:p-14 flex flex-col justify-center items-center text-center">
                    <h3
                      className={`text-[30px] ${cardTitleColor} mb-6 font-normal leading-[28px] font-dm-sans whitespace-pre-line`}
                    >
                      {product.title}
                    </h3>
                    <div
                      className={`hidden xl:block text-[16px] ${cardTextColor} font-light leading-[24px] max-w-[320px] font-dm-sans`}
                    >
                      {product.description}
                    </div>

                    {(product.bullets && product.bullets.length > 0) && (
                      <ul className={`hidden xl:block space-y-3 w-fit text-left mt-6 font-dm-sans`}>
                        {product.bullets.map((bullet, idx) => (
                          <li key={idx} className={`flex items-start text-[14px] ${cardTextColor} font-light`}>
                            <span className="min-w-[7px] h-[7px] rounded-full bg-[#009b9b] mr-3 mt-1.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image Area (65%) */}
                  <div className={`w-full md:w-[65%] relative min-h-[300px] md:min-h-full overflow-hidden ${product.alignLeft
                    ? "md:rounded-l-[4rem]"
                    : "md:rounded-r-[4rem]"
                    } ${product.imageContainerClassName || ""}`}>
                    <Image
                      src={product.image}
                      alt={typeof product.title === 'string' ? product.title : "Product Image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className={imgClassName}
                    />
                  </div>
                </>
              );

              return product.href ? (
                <Link
                  key={product.id}
                  href={product.href}
                  className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#038F8D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e19]`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={product.id} className={cardClassName}>
                  {inner}
                </div>
              );
            })}
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

/** @deprecated Use ProductsSection instead */
export const DigitalInfrastructureProductsSection = ProductsSection;
export type { ProductsSectionProps as DigitalInfrastructureProductsSectionProps };
