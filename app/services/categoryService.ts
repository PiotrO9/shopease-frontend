import { useGraphql } from '~/composables/globalHooks';

export interface Category {
	id: string;
	name: string;
	image: string;
	parentId: string | null;
	parent?: Category;
	children: Category[];
}

export interface SubcategoriesResult {
	categories: Category[];
	errors: string[];
}

export async function getCategories() {
	const query = `
    query Categories($where: CategoryWhereInput) {
		categories(where: $where) {
			id
			name
			image
			parentId
		}
	}
  `;

	const variables = {
		where: {
			parentId: {
				equals: null,
			},
		},
	};

	const response = await useGraphql<{ categories: Category[] }>(
		query,
		variables,
	);
	return response.categories;
}

export async function getSubcategories(parentIds: string[]) {
	const query = `
    query Subcategories($parentIds: [String!]!) {
		subcategories(parentIds: $parentIds) {
			categories {
				id
				name
				image
				parentId
				parent {
					id
					name
				}
				children {
					id
					name
				}
			}
			errors
		}
	}
  `;

	const variables = {
		parentIds,
	};

	const response = await useGraphql<{ subcategories: SubcategoriesResult }>(
		query,
		variables,
	);
	return response.subcategories;
}
