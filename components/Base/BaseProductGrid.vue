<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
	products: any[];
	component: Component;
}>();
</script>

<template>
	<div class="grid whitespace-nowrap p-4 px-0">
		<ul
			class="grid max-w-[1536px] grid-cols-1 gap-4 border-white xxs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			role="list"
		>
			<component
				:is="component"
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</ul>
	</div>
</template>
