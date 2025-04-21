import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

interface pageProps { }

const page: React.FC<pageProps> = () => {
	return (

		<>

			<div>
				<div className="flex w-full justify-between items-center gap-4 bg-black py-3 px-4 rounded-2xl border border-[#383939]">
					<IoSearch color="#383939" size={25}/>
					<input type="text" placeholder="Поиск"  className="outline-none text-start w-full"/>
					<TbAdjustmentsHorizontal color="#383939" size={25} className="cursor-pointer animate hover:scale-[0.9]"/>
				</div>
			</div>

		</>
	)
};

export default page;
