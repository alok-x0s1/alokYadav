import { ProjectGrid } from "@/components/common/project-grid";
import { abandonedProjects } from "@/constants";
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsDumpyard() {
	return (
		<div className="bg-background">
			<header>
				<div
					className={`inset-x-0 top-0 z-50 backdrop-blur-sm duration-200 bg-foreground/500`}
				>
					<div className="container flex items-center justify-start px-4 md:px-5 py-6">
						<Link
							href="/projects"
							className="duration-500 text-foreground hover:text-foreground/80 flex gap-2 items-center border-none outline-none"
						>
							<span className="text-base hover:underline underline-offset-2">
								Escape from dumpyard
							</span>
							<CornerDownLeft
								size={18}
								color="var(--color-purple)"
							/>
						</Link>
					</div>
				</div>
			</header>
			<div className="container flex items-start justify-start min-h-screen px-4 md:px-5 mx-auto pt-6">
				<div className="flex flex-col items-start w-full">
					<h1 className="text-4xl font-bold tracking-wide text-red-600 animate-glitch font-display">
						The Dumpyard
					</h1>
					<p className="mt-2 text-lg text-foreground/85 leading-relaxed">
						Welcome to the forgotten graveyard of unfinished ideas
						and broken code. Some projects were left behind, others
						were cursed with eternal bugs. Proceed with caution—you
						might find something that should have stayed buried.
					</p>

					<ProjectGrid projects={abandonedProjects} />
				</div>
			</div>
		</div>
	);
}
