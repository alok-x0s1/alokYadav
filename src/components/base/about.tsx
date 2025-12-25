"use client";

import { useRef } from "react";
import Card from "../common/card";
import { Globe } from "../common/globe";
import CopyEmailButton from "../common/copy-email-button";
import { Frameworks } from "../common/frameworks";
import Image from "next/image";

const AboutBento = () => {
	const grid2Container = useRef<HTMLDivElement>(null);

	return (
		<section className="about" id="about">
			<h2 className="text-heading text-start mt-2">
				About <span className="text-purple">Me</span>
			</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-6">
				<div className="flex items-end grid-default-color grid-1">
					<Image
						width={1000}
						height={1000}
						alt="coding pov image"
						src="/assets/coding-pov.png"
						className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
					/>
					<div className="z-10">
						<p className="headtext">Hi, I&apos;m alokYadav</p>
						<p className="subtext">
							Over the last 2 years, I have strengthened my
							frontend and backend development skills through
							hands-on projects, internships, and production-level
							applications.
						</p>
					</div>
					<div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo/50" />
				</div>
				<div className="grid-default-color grid-2">
					<div
						ref={grid2Container}
						className="flex items-center justify-center w-full h-full"
					>
						<p className="flex items-end text-5xl font-medium text-foreground/80">
							CODE IS ❤️.
						</p>
						<Card
							style={{ rotate: "75deg", top: "30%", left: "20%" }}
							text="Precision"
							containerRef={grid2Container}
						/>
						<Card
							style={{
								rotate: "-30deg",
								top: "60%",
								left: "45%",
							}}
							text="Engeneering"
							containerRef={grid2Container}
						/>
						<Card
							style={{
								rotate: "90deg",
								bottom: "30%",
								left: "70%",
							}}
							text="Thinking"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-45deg", top: "55%", left: "0%" }}
							text="DISCIPLINE"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "20deg", top: "10%", left: "38%" }}
							text="Design"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "30deg", top: "70%", left: "70%" }}
							image="assets/logos/git.svg"
							containerRef={grid2Container}
						/>
						<Card
							style={{
								rotate: "-45deg",
								top: "70%",
								left: "25%",
							}}
							image="assets/logos/postgreSql.svg"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-45deg", top: "5%", left: "10%" }}
							image="assets/logos/node-js.svg"
							containerRef={grid2Container}
						/>
					</div>
				</div>
				<div className="grid-default-color grid-3">
					<div className="z-10 w-[60%]">
						<p className="headtext">Time Zone</p>
						<p className="subtext">
							Currently working at 127.0.0.1, I’m open to
							collaborating remotely with teams across the globe.
						</p>
					</div>
					<figure className="absolute left-[30%] top-[10%]">
						<Globe />
					</figure>
				</div>
				<div className="grid-default-color grid-4">
					<div className="flex flex-col items-center justify-center gap-4 size-full">
						<p className="text-center headtext">
							Do you want to start a project together?
						</p>
						<CopyEmailButton />
					</div>
				</div>
				<div className="grid-default-color grid-5">
					<div className="z-10 flex h-full flex-col w-[60%]">
						<p className="headtext">Teck Stack</p>
						<p className="subtext">
							I design and build scalable applications by
							leveraging modern development tools and frameworks,
							ensuring performance, maintainability, and long-term
							reliability.
						</p>
					</div>
					<div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] scale-75 md:scale-125">
						<Frameworks />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutBento;
