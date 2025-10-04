// Error messages by status code
const errorMessages: Record<number, string> = {
	400: 'Bad request – Please check the input and try again.',
	401: 'Unauthorized – Please log in again.',
	403: 'Forbidden – You don’t have permission to perform this action.',
	404: 'Resource not found – The requested resource could not be found.',
	500: 'Internal server error – Please try again later.',
}

// Default fallback
const defaultErrorMessage = 'Something went wrong – Please try again later.'

// Function to get error message
export function getErrorMessage(status: number): string {
	return errorMessages[status] || defaultErrorMessage
}
