import { Rubik, Outfit } from "next/font/google";
import localFont from "next/font/local";

export const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
});

export const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
});

export const calSans = localFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});
