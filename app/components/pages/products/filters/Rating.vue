<script setup lang="ts">
defineProps<{
	modelValue?: number;
}>();

const emit = defineEmits<{
	'update:modelValue': [value: any];
}>();

function handleRatingChange(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
}
</script>

<template>
	<div class="flex flex-col gap-2">
		<h3 class="font-medium">Rating</h3>
		<input
			id="rating-slider"
			type="range"
			min="1"
			max="5"
			step="1"
			:value="modelValue"
			class="w-full"
			aria-label="Select rating filter"
			@input="handleRatingChange"
		/>
	</div>
</template>
