<script setup lang="ts">
const traits = ref([
	{
		name: 'Trait 1',
		options: [
			{
				name: 'Option 1',
				value: 'option1',
				selected: false,
			},
			{
				name: 'Option 2',
				value: 'option2',
				selected: false,
			},
			{
				name: 'Option 3',
				value: 'option3',
				selected: false,
			},
		],
	},
	{
		name: 'Trait 2',
		options: [
			{
				name: 'Option 1',
				value: 'option1',
				selected: false,
			},
			{
				name: 'Option 2',
				value: 'option2',
				selected: false,
			},
			{
				name: 'Option 3',
				value: 'option3',
				selected: false,
			},
		],
	},
]);
</script>

<template>
	<div
		class="flex flex-col gap-4 rounded-lg border-2 border-solid border-gray500 p-4"
	>
		<h2>Filter</h2>
		<Rating />
		<Price />
		<template v-for="(trait, index) in traits" :key="trait.name">
			<Trait :trait="trait" />
			<hr
				v-if="index < traits.length - 1"
				class="h-[2px] w-full rounded-full border-none bg-gray500"
			/>
		</template>
	</div>
</template>
