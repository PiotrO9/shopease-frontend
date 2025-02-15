<script setup lang='ts'>
import { ref, computed } from 'vue';
import Action from '~/components/common/Action.vue';

const currentPage = ref(1);
const totalPages = ref(10); // Example total pages, you can set this dynamically

const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

const swipeToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const showDots = computed(() => {
  return totalPages.value > 5;
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};
</script>

<template>
	<!-- TODO - finish pager -->
	<div class="pager">
		<Action :disabled="currentPage === 1" @click="prevPage">
			←
		</Action>
		<div class="pages">
			<button v-for="page in pages" :key="page" @click="swipeToPage(page)">
				{{ page }}
			</button>
		</div>
		<Action :disabled="currentPage === totalPages" @click="nextPage">
			→
		</Action>
		<div v-if="showDots" class="dots">
			...
		</div>
	</div>
</template>

<style scoped>
.pager {
  display: flex;
  align-items: center;
}

.pages {
  display: flex;
  overflow-x: auto;
}

.pages button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.dots {
  margin-left: 10px;
}
</style>
