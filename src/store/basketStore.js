import { createAction, createReducer } from '@reduxjs/toolkit'

const LOCALE_STORAGE_NAME = 'basket-state'

const localStorageState = localStorage.getItem(LOCALE_STORAGE_NAME)
const initialState = localStorageState ? JSON.parse(localStorageState) : []

export const addToBasketAction = createAction('basket/addToBasket')
export const removeFromBasketAction = createAction('basket/removeFromBasket')
export const clearBasketAction = createAction('basket/clearBasket')

export const basketReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToBasketAction, (state, action) => {
    const newState = [...state, action.payload]
    localStorage.setItem(LOCALE_STORAGE_NAME, JSON.stringify(newState))
    return newState
  })
  builder.addCase(removeFromBasketAction, (state, action) =>
    state.filter((product) => product.id !== action.payload)
  )
  builder.addCase(clearBasketAction, () => [])
})
