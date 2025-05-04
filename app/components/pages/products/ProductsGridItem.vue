<script setup lang="ts">
import type { FlashSaleProductType } from '~/services/productService';

const { product } = defineProps<{
	product: FlashSaleProductType;
}>();

const currency = ref('$');

const variant = computed(() => {
	if (product.variants && product.variants.length > 0) {
		return product.variants[0];
	}

	return null;
});
</script>

<template>
	<NuxtLink
		:to="`/product/${product.id}`"
		class="flex flex-col gap-2 rounded-lg border-2 border-solid border-gray500 p-4 hover:text-inherit"
	>
		<div class="flex flex-col gap-2">
			<div class="flex items-center justify-center">
				<img
					v-if="variant && variant.image"
					:src="variant.image"
					alt="Product Image"
					class="size-32 object-cover transition-all duration-300 hover:scale-110"
				/>
			</div>
			<h4 v-if="product.name" class="font-bold">{{ product.name }}</h4>
			<span v-if="product.description">{{ product.description }}</span>
			<span v-if="variant?.price.basePrice"
				>{{ variant?.price.basePrice }} {{ currency }}</span
			>
		</div>
	</NuxtLink>
</template>
