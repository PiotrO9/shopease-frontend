<template>
	<section class="w-full py-8 flex justify-center bg-gray300" aria-label="Flash Sale Section">
		<div class="w-max[1536px] w-full container gap-4 flex flex-col p-4">
			<div class="flex gap-4 align-center w-max">
				<h2 class="text-3xl my-auto font-bold h-max">
					Flash Sale
				</h2>
				<div class="flex select-none gap-2 items-center" role="timer" aria-label="Time remaining">
					<span class="time select-none" aria-label="Days">{{ days }}</span> :
					<span class="time select-none" aria-label="Hours">{{ hours }}</span> :
					<span class="time select-none" aria-label="Minutes">{{ minutes }}</span> :
					<span class="time select-none" aria-label="Seconds">{{ seconds }}</span>
				</div>
			</div>
			<div class="overflow-x-auto whitespace-nowrap p-4 pl-0">
				<FlashSaleList />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';

const timeLeft: Ref<number> = ref(8 * 24 * 60 * 60); // 8 days
let timer: NodeJS.Timeout | null = null;

const days = computed(() => String(Math.floor(timeLeft.value / 86400)).padStart(2, '0'));
const hours = computed(() => String(Math.floor((timeLeft.value % 86400) / 3600)).padStart(2, '0'));
const minutes = computed(() => String(Math.floor((timeLeft.value % 3600) / 60)).padStart(2, '0'));
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
