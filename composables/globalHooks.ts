export enum HttpMethod {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
}

export async function useApi<T>(method: HttpMethod, url: string, data?: any) {
	const { $api } = useNuxtApp();

	return await $api[method]<T>(url, data);
}
