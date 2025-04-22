<script setup lang="ts">
const currentPage = ref<number>(1);
const totalPages = ref<number>(10);

const getPaginationPages = computed<number[]>(function (): number[] {
	const maxVisiblePages = 5;
	const total = totalPages.value;
	const current = currentPage.value;

	if (total <= maxVisiblePages) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	const pages: number[] = [];

	if (current <= 3) {
		for (let i = 1; i <= maxVisiblePages; i++) {
			pages.push(i);
		}
	} else if (current >= total - 2) {
		for (let i = total - 4; i <= total; i++) {
			pages.push(i);
		}
	} else {
		for (let i = current - 2; i <= current + 2; i++) {
			pages.push(i);
		}
	}

	return pages;
});

function swipeToPage(page: number): void {
	if (page >= 1 && page <= totalPages.value) {
		currentPage.value = page;
	}
}

function nextPage(): void {
	if (currentPage.value < totalPages.value) {
		currentPage.value += 1;
	}
}

function prevPage(): void {
	if (currentPage.value > 1) {
		currentPage.value -= 1;
	}
}
</script>

<template>
	<div class="pager flex items-center">
		<Action :disabled="currentPage === 1" @click="prevPage">
			<Icon name="material-symbols:keyboard-arrow-left" />
		</Action>
		<div class="pages flex overflow-x-auto">
			<button
				v-for="page in getPaginationPages"
				:key="page"
				class="page-button mx-1 px-2 py-1 cursor-pointer transition-colors"
				:class="{ 'font-bold': page === currentPage }"
				@click="swipeToPage(page)"
			>
				{{ page }}
			</button>
		</div>
		<Action :disabled="currentPage === totalPages" @click="nextPage">
			<Icon name="material-symbols:keyboard-arrow-right" />
		</Action>
	</div>
</template>

<style scoped>
    .active {
        color: var(--link-color-hover);
    }
</style>
