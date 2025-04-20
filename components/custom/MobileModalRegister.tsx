import React from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

interface MobileModalRegisterProps {
    modalBtn: boolean
    setModalBtn: React.Dispatch<React.SetStateAction<boolean>>;

}

const MobileModalRegister: React.FC<MobileModalRegisterProps> = ({ modalBtn, setModalBtn }) => {


    return (
        <>
            <Drawer open={modalBtn} onOpenChange={setModalBtn}>
                <DrawerContent className="bg-[#101010] py-5 cursor-pointer px-6 text-center border-0">
                    <DrawerHeader>
                        
                        <DrawerTitle className="text-center font-extrabold text-2xl text-white">Попробуйте Threads</DrawerTitle>
                        <DrawerDescription className="font-normal text-[#777777] text-center mt-3 mb-0">
                            Присоединяйтесь к Threads, чтобы делиться мыслями, быть в курсе событий, подписываться на знакомых и делать многое другое.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerDescription className="font-bold text-[#F3F5F7] text-start text-[16px]  mt-1 mb-0 flex items-center justify-center gap-2 border border-[#323333] rounded-xl py-4 px-2 cursor-pointer animate hover:scale-[0.9]">
                            <Image alt="insta" src={"/instagram-logo.png"} width={500} height={500} className="w-[50px]" />
                            Продолжить с аккаунтом instagram
                            <MdKeyboardArrowRight size={25} className="mt-1" />
                        </DrawerDescription>
                        <DrawerClose>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    );
}

export default MobileModalRegister;