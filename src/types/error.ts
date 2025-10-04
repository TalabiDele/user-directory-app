export interface ErrorProps {
	error: string | null // or a more specific type like string | null
	handleRefresh: () => void
}
