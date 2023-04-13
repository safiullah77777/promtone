import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/images/logo.png";
const Header = () => {
  const list = [
    { title: "Home", link: "" },
    { title: "About Us", link: "" },
    { title: "About Beta", link: "" },
    { title: "Contact Us", link: "" },
  ];
  return (
    <div className="w-full flex h-[10.1rem] items-center  bg-primary pl-[5.9rem] pr-[7.9rem] py-[2.6rem]">
      <Image src={logo} alt="" />
      <ul className="flex gap-[7rem] mr-[9.4rem] ml-auto">
        {list.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="font-[700] text-[1.8rem] leading-[2.2rem] text-[#fff]"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-[5.1rem] items-center">
        <button className="rounded-[.4rem] border-[1px] border-[#fff] text-[1.6rem] text-[#fff] font-[500] leading-[1.9rem] py-[.7rem] px-[2.3rem]">
          Login
        </button>
        <button className="rounded-[.4rem] bg-[#fff] text-[1.6rem] font-[500] text-primary leading-[1.9rem] py-[.7rem] px-[1.45rem]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
