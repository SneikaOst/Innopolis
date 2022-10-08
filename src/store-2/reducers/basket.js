// import { createSlice } from "@reduxjs/toolkit";

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState: {
//     basket: [],
//     coutProducts: 0,
//     pricesbasket: 0
//   },
//   reducers: {
//     addProductInBasket(state, action) {
//       state.basket.push(action.payload)
//       state.pricesbasket = state.basket.reduce((sum, current) => {
//         return sum + current.price
//       }, 0)
//     },
//     remove (state, action) {
//       state.pricesbasket = state.basket.reduce((sum, current) => {
//         return sum + current.price
//       }, 0)
//     }
//   }
// })

// export const { addProductInBasket } = basketSlice.actions

// export default basketSlice.reducer