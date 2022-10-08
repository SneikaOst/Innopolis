
import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './basketStore'

export const store = configureStore({
	reducer: {
		basket: basketReducer
	},
});

