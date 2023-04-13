import Image from "next/image";
import React from "react";
import dots from "../../public/assets/images/dots3.png";
import about from "../../public/assets/images/about.png";

const About = () => {
  return (
    <div className="flex pt-[23rem] gap-[8.4rem]  px-[6.8rem]" >
      <div className="flex relative">
        <Image src={about} alt="" className="z-[1]" />
        <Image src={dots} alt="" className="absolute -bottom-[4rem] -left-[.3rem]" />
      </div>
      <div className="flex flex-col">
        
      </div>
    </div>
  );
};

export default About;
