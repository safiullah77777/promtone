import Image from "next/image";
import React from "react";
import apple from "../../public/assets/images/apple.png";
import dots from "../../public/assets/images/dots.png";
import google from "../../public/assets/images/google.png";
import scan from "../../public/assets/images/scan.png";

const Banner = () => {
  return (
    <div className="flex gap-[16rem] pt-[15.5rem] px-[7.4rem] justify-center">
      <div className="max-w-[70rem] flex flex-col gap-[5.5rem]">
        <h1 className="max-w-[64.4rem] text-[#000000] text-[6.4rem] leading-[7.7rem] font-[900]">
          Get Paid - Promote local brands
        </h1>
        <p className="text-secondary font-[400] text-[2.4rem] leading-[2.9rem]">
          Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
          vulputate consequat ornare imperdiet. Interdum proin tortor nisl
          hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
          eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
          elit.
        </p>
        <div className="flex mt-[5rem] relative gap-[2.4rem]">
          <Image src={apple} alt="" className="z-[1]" />
          <Image src={google} alt="" />
          <Image src={dots} alt="" className="absolute top-0 -left-[1.3rem]" />
        </div>
      </div>
      <div className="pt-[3rem] flex flex-col items-center gap-[7.7rem]">
        <Image src={scan} alt='' />
        <button className="text-[#fff] text-[2.4rem] leading-[2.9rem] font-[500] bg-primary py-[2.05rem] px-[7.5rem] rounded-[.8rem]">
            Scan Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
