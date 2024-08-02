/* eslint-disable no-unused-vars */
import React from "react";
import { IoLink } from "react-icons/io5";

const Logo = () => {
  return (
    <>
      <div className="w-[30px] h-[30px] bg-[#3f51b5] rounded-lg items-center justify-center flex">
        <span className="text-white font-extrabold">
          <IoLink className="font-bold h-[20px] w-[20px]" />
        </span>
      </div>
    </>
  );
};

export default Logo;
