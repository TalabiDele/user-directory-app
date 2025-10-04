import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleApiRequest } from '../../utils/apiConfig'
import { User } from '../../types/user'
import { API_URL } from '@env'

export const usersService = createApi({
	reducerPath: 'usersService',
	refetchOnFocus: false,
	baseQuery: async (args, api, extraOptions) => {
		const { url, ...options } =
			typeof args === 'string' ? { url: args, method: 'GET' } : args

		const requestOptions = await handleApiRequest(
			url,
			options.method || 'GET',
			options.body
		)

		const result = await fetchBaseQuery({
			baseUrl: API_URL,
		})(
			{
				url,
				method: requestOptions.method,
				headers: requestOptions.headers,
				body: requestOptions.body,
			},
			api,
			extraOptions
		)

		return result
	},

	tagTypes: ['users'], // Added Devices tag type
	endpoints: (builder) => ({
		// --- Zone Endpoints ---
		getUsers: builder.query<User[], void>({
			query: () => ({
				url: `/users`,
				method: 'GET',
			}),
			transformResponse: (response: User[]) => response,
		}),
		getUser: builder.query<User, { id: number }>({
			query: ({ id }) => ({
				url: `/users/${id}`,
				method: 'GET',
			}),
			transformResponse: (response: User) => response,
		}),
	}),
})

// Export hooks for usage in functional components
export const { useGetUsersQuery, useGetUserQuery } = usersService
