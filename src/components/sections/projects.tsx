"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import {
	backendProjects,
	featuredProjects,
	frontendProjects,
	fullStackProjects,
	javascriptProjects,
} from "@/constants";
import ProjectList from "../common/project-list";
import { CornerDownRight, LayoutGrid, TextAlignStart } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectGrid } from "../common/project-grid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Projects = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { damping: 10, stiffness: 50 });
	const springY = useSpring(y, { damping: 10, stiffness: 50 });
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		x.set(e.clientX + 20);
		y.set(e.clientY + 20);
	};

	const [preview, setPreview] = useState<string | null>(null);

	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const mode =
		pathname === "/projects"
			? (searchParams.get("view") as "list" | "grid") ?? "list"
			: "list";

	const setMode = (newMode: "list" | "grid") => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("view", newMode);

		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false,
		});
	};

	return (
		<section
			onMouseMove={handleMouseMove}
			className="relative projects pb-20"
			id="projects"
		>
			<div className="flex justify-between items-center">
				<h2 className="text-heading text-start">
					Featured <span className="text-purple">Projects</span>
				</h2>

				<div className="relative flex rounded-xs border border-muted-foreground/10 overflow-hidden">
					<motion.div
						layout
						layoutId="project-view-toggle"
						className="absolute inset-y-0 w-9 bg-purple"
						style={{
							left: mode === "list" ? 0 : "2.25rem",
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 25,
						}}
					/>

					<button
						onClick={() => setMode("list")}
						className={cn(
							"relative z-10 size-9 flex items-center justify-center",
							mode === "list"
								? "text-background"
								: "text-foreground/80 cursor-pointer"
						)}
					>
						<TextAlignStart size={18} />
					</button>

					<button
						onClick={() => setMode("grid")}
						className={cn(
							"relative z-10 size-9 flex items-center justify-center",
							mode === "grid"
								? "text-background"
								: "text-foreground/80 cursor-pointer"
						)}
					>
						<LayoutGrid size={18} />
					</button>
				</div>
			</div>
			{featuredProjects.map(
				(project) =>
					mode === "list" && (
						<ProjectList
							key={project.id}
							project={project}
							setPreview={setPreview}
						/>
					)
			)}
			{mode === "grid" && <ProjectGrid projects={featuredProjects} />}

			<h2 className="text-heading text-start mt-6">
				Full Stack <span className="text-purple">Projects</span>
			</h2>
			{fullStackProjects.map(
				(project) =>
					mode === "list" && (
						<ProjectList
							key={project.id}
							project={project}
							setPreview={setPreview}
						/>
					)
			)}
			{mode === "grid" && <ProjectGrid projects={fullStackProjects} />}

			<h2 className="text-heading text-start mt-6">
				Back-end <span className="text-purple">Projects</span>
			</h2>
			{backendProjects.map(
				(project) =>
					mode === "list" && (
						<ProjectList
							key={project.id}
							project={project}
							setPreview={setPreview}
						/>
					)
			)}
			{mode === "grid" && <ProjectGrid projects={backendProjects} />}

			<h2 className="text-heading text-start mt-6">
				Front-end <span className="text-purple">Projects</span>
			</h2>
			{frontendProjects.map(
				(project) =>
					mode === "list" && (
						<ProjectList
							key={project.id}
							project={project}
							setPreview={setPreview}
						/>
					)
			)}
			{mode === "grid" && <ProjectGrid projects={frontendProjects} />}

			<h2 className="text-heading text-start mt-6">
				JavaScript <span className="text-purple">Projects</span>
			</h2>
			{javascriptProjects.map(
				(project) =>
					mode === "list" && (
						<ProjectList
							key={project.id}
							project={project}
							setPreview={setPreview}
						/>
					)
			)}
			{mode === "grid" && <ProjectGrid projects={javascriptProjects} />}

			<button
				className="mt-3 text-lg cursor-pointer flex gap-2 items-center"
				onClick={() => router.push("/projects/dumpyard")}
			>
				<CornerDownRight size={18} color="var(--color-purple)" />{" "}
				<span className="text-base hover:underline underline-offset-2">
					Enter dumpyard
				</span>
			</button>

			{preview && (
				<motion.img
					className="fixed top-0 left-0 z-50 object-cover rounded-xs shadow-lg pointer-events-none w-100"
					src={preview}
					style={{ x: springX, y: springY }}
				/>
			)}
		</section>
	);
};

export default Projects;
