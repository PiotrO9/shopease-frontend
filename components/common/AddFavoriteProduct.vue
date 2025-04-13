<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
	productId: number;
	backgroundColor?: string;
	emptyHearthColor?: string;
	activeHearthColor?: string;
}

const {
	productId,
	backgroundColor = 'white',
	emptyHearthColor = 'var(--gray-600)',
	activeHearthColor = 'var(--color-error)',
} = defineProps<Props>();

const emit = defineEmits<{
	(e: 'click', datas: number): void;
}>();

const isActive = ref(false);

function handleClick() {
	isActive.value = !isActive.value;
	emit('click', productId);
}

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === ' ' || event.key === 'Enter') {
		event.preventDefault();
		handleClick();
	}
}

const fillColor = computed(() => {
	return isActive.value ? activeHearthColor : emptyHearthColor;
});
</script>

<template>
	<div
		role="button"
		:aria-label="isActive ? 'Remove from favorites' : 'Add to favorites'"
		:aria-pressed="isActive"
		tabindex="0"
		class="focus:ring-primary-500 flex size-8 cursor-pointer items-center justify-center rounded-full outline-2 transition-all duration-300 focus:outline-none focus:ring-2"
		:style="{ backgroundColor }"
		@click.prevent="handleClick"
		@keydown="handleKeyDown"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			:stroke="fillColor"
			:class="[
				'h-5 w-5 transition-all duration-300',
				isActive ? 'scale-110' : 'scale-100',
			]"
			:style="{ fill: fillColor, stroke: fillColor }"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path
				d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
			/>
		</svg>
	</div>
</template>
