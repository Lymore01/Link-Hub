/* eslint-disable no-unused-vars */
import React from "react";
import { IoLink } from "react-icons/io5";
import { icons } from "../../utils/SocialMediaIcons";
import { FaRegEye } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../utils/Logo";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-2 bg-[#ecf0f1]">
        <div className="w-full h-full rounded-md grid items-center justify-center bg-white grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 p-2">
          <div className="bg-white w-full h-full flex flex-col gap-[20px] items-center justify-start pt-[40px]">
            <div className="w-full flex sm:hidden">
              <span>
                <IoArrowBack className="w-[25px] h-[25px] cursor-pointer" />
              </span>
            </div>
            <div className="w-full h-auto items-center flex justify-center">
              <Logo />
            </div>
            <div className="w-full h-auto items-center justify-center flex flex-col">
              <span className="text-[26px] font-extrabold text-[#3f51b5]">Welcome Back!</span>
              <span className="text-[10px] font-semibold text-[#3f51b5]">
                Don&apos;t have an account yet?{" "}
                <Link to={"/register"}>
                  <span className="font-bold underline cursor-pointer text-[#ff6e40]">
                    Register
                  </span>
                </Link>
              </span>
            </div>
            <div className="w-[60%] md:w-[30%] h-auto items-center grid justify-center grid-rows-1 grid-cols-4">
              {icons.map((icon) => {
                return (
                  <>
                    <div
                      className="w-[35px] h-[35px] border border-gray rounded-full items-center justify-center flex cursor-pointer"
                      key={icon.id}
                    >
                      <span>{icon.icon}</span>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex items-center">
              <hr className="flex-grow border-t border-gray-400"></hr>
              <span className="mx-4 text-gray-600">or</span>
              <hr className="flex-grow border-t border-gray-400"></hr>
            </div>
            <div className="sm:w-[60%] w-[80%] h-auto items-center flex justify-start flex-col gap-[20px]">
              <div className="w-full h-auto">
                <label htmlFor="email" className="font-semibold text-[12px]">
                  Email
                </label>
                <div className="w-full h-[40px] bg-[#F0F0F0] rounded-[99em] p-2 pl-4">
                  <input
                    type="text"
                    placeholder="E.g. yourname@gmail.com"
                    className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none"
                  ></input>
                </div>
              </div>
              <div className="w-full h-auto">
                <label htmlFor="email" className="font-semibold text-[12px]">
                  Password
                </label>
                <div className="w-full h-[40px] bg-[#F0F0F0] rounded-[99em] p-2 pl-4 flex flex-row">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none"
                  ></input>
                  <div className="h-full flex items-center justify-center cursor-pointer">
                    <span className="">
                      <FaRegEye fill="gray" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[40px] bg-[#3f51b5] rounded-[99em] items-center justify-center flex cursor-pointer">
                <Link to={"/dashboard"}>
                  <span className="text-[white] items-center justify-center flex font-bold text-[12px]">
                    Sign In
                  </span>
                </Link>
              </div>
              <div>
                <span className="text-[12px] font-bold underline cursor-pointer text-[#ff6e40]">
                  Forgot password
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-lg hidden sm:flex">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-go-for-minimalist.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
