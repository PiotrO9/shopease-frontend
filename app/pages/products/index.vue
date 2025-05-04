<script setup lang="ts">
import {
	productService,
	type FlashSaleProductType,
} from '~/services/productService';

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

const products = ref<FlashSaleProductType[]>([]);

onMounted(async () => {
	products.value = await productService.getRandomProducts(10);
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
			<ProductsGrid :products />
		</div>
	</div>
</template>
