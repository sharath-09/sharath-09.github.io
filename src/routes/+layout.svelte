<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

  import { page } from "$app/state";
  import {Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname)

  import { DarkMode } from "flowbite-svelte";

	let { children } = $props();
  import "../app.css"
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sharath</span>
  </NavBrand>

  <div class="flex items-center gap-2 md:order-2">
    <DarkMode class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle dark mode" />
    <NavHamburger />
  </div>

  <NavUl class="order-1" {activeUrl}>
    <NavLi href="/">home</NavLi>
    <NavLi href="/projects">projects</NavLi>
    <NavLi href="/blog">blog</NavLi>
    <NavLi href="/contact">contact</NavLi>
  </NavUl>
</Navbar>



{@render children?.()}
