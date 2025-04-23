"use client"

import React from "react";

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

import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { signIn } from "next-auth/react";


interface ModalReagisterProps {
    modalBtn: boolean
    setModalBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalReagister: React.FC<ModalReagisterProps> = ({ modalBtn, setModalBtn }) => {


    return (
        <>
            <div onClick={()=>setModalBtn(false)}>
            <AlertDialog open={modalBtn} onOpenChange={setModalBtn}>
                <AlertDialogContent className="bg-[#101010] py-10 px-8 text-center border-0">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center font-extrabold text-3xl text-white">Попробуйте Threads</AlertDialogTitle>
                        <AlertDialogDescription className="font-normal text-[#777777] text-center mt-3 mb-2">
                            Присоединяйтесь к Threads, чтобы делиться мыслями, быть в курсе событий, подписываться на знакомых и делать многое другое.
                        </AlertDialogDescription>
                            <AlertDialogDescription className="font-bold text-[#F3F5F7] text-center text-lg  mt-3 mb-0 flex items-center justify-center gap-2 border border-[#323333] rounded-xl py-5 px-3 cursor-pointer animate hover:scale-[0.9]"
                                onClick={() => signIn()}
                            >
                            <Image alt="insta" src={"/instagram-logo.png"} width={500} height={500} className="w-[50px]" />
                            Продолжить с аккаунтом instagram
                            <MdKeyboardArrowRight size={25} className="mt-1" />

                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="hidden"></AlertDialogCancel>
                        <AlertDialogAction className="hidden"></AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </div>

        </>
    );
}
export default ModalReagister;




 