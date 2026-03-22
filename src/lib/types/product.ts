export type Product = {
	id: string;
	slug: string;
	name: string;
	subtitle: string;
	price: number;
	currency: string;
	images: string[];
	imageAlt: string;
	description: string;
	category: string;
	materials: string[];
	collections: string[];
	limited?: boolean;
	soldOut?: boolean;
	/** PDP-only extras */
	specs?: string[];
	reviews?: { title: string; body: string; author: string; initials: string; rating: number; ago: string }[];
};
