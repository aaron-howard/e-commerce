import { browser } from '$app/environment';
import type { Order } from '$lib/types/order';
import { readJsonArray } from '$lib/stores/readJsonArray';
import { get, writable } from 'svelte/store';

const STORAGE_KEY = 'da-orders';

function load(): Order[] {
	if (!browser) return [];
	return readJsonArray(STORAGE_KEY) as Order[];
}

function persist(list: Order[]) {
	if (!browser) return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

const ordersInternal = writable<Order[]>(load());

if (browser) {
	ordersInternal.subscribe((orders) => persist(orders));
}

export const orders = {
	subscribe: ordersInternal.subscribe,
	add(order: Order) {
		ordersInternal.update((list) => [order, ...list]);
	}
};

export function findOrder(id: string): Order | undefined {
	return get(ordersInternal).find((o) => o.id === id);
}
