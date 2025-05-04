<script setup lang="ts">
interface BreadcrumbItem {
	name: string;
	path: string;
}

const { items } = defineProps<{
	items: BreadcrumbItem[];
}>();

const shouldRenderBreadcrumbs = computed(() => items.length >= 2);
</script>

<template>
	<nav v-if="shouldRenderBreadcrumbs" aria-label="Breadcrumbs" class="py-3">
		<ol class="flex flex-wrap items-center gap-2 text-sm">
			<li
				v-for="(item, index) in items"
				:key="item.path"
				class="flex items-center"
			>
				<NuxtLink
					v-if="index < items.length - 1"
					:to="item.path"
					class="font-bold text-gray700 transition-colors duration-300"
					tabindex="0"
				>
					{{ item.name }}
				</NuxtLink>
				<span v-else class="font-semibold text-gray-900" aria-current="page">
					{{ item.name }}
				</span>

				<Icon
					v-if="index < items.length - 1"
					name="material-symbols:arrow-forward-ios"
					class="ml-2 size-3 flex-shrink-0 text-gray-400"
				/>
			</li>
		</ol>
	</nav>
</template>
