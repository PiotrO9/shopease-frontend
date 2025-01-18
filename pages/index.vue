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

function test() {
	console.log('test');
}
</script>

<template>
	<div>
		<Action>
			<h1>test</h1>
		</Action>
		<input type="text" placeholder="test" />

		<input type="checkbox" checked>
	</div>
</template>@click=
