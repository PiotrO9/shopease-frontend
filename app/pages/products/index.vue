<script setup lang="ts">
definePageMeta({
	layout: 'ecommerce',
	colorMode: 'light',
});

const breadcrumbs = [
	{ name: 'Home', path: '/' },
	{ name: 'Products', path: '/products' },
];
</script>

<template>
	<div>
		<Breadcrumbs :items="breadcrumbs" />
	</div>
</template>
