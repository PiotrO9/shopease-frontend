<script setup lang='ts'>
import { getProducts, type FlashSaleProductType } from '~/services/productService';

const products = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(4);

async function fetchProducts() {
	try {
		products.value = await getProducts(productsAmount.value);
	} catch (err) {
		console.error('Error fetching products:', err);
	}
}

onMounted(fetchProducts);
</script>

<template>
	<section
		class="w-full py-8 flex justify-center bg-gray300"
		aria-label="Today's For You Products"
	>
		<div class="w-max[1536px] w-full container gap-4 flex flex-col p-4">
			<div class="flex w-full gap-4 align-center justify-between flex-wrap">
				<h2 class="text-3xl my-auto font-bold h-max">
					Today's For You
				</h2>
				<TodaysForYouCategories />
			</div>

			<div class="overflow-x-auto whitespace-nowrap p-4 pl-0">
				<ul class="flex gap-4" role="list">
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
