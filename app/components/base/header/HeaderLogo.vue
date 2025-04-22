<script setup lang="ts">
interface Props {
	'text-color'?: string;
}

const props = withDefaults(defineProps<Props>(), {
	'text-color': 'text-black',
});
</script>

<template>
	<div class="inline-flex h-max w-max">
		<span class="select-none text-4xl font-bold" :class="props['text-color']"
			>Shopease.com</span
		>
	</div>
</template>
