export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	updated?: string;
	categories?: string[];
	coverImage?: string;
	coverWidth?: number;
	coverHeight?: number;
	excerpt?: string;
}
