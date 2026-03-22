<script lang="ts">
	import { products, formatPrice } from '$lib/data/products';

	const featured = products.filter((p) =>
		['structure-blazer-01', 'essential-oxford', 'selvedge-denim', 'heavyweight-shell'].includes(p.slug)
	);
</script>

<svelte:head>
	<title>Digital Atelier — The Architecture of Modern Essentials</title>
</svelte:head>

<main>
	<section class="relative flex min-h-[640px] items-center overflow-hidden bg-surface px-8 md:min-h-[921px] md:px-16">
		<div class="relative z-10 max-w-4xl">
			<span
				class="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-[0.75rem] font-bold tracking-[0.1em] text-on-primary uppercase"
			>
				New Season SS24
			</span>
			<h1
				class="mb-8 font-headline text-5xl leading-[0.9] font-extrabold tracking-tighter text-on-surface md:text-[5.5rem]"
			>
				THE ARCHITECTURE <br /> OF MODERN <br />
				<span class="text-on-primary-container">ESSENTIALS</span>
			</h1>
			<p class="mb-10 max-w-lg text-lg leading-relaxed text-on-surface-variant md:text-xl">
				A curated collection where form meets absolute function. Designed for the digital nomad who values
				precision over clutter.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="/shop"
					class="rounded-full bg-primary px-10 py-4 font-bold text-on-primary shadow-lg shadow-primary/10 transition-transform active:scale-95"
				>
					Shop Collection
				</a>
				<a
					href="/journal"
					class="rounded-full bg-surface-container-highest px-10 py-4 font-bold text-on-surface transition-colors hover:bg-surface-container-high"
				>
					View Lookbook
				</a>
			</div>
		</div>
		<div
			class="pointer-events-none absolute top-1/2 right-0 h-full w-full -translate-y-1/2 md:h-[110%] md:w-1/2"
		>
			<div
				class="h-full w-full translate-x-8 translate-y-8 rotate-2 overflow-hidden rounded-l-[5rem] bg-surface-container-low shadow-2xl"
			>
				<img
					alt="Minimalist editorial portrait featuring structured neutral clothing"
					class="h-full w-full scale-110 -rotate-2 object-cover opacity-90 mix-blend-multiply"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73SmoUTth1cyPMWidnr6G5hTL4Pg8khSCDr_bHnyXFeOuO5sJrgDblF9LSw3qjkyjHiX-Kp75V5vICicH9gfIxzb64JvDGm4qioWGbXS6a1GVVg41VJIysM77S27iUAni-LGE-wXdnJhPJDpPsc-ympK_Od6oi1Pfu8gsyyUlUV0MYISdJ8y75BNpY-6V2xev8KkbYSzm2FhVh1oHgOhetrIYkrVmVYpheo2B7pWOZFsmEd-PixJJoJQKk_P3vYmhaNIAWMjLv6c"
				/>
			</div>
		</div>
	</section>

	<section class="bg-surface-container-low px-8 py-24">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 flex items-end justify-between">
				<div>
					<h2 class="mb-4 font-headline text-4xl font-bold tracking-tighter text-on-surface">
						Curated Verticals
					</h2>
					<p class="text-on-surface-variant">Precision-engineered pieces for every environment.</p>
				</div>
				<a
					href="/shop"
					class="border-b-2 border-primary pb-1 font-bold text-primary transition-opacity hover:opacity-70"
				>
					Explore All
				</a>
			</div>
			<div class="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
				<a
					href="/shop?collection=archive"
					class="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-8"
				>
					<img
						alt="Monochrome minimalist wardrobe essentials"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAES9XHyz_MGpkxbVXcTsKAu8uq-2iu9dmUok3IL7YwuJ8Ng7OfgBzJWCF7UuN_iapXKseOyaazpC6NkWEufV46cB1qPvnYClmmUFvBdiQI28RxIMdroAtX6oHjc5hgFidAoJSJVIYaBfhwKzcQyfHr_OFhafjHl5Hp6qdkAdeyc3KA3UMRuTV4f2m9GiqMOlwJc0gVeuawBI57SwbIRRsWl8VdW9XcNO6u3fWtp9LBxk7ioVVdLNQXrfcdEkDUbdmL_bc0UqRR0g"
					/>
					<div
						class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-10"
					>
						<h3 class="mb-2 font-headline text-3xl font-bold text-white">The Minimalist</h3>
						<p class="max-w-xs text-white/80">Clean lines for the office and beyond.</p>
					</div>
				</a>
				<a
					href="/shop?collection=layering"
					class="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-4"
				>
					<img
						alt="Casual high-quality cotton shirts stacked neatly"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY1ZkNqcyfWueXQ9kkUPRw8oBb22CsCtIz5XlsXMHCmG1Lp88hMiA9fNlDq8zkWpMRuyUnz-5zwzbWiSU3JyYbacuYGi5BsCspzKaEC88zMOCf2FtaEbugehVmOC7PsGCzQ7-3ejpPIqT-UWJQ9x5WAanRyZo8epEoDBp1m19EpbjGLh-bad6VbUiOSvbxnNYqCSvJu-A9upSg5w3f40MqMrwwTkDX9PYYkKU1joOSg4pwjzdNvr8V8RsaZCG7_ArfyTdQcM4_tyM"
					/>
					<div
						class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-10"
					>
						<h3 class="mb-2 font-headline text-3xl font-bold text-white">Loungewear</h3>
						<p class="text-white/80">Refined comfort at home.</p>
					</div>
				</a>
				<a
					href="/product/atelier-chrono-01"
					class="group relative h-64 overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-4 md:h-auto"
				>
					<img
						alt="Sleek modern wrist watch with metallic band"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlszqcGhKKHh9HL0PkFQI87hWY3843Gt3U78vaF1VU1Ia1B6vBfdL__QrO6y_xegn8u8lV-JRpo8H840Ee6-xHNXaBUICvVW9hCETLs8QApBmnIBkDdecKcZ1blTunD9S00FaaDQhR478xw61pvXl-QAtXDcn8iu7YD5n0e3rbxiQcIKjJzMedC_9jRokyb0Y5lKy1ktoA4Zv_oF3hUiQLv8oWeHa-BXeqteYSOWrNMj2lr-qCqmrtSQjWWQh9bIB85IfjqegKSaY"
					/>
					<div
						class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-10"
					>
						<h3 class="mb-1 font-headline text-2xl font-bold text-white">Timepieces</h3>
					</div>
				</a>
				<a
					href="/shop?collection=new-arrivals"
					class="group relative h-64 overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-8 md:h-auto"
				>
					<img
						alt="Premium leather handbag detail"
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdxTlIjR6t9PqhyIzMzc19l7jALgZF212ZoX4gQtIFRn2sy__aw0ygIjLUnwLgZE_XeHGsrSvhWAt7s7QMEuVbZ7V2TQzu48z3DLu8sT_uWK5Desr978tKSkkxtMAkxo-z3UGkyJkdJ0IULueeR7H89OnYC4T_GbTbr-RdWOYzQ4RV7Ee_aDXJLz3FrSlGfehmFEKg_gVDXeJxmXdhRjYGaIqLXp4vp5tKjPgPICtx6y6Vry5EN39SwvJd8u13qhrDPYjp0LgtGI"
					/>
					<div
						class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-10"
					>
						<h3 class="mb-1 font-headline text-2xl font-bold text-white">Accessories</h3>
					</div>
				</a>
			</div>
		</div>
	</section>

	<section class="bg-surface px-8 py-24">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<span class="mb-4 block text-sm font-bold tracking-widest text-on-tertiary-container uppercase"
					>Selected Works</span
				>
				<h2 class="font-headline text-4xl font-extrabold tracking-tighter text-on-surface md:text-5xl">
					The Seasonal Edit
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{#each featured as p (p.id)}
					<div class="group">
						<a
							href="/product/{p.slug}"
							class="relative mb-6 block aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-lowest"
						>
							<img
								alt={p.imageAlt}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								src={p.images[0]}
							/>
							{#if p.soldOut}
								<div
									class="absolute top-4 left-4 rounded-full bg-tertiary-fixed px-3 py-1 text-xs font-bold text-on-tertiary-fixed"
								>
									Sold Out
								</div>
							{/if}
						</a>
						<a href="/product/{p.slug}" class="font-headline text-lg font-bold text-on-surface">{p.name}</a>
						<div class="mt-1 flex items-center justify-between">
							<span class="font-body text-on-surface-variant">{p.subtitle}</span>
							<span class="font-headline font-bold">{formatPrice(p.price)}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-8 py-16">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[3rem] bg-primary-container text-white md:flex-row"
		>
			<div class="p-12 md:w-1/2 md:p-20">
				<h2 class="mb-6 font-headline text-4xl font-black tracking-tighter md:text-6xl">
					THE ATELIER <br /> MEMBERSHIP
				</h2>
				<p class="mb-8 text-lg leading-relaxed text-on-primary-container">
					Early access to limited drops, private editorial content, and complimentary global shipping on all
					orders.
				</p>
				<a
					href="/signup"
					class="inline-block rounded-full bg-tertiary-fixed px-8 py-4 font-bold text-on-tertiary-fixed transition-transform hover:scale-105"
				>
					Join the Circle
				</a>
			</div>
			<div class="h-full min-h-[280px] w-full md:w-1/2 md:min-h-[400px]">
				<img
					alt="Interior of a luxury minimalist boutique"
					class="h-full w-full object-cover grayscale brightness-75 contrast-125"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WTV0cyZ4eqEV043OSoCj08f9GqT23wsTu91hUdaN8_JCK9n0PK2GGnyqPGhoGPqF2fVJHSJEhu2qZEnUvw6rHpH7zZk89pUTpnMp5xSV0E_WCxdNZ2nf3RnAq-2aSxMhxg_703D9w9Ikb3j95B0t7m_emodVINK2q-bmI6CCsM8_8IXVVInKAGrf4Rf2foDSrEfdeh-LddMAxI0MnZ_4My8ybE1UOozvrEdYDahbCx9q71Cx1XzRV2-mTvw5jP7j55cZpfo-lW0"
				/>
			</div>
		</div>
	</section>
</main>
