<template>
	<section
		class="flex w-full justify-center bg-gray300 py-8"
		aria-label="Flash Sale Section"
	>
		<div class="w-max[1536px] container flex w-full flex-col gap-4 p-4">
			<div class="align-center flex w-max flex-wrap gap-4">
				<h2 class="my-auto h-max text-3xl font-bold">Flash Sale</h2>
				<div
					class="flex select-none items-center gap-2"
					role="timer"
					aria-label="Time remaining"
				>
					<span class="time select-none" aria-label="Days">{{ days }}</span> :
					<span class="time select-none" aria-label="Hours">{{ hours }}</span> :
					<span class="time select-none" aria-label="Minutes">{{
						minutes
					}}</span>
					:
					<span class="time select-none" aria-label="Seconds">{{
						seconds
					}}</span>
				</div>
			</div>
			<div class="overflow-x-visible whitespace-nowrap p-4 px-0">
				<FlashSaleList />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';

const timeLeft: Ref<number> = ref(8 * 24 * 60 * 60); // 8 days
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

function handleTimerTick(): void {
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
