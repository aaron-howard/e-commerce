export type ShippingInfo = {
	fullName: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	postal: string;
	country: string;
	phone: string;
	method: string;
};

export const emptyShipping = (): ShippingInfo => ({
	fullName: '',
	address1: '',
	address2: '',
	city: '',
	state: '',
	postal: '',
	country: 'United States',
	phone: '',
	method: 'standard'
});
