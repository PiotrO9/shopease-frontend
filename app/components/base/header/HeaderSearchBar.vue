<script setup lang="ts">
const inputElement = ref<HTMLInputElement | null>(null);

function handleInputFocus() {
	if (inputElement.value) {
		inputElement.value.focus();
	}
}
</script>

<template>
	<div class="flex w-full">
		<div
			class="flex h-max cursor-pointer items-center gap-3 rounded-l-lg border-2 border-solid border-gray500 p-2 text-gray700"
		>
			<span class="text-md text-nowrap text-gray700 md:text-xl"
				>All Category</span
			>
			<Icon name="material-symbols:arrow-drop-down" class="size-6 md:size-8" />
		</div>
		<div
			class="flex h-max w-full cursor-pointer items-center gap-3 rounded-r-lg border-2 border-l-0 border-gray500 p-2"
			@click="handleInputFocus"
		>
			<Icon name="hugeicons:search-01" class="size-6 bg-gray500 md:size-8" />
			<input
				ref="inputElement"
				type="text"
				class="clean text-md w-full rounded-none border-0 border-none tracking-wide outline-none md:text-xl"
				placeholder="Search for products"
			/>
		</div>
	</div>
</template>
