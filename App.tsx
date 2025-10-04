import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Users from './src/screens/Users'
import UserDetails from './src/screens/UserDetails'
import { Provider } from 'react-redux'
import { store } from './src/store'

export type RootStackParamList = {
	Users: undefined
	UserDetails: { userId: number }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Users'>
					<Stack.Screen
						name='Users'
						component={Users}
						options={{
							title: 'Users Directory',
							headerTitleAlign: 'center',
						}}
					/>
					<Stack.Screen
						name='UserDetails'
						component={UserDetails}
						options={{
							title: 'User Details',
							headerTitleAlign: 'center',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
