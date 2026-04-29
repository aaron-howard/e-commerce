/** Read `localStorage[key]` as a JSON array, or `[]` if missing or invalid. */
export function readJsonArray(key: string): unknown[] {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return [];
		const parsed: unknown = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
