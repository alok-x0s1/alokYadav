"use client";

import { ProjectGrid } from "@/components/common/project-grid";
import { abandonedProjects } from "@/constants";
import { CornerDownLeft, CornerRightDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectsDumpyard() {
	const router = useRouter();
	return (
		<div className="bg-background">
			<header>
				<div
					className={`inset-x-0 top-0 z-50 backdrop-blur-sm duration-200 bg-foreground/500`}
				>
					<div className="container flex items-center justify-start px-4 md:px-5 py-6">
						<button
							onClick={() => router.back()}
							className="duration-500 text-foreground hover:text-foreground/80 flex gap-2 items-center border-none outline-none cursor-pointer"
						>
							<span className="text-base hover:underline underline-offset-2">
								Escape from dumpyard
							</span>
							<CornerDownLeft
								size={18}
								color="var(--color-purple)"
							/>
						</button>
					</div>
				</div>
			</header>
			<div className="container flex items-start justify-start min-h-screen px-4 md:px-5 mx-auto pt-6 mb-16">
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

					<div className="flex flex-col gap-0.5">
						<p className="mt-2 text-lg text-foreground/85">
							{"(Just kidding, of course) "} All the projects you
							see here are perfectly crafted, bug-free, and made
							with the utmost care. Who needs testing, right?
						</p>
						<p className="text-lg text-foreground/85 flex items-end gap-1">
							You can also explore my other
							{" (simple, noob, learning) "} projects, on{" "}
							<CornerRightDown size={16} />
						</p>

						<ul className="list-decimal pl-5 mt-1 text-foreground/85">
							<li>
								Gitlab -{" "}
								<button
									className="hover:underline cursor-pointer border-none outline-none underline-offset-1"
									onClick={() =>
										window.open(
											"https://gitlab.com/alok-x0s1",
											"_blank"
										)
									}
								>
									gitlab.com/alok-x0s1
								</button>
							</li>
							<li className="mt-0.5">
								Bitbucket -{" "}
								<button
									className="hover:underline cursor-pointer border-none outline-none underline-offset-1"
									onClick={() =>
										window.open(
											"https://bitbucket.org/alok-x0s1",
											"_blank"
										)
									}
								>
									bitbucket.org/alok-x0s1
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
