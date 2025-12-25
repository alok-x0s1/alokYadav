"use client";

import { cn } from "@/lib/utils";
import Link, { useLinkStatus } from "next/link";

export default function Navbar() {
	const navigation = [
		{ name: "Projects", href: "/projects" },
		{ name: "Resume", href: "/resume" },
		{ name: "Contact", href: "/contact" },
	];

	const { pending } = useLinkStatus();

	return (
		<nav className="py-4 md:py-8 animate-fade-in">
			<ul className="flex items-center gap-4">
				{navigation.map((item) => (
					<Link
						prefetch={false}
						key={item.href}
						href={item.href}
						className={cn(
							"text-sm sm:text-base duration-500 hover:text-foreground/90",
							pending &&
								"animate-pulse bg-red-400 pointer-events-none"
						)}
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	);
}
