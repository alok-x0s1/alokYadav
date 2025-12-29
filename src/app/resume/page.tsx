"use client";

import { Navigation } from "@/components/common/navigation";
import { SvgScroll } from "@/components/sections/resume";

const Resume = () => {
	return (
		<div className="bg-background">
			<Navigation current="projects" />
			<div className="flex items-start justify-center min-h-screen mx-auto pt-24">
				<div className="flex flex-col w-full gap-20">
					<section className="resume relative" id="resume">
						{/* <h2 className="text-heading text-start mt-2">
							My <span className="text-purple">Resume</span>
						</h2> */}
						<SvgScroll />
					</section>
				</div>
			</div>
		</div>
	);
};

export default Resume;
