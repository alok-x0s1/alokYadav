export const formatCount = (num: number) => {
	if (num < 1000) return num.toString();

	const formatter = new Intl.NumberFormat("en-US", {
		notation: "compact",
		compactDisplay: "short",
	});

	return formatter.format(num);
};

export function formatDate(dateString: string, type: "relative" | "formatted") {
	const date = new Date(dateString);

	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const diffDaysString = diffDays.toString().padStart(2, "0");
	const relativeTime = `${diffDaysString} day${
		diffDays !== 1 ? "s" : ""
	} ago`;

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const day = date.getDate().toString().padStart(2, "0");
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const formattedDate = `${day} ${month} ${year}`;

	return type === "relative" ? relativeTime : formattedDate;
}
