import { browser } from '$app/environment';
import { getProductById } from '$lib/data/products';
import { writable, derived, get } from 'svelte/store';

export type CartLine = { productId: string; qty: number };

const STORAGE_KEY = 'da-cart';

function readStorage(): CartLine[] {
	if (!browser) return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw) as CartLine[];
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function writeStorage(lines: CartLine[]) {
	if (!browser) return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

function createCartStore() {
	const { subscribe, set, update } = writable<CartLine[]>(readStorage());

	if (browser) {
		subscribe((lines) => writeStorage(lines));
	}

	return {
		subscribe,
		add(productId: string, qty = 1) {
			update((lines) => {
				const i = lines.findIndex((l) => l.productId === productId);
				if (i === -1) return [...lines, { productId, qty }];
				const next = [...lines];
				next[i] = { ...next[i], qty: next[i].qty + qty };
				return next;
			});
		},
		setQty(productId: string, qty: number) {
			if (qty < 1) {
				update((lines) => lines.filter((l) => l.productId !== productId));
				return;
			}
			update((lines) => {
				const i = lines.findIndex((l) => l.productId === productId);
				if (i === -1) return lines;
				const next = [...lines];
				next[i] = { ...next[i], qty };
				return next;
			});
		},
		remove(productId: string) {
			update((lines) => lines.filter((l) => l.productId !== productId));
		},
		clear() {
			set([]);
		}
	};
}

export const cart = createCartStore();

export const cartItemCount = derived(cart, ($c) => $c.reduce((n, l) => n + l.qty, 0));

export const cartTotals = derived(cart, ($c) => {
	let subtotal = 0;
	for (const line of $c) {
		const p = getProductById(line.productId);
		if (p && !p.soldOut) subtotal += p.price * line.qty;
	}
	const tax = Math.round(subtotal * 0.08 * 100) / 100;
	const shippingCost = subtotal >= 500 || subtotal === 0 ? 0 : 25;
	const total = Math.round((subtotal + tax + shippingCost) * 100) / 100;
	return { subtotal, tax, shippingCost, total };
});

export function getCartSnapshot() {
	return get(cart);
}
