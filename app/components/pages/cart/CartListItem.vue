<script setup lang="ts">
import type { CartItem } from '~/services/cartService';

// TODO

const { item } = defineProps<{
	item: CartItem;
}>();

const product = computed(() => item.product);
const quantity = computed(() => item.quantity);
const price = computed(() => item.price);
</script>

<template>
	<div>Cart list item</div>
</template>
