import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ErrorProps } from '../types/error'

const Error = ({ error, handleRefresh }: ErrorProps) => {
	console.log('error', error)
	return (
		<View style={styles.center}>
			<Text style={styles.error}>{error}</Text>
			<TouchableOpacity onPress={handleRefresh}>
				<Text style={styles.retry}>Retry</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Error

const styles = StyleSheet.create({
	card: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
	name: { fontWeight: 'bold', fontSize: 16 },
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	error: { color: 'red', marginBottom: 8 },
	retry: { color: 'blue' },
})
