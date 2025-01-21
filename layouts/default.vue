<script setup lang="ts">

</script>

<template>
	<header class="full-container flex justify-center h-max border-b-gray-300 border-solid border-b-2">
		<menu class="flex justify-end w-full container">
			<div class="p-4 pr-0 flex gap-4">
				<NuxtLink to="/about" class="pointer font-extrabold text-gray-500">
					About
				</NuxtLink>
				<NuxtLink to="/sales" class="pointer font-extrabold text-gray-500">
					Sales
				</NuxtLink>
			</div>
			<BaseHeaderAuthWidget />
		</menu>
	</header>
	<slot />
</template>
