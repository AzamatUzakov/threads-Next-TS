"use client"

import React, { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface ModalReagisterProps {
    modalBtn: boolean
    setModalBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalReagister: React.FC<ModalReagisterProps> = ({ modalBtn,setModalBtn }) => {

    return (
        <>
            <AlertDialog open={modalBtn} onOpenChange={setModalBtn}>
                <AlertDialogContent>
                <AlertDialogTrigger className="text-white">open</AlertDialogTrigger>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setModalBtn(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => setModalBtn(false)}>Continue</AlertDialogAction>
                     </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


        </>
    );
}

export default ModalReagister;