"use client";

import { skills } from "@/constants";
import Image from "next/image";
import SkillsImage from "../common/skills-image";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const Technologies = () => {
	return (
		<div className="technologies mb-20 relative" id="technologies">
			<SkillsImage />
			<h2 className="text-heading text-center md:text-5xl! mt-40!">
				The Secret <span className="text-purple">Sauce</span>
			</h2>

			<div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 justify-center pt-8 max-w-5xl mx-auto">
				{skills.reverse().map((name) => (
					<div
						key={name}
						className="group flex items-center w-fit rounded-xs border border-muted-foreground/10 transition-all duration-500 ease-out overflow-hidden cursor-pointer backdrop-blur-sm"
					>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="flex cursor-default items-center justify-center gap-2 p-2 w-fit">
									<Image
										src={`/assets/logos/${name}.svg`}
										alt={name}
										width={36}
										height={36}
										className="object-contain transition-transform duration-500 group-hover:-rotate-15 group-hover:scale-105"
									/>

									{/* <h3 className="text-sm md:block hidden capitalize">
										{name.replace(/-/g, " ")}
									</h3> */}
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className="text-sm capitalize">
									{name.replace(/-/g, " ")}
								</p>
							</TooltipContent>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
