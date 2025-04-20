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

interface MobileModalRegisterProps {
    modalBtn: boolean
    setModalBtn: React.Dispatch<React.SetStateAction<boolean>>;

}

const MobileModalRegister: React.FC<MobileModalRegisterProps> = ({ modalBtn, setModalBtn }) => {
    
    
    return (  
        <>
            <Drawer open={modalBtn} onOpenChange={setModalBtn}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    );
}

export default MobileModalRegister;