<script lang="ts">
	import { auth } from '$lib/stores/auth';
</script>

<svelte:head>
	<title>Account | Digital Atelier</title>
</svelte:head>

<main class="mx-auto max-w-3xl px-8 py-16">
	{#if !$auth.signedIn}
		<div class="rounded-xl bg-surface-container-low p-12 text-center">
			<h1 class="font-headline text-3xl font-bold">Sign in to view your profile</h1>
			<p class="mt-4 text-on-surface-variant">This MVP uses mock authentication stored in your browser.</p>
			<a
				href="/login"
				class="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-bold text-on-primary"
			>
				Sign in
			</a>
		</div>
	{:else if $auth.user}
		<h1 class="font-headline text-4xl font-extrabold tracking-tighter">Profile</h1>
		<p class="mt-2 text-on-surface-variant">{$auth.user.tier} · Member since {$auth.user.memberSince}</p>

		<div class="mt-12 space-y-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8">
			<div>
				<p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Name</p>
				<p class="mt-1 font-headline text-xl font-bold">{$auth.user.name}</p>
			</div>
			<div>
				<p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email</p>
				<p class="mt-1">{$auth.user.email}</p>
			</div>
			<div>
				<p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Phone</p>
				<p class="mt-1">{$auth.user.phone}</p>
			</div>
		</div>

		<button
			type="button"
			class="mt-10 rounded-full border border-outline-variant/30 px-8 py-3 font-bold text-on-surface hover:bg-surface-container-low"
			onclick={() => auth.signOut()}
		>
			Sign out
		</button>
	{/if}
</main>
