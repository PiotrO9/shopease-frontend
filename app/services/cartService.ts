import type { FlashSaleProductType } from './productService';

export interface CartSummary {
	subTotal: number;
	grandTotal: number;
	tax: number;
	shipping: number;
	discount: number;
	itemsQuantity: number;
}

export interface CartItem {
	product: FlashSaleProductType;
	quantity: number;
	price: PriceData;
}

export interface PriceData {
	subTotal: number;
	grandTotal: number;
	tax: number;
	shipping: number;
	discount: number;
}

export interface EntireCartData {
	items: CartItem[];
	summary: CartSummary;
}

class CartService {
	addToCart(product: CartItem) {
		// TODO
	}

	removeFromCart(product: CartItem) {
		// TODO
	}

	clearAllCartItems() {
		// TODO
	}

	getCartItems(): CartItem[] {
		// TODO

		return [];
	}

	getCartTotal(): number {
		// TODO

		return 0;
	}

	getCartSummary(): CartSummary {
		// TODO

		return {
			subTotal: 0,
			grandTotal: 0,
			tax: 0,
			shipping: 0,
			discount: 0,
			itemsQuantity: 0,
		};
	}

	getEntireCartData(): EntireCartData {
		return {
			items: this.getCartItems(),
			summary: this.getCartSummary(),
		};
	}
}

export const cartService = new CartService();
