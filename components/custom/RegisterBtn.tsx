"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { RiInstagramLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RegisterBtn = () => {

    const { data: session } = useSession()
    return (
        <>
            {!session &&
                <div className="hidden w-[350px] bg-[#101010]  rounded-2xl py-7 px-2.5 mt-10 xl:block">
                    <h2 className="text-white font-bold text-xl leading-5 text-center">Войдите или <br /> зарегистрируйтесь в Threads</h2>
                    <p className="text-center text-[15px] text-[#777777] mt-3 font-normal">Узнавайте, о чем говорят люди, и вступайте в разговоры.</p>
                    <button className="w-full py-6 px-5 cursor-pointer bg-[#080808] text-start leading-5 gap-2 rounded-2xl flex items-center  text-[white] text-[16px] font-semibold mt-6"
                        onClick={() => signIn()}
                    >
                        <RiInstagramLine className="text-[24px]" />
                        Продолжить с аккаунтом <br /> Instagram
                    </button>
                    <p className="text-center text-[#777777] mt-6 font-normal cursor-pointer">Войти по имени пользователя</p>
                </div>
            }
        </>
    );
}

export const MiniBtnRegister = () => {
    const { data: session } = useSession()
    return (
        <>
            {session ?

                <DropdownMenu>
                    <DropdownMenuTrigger><div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center p-2.5 animate rounded-lg"><CgMenuRightAlt color="" className="text-[gray] text-[25px] cursor-pointer rotate-180" /></div></DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-10  cursor-pointer bg-[#181818] rounded-2xl px-2" >
                        <DropdownMenuItem className="flex item-center justify-between  animate py-2 px-3 cursor-pointer">Внешний вид <MdOutlineKeyboardArrowRight className="mt-1" /></DropdownMenuItem>
                        <DropdownMenuItem className="
                        py-2 px-3
                        cursor-pointer animate ">Статистика</DropdownMenuItem>
                        <DropdownMenuItem className="py-2 px-3 cursor-pointer animate ">Настройки</DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="py-2 px-3 cursor-pointer  animate ">Сообщить о проблеме</DropdownMenuItem>
                        {
                            session && <DropdownMenuItem className="py-2 px-3 cursor-pointer  animate  text-red-500 hover:text-red-500"
                                onClick={() => session && signOut()}
                            >Выйти</DropdownMenuItem>
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
                :
                <Button className="animate bg-white text-black text-[14px] cursor-pointer w-[80px] h-[35px] hover:bg-white   xl:hidden"
                    onClick={() => signIn()}>Войти</Button>

            }
        </>
    )
}

export default RegisterBtn;