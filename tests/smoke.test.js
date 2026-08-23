import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('package.json declares the e-commerce app', () => {
	const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
	assert.equal(pkg.name, 'e-commerce');
	assert.equal(pkg.private, true);
	assert.ok(pkg.scripts.build);
	assert.ok(pkg.scripts.check);
});

test('SvelteKit entrypoints exist', () => {
	assert.ok(readFileSync(join(root, 'src/app.html'), 'utf8').includes('%sveltekit.body%'));
	assert.ok(readFileSync(join(root, 'svelte.config.js'), 'utf8').length > 0);
	assert.ok(readFileSync(join(root, 'vite.config.ts'), 'utf8').length > 0);
});
