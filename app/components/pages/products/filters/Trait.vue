<script setup lang="ts">
defineProps<{
	options?: any[];
	modelValue?: any[];
}>();

const emit = defineEmits<{
	'update:modelValue': [value: any];
}>();

function handleTraitChange(value: any) {
	emit('update:modelValue', value);
}
</script>

<template>
	<div class="flex flex-col gap-2">
		<h3 class="font-medium">Trait</h3>
		<div class="space-y-2">
			<div
				v-for="(option, index) in options"
				:key="index"
				class="flex items-center gap-2"
			>
				<input
					:id="`trait-${index}`"
					type="checkbox"
					:value="option"
					class="h-4 w-4 rounded border-gray-300"
					aria-label="Select trait filter"
					@change="handleTraitChange(option)"
				/>
				<label :for="`trait-${index}`" class="text-sm">
					{{ option }}
				</label>
			</div>
		</div>
	</div>
</template>
