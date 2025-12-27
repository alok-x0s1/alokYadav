"use client";

import { useState } from "react";
import ProjectDetails from "./project-details";
import type { Project } from "@/utils/types";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/utils/date";

const ProjectList = ({
	project,
	setPreview,
}: {
	project: Project;
	setPreview: (image: string | null) => void;
}) => {
	const [isHidden, setIsHidden] = useState(false);
	return (
		<>
			{project.id > 1 && (
				<div className="bg-linear-to-r from-transparent via-foreground/50 to-transparent h-px w-full" />
			)}
			<div
				className="flex-wrap items-center justify-between py-6 space-y-8 sm:flex sm:space-y-0 gap-4"
				onMouseEnter={() => project.image && setPreview(project.image)}
				onMouseLeave={() => setPreview(null)}
			>
				<div>
					<p className="text-2xl font-medium">{project.title}</p>
					<div className="flex gap-2 md:gap-4 mt-2 text-purple flex-wrap">
						{project.tags &&
							project.tags.map((tag) => (
								<span key={tag.id}>{tag.name}</span>
							))}
					</div>
					<p className="text-sm mt-2 text-foreground/75">
						{formatDate(project.date, "formatted")}
					</p>
				</div>
				<button
					onClick={() => setIsHidden(true)}
					className="flex items-center gap-1 cursor-pointer hover-animation"
				>
					Read More
					<ArrowRight className="size-5 text-purple" />
				</button>
			</div>
			{isHidden && (
				<ProjectDetails
					{...project}
					closeModal={() => setIsHidden(false)}
				/>
			)}
		</>
	);
};

export default ProjectList;
