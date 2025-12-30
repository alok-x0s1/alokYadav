"use client";

import { formatDate } from "@/utils/date";
import type { Project } from "@/utils/types";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const cardVariants: Variants = {
	tap: {
		scale: 0.98,
		transition: { type: "spring", stiffness: 300, damping: 15 },
	},
};

const Project = ({
	date,
	title,
	description,
	githubLink,
	liveLink,
	tags,
}: Project) => {
	return (
		<motion.div
			className="w-full border bg-[#E7E7E780] border-muted-foreground/10 rounded-xs p-2 sm:p-4 flex flex-col gap-2.5 tracking-wide group duration-300"
			whileHover="hover"
			whileTap="tap"
			variants={cardVariants}
		>
			<div className="flex-1 flex flex-col gap-2.5">
				<div className="text-xs text-foreground/75">
					{date ? (
						<time
							className="text-foreground/75"
							dateTime={new Date(date).toISOString()}
						>
							{formatDate(date, "formatted")}
						</time>
					) : (
						<span>SOON</span>
					)}
				</div>
				<h2 className="text-2xl text-foreground font-medium leading-[0.95]">
					{title}
				</h2>

				<p className="text-foreground/80">{description}</p>
				<div className="flex flex-wrap items-center gap-2 md:gap-4 text-purple text-sm">
					{tags.map((tag) => (
						<p key={tag.id}>{tag.name}</p>
					))}
				</div>
			</div>

			<div className="flex gap-5 justify-start items-center text-end mt-3">
				<motion.a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg md:text-xl"
					whileHover={{ scale: 1.1, color: "var(--color-purple)" }}
				>
					<Github />
				</motion.a>

				{liveLink && (
					<motion.a
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg md:text-xl"
						whileHover={{
							scale: 1.1,
							color: "var(--color-purple)",
						}}
					>
						<ExternalLink />
					</motion.a>
				)}
			</div>
		</motion.div>
	);
};

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
			{projects.map((project) => (
				<Project key={project.id} {...project} />
			))}
		</div>
	);
};
