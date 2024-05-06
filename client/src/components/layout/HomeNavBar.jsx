/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../utils/Logo";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
  return (
    <>
      <div className="w-[100%] sm:w-[60%] mx-auto flex justify-between items-center text-[#333333] p-2">
        <div className="flex-row items-center justify-center flex gap-[10px]">
          <Logo />
          <span className="font-extrabold text-[18px] hidden sm:flex">
            linkHub
          </span>
        </div>
        <div className="flex sm:hidden w-full justify-end">
          <IoMdMenu className="w-[30px] h-[30px] cursor-pointer" />
        </div>
        <div className="hidden flex-row gap-[60px] sm:flex">
          <div className="w-auto justify-between items-center flex gap-[60px] text-[14px] font-semibold">
            <span>Pricing</span>
            <span>FAQ</span>
          </div>
          <Link to={"/login"}>
            <div className="w-auto p-4 h-[40px] bg-[whitesmoke] rounded-lg cursor-pointer">
              <span className="font-bold w-full h-full items-center justify-center flex text-black">
                Login
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
