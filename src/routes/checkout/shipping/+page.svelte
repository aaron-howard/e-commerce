<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { cart } from '$lib/stores/cart';
	import { checkout } from '$lib/stores/checkout';
	import { emptyShipping, type ShippingInfo } from '$lib/types/shipping';

	let s = $state<ShippingInfo>(emptyShipping());

	onMount(() => {
		if (get(cart).length === 0) {
			goto('/cart');
			return;
		}
		s = { ...emptyShipping(), ...get(checkout) };
	});

	function next(e: Event) {
		e.preventDefault();
		checkout.patch(s);
		goto('/checkout/payment');
	}
</script>

<svelte:head>
	<title>Checkout — Shipping | Digital Atelier</title>
</svelte:head>

<main class="mx-auto max-w-3xl px-8 pt-8 pb-24">
	<p class="font-label text-xs tracking-widest text-on-surface-variant uppercase">Checkout · Step 1 of 2</p>
	<h1 class="mt-2 font-headline text-4xl font-extrabold tracking-tighter">Shipping</h1>

	<form class="mt-10 space-y-6" onsubmit={next}>
		<div>
			<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="fullName"
				>Full name</label
			>
			<input
				id="fullName"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={s.fullName}
				required
			/>
		</div>
		<div>
			<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="address1"
				>Address</label
			>
			<input
				id="address1"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={s.address1}
				required
			/>
		</div>
		<div>
			<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="address2"
				>Apt / Suite (optional)</label
			>
			<input
				id="address2"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={s.address2}
			/>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="city">City</label>
				<input
					id="city"
					class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
					bind:value={s.city}
					required
				/>
			</div>
			<div>
				<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="state">State</label>
				<input
					id="state"
					class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
					bind:value={s.state}
					required
				/>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="postal"
					>Postal code</label
				>
				<input
					id="postal"
					class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
					bind:value={s.postal}
					required
				/>
			</div>
			<div>
				<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="phone">Phone</label>
				<input
					id="phone"
					type="tel"
					class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
					bind:value={s.phone}
					required
				/>
			</div>
		</div>
		<div>
			<label class="font-label text-xs tracking-widest text-on-surface-variant uppercase" for="country">Country</label>
			<input
				id="country"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 text-on-surface focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={s.country}
			/>
		</div>

		<div class="flex flex-wrap gap-4 pt-6">
			<a
				href="/cart"
				class="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-on-surface hover:bg-surface-container-high"
				>Back</a
			>
			<button
				type="submit"
				class="rounded-full bg-primary px-10 py-4 font-bold text-on-primary transition-transform hover:scale-[1.02]"
			>
				Continue to payment
			</button>
		</div>
	</form>
</main>
