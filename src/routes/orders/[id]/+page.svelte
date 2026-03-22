<script lang="ts">
	import { formatPrice } from '$lib/data/products';

	let { data } = $props();
	const order = $derived(data.order);
</script>

<svelte:head>
	<title>Order {order.id} | Digital Atelier</title>
</svelte:head>

<main class="mx-auto max-w-3xl px-8 py-16">
	<p class="font-label text-xs tracking-widest text-on-tertiary-container uppercase">Order confirmed</p>
	<h1 class="mt-2 font-headline text-3xl font-extrabold tracking-tighter">Thank you</h1>
	<p class="mt-4 text-on-surface-variant">
		Order <span class="font-mono font-bold text-on-surface">{order.id}</span> is {order.status.toLowerCase()}.
	</p>

	{#if order.tracking}
		<div class="mt-8 rounded-xl bg-surface-container-low p-6">
			<p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Tracking (mock)</p>
			<p class="mt-2 font-mono text-lg">{order.tracking}</p>
			{#if order.eta}<p class="mt-1 text-sm text-on-surface-variant">ETA: {order.eta}</p>{/if}
		</div>
	{/if}

	<div class="mt-10 space-y-4">
		<h2 class="font-headline text-xl font-bold">Items</h2>
		{#each order.lines as line (line.productId + line.slug)}
			<div class="flex gap-4 border-b border-outline-variant/15 py-4">
				<img src={line.image} alt="" class="h-20 w-16 rounded-lg object-cover" />
				<div class="flex-1">
					<p class="font-headline font-bold">{line.name}</p>
					<p class="text-sm text-on-surface-variant">Qty {line.qty}</p>
				</div>
				<p class="font-headline font-medium">{formatPrice(line.unitPrice * line.qty)}</p>
			</div>
		{/each}
	</div>

	<div class="mt-10 space-y-2 font-body text-sm">
		<div class="flex justify-between">
			<span class="text-on-surface-variant">Subtotal</span><span>{formatPrice(order.subtotal)}</span>
		</div>
		<div class="flex justify-between">
			<span class="text-on-surface-variant">Shipping</span
			><span>{order.shippingCost === 0 ? 'Free' : formatPrice(order.shippingCost)}</span>
		</div>
		<div class="flex justify-between">
			<span class="text-on-surface-variant">Tax</span><span>{formatPrice(order.tax)}</span>
		</div>
		<div class="flex justify-between pt-2 font-headline text-lg font-bold">
			<span>Total</span><span>{formatPrice(order.total)}</span>
		</div>
	</div>

	<div class="mt-10 rounded-xl bg-surface-container-low p-6">
		<h2 class="font-headline font-bold">Ship to</h2>
		<p class="mt-2 text-on-surface-variant">
			{order.shipping.fullName}<br />
			{order.shipping.address1}
			{order.shipping.address2}<br />
			{order.shipping.city}, {order.shipping.state}
			{order.shipping.postal}<br />
			{order.shipping.country}
		</p>
	</div>

	<a href="/shop" class="mt-10 inline-block rounded-full bg-primary px-8 py-3 font-bold text-on-primary">
		Continue shopping
	</a>
</main>
