// Types
interface RequestOptions {
	url: string
	method: HttpMethod
	headers: Record<string, string>
	body?: any
	validateStatus: (response: { status: number }) => boolean
}

type HttpMethod =
	| 'GET'
	| 'POST'
	| 'PUT'
	| 'PATCH'
	| 'DELETE'
	| 'OPTIONS'
	| 'HEAD'

export async function handleApiRequest(
	url: string,
	method: HttpMethod,
	data: any = null
): Promise<RequestOptions> {
	return await createRequestOptions(url, method, data)
}

async function createRequestOptions(
	url: string,
	method: HttpMethod,
	data: any = null
): Promise<RequestOptions> {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	}

	const requestOptions: RequestOptions = {
		url,
		method,
		headers,
		validateStatus: ({ status }) => {
			return status >= 200 && status < 300
		},
	}

	if (data) {
		requestOptions.body = JSON.stringify(data)
	}

	return requestOptions
}

export const apiRequest = {
	get: (url: string) => handleApiRequest(url, 'GET'),
	post: (url: string, data: any) => handleApiRequest(url, 'POST', data),
	put: (url: string, data: any) => handleApiRequest(url, 'PUT', data),
	patch: (url: string, data: any) => handleApiRequest(url, 'PATCH', data),
	delete: (url: string, data: any = null) =>
		handleApiRequest(url, 'DELETE', data),
}
