<script setup lang="ts">
import { ref } from 'vue';
import TodaysForYouItem from './TodaysForYouItem.vue';
import TodaysForYouCategories from './TodaysForYouCategories.vue';
import {
	productService,
	type FlashSaleProductType,
} from '~/services/productService';
import BaseSection from '~/components/base/BaseSection.vue';
import BaseProductGrid from '~/components/base/BaseProductGrid.vue';

const products = ref<FlashSaleProductType[]>([]);
const titleText = ref(`Today's For You`);
const ariaLabel = ref(`Today's For You Products`);

async function handleFetchProducts(): Promise<void> {
	products.value = await productService.getRandomProducts(4);
}

await handleFetchProducts();
</script>

<template>
	<BaseSection :title="titleText" :aria-label="ariaLabel">
		<template #header-content>
			<TodaysForYouCategories />
		</template>
		<BaseProductGrid :products="products" :component="TodaysForYouItem" />
	</BaseSection>
</template>
