import Image from "next/image";
import React from "react";
import dots from "../../public/assets/images/dots3.png";
import about from "../../public/assets/images/about.png";
import arrow from "../../public/assets/icons/arrow.svg";
import dots1 from "../../public/assets/images/dots4.png";

const About = () => {
  return (
    <div className="flex pt-[23rem] gap-[8.4rem] relative px-[6.8rem] justify-center pb-[15rem]">
      <div className="flex relative">
        <Image src={about} alt="" className="z-[1]" />
        <Image
          src={dots}
          alt=""
          className="absolute -bottom-[4rem] -left-[.3rem]"
        />
      </div>
      <div className="flex flex-col max-w-[69rem] w-full gap-[5.7rem] ">
        <h4 className="text-primary leading-[2.6rem] text-[2.1rem] font-[700] ">
          About Us
        </h4>
        <p className="text-secondary font-[400] text-[2.4rem] leading-[2.9rem]">
          Lorem ipsum dolor sit amet consectetur. Egestas cursus vulputate
          vulputate consequat ornare imperdiet. Interdum proin tortor nisl
          hendrerit bibendum nulla. Sodales malesuada pulvinar praesent lectus
          eu odio bibendum. Neque arcu egestas et commodo a maecenas in nec
          elit.
        </p>
        <button className="text-[#fff] mr-auto text-[1.6rem] flex gap-[1.2rem] items-center mt-[14rem] leading-[2rem] font-700 bg-primary py-[2rem] px-[3.4rem] rounded-[.8rem] shadow-button">
          Learn More 
        <Image src={arrow} alt="" className="" />
        </button>
      </div>
      <Image src={dots1} alt="" className="absolute -z-[1] -bottom-[25rem] right-0" />
    </div>
  );
};

export default About;
