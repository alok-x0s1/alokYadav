"use client";

import { motion, useReducedMotion } from "framer-motion";

const quote = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: { delay: 0.5, staggerChildren: 0.08 },
	},
};

const singleWord = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1 },
	},
};

const AnimatedText = ({
	text,
	className = "",
}: {
	text: string;
	className?: string;
}) => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="w-full flex justify-start items-center text-start overflow-hidden">
			<motion.h1
				aria-label={text}
				className={`inline-block w-full font-bold ${className}`}
				variants={shouldReduceMotion ? undefined : quote}
				initial="initial"
				animate="animate"
			>
				{text.split("").map((char, index) => (
					<motion.span
						key={char + "-" + index}
						className="inline-block text-shadow-xs text-shadow-purple"
						variants={shouldReduceMotion ? undefined : singleWord}
					>
						{char}
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
