<script lang="ts">
	import GradientButton from 'flowbite-svelte/GradientButton.svelte';
	import { onMount } from 'svelte';
	import EnvelopeSolid from 'flowbite-svelte-icons/EnvelopeSolid.svelte';
	import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
	import LinkedinSolid from 'flowbite-svelte-icons/LinkedinSolid.svelte';

	const contact = {
		email: 'sharathsureshkumar@gmail.com',
		github: 'https://github.com/sharath-09',
		linkedin: 'https://www.linkedin.com/in/sharath-2b91a1178/'
	};

	onMount(() => {
		// Update state on mount to ensure sync
		isDarkMode = document.documentElement.classList.contains('dark');

		// Watch for theme changes
		const observer = new MutationObserver(() => {
			isDarkMode = document.documentElement.classList.contains('dark');
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	});

	let isDarkMode = $state(true);
	let buttonColor: string = $derived(isDarkMode ? 'purpleToBlue' : 'pinkToOrange');
</script>

<!-- Page wrapper -->
<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	<main class="max-w-5xl mx-auto px-6">
		<!-- Accessible SEO title -->
		<h1 class="sr-only">Contact Sharath</h1>

		<!-- Contact Section -->
		<section class="py-16 sm:py-20">
			<div class="text-center space-y-6">
				<h2
					class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
				>
					Get in Touch
				</h2>
				<p class="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
					I'm always interested in hearing about new opportunities, collaborations, or just
					connecting with fellow developers and researchers.
				</p>
			</div>

			<div class="mt-12 flex flex-col items-center gap-8">
				<!-- Email -->
				<div class="flex flex-col items-center gap-4 text-center">
					<div
						class="p-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600"
					>
						<EnvelopeSolid class="w-8 h-8 text-white" />
					</div>
					<div>
						<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h3>
						<a
							href="mailto:{contact.email}"
							class="text-indigo-600 dark:text-indigo-400 hover:underline"
						>
							{contact.email}
						</a>
					</div>
				</div>

				<span class="flex items-center w-full max-w-md">
					<span class="h-px flex-1 bg-gray-300 dark:bg-gray-700"></span>
					<span class="px-4 text-gray-500 dark:text-gray-400 text-sm">or connect on</span>
					<span class="h-px flex-1 bg-gray-300 dark:bg-gray-700"></span>
				</span>

				<!-- Social Links -->
				<div class="flex flex-wrap gap-4 justify-center">
					<GradientButton color={buttonColor} href={contact.github} class="gap-2">
						<GithubSolid class="w-5 h-5" />
						GitHub
					</GradientButton>
					<GradientButton color={buttonColor} href={contact.linkedin} class="gap-2">
						<LinkedinSolid class="w-5 h-5" />
						LinkedIn
					</GradientButton>
				</div>
			</div>

			<!-- Additional Info -->
			<div class="mt-16 text-center">
				<p class="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
					Whether you have a question about my work, want to discuss a project, or just want to
					say hi  I'll do my best to get back to you!
				</p>
			</div>
		</section>

		<!-- Footer -->
		<footer class="py-8 text-center text-xs text-gray-500">
			© {new Date().getFullYear()} Sharath. Built with SvelteKit + Tailwind + Flowbite.
		</footer>
	</main>
</div>
