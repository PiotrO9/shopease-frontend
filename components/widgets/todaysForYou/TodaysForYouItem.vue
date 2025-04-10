<script setup lang='ts'>
import type { FlashSaleProductType } from '~/services/productService';

interface Props {
	product: FlashSaleProductType;
}

const { product } = defineProps<Props>();

const variant = computed(() => {
	if (!product.variants?.length) {
		console.warn(`No variants found for product ${product.id}`);
		return null;
	}

	return product.variants[0];
});

const productLink = computed(() => `/product/${product.id}`);
const imageLoading = ref(true);

function handleImageLoad() {
	imageLoading.value = false;
}

function handleImageError() {
	imageLoading.value = false;
	console.error(`Failed to load image for product ${product.id}`);
}
</script>

<template>
	<li v-if="variant" class="inline-block">
		<SaleCard>
			<template #upper>
				<div class="relative">
					<NuxtLink
						:to="productLink"
						class="bg-gray600 rounded-t-2xl justify-center items-center flex w-[270px] h-[270px] relative overflow-hidden"
						:aria-label="`View ${product.name} details`"
						tabindex="0"
					>
						<img
							class="image size-48 object-cover transition-opacity duration-300"
							:class="{ 'opacity-0': imageLoading }"
							:src="variant.image"
							:alt="`${product.name} - 'Default variant`"
							@load="handleImageLoad"
							@error="handleImageError"
						/>
						<div
							v-if="imageLoading"
							class="absolute inset-0 flex items-center justify-center bg-gray-200"
						>
							<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
						</div>
					</NuxtLink>

					<AddFavoriteProduct
						:product-id="product.id"
						class="absolute top-2 right-2"
					/>
				</div>
			</template>
			<template #lower>
				<!-- Add product details here -->
			</template>
		</SaleCard>
	</li>
</template>
