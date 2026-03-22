import { getProductById } from '$lib/data/products';
import { cart } from '$lib/stores/cart';
import type { ShippingInfo } from '$lib/types/shipping';
import type { Order, OrderLine } from '$lib/types/order';
import { get } from 'svelte/store';

function randomId(): string {
	return `DA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export function placeOrder(shipping: ShippingInfo): Order {
	const linesIn = get(cart);
	const lines: OrderLine[] = [];
	let subtotal = 0;

	for (const l of linesIn) {
		const p = getProductById(l.productId);
		if (!p || p.soldOut) continue;
		lines.push({
			productId: p.id,
			slug: p.slug,
			name: p.name,
			qty: l.qty,
			unitPrice: p.price,
			image: p.images[0],
			subtitle: p.subtitle
		});
		subtotal += p.price * l.qty;
	}

	const tax = Math.round(subtotal * 0.08 * 100) / 100;
	const shippingCost = subtotal >= 500 || subtotal === 0 ? 0 : 25;
	const total = Math.round((subtotal + tax + shippingCost) * 100) / 100;

	return {
		id: randomId(),
		createdAt: new Date().toISOString(),
		status: 'Processing',
		lines,
		shipping,
		subtotal,
		tax,
		shippingCost,
		total,
		tracking: 'TRK-MOCK-' + Math.random().toString(36).slice(2, 10).toUpperCase(),
		eta: '3–5 business days'
	};
}
