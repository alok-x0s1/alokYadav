"use client";

import { footerVariants, socialLinkVariants } from "@/constants/framer-motion";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Link } from "lucide-react";

const footerLinks = [
	{
		id: 2,
		icon: <Linkedin />,
		href: "https://www.linkedin.com/in/alok-x0s1",
	},
	{
		id: 3,
		icon: <Twitter />,
		href: "https://x.com/alokdotcom",
	},
	{
		id: 5,
		icon: <Instagram />,
		href: "https://www.instagram.com/mr_x0s1",
	},
	{
		id: 6,
		icon: <Link />,
		href: "https://linktr.ee/mr_x0s1",
	},
];

const ContactFooter = () => {
	return (
		<motion.footer
			className="flex mt-16 flex-col p-4 gap-1 w-full text-center border-t border-muted-foreground/50 pb-10"
			variants={footerVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h5 className="text-2xl sm:text-3xl lg:text-4xl mt-3 font-semibold tracking-tight">
				Let&apos;s Collaborate 🤝
			</h5>
			<p className="text-base sm:text-lg lg:text-xl tracking-wide leading-snug mt-2">
				I&apos;m eager to engage in exciting projects
				<span className="hidden sm:inline"> and innovative ideas</span>.
			</p>

			<div className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple ">
				<strong>
					{" "}
					Let&apos;s create something amazing together 👋
				</strong>
			</div>

			<div className="social-links flex gap-4 sm:gap-6 lg:gap-8 justify-center items-center text-2xl sm:text-3xl mt-3">
				{footerLinks.map((link) => (
					<motion.div
						key={link.id}
						variants={socialLinkVariants}
						whileHover="hover"
						onClick={() => window.open(link.href, "_blank")}
					>
						{link.icon}
					</motion.div>
				))}
			</div>
		</motion.footer>
	);
};

export default ContactFooter;
