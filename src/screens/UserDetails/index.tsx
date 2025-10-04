import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import { useGetUserQuery } from '../../store/services/usersService'
import { styles } from './styles/style'

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>

const UserDetailScreen: React.FC<Props> = ({ route, navigation }) => {
	const { userId } = route.params

	const { data: user, isFetching } = useGetUserQuery({ id: userId })

	if (isFetching) {
		return <ActivityIndicator style={{ flex: 1 }} size='large' />
	}

	if (!user) return <Text style={styles.error}>User not found</Text>

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{user.name}</Text>
			<Text>Email: {user.email}</Text>
			<Text>Phone: {user.phone}</Text>
			<Text>
				Address: {user.address.street}, {user.address.city}
			</Text>
			<Text>Company: {user.company.name}</Text>
		</View>
	)
}

export default UserDetailScreen
