<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import FlashSaleList from './FlashSaleList.vue';
import BaseSection from '~/components/base/BaseSection.vue';

const timeLeft = ref(8 * 24 * 60 * 60);
let timer: NodeJS.Timeout | null = null;

const days = computed(() =>
	String(Math.floor(timeLeft.value / 86400)).padStart(2, '0'),
);
const hours = computed(() =>
	String(Math.floor((timeLeft.value % 86400) / 3600)).padStart(2, '0'),
);
const minutes = computed(() =>
	String(Math.floor((timeLeft.value % 3600) / 60)).padStart(2, '0'),
);
const seconds = computed(() => String(timeLeft.value % 60).padStart(2, '0'));

function handleTimerTick() {
	if (timeLeft.value > 0) {
		timeLeft.value--;
	} else {
		clearInterval(timer!);
	}
}

onMounted(() => {
	timer = setInterval(handleTimerTick, 1000);
});

onUnmounted(() => {
	if (timer) {
		clearInterval(timer);
	}
});
</script>

<template>
	<BaseSection
		title="Flash Sale"
		:aria-label="'Flash Sale Section'"
		:bgColor="'bg-gray300'"
	>
		<template #header-content>
			<div
				class="flex select-none items-center gap-2"
				role="timer"
				aria-label="Time remaining"
			>
				<span class="time select-none" aria-label="Days">{{ days }}</span> :
				<span class="time select-none" aria-label="Hours">{{ hours }}</span> :
				<span class="time select-none" aria-label="Minutes">{{ minutes }}</span>
				:
				<span class="time select-none" aria-label="Seconds">{{ seconds }}</span>
			</div>
		</template>
		<div class="overflow-x-visible whitespace-nowrap p-4 px-0">
			<FlashSaleList />
		</div>
	</BaseSection>
</template>

<style scoped>
.time {
	background-color: var(--color-error);
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
