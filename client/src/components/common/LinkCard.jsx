/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const LinkCard = ({
  linkDescription,
  link,
  onClick,
  layoutId,
  onDragOver,
  onDrop,
  onDragStart,
  onDragEnd,
}) => {
  /* const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }; */
  return (
    <>
      <motion.div className="flex flex-row gap-[10px]" layoutId={layoutId}>
        <div
          className="hidden items-center justify-center sm:flex"
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          draggable
        >
          <MdDragIndicator className="w-[25px] h-[25px] fill-[#ff6e40] cursor-pointer" />
        </div>

        <div className="w-full h-auto sm:h-[80px] bg-[whitesmoke] rounded-md flex flex-col sm:flex-row justify-between items-center p-4 text-[#333333] mb-[10px] cursor-pointer gap-[10px] sm:gap-auto relative">
          <div className="w-full">
            <div className="items-start justify-center flex flex-col">
              <span className="font-bold text-[12px] uppercase">
                {linkDescription}
              </span>
              <span className="text-[12px]">{link}</span>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] w-full sm:w-auto">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={onClick}
            >
              <MdEditSquare className="h-[20px] w-[20px]" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <RiDeleteBinLine className="h-[20px] w-[20px]" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <span className="flex items-center justify-center ">...</span>
            </div>
          </div>
        </div>
      </motion.div>
     
    </>
  );
};

export default LinkCard;
