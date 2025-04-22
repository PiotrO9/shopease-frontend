import type { ApiClient } from './api-client';

declare module '#app' {
	interface NuxtApp {
		$api: {
			get<T>(url: string, data?: any): Promise<T>;
			post<T>(url: string, data?: any): Promise<T>;
			put<T>(url: string, data?: any): Promise<T>;
			delete<T>(url: string, data?: any): Promise<T>;
		};
	}
}

export {};
