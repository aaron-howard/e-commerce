import type { Product } from '$lib/types/product';

export const products: Product[] = [
	{
		id: 'p1',
		slug: 'atlas-monolith-lamp',
		name: 'Atlas Monolith Lamp',
		subtitle: 'Italian Carrara Marble',
		price: 1240,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBIg-N_SRt6tMHYJFQyabeJIvpxJK7j6p4VjdrKBodMoHFEeTJfFNc9VqeP5msRqhY7v783B7n1YNmrp7Bb9jlM6y6x-uhKut972tJQ3hSeaEuNlnf2wLrGLMjc3RvUto2kXMrGzX3o8Gf8gAqd3DqvjuEV-WOmnTr90jaSzIdQeQQd-Kdt4b6hSyxph-9a3jUa5XwgApDTn-q63eqaZwukzliXNEYduY2_KiWUotMjxPodWMswff0UjumY9xcnE10cxVGYGDyCdWo'
		],
		imageAlt: 'Minimalist white marble table lamp on a grey surface',
		description:
			'A sculptural light source carved from solid Carrara marble. Diffused glow and absolute gravity for the architectural interior.',
		category: 'lighting',
		materials: ['marble'],
		collections: ['archive', 'monolithic']
	},
	{
		id: 'p2',
		slug: 'forma-lounge-chair',
		name: 'Forma Lounge Chair',
		subtitle: 'Natural Walnut & Wool',
		price: 4800,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCAA7in-WKhCLo4XZ0UQJc3qhqYL_mechGiZ-3GNeoIyUtVLFyN4VJJQEvAb-LpJ_4wYrEbCjAWu1vZSOVnWqnP7cRWF6KrytF5DmaE0xjn28Cwzb64Rqd4wY5ydBhpRywgNgTFeUoEFqhUtmDHAqQt36mQ3cNJeaCUAvGgGuL_Jokrn1afscAkLh6Ofzyn1H9dAQ4NnJu7KBik-LEg1Nd0IQ8kcZIZ4vPkVqRSkxd5JWV_u24qpXHRvP7wGa5Jk41CA8cLaOGikLU'
		],
		imageAlt: 'Sleek mid-century modern wooden armchair with grey upholstery',
		description:
			'Low-slung silhouette in walnut with wool upholstery—comfort engineered as a primary material.',
		category: 'seating',
		materials: ['walnut', 'linen'],
		collections: ['new-arrivals', 'archive'],
		limited: true
	},
	{
		id: 'p3',
		slug: 'eroded-vessel-no-04',
		name: 'Eroded Vessel No. 04',
		subtitle: 'Hand-thrown Sandstone',
		price: 850,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCmRDCaAV7FBeopSAvxnO3wjMuWInwO7igvGpcWaJJEHWAJt5_tI02WatgXKwa1FOGfjXxsnQ66wpyQz8lgIJlPNQVJ2e3Mm_kTi_eLaq5bGSeIUJR1NYRcPAZwDOxGBqpEilm2E6TfFAvR7PUMQRG9eBSwzo7sOQEclEL6Sy3LfHLAWyNa7FOGYLFxPppPU-x_-MsDQ0ZaFmpAsqauZHHs5lXLAdo9eXnvtE4MNryWPHQf09ybgClCvgDxTN4qOyUEGDYbvp3VEds'
		],
		imageAlt: 'Abstract textured ceramic vase in sand color',
		description: 'Ceramic study in erosion and texture—each vessel unique within a disciplined form language.',
		category: 'decor',
		materials: ['ceramic'],
		collections: ['archive', 'layering']
	},
	{
		id: 'p4',
		slug: 'linear-grid-shelf',
		name: 'Linear Grid Shelf',
		subtitle: 'Powder Coated Steel',
		price: 2100,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAcZQP257OoDlY5q0YLU4xCrc-32FK98smunBl7gW9XdQFLHDLHXsjSTY2KM8DMMt1OP_-x8CNrZGaZa27LnqxvB58NeJ_QCoSRfpMfsplnQpMKx2Qo5X6OAbhqibepKu1Nonu-KikA_ecrj7rT7o31n5G56U7mT_2q2b8HyWoT-S48QgD_KJiI9H_vXGeEJk5niKsN6QEwjyCjekTXhjoLGfyu4oNIogcMbUU1rNYMeqjlTZ9mZEyqURnKTpzdYvxTiRTNIwu6Wo8'
		],
		imageAlt: 'Modern minimalist black metal shelving unit',
		description: 'Vertical storage as line and plane. Powder-coated steel in a floating grid composition.',
		category: 'storage',
		materials: ['steel'],
		collections: ['monolithic', 'new-arrivals']
	},
	{
		id: 'p5',
		slug: 'unity-dining-chair',
		name: 'Unity Dining Chair',
		subtitle: 'Ash Wood & Felt',
		price: 1150,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBcxjhAovtGR3svWEvvgCbBd-8amSwOvYm0fTW4sEm8bozn30R5j-Bhtl7KjaRsHvWLC2jt85bv0YrhCc8uqWmzX1JG0nsnKL85-CMGGhbveFgc21ClvJju-Poon2UmOOf9leEBkKsj5DpNRpz_oIRobMxGNLpp6lZTfxZWZx5-ldosYrT4t7fkDuTCClspBolh0zBoXQ4exJSwF4Sld0UMZsbXdkzOBJq5wSYA13oO4GGpaNS1C4b8O3nuh58SPjdqFZalecHlhx0'
		],
		imageAlt: 'Contemporary minimalist chair with curved back',
		description: 'Curved ash shell with felt seat—dining posture without visual noise.',
		category: 'seating',
		materials: ['walnut', 'linen'],
		collections: ['layering', 'archive']
	},
	{
		id: 'p6',
		slug: 'orbit-low-table',
		name: 'Orbit Low Table',
		subtitle: 'Smoked Oak',
		price: 3200,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBI6ghMCxnj14XnQ05pkG342oeEvXRODvi3jGrKMnAQfCUSx_Dk-Ul2sxEK5jh6fyIcQTlqdlyDZt5U158o8iwja7HjPP9m2VV7LHYaO6J8i2o8l8tOskMKz-6hsNkuJeeqnPMEdpty82Fet9i3YPrDF5YpkkggJ2QSaq4WcYvN5gg4SBU1I2VG3ASj2HIs8UrlS91EYyaXVaWD2jrHHraU0wf-Q63D5hTi1uBcQR4hM1LbMIiQPh7Gq6FzMR380Tob3H_JsM9NRKQ'
		],
		imageAlt: 'Round dark wood coffee table in a modern living room',
		description: 'Low orbit of smoked oak—surface, shadow, and negative space in balance.',
		category: 'tables',
		materials: ['walnut'],
		collections: ['new-arrivals', 'monolithic']
	},
	{
		id: 'p7',
		slug: 'atelier-chrono-01',
		name: 'Atelier Chrono 01',
		subtitle: 'Architectural Series',
		price: 1450,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCE_MrEqUtJKcNwU2ufDVXN4SehZ1pcD2hz2AGGw26sM4i33UH2Qy6bCf0UEOsUBb7Id-0f41mhrxnBJU9_PdB9qWyqB9HM1KsEVj-iW-GtHk28KnQ27OSpcP_hJvKwFNzWJ49W1Q1rrTdrFzuKCDQZAhdMYt9iBM7lsBOFFXcWUIkgNGYMU9ZMFn4xl1W6ifCo6gbtbQKtMxp9RHNZecpQmeIj-VW1AaFXLJrh7nckAM-9EGuPjv6VEO2KEBqwcJgEfaINzxuR4XA',
			'https://lh3.googleusercontent.com/aida-public/AB6AXuB2t9-bhB0fHEewhxoeyXMO2RcBEqNjJWtpIHbSrpZ89DF-pqK5fgK3waoXdsRyQxduMjSQuH4PR9rIoOWwyxYrZx-7r8UK2SH_gvlAv5D422dapXQ03oc9Wrm5Uco5NQF9oc-ig6d3p4wus6MR1QtAYtflcBrb5EJZDgGxFMI80VNwN5dRjnoDJrJ4LvbZazv8Bb9UrWiADb94jfny55yh4zSJBMIf5gxqFMMTgb3btSKlCGnjVa73KKwBaSEyCPvc8FlxFl0QL2A',
			'https://lh3.googleusercontent.com/aida-public/AB6AXuADSqUidUlVO6Q5EKuv7xi3GJgjk-DIqxMfFuNIMh-AdMs_Mt827V_LCdQnJWxHnGl5h3jYXUXumkNKu2M0l6px47Mo2vDi8IKQ6sgkOlZoQ93W8jfxz7afXc38FJk0jr0ieOrQ0FkmQon1UCbMK5Km2W6N_l9MDuYJfceK3a1Ws6ZQ8zLYhKyK0__R-HAMg5YsNCzfox2fAHgD1NOAhqp9LLMkJ0Pbm-TOCWFjRcnNoeTRlaWNAf4fOlrzNmZz-ng_lyY6Xsc4Q_s'
		],
		imageAlt: 'Minimalist luxury watch on a clean background',
		description:
			'A masterclass in geometric restraint. Brushed titanium casing and sapphire crystal for those who find beauty in the precision of the grid.',
		category: 'timepieces',
		materials: ['steel'],
		collections: ['new-arrivals'],
		specs: [
			'Movement: Swiss Automatic ETA 2824-2',
			'Case: 40mm Grade 5 Titanium',
			'Water Resistance: 10 ATM (100m)',
			'Strap: Hand-stitched Italian leather'
		],
		reviews: [
			{
				title: 'Exceptional Build Quality',
				body: 'The weight of the titanium is perfect—light yet incredibly sturdy. The sapphire crystal is remarkably clear.',
				author: 'Arthur M.',
				initials: 'AM',
				rating: 5,
				ago: '2 months ago'
			},
			{
				title: 'A Design Statement',
				body: 'One of the most cohesive products I own. The typography on the dial is unmatched.',
				author: 'Sarah L.',
				initials: 'SL',
				rating: 5,
				ago: '1 month ago'
			},
			{
				title: 'Almost Perfect',
				body: 'Stunning daily wear. Would love a smaller case option in a future release.',
				author: 'Dev K.',
				initials: 'DK',
				rating: 4,
				ago: '3 weeks ago'
			}
		]
	},
	{
		id: 'p8',
		slug: 'structure-blazer-01',
		name: 'Structure Blazer 01',
		subtitle: 'Light Sand',
		price: 420,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuD0w5tm42zfryiA9toRZeISsVXbC9YDSOHek0qwG6-r4qQf3zodetQ8QBoha6KIGzlZPI8MrBM_3aOLPkBG9Zr15dIPOcw0pv8_Qa1hERno0DdHe7Fa6jV3oyjX_sneSsG_J46n4_tKwZtsgLZTlXyLRXnNRytSfDUQ8Aif680may8ddHFr5Vm4WurqySrkYewMLLDQunbL36eSHRCornaZafDwwkLghTjZXvuVcOuGlys5iinGL9lj89DwoZmmlpOPm0tymMPOE8k'
		],
		imageAlt: 'Minimalist beige structured blazer coat',
		description: 'Structured blazer in performance wool blend—office to evening without compromise.',
		category: 'apparel',
		materials: ['linen'],
		collections: ['new-arrivals', 'layering']
	},
	{
		id: 'p9',
		slug: 'essential-oxford',
		name: 'Essential Oxford',
		subtitle: 'Arctic White',
		price: 115,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBvLpXH6DbRFJJL4PlVhq4whgcvlYsYY7C_JoGDGNi5HnWn1drJ84NJIxDYccDXc8YyifjvNyBQ4R93mfwZFvKD4POIFWGDGUm2EV0t_yzROBnc_qVRBaKxFeDQYkU-qnwzei-WOEMFsObwgjq5gW7oDVsw8GJCd7YgRtv8W_VYyqT263nVg7DwcVgXVDzPXaZlFSaFA4F4aVyLqMVrXwr-rGQyhespWbsH7h6ne56N7BtxoUM-aGsrMvu3ckMFI1o4etZgjvYNSTQ'
		],
		imageAlt: 'Clean white high-quality oxford shirt',
		description: 'Crisp oxford in long-staple cotton—foundation layer for the curated wardrobe.',
		category: 'apparel',
		materials: ['linen'],
		collections: ['layering', 'archive']
	},
	{
		id: 'p10',
		slug: 'selvedge-denim',
		name: 'Selvedge Denim',
		subtitle: 'Raw Indigo',
		price: 280,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yleVexZmVnoxTk1dukt91e_1msos7uTlmZR2Q0O6sWPJiiClhUNk8oPCCM88SUEKF9-EaBC47QxV3L4YsZdgmcncGTtBzws2Dl4PgoVi5VM5HerlEOFfj0Lzuo_k-D5mNHFRPfLic5M64ZOkIXrdAzk1hOPknMwQ9bAS076iUBUhVa1fdvRnd31JgLvCsF7lSHW292JeVyku3Gc_ao1XgoVCpHW22hPT4DZa2VqMZaEa2RN1zqGCPEQFZAQComdGAjg7DQWs6R0'
		],
		imageAlt: 'Premium dark indigo selvedge denim',
		description: 'Japanese selvedge denim with architectural fade potential—cut for a clean straight leg.',
		category: 'apparel',
		materials: ['linen'],
		collections: ['monolithic', 'new-arrivals']
	},
	{
		id: 'p11',
		slug: 'heavyweight-shell',
		name: 'Heavyweight Shell',
		subtitle: 'Deep Onyx',
		price: 185,
		currency: 'USD',
		images: [
			'https://lh3.googleusercontent.com/aida-public/AB6AXuD6DFJ8Jlg7rrDN_GVK8IzpXDzKsN3dJe5stqp8oKLEJSTvNTS2eIliEdqcPu9DcJOga3oD7szHp3RhQwgbsYqZ422dvJDYKeaAtiiPSMYj82TjLzz4ETMfvvDlttISvXdpYj0UletqzBcVTjvr2zoYGREccrplF8dgeXknoFhhqjNOqjCvisqu2lDyF4HpG5_HA5TO55U_OocqwlGex3JWfxkm-qTCYdg1ASE684jVgXR7MmKT5MD6VLC3Ooak0gpbIaqPliJJiIg'
		],
		imageAlt: 'Heavyweight black oversized cotton hoodie',
		description: 'Oversized shell in dense cotton fleece—volume and shadow as design elements.',
		category: 'apparel',
		materials: ['linen'],
		collections: ['layering'],
		soldOut: true
	}
];

const bySlug = new Map(products.map((p) => [p.slug, p]));
const byId = new Map(products.map((p) => [p.id, p]));

export function getProductBySlug(slug: string): Product | undefined {
	return bySlug.get(slug);
}

export function getProductById(id: string): Product | undefined {
	return byId.get(id);
}

export function formatPrice(amount: number, currency = 'USD'): string {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}
