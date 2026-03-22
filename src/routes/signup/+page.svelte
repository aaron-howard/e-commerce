<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';

	let name = $state('');
	let email = $state('');

	function submit(e: Event) {
		e.preventDefault();
		auth.signIn();
		goto('/account');
	}
</script>

<svelte:head>
	<title>Create account | Digital Atelier</title>
</svelte:head>

<main class="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-8 py-16">
	<h1 class="font-headline text-4xl font-extrabold tracking-tighter">Join the Atelier</h1>
	<p class="mt-2 text-on-surface-variant">Mock registration — no data is sent anywhere.</p>

	<form class="mt-10 space-y-6" onsubmit={submit}>
		<div>
			<label class="font-label text-xs uppercase tracking-widest text-on-surface-variant" for="name">Name</label>
			<input
				id="name"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={name}
			/>
		</div>
		<div>
			<label class="font-label text-xs uppercase tracking-widest text-on-surface-variant" for="email">Email</label>
			<input
				id="email"
				type="email"
				class="mt-2 w-full rounded-lg border-0 bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-tertiary-fixed"
				bind:value={email}
				required
			/>
		</div>
		<button
			type="submit"
			class="w-full rounded-full bg-primary py-4 font-bold text-on-primary transition-transform hover:scale-[1.02]"
		>
			Create account
		</button>
	</form>

	<p class="mt-8 text-center text-sm text-on-surface-variant">
		Already a member?
		<a href="/login" class="font-bold text-on-surface underline">Sign in</a>
	</p>
</main>
