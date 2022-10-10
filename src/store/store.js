
import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './basketStore'
import { productReducer } from './productStore';



export const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
  },
});

