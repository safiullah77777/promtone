import React from "react";
import connect from "../../public/assets/images/connect.png";
import promote from "../../public/assets/images/promote.png";
import paid from "../../public/assets/images/paid.png";
import Card from "./Card";

const Services = () => {
  const data = [
    {
      img: {
        src: connect,
        alt: "",
      },
      title: "Connect",
      desc: "We connect you with a local brand on your campus",
    },
    {
      img: {
        src: paid,
        alt: "",
      },
      title: "Promote",
      desc: "Work together and run promotions with local businesses on campus",
    },
    {
      img: {
        src: paid,
        alt: "",
      },
      title: "Get Paid",
      desc: "Get Paid and grow the brands you live in your town",
    },
  ];
  return (
    <div className="bg-primary pt-[6.1rem] pb-[6.8rem] px-[3rem] flex flex-col items-center justify-center gap-[6rem] !z-[111121]">
      <h3 className="text-[3.6rem] text-[#fff] leading-[4.4rem] flex flex-col font-600 pb-[1.5rem] relative after:absolute after:h-[.5rem] after:w-[10.7rem] after:bottom-0 after:rounded-[2rem] rounded-[2rem] after:left-[2rem] after:bg-[#fff] z-[2]">
        Services
      </h3>
      <p className="max-w-[1024px] text-center text-[#fff] normal-text">
        Connect with Brands to monetize your niched audience Match with students
        to target customers effectively utilizing niched student audiences
      </p>
      <div className="flex justify-center gap-[7.6rem]">
        {data.map((item, index) => (
          <Card
            desc={item.desc}
            src={item.img.src}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
