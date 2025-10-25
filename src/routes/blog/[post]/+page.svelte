<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	let { data } = $props();

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<!-- Page wrapper with consistent background and text colors -->
<div class="min-h-screen bg-white dark:bg-gray-900">
	<article class="max-w-4xl mx-auto px-6 py-10 sm:py-14">
		<!-- Cover Image -->
		{#if coverImage}
			<img
				class="rounded-2xl w-full object-cover shadow-lg ring-2 ring-gray-200 dark:ring-gray-700 mb-8"
				src={coverImage}
				alt=""
				style="aspect-ratio: {coverWidth} / {coverHeight};"
				width={coverWidth}
				height={coverHeight}
			/>
		{/if}

		<!-- Title -->
		<h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
			{title}
		</h1>

		<!-- Meta Information -->
		<div class="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
			<div>
				<span class="font-semibold">Published:</span>
				<time>{date}</time>
			</div>
			{#if updated && updated !== date}
				<div>
					<span class="font-semibold">Updated:</span>
					<time>{updated}</time>
				</div>
			{/if}
		</div>

		<!-- Post Content with typography styles -->
		<div class="prose prose-lg dark:prose-invert max-w-none
			prose-headings:text-gray-900 dark:prose-headings:text-gray-100
			prose-p:text-gray-700 dark:prose-p:text-gray-50 dark:text-gray-300
			prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
			prose-strong:text-gray-900 dark:prose-strong:text-gray-100
			prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
			prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
			prose-blockquote:border-indigo-500 dark:prose-blockquote:border-indigo-400
			prose-img:rounded-lg prose-img:shadow-md">
			<PostContent />
		</div>

</div>