<script setup lang="ts">
// TODO

definePageMeta({
	layout: 'empty',
	colorMode: 'light',
});

const colors = [
	'--color-primary',
	'--color-secondary',
	'--gray-300',
	'--gray-500',
	'--gray-600',
	'--gray-700',
	'--gray-900',
];
</script>

<template>
	<div class="container flex flex-col gap-4">
		<dl class="section">
			<dt>
				<h1>Headings</h1>
			</dt>
			<dd>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
			</dd>
		</dl>
		<dl class="section">
			<dt>
				<h1>Colors</h1>
			</dt>
			<dd>
				<ul class="flex gap-2">
					<li
						v-for="color in colors"
						:key="color"
						class="flex items-center gap-2"
					>
						<div
							class="color-preview relative size-8 border-2 border-solid border-black"
							:style="{ backgroundColor: `var(${color})` }"
						>
							<div
								class="tooltip absolute right-8 top-0 z-[2] flex flex-col gap-1 rounded-md bg-gray-300 p-2"
							>
								<span class="w-max text-sm font-medium text-black">
									{{ color }}
								</span>
							</div>
						</div>
					</li>
				</ul>
			</dd>
		</dl>
		<dl class="section">
			<dt>
				<h1>Buttons</h1>
			</dt>
			<dd class="flex gap-2">
				<Action :variant="'primary'"> primary </Action>
				<Action :variant="'secondary'"> secondary </Action>
				<Action :variant="'primary'" :disabled="true"> disabled </Action>
				<Action :variant="'primary'" :loading="true"> loading </Action>
			</dd>
		</dl>
		<dl class="section">
			<dt>
				<h1>Inputs</h1>
			</dt>
			<dd class="flex flex-col gap-2">
				<input type="text" />
				<input type="number" />
				<textarea></textarea>
				<input type="checkbox" />
				<input type="radio" />
			</dd>
		</dl>

		<dl class="section">
			<dt>
				<h1>Pager</h1>
			</dt>
			<dd>
				<Pager />
			</dd>
		</dl>
	</div>
</template>

<style scoped>
.section {
	display: flex;
	flex-direction: column;
	gap: 8px;

	dt {
		h1 {
			font-size: 32px;
		}
	}
}

.tooltip {
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}

.color-preview:hover .tooltip {
	opacity: 1;
}
</style>
