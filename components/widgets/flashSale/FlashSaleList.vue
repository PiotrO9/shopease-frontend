<script setup lang='ts'>
import { getProducts, type FlashSaleProductType } from '~/services/productService';

const products = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(4);

onMounted(async () => {
	products.value = await getProducts(productsAmount.value);
});
</script>

<template>
	<ul class="flex gap-4 flex-row">
		<FlashSaleListItem v-for="product in products" :key="product.id" :product="product" />
	</ul>
</template>
