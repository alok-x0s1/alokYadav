"use client";

import type { COBEOptions } from "cobe";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
	width: 800,
	height: 800,
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 1,
	diffuse: 0.4,
	mapSamples: 16000,
	onRender: () => {},
	mapBrightness: 1.2,
	baseColor: [1, 1, 1] as [number, number, number],
	markerColor: [1, 1, 1] as [number, number, number],
	glowColor: [1, 1, 1] as [number, number, number],
	markers: [
		{ location: [14.5995, 120.9842], size: 0.03 },
		{ location: [19.076, 72.8777], size: 0.1 },
		{ location: [23.8103, 90.4125], size: 0.05 },
		{ location: [30.0444, 31.2357], size: 0.07 },
		{ location: [39.9042, 116.4074], size: 0.08 },
		{ location: [-23.5505, -46.6333], size: 0.1 },
		{ location: [19.4326, -99.1332], size: 0.1 },
		{ location: [40.7128, -74.006], size: 0.1 },
		{ location: [34.6937, 135.5022], size: 0.05 },
		{ location: [41.0082, 28.9784], size: 0.06 },
	],
};

export function Globe({
	className,
	config = GLOBE_CONFIG,
}: {
	className?: string;
	config?: typeof GLOBE_CONFIG;
}) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef(0);

	const phi = useRef(0);
	const width = useRef(0);

	const r = useMotionValue(0);
	const rs = useSpring(r, {
		mass: 1,
		damping: 30,
		stiffness: 100,
	});

	const updatePointerInteraction = (value: number | null) => {
		pointerInteracting.current = value;
		if (canvasRef.current) {
			canvasRef.current.style.cursor =
				value !== null ? "grabbing" : "grab";
		}
	};

	const updateMovement = (clientX: number) => {
		if (pointerInteracting.current !== null) {
			const delta = clientX - pointerInteracting.current;
			pointerInteractionMovement.current = delta;
			r.set(r.get() + delta / MOVEMENT_DAMPING);
		}
	};

	useEffect(() => {
		if (!canvasRef.current) return;

		const onResize = () => {
			if (canvasRef.current) {
				width.current = canvasRef.current.offsetWidth;
			}
		};

		window.addEventListener("resize", onResize);
		onResize();

		const globe = createGlobe(canvasRef.current, {
			...config,
			width: width.current * 2,
			height: width.current * 2,
			onRender: (state) => {
				if (!pointerInteracting.current) phi.current += 0.005;
				state.phi = phi.current + rs.get();
				state.width = width.current * 2;
				state.height = width.current * 2;
			},
		});

		setTimeout(() => {
			canvasRef.current?.style.setProperty("opacity", "1");
		}, 0);

		return () => {
			globe.destroy();
			window.removeEventListener("resize", onResize);
		};
	}, [rs, config]);

	return (
		<div
			className={twMerge(
				"mx-auto aspect-square w-full max-w-[600px]",
				className
			)}
		>
			<canvas
				ref={canvasRef}
				className="size-120 opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
				onPointerDown={(e) => updatePointerInteraction(e.clientX)}
				onPointerUp={() => updatePointerInteraction(null)}
				onPointerOut={() => updatePointerInteraction(null)}
				onMouseMove={(e) => updateMovement(e.clientX)}
				onTouchMove={(e) =>
					e.touches[0] && updateMovement(e.touches[0].clientX)
				}
			/>
		</div>
	);
}
