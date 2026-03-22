<script lang="ts">
	import { collections } from '$lib/data/collections';
</script>

<svelte:head>
	<title>Collections | Digital Atelier</title>
</svelte:head>

<main>
	<section
		class="relative mx-8 mt-4 flex h-[min(870px,85vh)] items-center justify-center overflow-hidden rounded-xl"
	>
		<div class="absolute inset-0 z-0">
			<img
				alt="Minimalist architectural interior with soft lighting"
				class="h-full w-full object-cover brightness-90 grayscale"
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuAur1qFLqu4EuTPWTYu--p91IA-pxOYUhXOYe2inpVKIN5RcCwWG-eCKgAeMCg-KYek_Q-g7PGPT2K7LzYhrkQiVp4E1JnDXsPJOOT4Z7qFPt56yEHV1_PJVEifLGPSK1jMkVevpVTGdq7V17a-4_MDTAZF7dGnC3eQKrLmnFSymZjK3PEUwXMkJNjlQJd2Clap4-wGJsTsL6t12dlcaZXWwLCxeDglcoR0Gt9g218pAQvZcLtWSzQecTIlLi2zu-AwaLUtkyVOCSg"
			/>
			<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
		</div>
		<div class="relative z-10 text-center">
			<h1 class="font-headline text-[4rem] leading-none font-extrabold tracking-tighter text-white md:text-[8rem]">
				The Curation
			</h1>
			<p class="mt-4 font-headline text-sm tracking-[0.4em] text-white/80 uppercase">
				Volume III — Autumn / Winter
			</p>
		</div>
	</section>

	<section class="mx-auto flex max-w-screen-xl flex-col items-baseline gap-12 px-8 py-32 md:flex-row">
		<div class="w-full md:w-1/3">
			<h2 class="font-headline text-3xl font-bold tracking-tight text-on-surface">
				Architectural<br />Integrity
			</h2>
		</div>
		<div class="w-full md:w-2/3">
			<p class="max-w-2xl text-xl leading-relaxed font-light text-on-surface-variant">
				Our collections represent a deliberate departure from the ephemeral. We treat objects as wearable
				architecture—structured, purposeful, and designed to endure.
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-screen-2xl px-8 pb-32">
		<div class="grid grid-cols-1 gap-x-16 gap-y-32 md:grid-cols-2">
			{#each collections as c, i (c.slug)}
				<div class="group {i % 2 === 1 ? 'md:mt-32' : ''}">
					<a href="/shop?collection={c.slug}" class="block">
						<div class="relative mb-8 aspect-[4/5] overflow-hidden rounded-xl">
							<img
								alt={c.imageAlt}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								src={c.image}
							/>
						</div>
						<div class="flex items-end justify-between">
							<div>
								<span class="mb-2 block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase"
									>{c.label}</span
								>
								<h3 class="font-headline text-4xl font-bold tracking-tighter">{c.title}</h3>
							</div>
							<span
								class="border-b-2 border-primary pb-1 font-headline text-sm font-bold tracking-tight transition-all group-hover:pr-4"
							>
								Shop
							</span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>
</main>
