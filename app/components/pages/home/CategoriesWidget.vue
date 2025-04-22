<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import {
	getCategories,
	getSubcategories,
	type Category,
} from '~/services/categoryService';

interface CategoriesState {
	categories: Category[];
	subcategories: Category[];
	isLoading: boolean;
	error: string | null;
}

interface DisplayCategory extends Omit<Category, 'image'> {
	image: string | null;
	isAllCategories?: boolean;
}

const state = ref<CategoriesState>({
	categories: [],
	subcategories: [],
	isLoading: true,
	error: null,
});

const MAX_SUBCATEGORIES = 8;

const displayCategories = computed<DisplayCategory[]>(() => {
	const allCategoriesItem: DisplayCategory = {
		id: 'all',
		name: 'All Categories',
		image: null,
		isAllCategories: true,
		parentId: null,
		children: [],
	};
	return [...state.value.subcategories, allCategoriesItem];
});

async function handleFetchSubcategories(
	categoryIds: string[],
): Promise<Category[]> {
	try {
		const response = await getSubcategories(categoryIds);
		return response.categories;
	} catch (error) {
		throw new Error('Failed to fetch subcategories');
	}
}

async function handleFetchCategories() {
	try {
		state.value.isLoading = true;
		state.value.error = null;

		const fetchedCategories = await getCategories();
		state.value.categories = fetchedCategories;

		const categoryIds = fetchedCategories.map((category) => category.id);
		const fetchedSubcategories = await handleFetchSubcategories(categoryIds);
		state.value.subcategories = fetchedSubcategories.slice(
			0,
			MAX_SUBCATEGORIES,
		);
	} catch (error) {
		state.value.error = 'Failed to fetch categories';
		console.error('Categories fetch error:', error);
	} finally {
		state.value.isLoading = false;
	}
}

onMounted(() => {
	handleFetchCategories();
});
</script>

<template>
	<div
		v-if="state.categories.length > 0"
		class="container mx-auto bg-white px-4 py-8"
	>
		<nav class="overflow-x-auto">
			<ul
				class="flex min-w-max justify-between gap-12 scroll-smooth py-2"
				role="list"
				aria-label="Category navigation"
			>
				<li
					v-for="category in displayCategories"
					:key="category.id"
					class="flex flex-col items-center"
				>
					<NuxtLink
						class="group flex flex-col items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						:aria-label="
							category.isAllCategories
								? 'View all categories'
								: `Browse ${category.name} category`
						"
						:to="
							category.isAllCategories
								? '/category'
								: `/category/${category.id}`
						"
						tabindex="0"
					>
						<div
							class="size-28 overflow-hidden rounded-full bg-gray300"
							:class="{
								'flex items-center justify-center': category.isAllCategories,
							}"
						>
							<template v-if="category.isAllCategories">
								<Icon
									name="material-symbols:border-all"
									class="size-12 bg-primary transition-transform duration-300 group-hover:scale-110"
									aria-hidden="true"
								/>
							</template>
							<img
								v-else-if="category.image"
								:src="category.image"
								:alt="category.name"
								class="size-full scale-75 object-cover transition-transform duration-300 group-hover:scale-90"
								loading="lazy"
							/>
						</div>
						<span class="text-center text-sm font-bold text-primary">
							{{ category.name }}
						</span>
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<template v-if="state.isLoading">
			<div class="flex min-h-[200px] items-center justify-center">
				<div
					class="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"
					role="status"
					aria-label="Loading categories"
				></div>
			</div>
		</template>

		<template v-else-if="state.error">
			<div class="text-center text-error" role="alert" aria-live="assertive">
				{{ state.error }}
			</div>
		</template>
	</div>
</template>

<style scoped></style>
