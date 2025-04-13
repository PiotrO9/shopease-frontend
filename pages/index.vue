<script setup lang="ts">
definePageMeta({
	layout: 'homepage',
	colorMode: 'light',
});
</script>

<template>
	<div class="flex flex-col">
		<flash-sale />
		<todays-for-you />
		<best-selling-store />
	</div>
</template>
