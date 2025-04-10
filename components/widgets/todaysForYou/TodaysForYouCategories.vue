<script setup lang='ts'>
const categories = ref([
	{ id: 'best-seller', name: 'Best seller' },
	{ id: 'keep-stylish', name: 'Keep Stylish' },
	{ id: 'special-discount', name: 'Special Discount' },
	{ id: 'official-store', name: 'Official Store' },
	{ id: 'coveted-product', name: 'Coveted Product' },
]);

const selectedCategory = ref('best-seller');

function handleCategoryClick(categoryId: string) {
	selectedCategory.value = categoryId;
}
</script>

<template>
	<nav aria-label="Product categories">
		<ul class="flex flex-wrap gap-4" role="list">
			<TodaysForYouCategoriesItem
				v-for="category in categories"
				:key="category.id"
				:category-id="category.id"
				:category-name="category.name"
				:selected="category.id === selectedCategory"
				@select="handleCategoryClick(category.id)"
			/>
		</ul>
	</nav>
</template>
