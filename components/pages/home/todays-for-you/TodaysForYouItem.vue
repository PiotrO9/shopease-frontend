<script setup lang="ts">
import type { FlashSaleProductType } from '~/services/productService';

interface Props {
	product: FlashSaleProductType;
}

const { product } = defineProps<Props>();

const randomNumber = ref(Math.floor(Math.random() * 10) + 1);
const rating = ref((Math.random() * 5 + 1).toFixed(1));
const currency = ref('$');

const variant = computed(() => {
	if (!product.variants?.length) {
		console.warn(`No variants found for product ${product.id}`);
		return null;
	}

	return product.variants[0];
});

const productLink = computed(() => `/product/${product.id}`);
</script>

<template>
	<li
		v-if="variant"
		class="xs:max-w-[364px] inline-block w-full rounded-2xl border-2 border-solid border-inherit"
	>
		<SaleCard :product="product">
			<template #lower>
				<div
					class="border-color-gray600 rounded-b-xl border-2 border-t-0 border-solid bg-white"
				>
					<div class="flex flex-col gap-2 p-4">
						<NuxtLink
							:to="productLink"
							class="inline-block w-max text-wrap text-lg font-bold"
							:aria-label="`View ${product.name} details`"
							tabindex="0"
						>
							{{ product.name }}
						</NuxtLink>
						<div class="flex items-center gap-2">
							<Icon
								name="material-symbols:star-rounded"
								class="bg-gold size-5"
							/>
							<span class="font-bold tracking-wider">
								{{ rating }}
							</span>
							<span class="text-gray500"> {{ randomNumber }}K + sold </span>
						</div>
						<span class="text-2xl font-bold tracking-wider">
							{{ variant.price }} {{ currency }}
						</span>
					</div>
				</div>
			</template>
		</SaleCard>
	</li>
</template>
