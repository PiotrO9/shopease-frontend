<script setup lang="ts">
interface Props {
	selected?: boolean;
	categoryId: string;
	categoryName: string;
}

const { selected = false, categoryId, categoryName } = defineProps<Props>();

const emit = defineEmits<{
	(e: 'select', categoryId: string): void;
}>();

function handleCategoryClick() {
	emit('select', categoryId);
}

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		handleCategoryClick();
	}
}
</script>

<template>
	<li>
		<button
			class="border-1 cursor-pointer rounded-md border-solid px-8 py-2 text-lg font-bold transition-colors"
			:class="[
				selected
					? 'border-primary bg-primary text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
					: 'border-gray600 bg-white text-gray-800 hover:bg-gray-100 focus:border-primary',
			]"
			:aria-current="selected ? 'true' : 'false'"
			:aria-label="`${categoryName} category${selected ? ' (selected)' : ''}`"
			@click="handleCategoryClick"
			@keydown="handleKeyDown"
		>
			{{ categoryName }}
		</button>
	</li>
</template>

<style scoped>
.selected {
	background-color: var(--color-primary);
	border-color: var(--color-primary);

	span {
		color: #fff;
	}
}
</style>
