<script setup lang="ts">
import { ref } from 'vue';
import {
	getCategories,
	getSubcategories,
	type Category,
} from '~/services/categoryService';

const categories = ref<Category[]>([]);
const subcategories = ref<Category[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

async function handleFetchCategories() {
	try {
		isLoading.value = true;
		categories.value = await getCategories();

		subcategories.value = await handleFetchSubcategories(
			categories.value.map((category) => category.id),
		).then((arr) => arr.slice(0, 8));
	} catch (err) {
		error.value = 'Failed to fetch categories';
		console.error(err);
	} finally {
		isLoading.value = false;
	}
}

async function handleFetchSubcategories(
	categoryId: string[],
): Promise<Category[]> {
	return (await getSubcategories(categoryId)).categories;
}

handleFetchCategories();
</script>

<template>
	<div
		v-if="categories.length > 0"
		class="container mx-auto bg-white px-4 py-8"
	>
		<nav class="overflow-x-auto">
			<ul
				class="flex min-w-max justify-between gap-12 scroll-smooth py-2"
				role="list"
				aria-label="Category navigation"
			>
				<li
					v-for="category in subcategories"
					:key="category.id"
					class="flex flex-col items-center"
				>
					<NuxtLink
						class="group flex flex-col items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						:aria-label="category.name"
						:to="`/category/${category.id}`"
					>
						<div class="size-28 overflow-hidden rounded-full bg-gray300">
							<img
								v-if="category.image"
								:src="category.image"
								:alt="category.name"
								class="size-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<span class="text-center text-sm font-bold text-primary">{{
							category.name
						}}</span>
					</NuxtLink>
				</li>
				<li class="flex items-center justify-center">
					<NuxtLink
						class="group flex flex-col items-center gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						:to="`/category`"
					>
						<div
							class="flex size-28 items-center justify-center rounded-full bg-gray300"
						>
							<Icon
								name="material-symbols:border-all"
								class="size-12 bg-primary transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<span class="text-center text-sm font-bold text-primary">
							All Categories
						</span>
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<div
			v-if="isLoading"
			class="flex min-h-[200px] items-center justify-center"
		>
			<div
				class="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"
			></div>
		</div>

		<div v-else-if="error" class="text-error text-center">
			{{ error }}
		</div>
	</div>
</template>
