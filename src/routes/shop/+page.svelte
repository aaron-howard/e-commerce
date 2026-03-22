<script lang="ts">
	import { page } from '$app/state';
	import { products, formatPrice } from '$lib/data/products';
	import { cart } from '$lib/stores/cart';

	let search = $state('');
	let categoryFilter = $state('');
	const collection = $derived(page.url.searchParams.get('collection') ?? '');

	const filtered = $derived.by(() => {
		let list = products;
		if (collection) {
			list = list.filter((p) => p.collections.includes(collection));
		}
		if (categoryFilter) {
			list = list.filter((p) => p.category === categoryFilter);
		}
		const q = search.trim().toLowerCase();
		if (q) {
			list = list.filter(
				(p) =>
					p.name.toLowerCase().includes(q) ||
					p.subtitle.toLowerCase().includes(q) ||
					p.category.includes(q)
			);
		}
		return list;
	});

	function quickAdd(e: MouseEvent, productId: string, soldOut?: boolean) {
		e.preventDefault();
		e.stopPropagation();
		if (soldOut) return;
		cart.add(productId, 1);
	}
</script>

<svelte:head>
	<title>Shop | Digital Atelier</title>
</svelte:head>

<main class="bg-surface pb-24">
	<section class="border-b border-outline-variant/10 bg-surface-container-low px-8 py-24">
		<div class="mx-auto max-w-7xl">
			<span class="font-label text-xs tracking-[0.2em] text-on-tertiary-container uppercase"
				>Index 01 — Catalog</span
			>
			<h1
				class="mt-4 max-w-2xl font-headline text-5xl leading-[0.9] font-extrabold tracking-tighter text-on-surface md:text-7xl"
			>
				Objects for <br /> Quiet Living
			</h1>
			<p class="mt-8 max-w-xl text-lg text-on-surface-variant">
				A study in material honesty. Each piece is selected for its structural integrity and tactile presence.
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-8 py-16">
		<div class="flex flex-col gap-12 lg:flex-row">
			<aside class="hidden w-64 shrink-0 space-y-12 lg:block">
				<div>
					<h3 class="font-headline text-sm font-bold tracking-widest text-on-surface uppercase">
						Categories
					</h3>
					<div class="mt-4 flex flex-col gap-2">
						<button
							type="button"
							class="text-left text-sm text-on-surface-variant hover:text-on-surface {!categoryFilter
								? 'font-bold text-on-surface'
								: ''}"
							onclick={() => (categoryFilter = '')}>All types</button
						>
						{#each ['lighting', 'seating', 'decor', 'storage', 'tables', 'timepieces', 'apparel'] as c (c)}
							<button
								type="button"
								class="text-left text-sm capitalize text-on-surface-variant hover:text-on-surface {categoryFilter ===
								c
									? 'font-bold text-on-surface'
									: ''}"
								onclick={() => (categoryFilter = c)}>{c}</button
							>
						{/each}
					</div>
				</div>
				<div>
					<h3 class="font-headline text-sm font-bold tracking-widest text-on-surface uppercase">
						Search
					</h3>
					<input
						type="search"
						bind:value={search}
						placeholder="Search curated pieces..."
						class="mt-4 w-full rounded-full border-0 bg-surface-container-low px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
					/>
				</div>
			</aside>

			<div class="min-w-0 flex-1 space-y-8">
				<div
					class="flex flex-col items-start justify-between gap-4 border-b border-outline-variant/10 pb-8 sm:flex-row sm:items-center"
				>
					<span class="font-label text-xs tracking-wide text-on-surface-variant">
						Showing {filtered.length} result{filtered.length === 1 ? '' : 's'}
						{#if collection}
							· <span class="text-on-surface">collection:{collection}</span>
						{/if}
					</span>
				</div>

				<div class="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
					{#each filtered as p (p.id)}
						<div class="group">
							<a href="/product/{p.slug}" class="relative mb-6 block aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low">
								<img
									alt={p.imageAlt}
									class="h-full w-full object-cover grayscale-[0.5] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
									src={p.images[0]}
								/>
								{#if p.limited}
									<span
										class="absolute top-4 left-4 rounded-full bg-on-tertiary-container px-3 py-1 font-label text-[10px] tracking-wider text-on-tertiary uppercase"
										>Limited Release</span
									>
								{/if}
								{#if p.soldOut}
									<span
										class="absolute top-4 left-4 rounded-full bg-error-container px-3 py-1 font-label text-[10px] font-bold tracking-wider text-on-error-container uppercase"
										>Sold Out</span
									>
								{/if}
								<div
									class="absolute right-4 bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
								>
									<button
										type="button"
										class="w-full rounded-full bg-primary py-3 font-label text-xs tracking-widest text-on-primary uppercase disabled:opacity-40"
										disabled={p.soldOut}
										onclick={(e) => quickAdd(e, p.id, p.soldOut)}
									>
										Quick Add
									</button>
								</div>
							</a>
							<div class="space-y-1">
								<a href="/product/{p.slug}" class="font-headline text-lg font-bold text-on-surface"
									>{p.name}</a
								>
								<div class="flex items-baseline justify-between">
									<p class="font-body text-sm text-on-surface-variant">{p.subtitle}</p>
									<p class="font-headline text-lg font-bold text-on-surface">{formatPrice(p.price)}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
