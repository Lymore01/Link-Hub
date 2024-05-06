/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoLink } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrAnnounce } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDashView } from "../../contexts/DashView";


const SideNavBar = () => {
  const { dashItem, setDashItem } = useDashView();

  return (
    <>
      <div className="bg-[#ff6e40] w-[5%] sm:w-[4%] h-full flex flex-col items-center justify-between pl-6 pr-6 sm:pl-4 sm:pr-4">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <div className="items-center justify-center flex w-full h-[60px] sm:h-[52.3125px]">
              <div className="w-[30px] h-[30px] bg-[#3f51b5] rounded-full items-center justify-center flex">
                <span className="text-white font-extrabold">
                  <IoLink className="font-bold h-[20px] w-[20px]" />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="h-auto flex items-center justify-center gap-[10px] flex-col mb-[0px] sm:mb-0">
          <div className="w-full h-auto items-center justify-center flex p-2 cursor-pointer">
            <HiOutlineLightBulb className="w-[25px] h-[25px] fill-[#3f51b5]" />
          </div>
          <div className="w-full h-auto items-center justify-center flex p-2 cursor-pointer">
            <GrAnnounce className="w-[25px] h-[25px] " />
          </div>
          <div className="w-full h-auto items-center justify-center flex p-2 cursor-pointer">
            <MdMessage className="w-[25px] h-[25px]" fill="#3f51b5" />
          </div>
          <div className="w-full h-auto items-center justify-center flex p-2">
            <Link to={"/profile"}>
              <div
                className="w-[30px] h-[30px] rounded-full items-center justify-center flex border-[2px] border-white cursor-pointer"
                
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzglJLzqFumT0k41TMHXT6OZgXaQyiaFTOAleShpS3w&s"
                ></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
