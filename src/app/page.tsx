import Link from "next/link";
import { Eye } from "lucide-react";
import { formatCount } from "@/utils/date";
import AnimatedText from "@/components/animated-text";
import Navbar from "@/components/base/nav-home";

export default async function Home() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/visit`, {
		cache: "no-store",
	});

	const { count } = await res.json();
	const visitCount = formatCount(count);

	return (
		<div className="flex flex-col justify-center md:items-center w-screen h-screen overflow-hidden bg-primaryBgColor p-4">
			<div className="absolute top-2 right-4 text-foreground hover:text-purple duration-300 animate-fade-in">
				<Eye className="inline-block" size={16} />
				<span className="text-sm ml-1">{visitCount}</span>
			</div>

			<div className="w-full lg:w-2/3">
				<Navbar />

				<AnimatedText
					text="alokYadav"
					className="py-3.5 z-10 text-7xl font-display sm:text-8xl md:text-9xl whitespace-nowrap"
				/>

				<div className="flex flex-col animate-fade-in text-primaryTextColor">
					<h2 className="text-base sm:text-lg">
						<span className="text-purple tracking-wider font-display">
							Full Stack Developer
						</span>{" "}
						who loves creating beautiful and functional digital
						experiences, has a good eye for design, enjoys coding,
						and specializes in turning ideas into engaging websites
						with smooth interactions.
					</h2>

					<p className="text-sm sm:text-lg mt-6 cursor-pointer w-fit">
						<Link href="/about">
							LEARN MORE ABOUT
							<span className="text-purple font-bold"> ME </span>
						</Link>
						!
					</p>
				</div>
			</div>
		</div>
	);
}
