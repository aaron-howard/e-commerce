import { error } from '@sveltejs/kit';
import { findOrder } from '$lib/stores/orders';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = ({ params }) => {
	const order = findOrder(params.id);
	if (!order) error(404, 'Order not found');
	return { order };
};
