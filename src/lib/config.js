/**
 * SEO optimisations
 * Source: https://github.com/josh-collinsworth/sveltekit-blog-starter
 **/

export const siteTitle = 'Sharath Portfolio Website';
export const siteDescription = 'Sharath Portfolio Website';
export const siteURL = 'sharath-09.io';
export const siteLink = 'https://sharath-09.io';
export const siteAuthor = 'Sharath Kumar';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	},
	{
		title: 'Contact',
		route: '/contact'
	}
];
