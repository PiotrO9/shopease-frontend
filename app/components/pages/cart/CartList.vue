<script setup lang="ts">
import type { CartItem } from '~/services/cartService';
// TODO

const props = defineProps<{
	items: CartItem[];
}>();
</script>

<template>
	<div v-for="item in items" :key="item.product.id">
		<CartListItem :item="item" />
	</div>
</template>
