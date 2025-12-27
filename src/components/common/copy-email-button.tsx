"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const E_MAIL = "yalok6321@gmail.com";

const CopyEmailButton = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(E_MAIL);
			} else {
				// Fallback for mobile / iOS
				const textArea = document.createElement("textarea");
				textArea.value = E_MAIL;
				textArea.style.position = "fixed";
				textArea.style.opacity = "0";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				document.execCommand("copy");
				document.body.removeChild(textArea);
			}

			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Copy failed", err);
		}
	};

	return (
		<motion.button
			onClick={copyToClipboard}
			// whileHover={{ y: -5 }}
			whileTap={{ scale: 1.05 }}
			className="relative px-1 py-4 text-sm text-center rounded-xs font-extralight bg-[#18181b] text-background/95 w-48 cursor-pointer overflow-hidden"
		>
			<AnimatePresence mode="wait">
				{copied ? (
					<motion.p
						className="flex items-center justify-center gap-2"
						key="copied"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1, ease: "easeInOut" }}
					>
						<Image
							src="assets/copy-done.svg"
							className="w-5"
							alt="copy icon"
							width={20}
							height={20}
						/>
						Email has Copied
					</motion.p>
				) : (
					<motion.p
						className="flex items-center justify-center gap-2"
						key="copy"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.1 }}
					>
						<Image
							width={20}
							height={20}
							src="assets/copy.svg"
							className="w-5"
							alt="copy icon"
						/>
						Copy Email Address
					</motion.p>
				)}
			</AnimatePresence>
		</motion.button>
	);
};

export default CopyEmailButton;
