<script setup lang='ts'>

</script>

<template>
	<div class="sale-card">
		<div class="upper">
			<slot name="upper" />
		</div>
		<div class="lower">
			<slot name="lower" />
		</div>
	</div>
</template>
