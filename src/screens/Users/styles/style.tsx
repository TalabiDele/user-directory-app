import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	card: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
	name: { fontWeight: 'bold', fontSize: 16 },
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	error: { color: 'red', marginBottom: 8 },
	retry: { color: 'blue' },
})
