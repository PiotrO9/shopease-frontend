<script setup lang="ts">
definePageMeta({
	layout: 'homepage',
	colorMode: 'light',
});
</script>

<template>
	<div class="flex flex-col">
		<hero-layout />
		<flash-sale />
		<todays-for-you />
		<best-selling-store />
		<hangers />
		<TestSubcategories />
	</div>
</template>
