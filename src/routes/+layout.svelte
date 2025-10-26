<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	import { page } from '$app/state';
	let activeUrl = $derived(page.url.pathname);

	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import NavBrand from 'flowbite-svelte/NavBrand.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
	import DarkMode from 'flowbite-svelte/DarkMode.svelte';

	let { children } = $props();
	import '../app.css';

</script>

<svelte:head>
	<link rel="icon" href={favicon}/>
</svelte:head>

<Navbar>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sharath</span>
	</NavBrand>

	<div class="flex items-center gap-2 md:order-2">
		<DarkMode
			class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
			aria-label="Toggle dark mode"
		/>
	</div>

	<NavUl class="order-1" {activeUrl}>
		<NavLi href={resolve("/")}>home</NavLi>
		<NavLi href={resolve("/blog")}>blog</NavLi>
		<NavLi href={resolve("/contact")}>contact</NavLi>
	</NavUl>
</Navbar>

{@render children?.()}
