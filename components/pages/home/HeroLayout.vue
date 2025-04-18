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
		);
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
	<div class="container mx-auto px-4 py-8">
		<div
			v-if="isLoading"
			class="flex min-h-[200px] items-center justify-center"
		>
			<div
				class="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"
			></div>
		</div>

		<div v-else-if="error" class="text-center text-red-500">
			{{ error }}
		</div>

		<div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="category in subcategories"
				:key="category.id"
				class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
				tabindex="0"
				role="button"
				:aria-label="`View ${category.name} category`"
			>
				<div class="relative h-48">
					<img
						:src="category.image"
						:alt="category.name"
						class="h-full w-full object-cover"
					/>
				</div>
				<div class="p-4">
					<h2 class="mb-2 text-xl font-semibold text-gray-800">
						{{ category.name }}
					</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
