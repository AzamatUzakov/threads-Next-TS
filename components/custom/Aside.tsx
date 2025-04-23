"use client"
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiHeart, FiPlus } from "react-icons/fi";
import { GoHomeFill, GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuPin } from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ModalReagister from "./ModalRegister";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";


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
    <Link href="/profile">
        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><GoPerson /></div>
    </Link>
]

const Aside: React.FC = () => {
    const [actText, setActText] = useState<null | string | number>(0)
    const [modalBtn, setModalBtn] = useState(false)
    const { data: session } = useSession()

    return (
        <>
            <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-0 pt-4 pb-10">
                <Link href="/">
                    <div className="w-full flex justify-center  animate rounded-lg"><TbBrandThreads color="white" size={34} className="text-center" /></div>
                </Link>
                <nav>
                    <ul className="flex flex-col gap-4 text-[#6B6B6B] ">
                        {icons.map((icon, index) => {
                            return (
                                <li key={index}
                                    onClick={() => {
                                        setActText(index);

                                        if (!session) {
                                            setModalBtn(index >= 2)
                                        } else { setModalBtn(false) }

                                    }}
                                    className={`text-[color(display-p3 0.3 0.3 0.3)] text-[25px] cursor-pointer ${actText === index ? "text-white" : "text-[color(display-p3 0.3 0.3 0.3)]"}`}
                                >
                                    {icon}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="flex flex-col">
                    <button onClick={() => session ? setModalBtn(false) : setModalBtn(true)}>
                        <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><LuPin color="" className="text-[gray] text-[25px] cursor-pointer" /></div>
                    </button>
    


                    <DropdownMenu>
                        <DropdownMenuTrigger><div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 animate rounded-lg"><CgMenuRightAlt color="" className="text-[gray] text-[25px] cursor-pointer rotate-180" /></div></DropdownMenuTrigger>
                        <DropdownMenuContent className="ml-10 w-[200px] cursor-pointer" >
                            <DropdownMenuItem className="flex item-center justify-between  animate p-3 cursor-pointer">Внешний вид <MdOutlineKeyboardArrowRight className="mt-1" /></DropdownMenuItem>
                            {session && <><DropdownMenuItem className="p-3 cursor-pointer animate ">Статистика</DropdownMenuItem>
                                <DropdownMenuItem className="p-3 cursor-pointer animate ">Настройки</DropdownMenuItem>
                            </>}
                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="p-3 cursor-pointer  animate ">Сообщить о проблеме</DropdownMenuItem>
                            {
                                session && <DropdownMenuItem className="p-3 cursor-pointer  animate  text-red-500 hover:text-red-500"
                                    onClick={() => session && signOut()}
                                >Выйти</DropdownMenuItem>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </aside >
            <ModalReagister setModalBtn={setModalBtn} modalBtn={modalBtn} />

        </>
    );
}

export default Aside;