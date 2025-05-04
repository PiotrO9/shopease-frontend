export async function getProducts<T>(count: number) {
	const variables = { count };

	const query = `
        query RandomProducts($count: Int!) {
            randomProducts(count: $count) {
                id
                name
                description
                quantity
                variants {
                    inventory
                    sku
                    variant
                    image
					price {
                        basePrice
                    }
                }
            }
        }
    `;

	const response = await useGraphql<{ randomProducts: T[] }>(query, variables);
	return response.randomProducts;
}

export type FlashSaleProductType = {
	id: number;
	name: string;
	description: string;
	quantity: number;
	variants: {
		price: {
			basePrice: number;
		};
		inventory: number;
		image: string;
	}[];
};

class ProductService {
	async getRandomProducts(count: number): Promise<FlashSaleProductType[]> {
		try {
			const variables = { count };
			const query = `
				query RandomProducts($count: Int!) {
					randomProducts(count: $count) {
						id
						name
						description
						quantity
						variants {
							price {
								basePrice
							}
							inventory
							sku
							variant
							image
						}
					}
				}
			`;

			const response = await useGraphql<{
				randomProducts: FlashSaleProductType[];
			}>(query, variables);
			return response.randomProducts;
		} catch (err) {
			console.error('Error fetching random products:', err);
			return [];
		}
	}

	async getProductById(id: number): Promise<FlashSaleProductType | null> {
		try {
			const query = `
				query Product($id: Int!) {
					product(id: $id) {
						id
						name
						description
						quantity
						variants {
							price {
								basePrice
							}
							inventory
							sku
							variant
							image
						}
					}
				}
			`;

			const response = await useGraphql<{ product: FlashSaleProductType }>(
				query,
				{ id },
			);
			return response.product;
		} catch (err) {
			console.error(`Error fetching product with id ${id}:`, err);
			return null;
		}
	}

	async getProductsByCategory(
		categoryId: number,
		limit: number = 10,
	): Promise<FlashSaleProductType[]> {
		try {
			const query = `
				query ProductsByCategory($categoryId: Int!, $limit: Int!) {
					productsByCategory(categoryId: $categoryId, limit: $limit) {
						id
						name
						description
						quantity
						variants {
							price
							inventory
							sku
							variant
							image
						}
					}
				}
			`;

			const response = await useGraphql<{
				productsByCategory: FlashSaleProductType[];
			}>(query, { categoryId, limit });
			return response.productsByCategory;
		} catch (err) {
			console.error(`Error fetching products for category ${categoryId}:`, err);
			return [];
		}
	}
}

export const productService = new ProductService();
