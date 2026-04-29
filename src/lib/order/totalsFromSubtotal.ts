/** Tax, shipping, and grand total from merchandise subtotal (pre-tax, pre-shipping). */
export function totalsFromSubtotal(subtotal: number) {
	const tax = Math.round(subtotal * 0.08 * 100) / 100;
	const shippingCost = subtotal >= 500 || subtotal === 0 ? 0 : 25;
	const total = Math.round((subtotal + tax + shippingCost) * 100) / 100;
	return { tax, shippingCost, total };
}
