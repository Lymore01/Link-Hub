/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'

const TopNavBar = () => {
  const linkRef = useRef()
  const [open, setOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(linkRef.current.innerHTML);
      setCopySuccess(true);
      alert("Copied to clipboard!")
    } catch (error) {
      console.error("Failed to copy:", error);
      setCopySuccess(false);
    }
  };
  return (
    <>
      <div className="w-full h-[8%] bg-[whitesmoke] p-4 justify-between items-center flex pl-6 sm:pl-8 pr-10 sm:pr-8 flex-col relative">
        <div className="w-full h-auto flex flex-row justify-between">
          {open == true ? (
            <div className="flex sm:hidden" onClick={handleMenu}>
              <IoMdClose className="w-[30px] h-[30px] cursor-pointer" />
            </div>
          ) : (
            <div className="flex sm:hidden" onClick={handleMenu}>
              <IoMdMenu className="w-[30px] h-[30px] cursor-pointer" />
            </div>
          )}
          <div className="hidden flex-row gap-[20px] sm:flex">
            <span className="text-[12px] font-[600] cursor-pointer text-[#333333]">
              Links
            </span>
            <span className="text-[12px] font-[600] cursor-pointer text-[#333333]">
              Design
            </span>
            <span className="text-[12px] font-[600] cursor-pointer text-[#333333]">
              Analytics
            </span>
            <span className="text-[12px] font-[600] cursor-pointer text-[#333333]">
              Settings
            </span>
            <span className="text-[12px] text-[#3f51b5] font-bold cursor-pointer">
              PRO
            </span>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div>
              <span className="text-[12px] cursor-pointer" ref={linkRef}>
                linktr.ee/femi-One
              </span>
            </div>
            <div className="items-center justify-center flex" onClick={() => copyToClipboard()}>
              <MdContentCopy
                className="cursor-pointer"
                
              />
              
            </div>
          </div>
        </div>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Define exit animation
              transition={{ ease: "easeInOut" }}
              className="flex sm:hidden w-[96%] h-max-screen pt-10 bg-[whitesmoke] absolute mt-[30px] pl-6 flex-col gap-[30px]"
            >
              <span className="text-[16px] font-[600] cursor-pointer text-[#333333]">
                Links
              </span>
              <span className="text-[16px] font-[600] cursor-pointer text-[#333333]">
                Design
              </span>
              <span className="text-[16px] font-[600] cursor-pointer text-[#333333]">
                Analytics
              </span>
              <span className="text-[16px] font-[600] cursor-pointer text-[#333333]">
                Settings
              </span>
              <span className="text-[16px] text-[#3f51b5] font-bold cursor-pointer">
                PRO
              </span>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default TopNavBar;
