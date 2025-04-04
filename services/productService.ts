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
                    price
                    inventory
                    sku
                    variant
                    image
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
		price: number;
		inventory: number;
		image: string;
	}[];
};
