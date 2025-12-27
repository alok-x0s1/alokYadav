"use client";

import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import { Project } from "@/utils/types";
import { ExternalLink, Github, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ProjectDetails = ({
	title,
	description,
	image,
	tags,
	githubLink,
	liveLink,
	isDark,
	date,
	closeModal,
}: Project & {
	closeModal: () => void;
}) => {
	return (
		<div className="fixed p-2 inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
			<motion.div
				className="relative max-w-2xl border shadow-sm rounded-xs bg-background border-muted-foreground/50"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
			>
				<button
					onClick={closeModal}
					className={cn(
						"absolute cursor-pointer p-1 duration-300 rounded-xs top-2 right-2",
						isDark
							? "bg-background hover:bg-background/90 text-foreground"
							: "bg-foreground hover:bg-foreground/90 text-background"
					)}
				>
					<X className="size-6" />
				</button>
				{image ? (
					<Image
						width={400}
						height={400}
						src={image}
						alt={title}
						className="w-full"
					/>
				) : (
					<div className="bg-muted-foreground/25 h-72 text-2xl w-full flex justify-center items-center">
						Image is not available.
					</div>
				)}
				<div className="p-4">
					<h5 className="mb-2 text-2xl font-bold text-foreground">
						{title}
					</h5>
					<p className="mb-2 font-normal text-foreground/80">
						{description}
					</p>
					<p className="text-sm mb-3 text-foreground/75">
						Built {formatDate(date, "relative")}
					</p>

					<div className="flex items-center justify-between mt-4">
						<div className="flex gap-3">
							{tags.map((tag) => (
								<Image
									key={tag.id}
									src={tag.path}
									alt={tag.name}
									width={24}
									height={24}
									className="rounded-none size-6 hover-animation"
								/>
							))}
						</div>
						<div className="flex gap-5 justify-start items-center text-end">
							<motion.a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg md:text-xl"
								whileHover={{
									scale: 1.1,
									color: "var(--color-purple)",
								}}
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
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
