<script setup lang='ts'>
interface Props {
	selected?: boolean;
	categoryName: string;
}

const { selected = false, categoryName } = defineProps<Props>();

const emit = defineEmits<{
	(e: 'select', categoryName: string): void;
}>();

function handleCategoryCLick() {
	emit('select', categoryName);
}
</script>

<template>
	<li class="cursor-pointer transition-colors bg-white px-8 py-2 rounded-md" :class="{ selected }" @click="handleCategoryCLick">
		<span class="transition-colors text-lg font-bold text-gray-800">
			{{ categoryName }}
		</span>
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
