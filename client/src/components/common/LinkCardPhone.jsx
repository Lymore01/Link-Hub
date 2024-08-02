/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const LinkCardPhone = ({title, background, textColor}) => {
  return (
    <>
    <div className={`w-[200px] h-[40px] bg-[${background}] items-center justify-center flex rounded-md cursor-pointer`}>
        <span className={`font-bold capitalize text-[12px] text-[${textColor}]`}>{title}</span>
    </div>
    </>
  )
}

export default LinkCardPhone