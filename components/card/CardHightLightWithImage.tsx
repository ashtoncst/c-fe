import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData | string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  width?: number;
  height?: number;
  classNameImage?: string;
  classNameDescription?: string;
};
export const CardHightLightWithImage = ({
  image,
  title,
  description,
  width,
  height,
  classNameImage,
  classNameDescription,
}: Props) => {
  return (
    <div className="relative xl:w-[408px] w-full  md:rounded-[50px] rounded-[35px] lg:h-full md:h-auto h-full bg-white overflow-hidden md:shadow-none shadow-lg">
      <div
        className={`absolute lg:h-[194px] h-[174px] lg:w-full w-full md:overflow-hidden  rounded-[50px] ${classNameImage}`}
      >
        <Image
          src={image}
          alt={title as string}
          width={width || 400}
          height={height || 160}
          className="object-cover w-full h-full"
          style={{ objectPosition: "50% 20%" }}
          priority={true}
          fetchPriority="high"
        />
      </div>

      <div className="xl:h-[345px] md:h-[303px] h-[243px] md:rounded-[50px] rounded-[35px]  shadow-lg flex flex-col  justify-center xl:w-full w-full  border border-gray-300 xl:mt-[50px] md:mt-[102px] mt-[72px]">
        <span
          className={`font-funnel xl:text-[30px] md:text-[25px] text-[18px] font-normal xl:leading-9 md:leading-[30px] leading-[24px] text-center md:text-left tracking-[0%] text-black md:text-con-custom-green-bold xl:mb-7 mb-[15px]  ml-[35px] mr-[47px] xl:pt-[149px] pt-[133px]`}
        >
          {title}
        </span>
        <span
          className={`font-dm-sans font-light mb-[30px] xl:font-normal text-[11px] text-black tracking-[0%] pl-[35px] w-[305px] text-center md:text-left md:leading-5 leading-[16px] xl:mb-7 ${classNameDescription}`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};
