<script setup lang='ts'>
import { ref, computed } from 'vue';

interface Props {
    product: ProductDataModel;
    backgroundColor?: string;
    emptyHearthColor?: string;
    activeHearthColor?: string;
}

interface ProductDataModel {
    productId: string;
}

const { product, backgroundColor = 'white', emptyHearthColor = 'var(--gray-600)', activeHearthColor = 'var(--color-error)' } = defineProps<Props>();

const emit = defineEmits<{
    (e: 'click', datas: ProductDataModel): void;
}>();

const isActive = ref(false);

function handleClick() {
    isActive.value = !isActive.value;
    emit('click', product);
}

const fillColor = computed(() => {
    return isActive.value ? activeHearthColor : emptyHearthColor;
});
</script>

<template>
	<div
		class="rounded-full flex items-center justify-center size-8 cursor-pointer transition-all duration-300"
		:style="{ backgroundColor }"
		@click="handleClick"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			:stroke="fillColor"
			:class="[
				'w-5 h-5 transition-all duration-300',
				isActive ? 'scale-110' : 'scale-100',
			]"
			:style="{ fill: fillColor, stroke: fillColor }"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
			/>
		</svg>
	</div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>
