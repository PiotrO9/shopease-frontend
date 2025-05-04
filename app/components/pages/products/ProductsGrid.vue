<script setup lang="ts">
import type { FlashSaleProductType } from '~/services/productService';

const { products } = defineProps<{
	products: FlashSaleProductType[];
}>();
</script>

<template>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
		<ProductsGridItem
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>
