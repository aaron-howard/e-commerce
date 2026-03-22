<script lang="ts">
	import { goto } from '$app/navigation';
	import { getProductById, formatPrice } from '$lib/data/products';
	import { cart, cartTotals } from '$lib/stores/cart';

	const lines = $derived(
		$cart.flatMap((l) => {
			const p = getProductById(l.productId);
			return p ? [{ line: l, product: p }] : [];
		})
	);

	function updateQty(productId: string, delta: number) {
		const l = $cart.find((x) => x.productId === productId);
		if (!l) return;
		cart.setQty(productId, l.qty + delta);
	}
</script>

<svelte:head>
	<title>Your Cart | Digital Atelier</title>
</svelte:head>

<main class="mx-auto max-w-7xl px-8 pt-8 pb-24">
	<div class="mb-16">
		<h1 class="mb-4 font-headline text-6xl font-extrabold tracking-tighter text-on-surface md:text-7xl">
			Your Selection
		</h1>
		<p class="max-w-lg text-lg leading-relaxed text-on-surface-variant">
			Curated architectural pieces for the modern home. Review your items before proceeding to secure checkout.
		</p>
	</div>

	{#if lines.length === 0}
		<div class="rounded-xl bg-surface-container-low p-12 text-center">
			<p class="text-on-surface-variant">Your cart is empty.</p>
			<a href="/shop" class="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-bold text-on-primary">
				Shop the catalog
			</a>
		</div>
	{:else}
		<div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
			<div class="space-y-12 lg:col-span-8">
				{#each lines as { line, product } (product.id)}
					<div class="group flex flex-col items-start gap-8 border-b border-outline-variant/20 pb-12 md:flex-row">
						<a href="/product/{product.slug}" class="aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-container-low md:w-48 shrink-0">
							<img
								alt={product.imageAlt}
								class="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
								src={product.images[0]}
							/>
						</a>
						<div class="flex min-h-full flex-grow flex-col justify-between py-2">
							<div>
								<div class="mb-2 flex flex-wrap items-start justify-between gap-2">
									<a href="/product/{product.slug}" class="font-headline text-2xl font-bold tracking-tight"
										>{product.name}</a
									>
									<p class="font-headline text-xl font-medium">{formatPrice(product.price * line.qty)}</p>
								</div>
								<p class="mb-6 font-body text-on-surface-variant">{product.subtitle}</p>
							</div>
							<div class="mt-auto flex flex-wrap items-center justify-between gap-4">
								<div class="flex items-center rounded-full bg-surface-container-low px-4 py-2">
									<button
										type="button"
										class="hover:text-primary"
										onclick={() => updateQty(product.id, -1)}
									>
										<span class="material-symbols-outlined text-sm">remove</span>
									</button>
									<span class="mx-6 text-sm font-medium">{String(line.qty).padStart(2, '0')}</span>
									<button
										type="button"
										class="hover:text-primary"
										onclick={() => updateQty(product.id, 1)}
										disabled={product.soldOut}
									>
										<span class="material-symbols-outlined text-sm">add</span>
									</button>
								</div>
								<button
									type="button"
									class="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-error"
									onclick={() => cart.remove(product.id)}
								>
									<span class="material-symbols-outlined text-lg">delete</span>
									Remove
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<aside class="lg:col-span-4 lg:sticky lg:top-28">
				<div class="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm">
					<h2 class="mb-10 font-headline text-3xl font-bold tracking-tighter">Order Summary</h2>
					<div class="space-y-6 font-body">
						<div class="flex justify-between text-on-surface-variant">
							<span>Subtotal</span>
							<span class="font-medium text-on-surface">{formatPrice($cartTotals.subtotal)}</span>
						</div>
						<div class="flex justify-between text-on-surface-variant">
							<span>Shipping</span>
							<span class="font-medium text-on-tertiary-container"
								>{$cartTotals.shippingCost === 0 ? 'Free' : formatPrice($cartTotals.shippingCost)}</span
							>
						</div>
						<div class="flex justify-between text-on-surface-variant">
							<span>Tax (est.)</span>
							<span class="font-medium text-on-surface">{formatPrice($cartTotals.tax)}</span>
						</div>
						<div class="mt-8 border-t border-outline-variant/20 pt-8">
							<div class="mb-10 flex items-end justify-between">
								<span class="font-headline text-xl font-bold">Total</span>
								<span class="font-headline text-3xl font-bold">{formatPrice($cartTotals.total)}</span>
							</div>
							<button
								type="button"
								class="w-full rounded-full bg-primary py-5 font-headline text-lg font-bold text-on-primary transition-transform hover:scale-[1.02]"
								onclick={() => goto('/checkout/shipping')}
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			</aside>
		</div>
	{/if}
</main>
