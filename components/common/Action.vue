<script setup lang="ts">
import { defineEmits } from 'vue';

interface ActionProps {
	styles?: string;
	variant?: 'primary' | 'secondary';
	loading?: boolean;
	disabled?: boolean;
}

const { styles, variant, loading, disabled } = defineProps<ActionProps>();

const variantStyles = computed(() => {
	if (variant === 'primary') {
		return 'bg-white text-primary';
	}
	else {
		return 'bg-primary text-white';
	}
});

const isloading = computed(() => {
	return (loading && !disabled) ? 'loading' : '';
});

const isDisabled = computed(() => {
	return disabled ? 'opacity-30 cursor-not-allowed border-gray700 bg-gray700 text-white' : '';
});

const emit = defineEmits(['click']);

function handleClick() {
	emit('click');
}
</script>

<template>
	<button
		:class="[
			'tracking-wider relative cursor-pointer transition-colors flex-center border-2 border-solid rounded-lg font-bold py-2 px-4',
			disabled ? isDisabled : variantStyles,
			styles,
			isloading,
			isDisabled,
			loading ? 'pointer-events-none cursor-wait' : '',
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<div v-if="loading" class="loader-wrapper">
			<div class="spinner"></div>
		</div>
		<slot />
	</button>
</template>

<style scoped>
.loader-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	border-radius: inherit;
	border-radius: 0.25rem;
	cursor: wait;
}

.spinner {
	width: 24px;
	height: 24px;
	border: 3px solid transparent;
	border-top: 3px solid #fff;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
