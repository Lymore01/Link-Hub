import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";


export const icons = [
    {
        id:crypto.randomUUID(),
        icon: <FaGoogle className="w-[12px] h-[12px]" />
    },
    {
        id:crypto.randomUUID(),
        icon: <FaApple className="w-[12px] h-[12px]" />
    }, {
        id:crypto.randomUUID(),
        icon: <FaFacebook className="w-[12px] h-[12px]"/>
    }, {
        id:crypto.randomUUID(),
        icon: <FaInstagram className="w-[12px] h-[12px]"/>
    }
]

export const socialMedia = [
    {
        id:crypto.randomUUID(),
        icon: <FaInstagram className="w-[15px] h-[15px] fill-white" />
    },
    {
        id:crypto.randomUUID(),
        icon: <RiTiktokFill className="w-[15px] h-[15px] fill-white" />
    },
    {
        id:crypto.randomUUID(),
        icon: <FiYoutube className="w-[15px] h-[15px] fill-white" />
    },
     
]

export const socialMediaPhone = [
    {
        id:crypto.randomUUID(),
        icon: <FaInstagram className="w-[15px] h-[15px]" />
    },
    {
        id:crypto.randomUUID(),
        icon: <RiTiktokFill className="w-[15px] h-[15px]" />
    },
    {
        id:crypto.randomUUID(),
        icon: <FiYoutube className="w-[15px] h-[15px]" />
    },
     
]

