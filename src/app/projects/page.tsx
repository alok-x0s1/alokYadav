import { Navigation } from "@/components/common/navigation";
import Project from "@/components/sections/projects";

export default function ProjectsPage() {
	return (
		<div className="bg-background">
			<Navigation current="projects" />
			<div className="container flex items-center justify-center min-h-screen px-4 md:px-5 mx-auto pt-24">
				<div className="flex flex-col w-full gap-20">
					<Project />
				</div>
			</div>
		</div>
	);
}
