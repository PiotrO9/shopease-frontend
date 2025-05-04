<template>
	<header
		class="full-container flex h-max flex-col items-center justify-center border-b-2 border-solid border-b-gray-300"
	>
		<menu class="container flex w-full justify-end">
			<div class="flex gap-4 p-4 pr-0">
				<NuxtLink to="/about" class="pointer font-extrabold text-gray-500">
					About
				</NuxtLink>
				<NuxtLink to="/sales" class="pointer font-extrabold text-gray-500">
					Sales
				</NuxtLink>
			</div>
			<AuthWidget />
		</menu>
		<div
			class="flex w-full justify-center border-t-2 border-solid border-gray-300"
		>
			<div
				class="header-items-container container flex w-full items-center justify-center gap-8 p-4 lg:gap-12"
			>
				<HeaderLogo />
				<HeaderSearchBar />
				<WidgetsContainer />
			</div>
		</div>
	</header>
</template>

<style scoped>
@media (width < 1024px) {
	.header-items-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, auto);
		gap: 1rem;
	}

	.header-items-container > :nth-child(1),
	.header-items-container > :nth-child(3) {
		grid-row: 1;
	}

	.header-items-container > :nth-child(2) {
		grid-row: 2;
		grid-column: span 2;
		width: 100%;
	}
}
</style>
