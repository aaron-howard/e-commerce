import { error } from '@sveltejs/kit';
import { getProductBySlug } from '$lib/data/products';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const product = getProductBySlug(params.slug);
	if (!product) error(404, 'Not found');
	return { product };
};
