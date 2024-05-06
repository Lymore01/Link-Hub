/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import { links } from "../../utils/links";
import { socialMediaPhone } from "../../utils/SocialMediaIcons";
import LinkCardPhone from "../common/LinkCardPhone";
import { IoMdNotifications } from "react-icons/io";
import { GoShare } from "react-icons/go";
import axios from 'axios'

const PhoneMockup = ({visibility, width, content}) => {

  
  return (
    <>
      <div className={`${visibility} sm:flex md:flex w-[100%] sm:w-[40%] items-center justify-center drop-shadow-lg`}>
        <div
          className={`w-[${width}] h-[80%] rounded-2xl border-[4px] border-black flex flex-col items-center justify-start p-8 gap-[20px] overflow-y-scroll bg-cover bg-center bg-[rgba(0,0,0,0.5)] drop-shadow-lg`}
          style={{
            backgroundImage:
              "url(https://www.astronomy.com/wp-content/uploads/sites/2/2023/09/underfullmoon.jpeg)",
          }}
        >
          <div className=" w-full items-end justify-between flex">
            <div className="flex w-[30px] h-[30px] bg-[white] rounded-full cursor-pointer">
              <span className="w-full h-full flex items-center justify-center">
                <GoShare className="fill-black" />
              </span>
            </div>
            <div className="flex items-center justify-center w-auto p-2 h-[30px] bg-[white] rounded-[99em] flex-row gap-[5px]">
              <div className="">
                <IoMdNotifications />
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <span className="text-[12px] font-bold">Subscribe</span>
              </div>
            </div>
          </div>
          <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzglJLzqFumT0k41TMHXT6OZgXaQyiaFTOAleShpS3w&s
                    "
            ></img>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="font-semibold text-white text-[14px]">
              Femi One
            </span>
            <span className="font-normal text-white text-[12px]">
              Kenya, Nairobi
            </span>
          </div>
          <div className="flex flex-row gap-[10px] text-white mt-[10px]">
            {socialMediaPhone.map((icon) => {
              return (
                <>
                  <span>{icon.icon}</span>
                </>
              );
            })}
          </div>

          <div></div>
          <div className="flex flex-col gap-[10px]">
            {content == null?(
              <>
              {links.map((link) => {
                return (
                  <>
                    {link.link == "" ? (
                      <LinkCardPhone
                        title={link.title}
                        background={"transparent"}
                        textColor={"white"}
                      />
                    ) : (
                      <LinkCardPhone
                        title={link.title}
                        background={"white"}
                        textColor={"black"}
                      />
                    )}
                  </>
                );
              })}
              </>
            ):(
              <>
              {content.map((link) => {
                return (
                  <>
                    {link.link == "" ? (
                      <LinkCardPhone
                        title={link.title}
                        background={"transparent"}
                        textColor={"white"}
                      />
                    ) : (
                      <LinkCardPhone
                        title={link.title}
                        background={"white"}
                        textColor={"black"}
                      />
                    )}
                  </>
                );
              })}
              </>
            )}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneMockup;
