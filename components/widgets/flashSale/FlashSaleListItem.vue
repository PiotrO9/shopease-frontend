<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { FlashSaleProductType } from '~/services/productService';

interface Props {
	product: FlashSaleProductType;
}

const { product } = defineProps<Props>();

const maxInventory = ref(50);
const currency = ref('$');

const variant: ComputedRef<FlashSaleProductType['variants'][0] | null> =
	computed(() => {
		if (!product.variants?.length) return null;
		return product.variants[0];
	});

const productLink = computed(() => `/products/${product.id}`);
</script>

<template>
	<li
		v-if="variant"
		class="min-w-[364px] rounded-2xl border-2 border-solid border-gray300"
		role="listitem"
	>
		<SaleCard :product="product">
			<template #lower>
				<div
					class="border-color-gray600 rounded-b-xl border-2 border-t-0 border-solid bg-white"
				>
					<div class="flex flex-col gap-2 p-4">
						<NuxtLink
							:to="productLink"
							class="word-break-all inline-block w-full text-wrap text-lg font-bold"
							:aria-label="`View ${product.name} details`"
							tabindex="0"
						>
							{{ product.name }}
						</NuxtLink>
						<span class="text-2xl font-bold tracking-wider">
							{{ variant.price }} {{ currency }}
						</span>
					</div>
					<hr />
					<div class="flex items-center gap-2 p-4">
						<progress
							class="w-50 h-3 appearance-none overflow-hidden rounded-full bg-gray-200"
							:value="variant.inventory"
							:max="maxInventory"
							:aria-label="`${variant.inventory} out of ${maxInventory} items remaining`"
						></progress>
						<span class="text-sm text-gray-500">
							{{ variant.inventory }}/{{ maxInventory }}
						</span>
					</div>
				</div>
			</template>
		</SaleCard>
	</li>
</template>

<style scoped>
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
