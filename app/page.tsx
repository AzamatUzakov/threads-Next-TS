import Post from "@/components/custom/Post";
import Image from "next/image";

export default function Home() {
	return (
		<div className="text">
			<form action="" className="hidden">
				<img src="lcd,lc,dl" alt="" />
				<input type="text" />
				<button>post</button>
				<hr />
			</form>
			<div className="flex flex-col items-start py-3 px-1 md:px-5">
<Post/>
				<Post />
<Post/>
				<Post />

			</div>
		</div>
	);
}
