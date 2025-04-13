<script setup lang="ts">
import {
	getProducts,
	type FlashSaleProductType,
} from '~/services/productService';

const products = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(4);

async function fetchProducts() {
	try {
		products.value = await getProducts(productsAmount.value);
	} catch (err) {
		console.error('Error fetching products:', err);
	}
}

await fetchProducts();
</script>

<template>
	<section
		class="flex w-full justify-center bg-white py-8"
		aria-label="Today's For You Products"
	>
		<div class="w-max[1536px] container flex w-full flex-col gap-4 p-4">
			<div class="align-center flex w-full flex-wrap justify-between gap-4">
				<h2 class="my-auto h-max text-3xl font-bold">Today's For You</h2>
				<TodaysForYouCategories />
			</div>

			<div class="grid whitespace-nowrap p-4 px-0">
				<ul
					class="xxs:grid-cols-2 grid max-w-[1536px] grid-cols-1 gap-4 border-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
					role="list"
				>
					<TodaysForYouItem
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</ul>
			</div>
		</div>
	</section>
</template>
