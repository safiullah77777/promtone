import Image, { StaticImageData } from "next/image";
import React from "react";

const Card = ({
  src,
  title,
  desc,
}: {
  src: StaticImageData;
  title: string;
  desc: string;
}) => {
  return (
    <div className="shadow-card bg-[#fff] p-[2rem] w-[28.7rem] h-[28.3rem] rounded-[.8rem] flex flex-col gap-[2rem]">
        <Image src={src} alt='' />
        <span className="text-[3rem] font-500 leading-[3.6rem] text-[#263238]">{title}</span>
        <span className="text-[1.6rem] font-400 leading-[1.9rem] text-[#000000]">{desc}</span>
    </div>
  );
};

export default Card;
