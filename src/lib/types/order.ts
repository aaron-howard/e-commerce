import type { ShippingInfo } from '$lib/types/shipping';

export type OrderLine = {
	productId: string;
	slug: string;
	name: string;
	qty: number;
	unitPrice: number;
	image: string;
	subtitle?: string;
};

export type Order = {
	id: string;
	createdAt: string;
	status: string;
	lines: OrderLine[];
	shipping: ShippingInfo;
	subtotal: number;
	tax: number;
	shippingCost: number;
	total: number;
	tracking?: string;
	eta?: string;
};
