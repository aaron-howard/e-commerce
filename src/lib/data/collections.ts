export type Collection = {
	slug: string;
	label: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	indexLabel: string;
};

export const collections: Collection[] = [
	{
		slug: 'archive',
		label: '01 — Foundation',
		title: 'The Archive',
		description: 'Foundational silhouettes and materials that define the Atelier language.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAHrOgfZYi0PBQ-ofrHdVhcfZn-6ZYK5G0SqB9sPhUewEjHHj7RAMH-JpUH1f9uSiRSL7d3M11hQbxYVaoMALzB1mKhEJt5V4CATXC91lmQkd9oa-7HZs48wB5vBpQkjkPVPEE-yI7GNZyRC2tgccbLqDKx2nGeLBlpgZGQk8wzLxBgZuZsHGRka9Nj8AoYl9MeWM0YGOyjHCLaSw9jnfUvy7CkFzifiPdMpWo9fEh25M3frqLFrIB6pB-UsLoYGLnN-OPk5Z5uuA8',
		imageAlt: 'Elegant monochromatic editorial fashion portrait',
		indexLabel: 'Foundation'
	},
	{
		slug: 'new-arrivals',
		label: '02 — Seasonal',
		title: 'New Arrivals',
		description: 'Latest arrivals—seasonal edits with the same structural discipline.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuB2XVblBch1Gh6GWKTvy_fOwc8BJOHElyjwUqloHYsb6T9dG8nRVKzqUSiMvA2KdazdUksKKFFfpsydddXVfo0qSmirNSzCFW10jLBmXWKOVgallH--fA2moZNohlV8-iauNsi42FVC1Wu5imdd_nSPifKrfI9ZiOJllmHb_i2sHedSr6QjGE2r6C-fHji8j6VrsZVArflv4jPU4Xa1yldEX8t5jy-T8R1xCOMZxdHvYR1OpAaNP4TmTrR4pxp3cW8jM86jpckqIMo',
		imageAlt: 'Clean lines and textures of modern garments',
		indexLabel: 'Seasonal'
	},
	{
		slug: 'monolithic',
		label: '03 — Concept',
		title: 'Monolithic Forms',
		description: 'Bold massing and single-material honesty—objects as monuments.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAsgSbtz99gma87wm7Fhn7sDRfRC6Fd6IdYrjocrCTnw1Zpy_3n1W0NZVooc6D6zQlei14Xuv-Ad0JIhKXeJ19WVxxSEaZN4nAcTsqs_KuYH5hpgSMR9WLzgdtsDYVBVUjWyID1abGuR6bkjf5DUfCjyTcp5T_DryrUqPbZv71TkDPV_8sWEkFlRoXeVdmVPcCldr87Qe2XntE5M7wFRNGJWAHWZRKna1RUVkQy42Nol16lJlPjQDYpF595L9RBfzW4AJhFx1WLbFo',
		imageAlt: 'Bold structural fashion silhouette in studio',
		indexLabel: 'Concept'
	},
	{
		slug: 'layering',
		label: '04 — Utility',
		title: 'Essential Layering',
		description: 'Interlocking layers—texture, weight, and proportion in stackable systems.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0-SWg_a0gN-uvvcYdF7zlvDW0wIvi6DpeIg-C2Q3hRccdRnIxxntwNnCbx0SzL8mb8frfqSUxa12IIvg2q4GiePr8CLJD3a_9he5Bzcec7WNb87wL3QGPhUoOx-Ip6-B5w9PUd4Je2S2Yg5IX_FoAlpe2baf2rdDpLD3nxu-2ZsSea9NW2r1o3HsZeyXC8yXifAgcPwaVYvC82mDH7wksu9I6es5ME72gljzVW5M9hyM6jSRgVTUc9-q-7Boei5r5-aqVriNIMw',
		imageAlt: 'Close up of high quality textured fabric layers',
		indexLabel: 'Utility'
	}
];

function getCollection(slug: string) {
	return collections.find((c) => c.slug === slug);
}
