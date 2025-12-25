import { Rubik, Outfit, Funnel_Display } from "next/font/google";
import localFont from "next/font/local";

export const rubik = Rubik({
	subsets: ["latin"],
	variable: "--rubik",
});

export const outfit = Outfit({
	subsets: ["latin"],
	variable: "--outfit",
});

export const funnelDisplay = Funnel_Display({
	subsets: ["latin"],
	variable: "--funnel",
});

export const calSans = localFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--calsans",
});
