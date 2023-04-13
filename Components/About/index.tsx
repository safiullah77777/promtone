import Image from "next/image";
import React from "react";
import dots from "../../public/assets/images/dots3.png";
import about from "../../public/assets/images/about.png";

const About = () => {
  return (
    <div className="flex pt-[23rem] gap-[8.4rem]  px-[6.8rem] justify-center" >
      <div className="flex relative">
        <Image src={about} alt="" className="z-[1]" />
        <Image src={dots} alt="" className="absolute -bottom-[4rem] -left-[.3rem]" />
      </div>
      <div className="flex flex-col max-w-[69rem] w-full gap-[5.7rem]">
        <h4 className="text-primary leading-[2.6rem] text-[2.1rem] font-[700] ">About Us</h4>
        <p className="text-secondary font-[400] text-[2.4rem] leading-[2.9rem]">
        Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate vulputate consequat ornare imperdiet. Interdum proin tortor nisl hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec elit.
        </p>
      </div>
    </div>
  );
};

export default About;
