export enum HttpMethod {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
}

export interface GraphqlClient {
	query<T>(query: string, variables?: any): Promise<T>;
}

export async function useApi<T>(method: HttpMethod, url: string, data?: any) {
	const { $api } = useNuxtApp();

	return await $api[method]<T>(url, data);
}

export async function useGraphql<T>(query: string, variables?: any) {
	const { $graphql } = useNuxtApp();

	return await ($graphql as GraphqlClient).query<T>(query, variables);
}
