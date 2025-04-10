<script setup lang='ts'>
import { getProducts, type FlashSaleProductType } from '~/services/productService';

const products = ref<FlashSaleProductType[]>([]);
const productsAmount = ref(4);

onMounted(async () => {
	products.value = await getProducts(productsAmount.value);
});
</script>

<template>
	<div class="w-full py-8 flex justify-center bg-gray300 ">
		<div class="w-max[1536px] w-full container gap-4 flex flex-col p-4">
			<div class="flex w-full gap-4 align-center justify-between flex-wrap">
				<h2 class="text-3xl my-auto font-bold h-max">
					Todays For You
				</h2>
				<TodaysForYouCategories />
			</div>
			<div class="overflow-x-auto whitespace-nowrap p-4 pl-0">
				<ul class="">
					<TodaysForYouItem v-for="product in products" :key="product.id" :product="product" />
				</ul>
			</div>
		</div>
	</div>
</template>
