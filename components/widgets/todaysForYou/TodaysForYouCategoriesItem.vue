<script setup lang='ts'>
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
			class="cursor-pointer transition-colors px-8 py-2 rounded-md text-lg font-bold"
			:class="[
				selected
					? 'bg-primary text-white border-primary'
					: 'bg-white text-gray-800 hover:bg-gray-100',
			]"
			:aria-current="selected ? 'true' : 'false'"
			:aria-label="`${categoryName} category${selected ? ' (selected)' : ''}`"
			tabindex="0"
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
