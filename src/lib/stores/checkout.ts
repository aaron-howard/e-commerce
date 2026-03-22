import { browser } from '$app/environment';
import { emptyShipping, type ShippingInfo } from '$lib/types/shipping';
import { writable } from 'svelte/store';

const STORAGE_KEY = 'da-checkout';

function load(): ShippingInfo {
	if (!browser) return emptyShipping();
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return emptyShipping();
		return { ...emptyShipping(), ...JSON.parse(raw) } as ShippingInfo;
	} catch {
		return emptyShipping();
	}
}

function createCheckoutStore() {
	const { subscribe, set, update } = writable<ShippingInfo>(load());

	if (browser) {
		subscribe((v) => localStorage.setItem(STORAGE_KEY, JSON.stringify(v)));
	}

	return {
		subscribe,
		patch(p: Partial<ShippingInfo>) {
			update((s) => ({ ...s, ...p }));
		},
		reset() {
			set(emptyShipping());
		}
	};
}

export const checkout = createCheckoutStore();

export type { ShippingInfo };
