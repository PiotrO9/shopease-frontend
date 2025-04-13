<script setup lang="ts">
import AddFavoriteProduct from '~/components/common/AddFavoriteProduct.vue';
import type { FlashSaleProductType } from '~/services/productService';

interface Props {
	custom?: boolean;
	product: FlashSaleProductType;
}
const { custom = false, product } = defineProps<Props>();

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
	<div class="sale-card h-full w-full">
		<div class="upper">
			<slot v-if="custom" name="upper" />
			<div v-else class="relative">
				<NuxtLink
					:to="productLink"
					class="relative flex items-center justify-center overflow-hidden rounded-t-2xl bg-gray600"
					:aria-label="`View ${product.name} details`"
					tabindex="0"
				>
					<img
						v-if="variant?.image"
						class="image size-48 object-cover transition-opacity duration-300"
						:class="{ 'opacity-0': imageLoading }"
						:src="variant?.image"
						:alt="`${product.name} - 'Default variant`"
						@load="handleImageLoad"
						@error="handleImageError"
					/>
					<div
						v-if="imageLoading"
						class="absolute inset-0 flex items-center justify-center bg-gray-200"
					>
						<div
							class="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"
						></div>
					</div>

					<AddFavoriteProduct
						:product-id="product.id"
						class="absolute right-2 top-2"
					/>
				</NuxtLink>
			</div>
		</div>
		<div class="lower">
			<slot name="lower" />
		</div>
	</div>
</template>

<style scoped>
.image {
	transition: scale 0.3s ease-in-out;

	&:hover {
		scale: 1.05;
	}
}
</style>
