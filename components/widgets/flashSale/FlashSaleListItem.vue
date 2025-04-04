<script setup lang='ts'>
import type { FlashSaleProductType } from '~/services/productService';

const { product } = defineProps<{
	product: FlashSaleProductType;
}>();

const variant = computed(() => {
	if (!product.variants) return null;

	return product.variants[0];
});

const maxInventory = ref(50);
const currency = ref('$');
// TODO - Fill product link with real data
const productLink = ref('');

const exampleProduct = ref({ productId: '123' });
</script>

<template>
	<li v-if="variant" class="relative w-[270px] border-gray300 border-solid border-2 rounded-2xl">
		<SaleCard>
			<template #upper>
				<div class="relative">
					<NuxtLink :to="productLink" class="bg-gray600 rounded-t-2xl justify-center items-center flex w-[270px]">
						<img class="image size-48" :src="variant.image" :alt="product.name" />
					</NuxtLink>

					<AddFavoriteProduct
						:product="exampleProduct"
						class="absolute top-2 right-2"
					/>
				</div>
			</template>
			<template #lower>
				<div class="bg-white rounded-b-xl w-[270px]">
					<div class="p-4 flex flex-col">
						<NuxtLink :to="productLink" class="text-lg font-bold">
							{{ product.name }}
						</NuxtLink>
						<span class="text-2xl font-bold">
							{{ variant.price }} {{ currency }}
						</span>
					</div>
					<hr>
					<div class="p-4 flex items-center gap-2">
						<progress
							class="w-50 h-3 rounded-full overflow-hidden bg-gray-200 appearance-none"
							:value="variant.inventory"
							:max="maxInventory"
						>
						</progress>
						<span class="text-gray-500 text-sm">
							{{ variant.inventory }}/{{ maxInventory }}
						</span>
					</div>
				</div>
			</template>
		</SaleCard>
	</li>
</template>

<style scoped>
.image {
	transition: scale 0.3s ease-in-out;

	&:hover {
		scale: 1.05;
	}
}

progress::-webkit-progress-bar {
  background-color: var(--color-gray-300);
  border-radius: 9999px;
  overflow: hidden;
}

progress::-webkit-progress-value {
  background-color: var(--color-primary);
  border-radius: 9999px;
}

progress::-moz-progress-bar {
  background-color: var(--color-primary);
  border-radius: 9999px;
}
</style>
