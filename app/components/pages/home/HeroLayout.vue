<script setup lang="ts">
import CategoriesWidget from './CategoriesWidget.vue';
</script>

<template>
	<BaseSection aria-label="Hero Section" :bgColor="'bg-gray300'">
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
			<div class="flex flex-col justify-center gap-4">
				<span class="text-bold text-xl text-gray-500 md:text-3xl">
					#Big Fashion Sale
				</span>
				<h1 class="text-3xl sm:text-5xl md:text-7xl">
					<span class="block font-bold">Limited time offer!</span>
					<span class="block font-bold">Up to 50% off</span>
				</h1>
				<span class="text-xl text-gray-500 md:text-3xl">
					Redefine Your Everyday Style</span
				>
			</div>
			<div class="flex items-center justify-center">
				<img
					class="hidden h-max w-full scale-110 md:block"
					src="../../../assets/static/hero-layout-image.webp"
				/>
			</div>
		</div>
	</BaseSection>
	<CategoriesWidget />
</template>
