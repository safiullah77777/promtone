import Image from "next/image";
import React from "react";
import mobile from "../../public/assets/images/mobile.png";
import google from "../../public/assets/images/google.png";

const Use = () => {
  return (
    <div className="pt-[15.5rem] flex flex-col items-center">
      <h2 className="text-primaryBlack text-[3.6rem] font-500 leading-[4.4rem] pb-[1.5rem] relative after:absolute after:h-[.5rem] after:w-[17.7rem] after:bottom-0 after:rounded-[2rem] rounded-[2rem] after:left-[2rem] after:bg-[#7144D4] ">
        How it Works
      </h2>
      <div className="flex gap-[16.5rem] items-center">
        <div className="flex flex-col gap-[5.6rem] max-w-[67.4rem]">
          <h2 className="max-w-[42.4rem] text-primaryBlack text-[3.6rem] font-700 leading-[4.4rem]">
            Steps On How To Use Our Mobile App
          </h2>
          <p className="text-secondary normal-text ">
            Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
            vulputate consequat ornare imperdiet. Interdum proin tortor nisl
            hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
            eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
            elit.
          </p>
          <Image src={google} alt="" className="mx-auto" />
        </div>
        <div className="flex">
          <Image src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Use;
