import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersService } from './services/usersService'
import { setupListeners } from '@reduxjs/toolkit/query'

const rootReducer = combineReducers({
	[usersService.reducerPath]: usersService.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}).concat([usersService.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
