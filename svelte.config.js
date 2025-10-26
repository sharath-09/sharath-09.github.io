import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';
import dracula from 'shiki/themes/dracula.mjs';

//source: https://rodneylab.com/sveltekit-shiki-syntax-highlighting/#runner-highlighter-escaping-generated-html-code
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character]
	);
}

//source: https://www.rupsnigdha.com/blogs/how-to-use-shiki-with-mdsvex
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await createHighlighter({ theme: dracula, langs: [lang] });
			const html = highlighter.codeToHtml(code, { lang: lang, theme: dracula });
			return escapeHtml(`${html}`);
		}
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;