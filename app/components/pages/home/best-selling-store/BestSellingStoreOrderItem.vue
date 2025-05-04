<script setup lang="ts">
import type { FlashSaleProductType } from '~/services/productService';

interface Props {
	orderItem: FlashSaleProductType;
}

const { orderItem } = defineProps<Props>();

const variant: ComputedRef<
	FlashSaleProductType['variants'][0] | null | undefined
> = computed(() => {
	if (!orderItem.variants?.length) return null;
	return orderItem.variants[0];
});

const currency = ref('$');
</script>

<template>
	<div
		class="flex flex-col gap-4 rounded-lg border-2 border-solid border-gray300 p-4"
	>
		<div class="flex gap-4">
			<div
				class="flex size-16 items-center justify-center rounded-full bg-gray300"
			>
				<Icon name="heroicons:user-circle" class="size-8 bg-primary" />
			</div>
			<div class="flex flex-col gap-2">
				<span class="text-lg font-bold text-primary"> Client name </span>
				<span> Comment from order </span>
			</div>
		</div>
		<ul class="grid grid-cols-3 gap-2">
			<li v-for="i in 3" :key="i" class="flex flex-col gap-2">
				<div class="flex items-center justify-center rounded-lg bg-gray600">
					<img
						v-if="variant?.image"
						class="max-w-[80px] scale-75 object-cover"
						:src="variant?.image"
						:alt="`${orderItem.name} - 'Default variant`"
					/>
				</div>
				<span class="md:text-md text-sm font-bold tracking-wider text-primary">
					{{ variant?.price.basePrice }} {{ currency }}
				</span>
			</li>
		</ul>
	</div>
</template>
