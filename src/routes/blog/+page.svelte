<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';
	import { resolve } from '$app/paths';
	import Card from 'flowbite-svelte/Card.svelte';

	let { data } = $props();
	const posts: BlogPost[] = data.posts;
</script>

<svelte:head>
	<title>Blog - Sharath</title>
	<meta
		name="description"
		content="Read my latest thoughts on AI/ML, software engineering, and technology."
	/>
</svelte:head>

{#snippet blogPost(post: BlogPost)}
	<Card class="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
		<a href={resolve(`/blog/${post.slug}`)} class="block group">
			<!-- Cover Image -->
			{#if post.coverImage}
				<div class="-mx-6 -mt-6 mb-6 overflow-hidden">
					<img
						src={post.coverImage}
						alt={post.title}
						class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
				</div>
			{/if}

			<h2
				class="text-2xl space-h-3 px-6 pb-6 font-bold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
			>
				{post.title}
			</h2>

			<div class="space-y-2 px-6 pb-6">
				<!-- Meta Info -->
				<div class="flex flex-wrap items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
					<time class="font-medium text-gray-500 dark:text-gray-300">{post.date}</time>
					{#if post.categories && post.categories.length > 0}
						<span class="text-gray-400 dark:text-gray-600">•</span>
						<div class="flex flex-wrap gap-2">
							{#each post.categories as category}
								<span
									class="bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
								>
									{category}
								</span>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Excerpt -->
				{#if post.excerpt}
					<p class="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
						{post.excerpt}
					</p>
				{/if}

				<!-- Read More Link -->
				<div class="pt-2 flex items-center gap-2">
					<span
						class="text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-3 transition-all"
					>
						Read more
					</span>
					<svg
						class="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>
		</a>
	</Card>
{/snippet}

<!-- Page wrapper with consistent background -->
<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	<main class="max-w-5xl mx-auto px-6 py-10 sm:py-14">
		<!-- Page Header -->
		<div class="mb-12">
			<h1
				class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4"
			>
				Blog
			</h1>
			<p class="text-lg text-gray-700 dark:text-gray-300">
				Thoughts on AI/ML, software engineering, and technology.
			</p>
		</div>

		<!-- Divider -->
		<div class="flex items-center py-5 sm:py-7 mb-8">
			<span class="h-px flex-1 bg-gray-300 dark:bg-gray-700"></span>
		</div>

		<!-- Blog Posts Grid -->
		{#if posts && posts.length > 0}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
				{#each posts as post}
					{@render blogPost(post)}
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				<p class="text-lg text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
			</div>
		{/if}
	</main>
</div>
