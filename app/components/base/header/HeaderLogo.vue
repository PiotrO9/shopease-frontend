<script setup lang="ts">
interface Props {
	textColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
	textColor: 'text-black',
});
</script>

<template>
	<div class="inline-flex h-max w-max">
		<span
			class="select-none text-2xl font-bold md:text-4xl"
			:class="props['textColor']"
			>Shopease.com</span
		>
	</div>
</template>
