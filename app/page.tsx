import Post from "@/components/custom/Post";
import PublishInput from "@/components/custom/PublishInput";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function Home() {
	return (
		<div className="">
			
			<PublishInput/>
			<div className="flex flex-col items-start ">
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
