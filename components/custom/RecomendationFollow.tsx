"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";


interface RecomendationFollowProps {

}

const RecomendationFollow: React.FC<RecomendationFollowProps> = () => {
  
  const {data:session}= useSession()
    return (

        <>
{session &&
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <div>
                            <p className="text-[16px] font-semibold">fedya </p>
                            <p className="text-[12px] mt-[-2px] text-[#777777]">Fede Valverde™️</p>
                        </div>
                        <button className="text-black bg-white text-[16px] py-1 px-2 font-medium rounded-sm cursor-pointer animate hover:scale-[0.9]">Подписаться</button>

                    </div>
                    <p className=" font-normal text-white text-[14px] w-[97%] mt-2">I SET MY ALARMS EXTRA EARLY TO MAKE SURE I HAVE ENOUGH TIME TO LAY IN BED AND BE ANGRY ABOUT HAVING TO WAKE UP</p>
                    <div className="gap-5 mt-2">
                        <div className="flex items-center  animate gap-2 text-[#777777] text-sm ">
                            <span>90 909</span> подписчиков
                        </div>



                    <hr className="mt-3 w-[100%] border-0 h-[1px] bg-[#383939]" />
                    </div>
                </div>
                </div>
            }
        </>
    );
}

export default RecomendationFollow;