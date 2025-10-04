import {
	ActivityIndicator,
	FlatList,
	Text,
	TouchableOpacity,
	View,
	RefreshControl,
} from 'react-native'
import { useGetUsersQuery } from '../../store/services/usersService'
import Error from '../../components/error'
import { getErrorMessage } from '../../utils/errorHandler'
import { styles } from './styles/style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Users'>

const Users = ({ navigation }: Props) => {
	const { data: users, refetch, error, isFetching } = useGetUsersQuery()

	if (isFetching && users?.length === 0) {
		return <ActivityIndicator style={{ flex: 1 }} size='large' />
	}

	if (error && 'status' in error) {
		return (
			<Error
				error={getErrorMessage(error.status as number)}
				handleRefresh={refetch}
			/>
		)
	}

	return (
		<View>
			<FlatList
				data={users}
				keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl refreshing={isFetching} onRefresh={refetch} />
				}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.card}
						onPress={() =>
							navigation.navigate('UserDetails', { userId: item.id })
						}
					>
						<Text style={styles.name}>{item.name}</Text>
						<Text>{item.email}</Text>
						<Text>{item.company.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

export default Users
