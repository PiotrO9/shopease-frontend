<script setup lang='ts'>
const categories = ref(['Best seller', 'Keep Stylish', 'Special Discount', 'Official Store', 'Coveted Product']);
const selectedCategory = ref('Best seller');

function handleCategoryClick(category: string) {
	selectedCategory.value = category;
}
</script>

<template>
	<ul class="flex flex-wrap gap-4">
		<TodaysForYouCategoriesItem
			v-for="(category, index) in categories"
			:key="index"
			:category-name="category"
			:selected="category == selectedCategory"
			@select="handleCategoryClick(category)"
		/>
	</ul>
</template>
