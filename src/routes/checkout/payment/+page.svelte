<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { formatPrice, getProductById } from '$lib/data/products';
	import { cart as cartStore, cartTotals } from '$lib/stores/cart';
	import { checkout } from '$lib/stores/checkout';
	import { orders } from '$lib/stores/orders';
	import { placeOrder } from '$lib/order/placeOrder';

	let cardName = $state('');
	let cardLast4 = $state('');

	onMount(() => {
		if (get(cartStore).length === 0) {
			goto('/cart');
		}
	});

	const lines = $derived(
		$cartStore
			.map((l) => {
				const p = getProductById(l.productId);
				return p && !p.soldOut ? { line: l, product: p } : null;
			})
			.filter((x): x is NonNullable<typeof x> => x !== null)
	);

	function pay(e: Event) {
		e.preventDefault();
		const shipping = get(checkout);
		const order = placeOrder(shipping);
		if (order.lines.length === 0) {
			goto('/cart');
			return;
		}
		orders.add(order);
		cartStore.clear();
		checkout.reset();
		goto(`/orders/${encodeURIComponent(order.id)}`);
	}
</script>

<svelte:head>
	<title>Checkout — Payment | Digital Atelier</title>
</svelte:head>

<main class="mx-auto max-w-5xl px-8 pt-8 pb-24">
	<p class="font-label text-xs tracking-widest text-on-surface-variant uppercase">Checkout · Step 2 of 2</p>
	<h1 class="mt-2 font-headline text-4xl font-extrabold tracking-tighter">Review & Pay</h1>

	<div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
		<div class="space-y-8 lg:col-span-7">
			<div class="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-ambient">
				<h2 class="font-headline text-xl font-bold">Ship to</h2>
				{#if $checkout.fullName}
					<p class="mt-4 text-on-surface-variant">
						{$checkout.fullName}<br />
						{$checkout.address1}
						{$checkout.address2}<br />
						{$checkout.city}, {$checkout.state}
						{$checkout.postal}<br />
						{$checkout.country}
					</p>
				{:else}
					<p class="mt-4 text-on-surface-variant"><a href="/checkout/shipping" class="underline">Add shipping</a></p>
				{/if}
			</div>

			<div class="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-ambient">
				<h2 class="font-headline text-xl font-bold">Items</h2>
				<ul class="mt-6 space-y-4">
					{#each lines as { line, product } (product.id)}
						<li class="flex gap-4">
							<img
								src={product.images[0]}
								alt=""
								class="h-16 w-14 rounded-lg object-cover"
							/>
							<div class="flex-1">
								<p class="font-headline font-bold">{product.name}</p>
								<p class="text-sm text-on-surface-variant">Qty {line.qty}</p>
							</div>
							<p class="font-headline font-medium">{formatPrice(product.price * line.qty)}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="lg:col-span-5">
			<form
				class="space-y-6 rounded-xl border border-outline-variant/10 bg-surface-container-low p-8"
				onsubmit={pay}
			>
				<h2 class="font-headline text-xl font-bold">Mock payment</h2>
				<p class="text-sm text-on-surface-variant">No card is charged. Enter any values to complete the demo.</p>
				<div>
					<label class="font-label text-xs uppercase tracking-widest text-on-surface-variant" for="cardName"
						>Name on card</label
					>
					<input
						id="cardName"
						class="mt-2 w-full rounded-lg border-0 bg-surface-container-lowest px-4 py-3 focus:ring-2 focus:ring-tertiary-fixed"
						bind:value={cardName}
					/>
				</div>
				<div>
					<label class="font-label text-xs uppercase tracking-widest text-on-surface-variant" for="last4"
						>Last 4 digits (mock)</label
					>
					<input
						id="last4"
						maxlength={4}
						class="mt-2 w-full rounded-lg border-0 bg-surface-container-lowest px-4 py-3 focus:ring-2 focus:ring-tertiary-fixed"
						bind:value={cardLast4}
					/>
				</div>

				<div class="space-y-2 border-t border-outline-variant/15 pt-6 font-body text-sm">
					<div class="flex justify-between text-on-surface-variant">
						<span>Subtotal</span><span>{formatPrice($cartTotals.subtotal)}</span>
					</div>
					<div class="flex justify-between text-on-surface-variant">
						<span>Shipping</span
						><span>{$cartTotals.shippingCost === 0 ? 'Free' : formatPrice($cartTotals.shippingCost)}</span>
					</div>
					<div class="flex justify-between text-on-surface-variant">
						<span>Tax</span><span>{formatPrice($cartTotals.tax)}</span>
					</div>
					<div class="flex justify-between pt-2 font-headline text-lg font-bold">
						<span>Total</span><span>{formatPrice($cartTotals.total)}</span>
					</div>
				</div>

				<div class="flex flex-wrap gap-3 pt-4">
					<a
						href="/checkout/shipping"
						class="rounded-full bg-surface-container-highest px-6 py-3 font-bold text-on-surface">Back</a
					>
					<button
						type="submit"
						class="rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-transform hover:scale-[1.02]"
					>
						Place order
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
