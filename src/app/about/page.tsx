import AboutBento from "@/components/base/about";
import { Navigation } from "@/components/common/navigation";
import Experiences from "@/components/sections/experience";
import Technologies from "@/components/sections/technologies";

export default function About() {
	return (
		<div className="bg-background">
			<Navigation current="about" />
			<div className="container flex items-start justify-center min-h-screen px-4 md:px-5 mx-auto pt-24">
				<div className="flex flex-col w-full gap-20">
					<AboutBento />
					<Experiences />
					<Technologies />
				</div>
			</div>
		</div>
	);
}
