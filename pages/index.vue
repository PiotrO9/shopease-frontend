<script setup lang="ts">
import createUserMutation from '../graphql/mutations/createUser.gql';
import Action from '~/components/common/Action.vue';

definePageMeta({
	layout: 'homepage',
	colorMode: 'light',
});

// const handleCreateUser = async () => {
// 	const { $apollo } = useNuxtApp(); // Access Apollo Client
// 	try {
// 		const response = await $apollo.defaultClient.mutate({
// 			mutation: createUserMutation,
// 			variables: {
// 				email: 'test@post.pl',
// 				password: 'password123',
// 				login: 'login123',
// 				name: 'name',
// 			},
// 		});
// 		console.log('User created successfully:', response.data.createUser);
// 	} catch (err) {
// 		console.error('Error creating user:', err);
// 	}
// };

// handleCreateUser();
const modalState = ref(false);

onMounted(() => {
	modalState.value = true;
});
</script>

<template>
	<div>
		<Dialog :model-value="modalState" title="lOREM IPSUM">
			<h1>test</h1>
		</Dialog>
	</div>
</template>
