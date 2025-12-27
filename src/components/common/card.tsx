"use client";

import { motion } from "motion/react";

const Card = ({
	style,
	text,
	image,
	containerRef,
}: {
	style: React.CSSProperties;
	text?: string;
	image?: string;
	containerRef: any;
}) => {
	return image && !text ? (
		<motion.img
			className="absolute w-15 cursor-grab"
			src={image}
			style={style}
			whileHover={{ scale: 1.05 }}
			drag
			dragConstraints={containerRef}
			dragElastic={1}
		/>
	) : (
		<motion.div
			className="absolute px-1 py-4 text-xl text-center rounded-xs ring-3 ring-[#555555] font-extralight bg-[#CFCFCF] w-48 cursor-grab text-foreground"
			style={style}
			whileHover={{ scale: 1.05 }}
			drag
			dragConstraints={containerRef}
			dragElastic={1}
		>
			{text}
		</motion.div>
	);
};

export default Card;
