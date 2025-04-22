<script setup lang='ts'>
const isAuth = ref(false);
</script>

<template>
	<div class="flex justify-center items-center gap-2 p-4">
		<div class="vertical-divider"></div>
		<template v-if="isAuth">
			<span>
				Logout
			</span>
		</template>
		<template v-else>
			<NuxtLink to="register" class="font-extrabold">
				Sign in
			</NuxtLink>

			<div class="vertical-divider"></div>

			<NuxtLink to="login" class="font-extrabold">
				Login
			</NuxtLink>
		</template>
	</div>
</template>
