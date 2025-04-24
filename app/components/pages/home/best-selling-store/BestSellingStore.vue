<script setup lang="ts">
import { ref } from 'vue';
import BestSellingStoreOrderItem from './BestSellingStoreOrderItem.vue';
import type { FlashSaleProductType } from '~/services/productService';
import { productService } from '~/services/productService';

import BaseSection from '~/components/base/BaseSection.vue';

const orderItems = ref<FlashSaleProductType[]>([]);

async function handleFetchProducts(): Promise<void> {
	orderItems.value = await productService.getRandomProducts(5);
}

await handleFetchProducts();
</script>

<template>
	<BaseSection
		title="Best selling store"
		:aria-label="'Best selling store products'"
	>
		<template #header-content>
			<div
				class="grid-row-2 grid w-full grid-cols-1 gap-4 py-4 text-center xs:grid-cols-2 md:grid-cols-3"
			>
				<div
					class="flex w-full select-none flex-col items-center justify-center gap-4 rounded-lg bg-gray600 p-8 text-gray900"
				>
					<h3 class="text-4xl font-black">Shopease mall</h3>
					<span class="max-w-[200px] font-bold">
						Shop, Explore, Delight and Experience Mall Magic!
					</span>
				</div>
				<BestSellingStoreOrderItem
					v-for="(orderItem, index) in orderItems"
					:key="index"
					:orderItem="orderItem"
				/>
			</div>
		</template>
	</BaseSection>
</template>
