import type { PageLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';

export const load: PageLoad = async () => {
	// Import all markdown files from the posts directory
	const postModules = import.meta.glob('$lib/posts/*.md');

	const posts: BlogPost[] = await Promise.all(
		Object.entries(postModules).map(async ([path, resolver]) => {
			const post = await resolver();
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			return {
				slug,
				...(post as any).metadata
			};
		})
	);

	// Sort posts by date (newest first)
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
};
