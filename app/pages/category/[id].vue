<script setup lang="ts">
const { id } = useRoute().params;

definePageMeta({
	colorMode: 'light',
});
</script>

<template>
	<div>
		<h1>Category {{ id }}</h1>
	</div>
</template>
