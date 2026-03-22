<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
	<Nav />
	<div class="flex-1 pt-[4.5rem]">
		{@render children()}
	</div>
	<Footer />
</div>
