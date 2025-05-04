<script setup lang="ts">
definePageMeta({
	layout: 'ecommerce',
	colorMode: 'light',
});

const breadcrumbs = [
	{ name: 'Home', path: '/' },
	{ name: 'Products', path: '/products' },
];

const category = {
	name: 'All Products',
};

const categoryItems = computed(() => {
	return 4;
});
</script>

<template>
	<div class="container p-4">
		<Breadcrumbs :items="breadcrumbs" />
		<h1 class="text-2xl font-semibold">
			{{ category.name }} ({{ categoryItems }})
		</h1>
		<div class="mt-4 flex gap-8">
			<Filters />
			<ProductsGrid />
		</div>
	</div>
</template>
