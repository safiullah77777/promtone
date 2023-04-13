import { StaticImageData } from "next/image";
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
    <div className="shadow-card bg-[#fff] p-[2rem] w-[28.7rem] h-[28.3rem] rounded-[.8rem] flex flex-col gap-[2rem]"></div>
  );
};

export default Card;
