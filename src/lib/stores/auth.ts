import { browser } from '$app/environment';
import { mockUser, type MockUser } from '$lib/data/mockUser';
import { writable } from 'svelte/store';

const STORAGE_KEY = 'da-auth';

type AuthState = { signedIn: boolean; user: MockUser | null };

function load(): AuthState {
	if (!browser) return { signedIn: false, user: null };
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw === '1') return { signedIn: true, user: mockUser };
	} catch {
		/* ignore */
	}
	return { signedIn: false, user: null };
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthState>(load());

	if (browser) {
		subscribe((s) => {
			localStorage.setItem(STORAGE_KEY, s.signedIn ? '1' : '0');
		});
	}

	return {
		subscribe,
		signIn() {
			set({ signedIn: true, user: mockUser });
		},
		signOut() {
			set({ signedIn: false, user: null });
		}
	};
}

export const auth = createAuthStore();
