<script setup lang="ts">
import type { Ref } from 'vue';
import { getProducts, type FlashSaleProductType } from '~/services/productService';

const products: Ref<FlashSaleProductType[]> = ref([]);
const productsAmount = ref(4);

async function fetchProducts(): Promise<void> {
	try {
		products.value = await getProducts(productsAmount.value);
	} catch (err) {
		console.error('Error fetching flash sale products:', err);
	}
}

onMounted(fetchProducts);
</script>

<template>
	<ul class="flex gap-4 flex-row" role="list" aria-label="Flash sale products">
		<FlashSaleListItem
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</ul>
</template>
