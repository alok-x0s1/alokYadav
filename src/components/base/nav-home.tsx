"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Navbar() {
	const navigation = [
		{ name: "Projects", href: "/projects" },
		{ name: "Resume", href: "/resume" },
		{ name: "Contact", href: "/contact" },
	];

	const router = useRouter();

	return (
		<nav className="py-4 md:py-8 animate-fade-in">
			<ul className="flex items-center gap-4">
				{navigation.map((item) => (
					<div
						key={item.href}
						onClick={() => router.push(item.href)}
						className={cn(
							"text-sm cursor-pointer sm:text-base group"
						)}
					>
						<span className="duration-300 group-hover:text-purple font-medium">
							{item.name.slice(0, 1)}
						</span>
						{item.name.slice(1)}
					</div>
				))}
			</ul>
		</nav>
	);
}
