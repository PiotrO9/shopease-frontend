import { GraphQLClient } from 'graphql-request';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const graphqlClient = new GraphQLClient(config.public.graphqlEndpoint, {
        headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
        },
    });

    nuxtApp.provide('graphql', {
        query: async <T>(query: string, variables?: any) => {
            return await graphqlClient.request<T>(query, variables);
        },
    });
});
