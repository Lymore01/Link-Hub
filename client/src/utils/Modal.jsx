/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="w-full h-full absolute top-0 left-0 flex backdrop-blur-sm bg-[rgba(0,0,0,0.8)] flex-col gap-4 p-4">
          <div className="w-full h-auto flex justify-end">
            <span onClick={onClose}>
              <IoMdClose className="w-6 h-6 cursor-pointer fill-white" />
            </span>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="w-full sm:w-[500px] p-4 bg-white rounded-lg">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
