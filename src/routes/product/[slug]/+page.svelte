<script lang="ts">
	import { formatPrice } from '$lib/data/products';
	import { cart } from '$lib/stores/cart';

	let { data } = $props();
	const p = $derived(data.product);

	let qty = $state(1);

	function addToCart() {
		if (p.soldOut) return;
		cart.add(p.id, qty);
		qty = 1;
	}
</script>

<svelte:head>
	<title>{p.name} | Digital Atelier</title>
</svelte:head>

<main class="bg-surface pb-20 text-on-surface">
	<section class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 pt-8 lg:grid-cols-12">
		<div class="grid grid-cols-2 gap-4 lg:col-span-7">
			<div class="col-span-2 overflow-hidden rounded-xl bg-surface-container-lowest">
				<img
					alt={p.imageAlt}
					class="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
					src={p.images[0]}
				/>
			</div>
			{#if p.images[1]}
				<div class="overflow-hidden rounded-xl bg-surface-container-lowest">
					<img
						alt=""
						class="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
						src={p.images[1]}
					/>
				</div>
			{/if}
			{#if p.images[2]}
				<div class="overflow-hidden rounded-xl bg-surface-container-lowest">
					<img
						alt=""
						class="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
						src={p.images[2]}
					/>
				</div>
			{/if}
		</div>

		<div class="flex flex-col space-y-8 lg:col-span-5">
			<div>
				<span class="font-label text-xs tracking-[0.05em] text-on-surface-variant uppercase"
					>{p.subtitle}</span
				>
				<h1 class="mt-2 font-headline text-5xl font-extrabold tracking-tighter">{p.name}</h1>
				<p class="mt-4 font-headline text-2xl">{formatPrice(p.price)}</p>
			</div>
			<div class="space-y-4">
				<p class="font-body text-lg leading-relaxed text-on-surface-variant">{p.description}</p>
			</div>

			<div class="space-y-6 border-t border-outline-variant/20 pt-6">
				<div>
					<span class="mb-3 block font-label text-xs tracking-widest text-on-surface-variant uppercase"
						>Quantity</span
					>
					<div class="flex w-32 items-center justify-between rounded-full bg-surface-container-low px-4 py-2">
						<button
							type="button"
							class="text-on-surface-variant hover:text-primary"
							onclick={() => (qty = Math.max(1, qty - 1))}
						>
							<span class="material-symbols-outlined">remove</span>
						</button>
						<span class="font-bold">{qty}</span>
						<button type="button" class="text-on-surface-variant hover:text-primary" onclick={() => (qty += 1)}>
							<span class="material-symbols-outlined">add</span>
						</button>
					</div>
				</div>
			</div>

			<div class="flex flex-col space-y-3 pt-4">
				<button
					type="button"
					disabled={p.soldOut}
					class="btn-primary-gradient w-full rounded-full py-5 text-lg font-bold text-on-primary transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-40"
					onclick={addToCart}
				>
					{p.soldOut ? 'Sold Out' : 'Add to Cart'}
				</button>
				<a
					href="/shop"
					class="w-full rounded-full bg-surface-container-highest py-5 text-center font-bold text-on-surface transition-all hover:bg-surface-variant"
				>
					Continue Shopping
				</a>
			</div>

			{#if p.specs?.length}
				<div class="space-y-4 pt-8">
					<details class="group border-b border-outline-variant/20 pb-4" open>
						<summary
							class="flex cursor-pointer list-none items-center justify-between font-headline font-bold"
						>
							Product Specifications
							<span class="material-symbols-outlined transition-transform group-open:rotate-180"
								>expand_more</span
							>
						</summary>
						<div class="space-y-2 pt-4 font-body text-sm leading-relaxed text-on-surface-variant">
							{#each p.specs as line (line)}
								<p>• {line}</p>
							{/each}
						</div>
					</details>
					<details class="group border-b border-outline-variant/20 pb-4">
						<summary
							class="flex cursor-pointer list-none items-center justify-between font-headline font-bold"
						>
							Shipping & Returns
							<span class="material-symbols-outlined transition-transform group-open:rotate-180"
								>expand_more</span
							>
						</summary>
						<div class="pt-4 font-body text-sm leading-relaxed text-on-surface-variant">
							Complimentary carbon-neutral shipping on all orders over $500. Returns accepted within 30 days
							of delivery.
						</div>
					</details>
				</div>
			{/if}
		</div>
	</section>

	{#if p.reviews?.length}
		<section class="mx-auto max-w-7xl px-8 py-32">
			<div class="mb-16 flex flex-col items-end justify-between gap-6 sm:flex-row">
				<div>
					<h2 class="font-headline text-3xl font-extrabold text-on-surface">Community Reflections</h2>
					<p class="mt-2 text-on-surface-variant">4.8 / 5.0 average</p>
				</div>
				<button
					type="button"
					class="rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-transform hover:scale-105"
				>
					Write a Review
				</button>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each p.reviews as r (r.title)}
					<div class="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
						<p class="font-headline text-lg font-bold">{r.title}</p>
						<p class="mt-2 text-sm leading-relaxed text-on-surface-variant">{r.body}</p>
						<div class="mt-6 flex items-center gap-3">
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-xs font-bold"
							>
								{r.initials}
							</div>
							<span class="text-sm font-bold">{r.author}</span>
							<span class="text-xs text-on-surface-variant">{r.ago}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</main>
