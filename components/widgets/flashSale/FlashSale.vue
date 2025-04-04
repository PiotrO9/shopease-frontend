<template>
	<div class="w-full py-8 flex justify-center bg-gray300 ">
		<div class="w-max[1536px] w-full container gap-4 flex flex-col p-4">
			<div class="flex gap-4 align-center w-max">
				<h2 class="text-3xl my-auto font-bold h-max">
					Flash Sale
				</h2>
				<div class="flex select-none gap-2 items-center">
					<span class="time select-none">{{ days }}</span> :
					<span class="time select-none">{{ hours }}</span> :
					<span class="time select-none">{{ minutes }}</span> :
					<span class="time select-none">{{ seconds }}</span>
				</div>
			</div>
			<div class="overflow-x-auto whitespace-nowrap p-4 pl-0">
				<FlashSaleList />
			</div>
		</div>
	</div>
</template>

<script setup>
const timeLeft = ref(8 * 24 * 60 * 60); // 8 dyas
let timer = null;

const days = computed(() => String(Math.floor(timeLeft.value / 86400)).padStart(2, '0'));
const hours = computed(() => String(Math.floor((timeLeft.value % 86400) / 3600)).padStart(2, '0'));
const minutes = computed(() => String(Math.floor((timeLeft.value % 3600) / 60)).padStart(2, '0'));
const seconds = computed(() => String(timeLeft.value % 60).padStart(2, '0'));

onMounted(() => {
	timer = setInterval(() => {
		if (timeLeft.value > 0) timeLeft.value--;
		else clearInterval(timer);
	}, 1000);
});

onUnmounted(() => clearInterval(timer));
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
