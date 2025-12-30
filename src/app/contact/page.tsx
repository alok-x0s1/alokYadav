import { Card } from "@/components/base/contact-card";
import ContactFooter from "@/components/base/contact-footer";
import { Navigation } from "@/components/common/navigation";
import { Github, Gitlab, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/alok-x0s1",
		label: "Github",
		handle: "alok-x0s1",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:yalok6321@gmail.com",
		label: "Email",
		handle: "mail@alokYadav",
	},
	{
		icon: <Gitlab size={20} />,
		href: "https://gitlab.com/alok-x0s1",
		label: "Gitlab",
		handle: "alok-x0s1",
	},
];

export default function Contact() {
	return (
		<div className="bg-background flex flex-col min-h-screen">
			<Navigation current="contact" />
			<div className="container flex flex-1 h-full flex-col px-4 md:px-5 pt-24 gap-6">
				<h2 className="text-heading text-start">
					Contact <span className="text-purple">Me</span>
				</h2>
				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-12">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 py-16 md:py-24 pb-24 lg:pb-48 md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-linear-to-b from-foreground via-foreground/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-xs text-background/85 group-hover:text-background border-zinc-500 bg-foreground group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 xl:text-2xl text-foreground/90 group-hover:text-foreground font-display">
										{s.handle}
									</span>
									<span className="mt-3 text-sm text-center font-semibold duration-1000 text-foreground/80 group-hover:text-foreground/90">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<ContactFooter />
		</div>
	);
}
