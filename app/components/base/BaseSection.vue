<script setup lang="ts">
interface Props {
	title?: string;
	'aria-label': string;
	bgColor?: string;
}

const props = defineProps<Props>();
</script>

<template>
	<section
		class="flex w-full justify-center py-8"
		:class="props['bgColor'] || 'bg-white'"
		:aria-label="props['aria-label']"
	>
		<div class="w-max[1536px] container flex w-full flex-col gap-4 p-4">
			<div
				v-if="props['title']"
				class="align-center flex w-full flex-wrap justify-between gap-4"
			>
				<h2 class="my-auto h-max text-3xl font-bold">
					{{ props['title'] }}
				</h2>
				<slot name="header-content" />
			</div>
			<slot />
		</div>
	</section>
</template>
