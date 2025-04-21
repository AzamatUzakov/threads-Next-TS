"use client"

import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiHeart, FiPlus } from "react-icons/fi";
import { GoHomeFill, GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuPin } from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import ModalReagister from "./ModalRegister";
import { ModeToggle } from "./ToggleTheme";


const icons = [

    <Link href="/">
        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 px-4 animate rounded-lg"><GoHomeFill /></div>
    </Link>,
    <Link href="/search">
        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><IoSearch /></div>
    </Link>,
    <div className="bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><FiPlus /></div>,
    <Link href="#">
        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><FiHeart /></div>
    </Link>,
    <Link href="#">
        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><GoPerson /></div>
    </Link>
]

const Aside: React.FC = () => {
    const [actText, setActText] = useState<null | string | number>(0)
    const [modalBtn, setModalBtn] = useState(false)

    return (
        <>
            <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-0 pt-6 pb-10">
                <Link href="/">
                    <div className="w-full flex justify-center  animate rounded-lg"><TbBrandThreads color="white" size={34} className="text-center" /></div>
                </Link>
                <nav>
                    <ul className="flex flex-col gap-4 text-[#6B6B6B] ">
                        {icons.map((icon, index) => {
                            return (
                                <li key={index}
                                    onClick={() => { setActText(index), index >= 2 ? setModalBtn(true) : setModalBtn(false) }}
                                    className={`text-[color(display-p3 0.3 0.3 0.3)] text-[25px] cursor-pointer ${actText === index ? "text-white" : "text-[color(display-p3 0.3 0.3 0.3)]"}`}
                                >
                                    {icon}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="flex flex-col">
                    <button onClick={() => setModalBtn(true)}>
                        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><LuPin color="" className="text-[gray] text-[25px] cursor-pointer" /></div>
                    </button>
                    <button onClick={() => setModalBtn(true)}>
                        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><CgMenuRightAlt color="" className="text-[gray] text-[25px] cursor-pointer rotate-180" /></div>
                    </button>
                </div>
                <ModalReagister setModalBtn={setModalBtn} modalBtn={modalBtn} />
            </aside >

        </>
    );
}

export default Aside;