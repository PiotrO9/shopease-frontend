<script setup lang="ts">
import { ref } from 'vue';
import {
	productService,
	type FlashSaleProductType,
} from '~/services/productService';

const products = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(4);

async function handleFetchProducts(): Promise<void> {
	products.value = await productService.getRandomProducts(productsAmount.value);
}

onMounted(handleFetchProducts);
</script>

<template>
	<div class="w-full overflow-x-auto">
		<ul
			class="inline-flex gap-4 p-4 px-0"
			role="list"
			aria-label="Flash sale products"
		>
			<FlashSaleListItem
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</ul>
	</div>
</template>
