import React from "react";
import { TiPlus } from "react-icons/ti";

interface PlusBtnProps {

}

const PlusBtn: React.FC<PlusBtnProps> = () => {
    return (

        <>
            <div className="absolute hidden text-white bottom-10 right-10 border border-[#383939] p-3 rounded-2xl w-[70px] h-[60px] md:flex justify-center items-center animate hover:scale-[0.9] cursor-pointer bg-[#181818]" >
                <TiPlus size={30}/>
            </div>
        </>
    );
}

export default PlusBtn;