<script lang="ts">
	
	import Card from 'flowbite-svelte/Card.svelte';
	import GradientButton from 'flowbite-svelte/GradientButton.svelte';
	import { onMount } from 'svelte';
	import ArrowUpRightFromSquareOutline from 'flowbite-svelte-icons/ArrowUpRightFromSquareOutline.svelte';
	import headshotImg from '$lib/assets/headshot.webp'

	// Update these with your real links/data
	const links = {
		resume: '/Sharath_Kumar_Resume.pdf',
		github: 'https://github.com/sharath-09',
		linkedin: 'https://www.linkedin.com/in/sharath-2b91a1178/',
		email: 'sharathkumar.parsley498@silomails.com'
	};

	const projectCards = [
		{
			title: 'Adversarial Attacks for Facial Recognition Systems',
			subheading: 'DICTA 2025 Publication',
			text: 'Investigating the effect of image preprocessing on Adversarial Attacks for Facial Recognition Systems.',
			link: 'https://arxiv.org/abs/2510.17169'
		},
		{
			title: '6DoF Pose Estimation of Ground Vehicles using Monocular RGB images',
			subheading: 'Research Study',
			text: 'Replicated a regression-based pose estimation method to directly regress the 6DoF coordinates of a ground vehicle',
			link: 'https://github.com/sharath-08/6dof-pose/blob/main/Topics__Final_Report.pdf'
		},
		{
			title: 'Vector Similarity Search',
			subheading: 'Self-learning Project',
			text: 'Implements a semantic search engine for RAG workflows in Go. Retrieve semantically similar sentence pairs from a database, given a query string. Optimised for speed.',
			link: 'https://github.com/sharath-09/vector-db'
		},
		{
			title: 'Match Head Movements to Music',
			subheading: 'Passion Project',
			text: 'Using keypoint tracking, to augment music to head motion in real-time. An interactive art + coding project.',
			link: 'https://github.com/sharath-09/face-tune'
		},
	];

	function scrollToTarget(targetID: string) {
		const targetElement = document.getElementById(targetID);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}

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

{#snippet projectCard(title: string, subheading: string, text: string, link: string)}
	<Card href={link} class="w-full sm:w-80 p-4 sm:p-6 md:p-8">
		<h5
			class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-start gap-2"
		>
			<span class="flex-1">{title}</span>
		</h5>
		<div
			class="mb-4 flex items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-3"
		>
			<p class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
				{subheading}
			</p>
			<ArrowUpRightFromSquareOutline class="shrink-0 h-6 w-6 text-gray-500 dark:text-gray-400" />
		</div>
		<p class="leading-relaxed font-normal text-gray-700 dark:text-gray-400">{text}</p>
	</Card>
{/snippet}

<!-- Page wrapper -->
<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	<main class="max-w-5xl mx-auto px-6">
		<!-- Accessible SEO title -->
		<h1 class="sr-only">Sharath — Machine Learning Engineer Portfolio</h1>

		<!-- Hero -->
		<section class="py-10 sm:py-14">
			<div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
				<img
					src={headshotImg}
					alt="Portrait of Sharath"
					loading="lazy"
					class="rounded-2xl w-28 h-28 sm:w-32 sm:h-32 object-cover shadow-lg ring-2 ring-orange-700/50 dark:ring-indigo-500/20
                 transition-transform duration-300 hover:scale-[1.03]"
				/>
				<div class="space-y-4 text-center sm:text-left">
					<p class="text-2xl sm:text-3xl font-semibold leading-snug">
						👋 Hi, I’m <span class="text-indigo-600 dark:text-indigo-400">Sharath</span>.
					</p>
					<p class="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
						A <span class="text-emerald-600 dark:text-emerald-400 font-medium"
							>Machine Learning Engineer</span
						>
						with a passion for
						<span class="text-pink-600 dark:text-pink-400 font-medium">AI/ML research</span> and
						building
						<span class="text-blue-600 dark:text-blue-400 font-medium"
							>elegant, scalable software</span
						>.
					</p>
					<div class="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
						<GradientButton color={buttonColor} onclick={() => scrollToTarget('projects-section')}
							>View Projects</GradientButton
						>
						<div class="flex gap-4 text-sm">
							<a href={links.github} class="hover:opacity-80" aria-label="GitHub">GitHub</a>
							<a href={links.linkedin} class="hover:opacity-80" aria-label="LinkedIn">LinkedIn</a>
							<a href="mailto:{links.email}" class="hover:opacity-80" aria-label="Email">Email</a>
						</div>
					</div>
				</div>
			</div>

			<span class="flex items-center py-5 sm:py-7">
				<span class="h-px flex-1 bg-gray-300"></span>
				<span class="h-px flex-1 bg-gray-300"></span>
			</span>

			<section class="py-16">
				<div class="text-center">
					<h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
						About Me
					</h2>
					<p
						class="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
					>
						I’ve spent the past few years designing and deploying AI/ML solutions in defence,
						fintech, and beyond — from computer vision systems and generative audio to large-scale
						LLM workflows. I thrive at the intersection of research and engineering: taking
						cutting-edge ideas and turning them into reliable, scalable software.
					</p>
				</div>

				<div class="text-center mt-12">
					<h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
						Skills
					</h2>
					<ul class="flex flex-wrap justify-center gap-3 list-none p-0 mt-4">
						<li
							class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm"
						>
							Python
						</li>
						<li
							class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm"
						>
							GoLang
						</li>
						<li
							class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm"
						>
							C++
						</li>
						<li
							class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full text-sm"
						>
							JavaScript
						</li>
					</ul>
				</div>

				<div id="projects-section" class="text-center mt-12">
					<h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
						Projects
					</h2>
					<div class="flex flex-col sm:flex-row flex-wrap items-stretch gap-6 justify-center mt-6">
						{#each projectCards as card}
							{@render projectCard(card['title'], card['subheading'], card['text'], card['link'])}
						{/each}
					</div>
				</div>
			</section>

			<!-- Footer -->
			<footer class="py-8 text-center text-xs text-gray-500">
				© {new Date().getFullYear()} Sharath. Built with SvelteKit + Tailwind + Flowbite.
			</footer>
		</section>
	</main>
</div>
