<script setup lang="ts">
import {
	getProducts,
	type FlashSaleProductType,
} from '~/services/productService';

const orderItems = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(5);

async function fetchProducts(): Promise<void> {
	try {
		orderItems.value = await getProducts(productsAmount.value);
	} catch (err) {
		console.error('Error fetching flash sale products:', err);
	}
}

await fetchProducts();
</script>

<template>
	<section
		class="flex w-full justify-center bg-white py-8"
		aria-label="Best selling store products"
	>
		<div class="w-max[1536px] container flex w-full flex-col gap-4 p-4">
			<div class="align-center flex w-full flex-wrap justify-between gap-4">
				<div class="flex w-full justify-center">
					<h2 class="my-auto h-max text-3xl font-bold">Best selling store</h2>
				</div>
				<div
					class="grid-row-2 xs:grid-cols-2 grid w-full grid-cols-1 gap-4 py-4 text-center md:grid-cols-3"
				>
					<div
						class="text-gray900 flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-gray600 p-8"
					>
						<h3 class="font-bolder text-3xl font-bold">Shopease mall</h3>
						<span class="max-w-[200px] font-medium">
							Shop, Explore, Delight and Experience Mall Magic!
						</span>
					</div>
					<BestSellingStoreOrderItem
						v-for="(orderItem, index) in orderItems"
						:key="index"
						:order-item="orderItem"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
