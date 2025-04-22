<template>
	<header class="full-container flex flex-col justify-center items-center h-max border-b-gray-300 border-solid border-b-2">
		<menu class="flex justify-end w-full container">
			<div class="p-4 pr-0 flex gap-4">
				<NuxtLink to="/about" class="pointer font-extrabold text-gray-500">
					About
				</NuxtLink>
				<NuxtLink to="/sales" class="pointer font-extrabold text-gray-500">
					Sales
				</NuxtLink>
			</div>
			<AuthWidget />
		</menu>
		<div class="w-full flex justify-center border-solid border-t-2 border-gray-300">
			<div class="flex justify-center items-center gap-8 lg:gap-12 w-full p-4 header-items-container container">
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
