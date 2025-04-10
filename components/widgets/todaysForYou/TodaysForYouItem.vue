<script setup lang='ts'>
import type { FlashSaleProductType } from '~/services/productService';

const { product } = defineProps<{
	product: FlashSaleProductType;
}>();

const variant = computed(() => {
	if (!product.variants) return null;

	return product.variants[0];
});

const productLink = ref('');
</script>

<template>
	<li v-if="variant">
		<SaleCard>
			<template #upper>
				<div class="relative">
					<NuxtLink :to="productLink" class="bg-gray600 rounded-t-2xl justify-center items-center flex w-[270px]">
						<img class="image size-48" :src="variant.image" :alt="product.name" />
					</NuxtLink>

					<AddFavoriteProduct
						:product-id="product.id"
						class="absolute top-2 right-2"
					/>
				</div>
			</template>
			<template #lower>
			</template>
		</SaleCard>
	</li>
</template>
