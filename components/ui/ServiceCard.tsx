import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  imageContainerClass?: string;
  listItems?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageObjectFit?: 'cover' | 'contain';
  imageBg?: string;
  imagePadding?: string;
  imageScaleClass?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  onClick,
  className = '',
  imageContainerClass = 'h-[200px] md:h-[240px]',
  listItems,
  ctaLabel,
  ctaHref,
  imageObjectFit = 'cover',
  imageBg = '',
  imagePadding = '24px',
  imageScaleClass = '',
}) => {
  return (
    <div
      className={`group cursor-pointer flex flex-col ${className}`}
      onClick={onClick}
    >
      <div className={`relative w-full rounded-[2rem] overflow-hidden ${imageContainerClass} ${imageBg}`}>
        <Image
          src={image}
          alt={typeof title === 'string' ? title : 'Service image'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`${imageObjectFit === 'contain' ? 'object-contain' : 'object-cover scale-[1.02] group-hover:scale-110'} object-center transition-transform duration-700 ease-out ${imageScaleClass}`.trim()}
          style={imageObjectFit === 'contain' ? { padding: imagePadding } : undefined}
        />
      </div>

      <div className="mt-6 flex flex-col flex-grow">
        <h3 className="text-[24px] font-light leading-[1.2] text-[#024645] group-hover:text-[#038F8D] transition-colors duration-300 font-funnel">
          {title}
        </h3>

        {description && typeof description === 'string' && (
          <p className="mt-3 text-[15px] font-light leading-[1.6] text-black">
            {description}
          </p>
        )}

        {description && typeof description !== 'string' && (
          <div className="mt-3 text-[15px] font-light leading-[1.6] text-black">
            {description}
          </div>
        )}

        {listItems && listItems.length > 0 && (
          <ul className="mt-3 ml-4 space-y-1">
            {listItems.map((item, index) => (
              <li key={index} className="text-[15px] font-light text-black list-disc marker:text-con-custom-green">
                {item}
              </li>
            ))}
          </ul>
        )}

        {ctaLabel && (ctaHref ? (
          <a
            href={ctaHref}
            className="mt-3 inline-flex items-center text-[15px] font-medium text-con-custom-green hover:text-con-custom-green-bold transition-colors"
          >
            {ctaLabel}
          </a>
        ) : (
          <span className="mt-3 inline-block text-[15px] font-medium text-con-custom-green">
            {ctaLabel}
          </span>
        ))}
      </div>
    </div>
  );
};
