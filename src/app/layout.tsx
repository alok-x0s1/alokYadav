import type { Metadata } from "next";
import "./globals.css";
import { calSans, funnelDisplay, outfit, rubik } from "@/constants/fonts";

export const metadata: Metadata = {
	title: {
		default: "alokYadav",
		template: "%s | alokYadav",
	},
	description:
		"Full-stack developer & CS graduate building modern web apps with Next.js and TypeScript",
	openGraph: {
		title: "alokYadav",
		description:
			"Full-stack developer & CS graduate building modern web apps with Next.js and TypeScript",
		url: "https://yalok.vercel.app",
		siteName: "alokYadav",
		images: [
			{
				url: "https://yalok.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "alokYadav",
			},
		],
		locale: "en-IN",
		type: "website",
	},
	metadataBase: new URL("https://yalok.vercel.app"),
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "Alok Yadav | Full Stack Developer",
		description:
			"Portfolio of Alok Yadav — building modern web apps with Next.js & TypeScript.",
		images: ["https://yalok.vercel.app/og-image.png"],
	},
	icons: {
		shortcut: "/favicon.png",
		icon: "/favicon.png",
		apple: "/apple-touch-icon.png",
	},
	alternates: {
		canonical: "https://yalok.vercel.app",
	},
	authors: [{ name: "Alok Yadav", url: "https://yalok.vercel.app" }],
	creator: "Alok Yadav",
	keywords: [
		"Alok Yadav",
		"alokYadav",
		"alok-x0s1",
		"yalok",
		"Full Stack Developer",
		"Next.js Developer",
		"Frontend Developer Portfolio",
	],
	category: "Technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en-IN"
			className={[
				rubik.variable,
				outfit.variable,
				calSans.variable,
				funnelDisplay.variable,
			].join(" ")}
		>
			<body>
				{children}
				<script
					id="person-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							description:
								"Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
							name: "Alok Yadav",
							alternateName: ["alokYadav", "alok-x0s1", "yalok"],
							url: "https://yalok.vercel.app",
							image: "https://yalok.vercel.app/og-image.png",
							jobTitle: "Full Stack Developer",
							worksFor: {
								"@type": "Organization",
								name: "Freelance / Open Source",
							},
							sameAs: [
								"https://github.com/alok-x0s1",
								"https://www.linkedin.com/in/alok-x0s1",
								"https://gitlab.com/alok-x0s1",
								"https://bitbucket.org/alok-x0s1",
								"https://www.x.com/alokdotcom",
							],
						}),
					}}
				/>
			</body>
		</html>
	);
}
