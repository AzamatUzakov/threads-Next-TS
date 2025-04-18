"use client"

import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { GoHomeFill, GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

interface NavButtonProps {

}

const NavButton: React.FC<NavButtonProps> = () => {
   
   
    return (
        <>

            <div className="h-[65px] w-full fixed bottom-0 left-0 pt-4 pb-5 px-1 backdrop-blur-[10px] flex justify-between items-center bg-[rgba(0,0,0,0.69)] md:hidden">
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><GoHomeFill color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><IoSearch color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><BsPencilSquare color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><FiHeart color="" className="text-white text-[22px] cursor-pointer" /></div>
                <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-5 animate rounded-lg"><GoPerson color="" className="text-white text-[22px] cursor-pointer" /></div>
            </div>

        </>
    );
}

export default NavButton;