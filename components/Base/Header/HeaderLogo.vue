<script setup lang="ts">
interface Props {
    // Tailwind class for text color
    textColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    textColor: 'text-black',
});
</script>

<template>
	<div class="inline-flex h-max w-max">
		<span class="text-4xl font-bold select-none" :class="props.textColor">Shopify.com</span>
	</div>
</template>
