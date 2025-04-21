import Post from "@/components/custom/Post";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function Home() {
	return (
		<div className="">
			
			<form action="" className="flex justify-between items-center gap-4">
				
				<Avatar className="rounded-2xl">
					<AvatarImage className="rounded-3xl w-[50px]" src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<input type="text" className="w-full font-normal text-[15px] text-[#777777] outline-none" placeholder="Что нового?" />
				<button className="border border-[#383939] py-2 px-4 text-sm rounded-lg cursor-pointer hover:scale-[0.9] animate ">Опубликовать</button>
			</form>
			<hr className="mb-6 mt-3 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
			<div className="flex flex-col items-start ">
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
