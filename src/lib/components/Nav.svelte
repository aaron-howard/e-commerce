<script lang="ts">
	import { page } from '$app/state';
	import { cartItemCount } from '$lib/stores/cart';
	import { auth } from '$lib/stores/auth';

	const path = $derived(page.url.pathname);

	function linkClass(href: string, exact = false): string {
		const active = exact ? path === href : path === href || path.startsWith(href + '/');
		const base =
			'pb-1 transition-colors font-headline text-sm font-medium tracking-tight';
		if (active) {
			return `${base} text-on-surface border-b-2 border-primary`;
		}
		return `${base} text-on-surface-variant hover:text-on-surface`;
	}
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-outline-variant/15 bg-surface-container-lowest/80 backdrop-blur-[20px]"
>
	<div class="mx-auto flex max-w-[100%] items-center justify-between px-8 py-4">
		<div class="flex items-center gap-12">
			<a href="/" class="font-headline text-2xl font-black tracking-tighter text-on-surface">
				Digital Atelier
			</a>
			<div class="hidden items-center gap-8 md:flex">
				<a class={linkClass('/shop')} href="/shop">Shop</a>
				<a class={linkClass('/collections')} href="/collections">Collections</a>
				<a class={linkClass('/journal')} href="/journal">Editorial</a>
				<a class={linkClass('/about')} href="/about">About</a>
			</div>
		</div>
		<div class="flex items-center gap-6">
			<a
				href="/cart"
				class="relative text-on-surface transition-opacity hover:opacity-70"
				aria-label="Shopping cart"
			>
				<span class="material-symbols-outlined">shopping_cart</span>
				{#if $cartItemCount > 0}
					<span
						class="absolute -top-2 -right-2 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-on-primary"
					>
						{$cartItemCount > 99 ? '99+' : $cartItemCount}
					</span>
				{/if}
			</a>
			<a
				href={$auth.signedIn ? '/account' : '/login'}
				class="text-on-surface transition-opacity hover:opacity-70"
				aria-label={$auth.signedIn ? 'Account' : 'Sign in'}
			>
				<span class="material-symbols-outlined">person</span>
			</a>
		</div>
	</div>
</nav>
