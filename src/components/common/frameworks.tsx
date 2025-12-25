import Image from "next/image";
import { OrbitingCircles } from "./orbiting-circles";
import { skills } from "@/constants";

export function Frameworks() {
	return (
		<div className="relative flex h-60 w-full flex-col items-center justify-center">
			<OrbitingCircles iconSize={40}>
				{skills.slice(0, 15).map((skill, index) => (
					<Icon key={index} src={`assets/logos/${skill}.svg`} />
				))}
			</OrbitingCircles>
			<OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
				{skills
					.reverse()
					.slice(0, 12)
					.map((skill, index) => (
						<Icon key={index} src={`assets/logos/${skill}.svg`} />
					))}
			</OrbitingCircles>
		</div>
	);
}

export const Icon = ({ src }: { src: string }) => (
	<Image
		alt="frameworks"
		src={src}
		width={50}
		height={50}
		className="duration-200 rounded-sm hover:scale-110"
	/>
);
