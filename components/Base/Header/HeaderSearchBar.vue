<script setup lang='ts'>
const inputElement = ref<HTMLInputElement | null>(null);

function handleInputFocus() {
	if (inputElement.value) {
		inputElement.value.focus();
	}
}
</script>

<template>
	<div class="flex w-full">
		<div class="flex items-center gap-3 text-gray700 border-gray500 border-solid border-2 h-max rounded-l-lg px-3 py-4 cursor-pointer">
			<span class="text-gray700 text-2xl text-nowrap">
				All Category
			</span>
			<Icon name="material-symbols:arrow-drop-down" class="size-8" />
		</div>
		<div class="flex items-center border-2 gap-3 w-full border-l-0 rounded-r-lg border-gray500 h-max px-3 py-4 cursor-pointer" @click="handleInputFocus">
			<Icon name="hugeicons:search-01" class="size-8 bg-gray500" />
			<input ref="inputElement" type="text" class="border-none w-full tracking-wide clean rounded-none text-2xl border-0 outline-none" placeholder="Search for products" />
		</div>
	</div>
</template>
