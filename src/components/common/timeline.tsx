"use client";

import type { Experience } from "@/constants";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CompanyHoverCard from "../base/company-hover-card";

export const Timeline = ({ data }: { data: Experience[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div ref={containerRef}>
			<h2 className="text-heading">
				Work <span className="text-purple">Experience</span>
			</h2>
			<div ref={ref} className="relative">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:pt-14 md:gap-10"
					>
						<div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
							<div className="absolute flex items-center justify-center w-8 h-8 rounded-full left-0 bg-purple top-2">
								<div className="w-4 h-4 p-2 rounded-full bg-background border border-muted-foreground/50" />
							</div>
							<div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl">
								<h3 className="text-3xl text-foreground">
									{item.title}
								</h3>
								<CompanyHoverCard item={item} />
								<h3 className="text-2xl text-foreground/75">
									{item.date}
								</h3>
							</div>
						</div>

						<div className="relative w-full pl-12 md:pl-4">
							<div className="block mb-4 text-2xl font-bold text-left text-foreground md:hidden">
								<h3 className="text-2xl text-foreground">
									{item.title}
								</h3>
								<h3 className="text-lg text-foreground/85">
									@{item.company.title}
								</h3>
								<h3 className="text-xl text-foreground/75">
									{item.date}
								</h3>
							</div>
							{item.contents.map((content, index) => (
								<p
									className="mb-3 font-normal text-foreground/80"
									key={index}
								>
									{content}
								</p>
							))}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute left-3.5 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-lavender/50 to-transparent from-0% via-10% rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
