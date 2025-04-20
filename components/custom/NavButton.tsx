"use client"

import Link from "next/link";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { GoHomeFill, GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

interface NavButtonProps {

}
const icons = [

    <Link href="/">
       <GoHomeFill />
    </Link>,
    <Link href="/search">
        <IoSearch />
    </Link>,
  <BsPencilSquare />,
    <Link href="/activity">
        <FiHeart />
    </Link>,
    <Link href="/profile">
        <GoPerson />
    </Link>
]


const NavButton: React.FC<NavButtonProps> = () => {
       const [actText, setActText] = useState<null | string | number>(0)
   
   
    return (
        <>

            <div className="h-[65px] w-full fixed bottom-0 left-0 pt-4 pb-5 px-1 backdrop-blur-[10px] flex justify-between items-center bg-[#111111] md:hidden">

                {icons.map((icon, index) => {
                    return (
                        <div key={index}
                            onClick={() => setActText(index)}
                            className={`hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate text-[25px] rounded-xl cursor-pointer ${actText === index ? "text-white" : "text-[#4d4d4d]"}`}
                        >
                            {icon}
                        </div>)
                })}
                
                
                
                {/*                 <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><GoHomeFill color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><IoSearch color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><BsPencilSquare color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><FiHeart color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><GoPerson color="" className="text-white text-[22px] cursor-pointer" /></div>
 */}            </div>

        </>
    );
}

export default NavButton;