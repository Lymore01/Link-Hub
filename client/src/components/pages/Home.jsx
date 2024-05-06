/* eslint-disable no-unused-vars */
import React from "react";
import HomeNavBar from "../layout/HomeNavBar";
import { TiTick } from "react-icons/ti";
import Logo from "../../utils/Logo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-max-screen p-2 sm:p-4 bg-[white]">
        <nav>
          <HomeNavBar />
        </nav>
        <main>
          <div className="w-full mt-[40px] sm:mt-[50px] h-auto p-8 items-center justify-center flex flex-col gap-[20px] text-center font-bold text-[#333333]">
            <div>
              <span className="text-[12px] font-medium text-[grey]">
                Powered by{" "}
                <span className="text-[#ff6e40] font-bold">Lymore</span>
              </span>
            </div>
            <div className="w-[100%] sm:w-[80%]">
              <span className="text-[36px] sm:text-[55px] font-extrabold">
                Create beautiful and <br></br>personalized link trees
                effortlessly
              </span>
            </div>
            <div className="w-[100%] sm:w-[40%] mx-auto">
              <span className="text-[16px] font-[600] text-[grey]">
                Discover what makes linkHub the best choice for creating link
                trees
              </span>
            </div>
            <div className="text-[grey] text-[14px] gap-[10px] flex flex-col font-normal">
              <span className="flex flex-row gap-[5px] items-center justify-center ">
                <span>
                  <TiTick fill="#3f51b5" />
                </span>
                <span className="text-[14px]">Customizable Designs</span>
              </span>
              <span className="flex flex-row gap-[5px] items-center justify-center ">
                <span>
                  <TiTick fill="#3f51b5" />
                </span>
                <span className="text-[14px]">Unlimited Links</span>
              </span>
              <span className="flex flex-row gap-[5px] items-center justify-center">
                <span>
                  <TiTick fill="#3f51b5" />
                </span>
                <span className="text-[14px]">Analytics Integration</span>
              </span>
              <span className="flex flex-row gap-[5px] items-center justify-center">
                <span>
                  <TiTick fill="#3f51b5" />
                </span>
                <span className="text-[14px]">Beautiful UI</span>
              </span>
            </div>
            <div className="w-[80%] mx-auto hidden h-[500px] rounded-lg p-4 sm:flex">
            <img src="src\assets\dash-screenshot.PNG" className="w-full h-full object-cover rounded-lg"></img>
          </div>
            <Link to={"/dashboard"}>
              <div className="w-[200px] p-4 bg-[#3f51b5] rounded-lg text-white cursor-pointer">
                <span>Get started</span>
              </div>
            </Link>
          </div>
          
        </main>

        <footer className="bg-[whitesmoke] text-[#333333] p-2">
          <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-4 md:mb-0 gap-[10px] flex flex-col">
                <div className="flex-row  flex gap-[10px]">
                  <Logo />
                  <span className="font-extrabold text-lg">linkHub</span>
                </div>
                <span className="mt-2 font-semibold text-[14px]">
                  Feel free to reach out to us for any inquiries or questions.
                </span>
                <p className="text-xs text-[#333333] font-semibold">
                  Copyright &copy; 2024 - All rights reserved.
                </p>

                <div className="mt-[50px] flex flex-row gap-[10px] items-center justify-start">
                  <img
                    src="src/assets/Kelly Toroitich.png"
                    className="w-[32px] h-[32px] object-cover rounded-full"
                  ></img>
                  <span className=" text-[#333333] font-semibold text-[12px] ">
                    Hey Curious 👋 I&apos;m{" "}
                    <span className="underline">Kelly</span>, the creator of
                    linkHub.
                  </span>
                </div>
              </div>
              <div className="w-72 h-48 flex items-center justify-center">
                <img
                  src="https://cdn.dribbble.com/users/1791559/screenshots/4465351/media/af9126c676894e277b22d4690eceb5b1.gif"
                  className="w-full h-full object-cover"
                  alt="Footer Image"
                ></img>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
