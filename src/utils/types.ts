export interface Project {
	id: number;
	title: string;
	description: string;
	githubLink: string;
	liveLink?: string;
	date: string;
	isDark?: boolean;
	image?: string;
	tags: {
		id: number;
		name: string;
		path: string;
	}[];
}

export interface Experience {
	title: string;
	company: {
		name: string;
		title: string;
		url: string;
		image: string;
		type: string;
		description: string;
	};
	date: string;
	contents: string[];
}
