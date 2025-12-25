"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const SkillsImage = () => {
	const imageRef = useRef<HTMLDivElement | null>(null);
	const lastScrollY = useRef(0);
	const rotation = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY.current;

			rotation.current += delta * 0.1;

			if (imageRef.current) {
				imageRef.current.style.transform = `rotate(${rotation.current}deg)`;
			}

			lastScrollY.current = currentScrollY;
		};

		const onScroll = () => requestAnimationFrame(handleScroll);

		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="absolute -translate-x-1/2 left-1/2 -top-20 mx-auto -mb-10 h-65 max-w-150">
			<div className="h-full w-full mask-[linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]">
				<div
					ref={imageRef}
					className="relative mx-auto w-75 md:w-95 will-change-transform"
				>
					<Image
						src="https://res.cloudinary.com/dqlku2tfk/image/upload/v1764156042/steel-flower_wahekr.webp"
						alt="skills cover rotating"
						className="z-10 w-full select-none rounded-full grayscale mix-blend-screen filter"
						width={470}
						height={470}
						draggable={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default SkillsImage;
