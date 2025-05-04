<script setup lang="ts">
import { cartService } from '~/services/cartService';

definePageMeta({
	layout: 'default',
	colorMode: 'light',
});

const cartItems = computed(() => {
	return cartService.getCartItems();
});

const cartSummary = computed(() => {
	return cartService.getCartSummary();
});
</script>

<template>
	<div class="flex gap-4">
		<CartItemsList :items="cartItems" />
		<CartSummary :summary="cartSummary" />
	</div>
</template>
