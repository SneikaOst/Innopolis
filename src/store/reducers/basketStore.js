// import { createAction, createReducer } from "@reduxjs/toolkit";


import { createSlice } from "@reduxjs/toolkit";



// const LOCALE_STORAGE_NAME = "basket-state";

// const localStorageState = localStorage.getItem(LOCALE_STORAGE_NAME);
// const initialState = localStorageState ? JSON.parse(localStorageState) : [];

// export const addToBasketAction = createAction("basket/addToBasket");
// export const removeFromBasketAction = createAction("basket/removeFromBasket");
// export const clearBasketAction = createAction("basket/clearBasket");

// export const basketReducer = createReducer(initialState, (builder) => {
//   builder.addCase(addToBasketAction, (state, action) => {
//     const newState = [...state, action.payload];
//     localStorage.setItem(LOCALE_STORAGE_NAME, JSON.stringify(newState));
//     return newState;
//   });
//   builder.addCase(removeFromBasketAction, (state, action) =>
//     state.filter((product) => product.id !== action.payload)
//   );
//   builder.addCase(clearBasketAction, () => []);
// });



const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    // coutProducts: 0,
    pricesbasket: 0,
    countProducts: 0
  },

  reducers: {
    addProductInBasket(state, action) {
      state.basket.push(action.payload)
      state.pricesbasket = state.basket.reduce((sum, current) => {
        return sum + current.price
      }, 0)

      state.countProducts = state.basket.length
    },

    removeProductBasket (state, action) {
      state.basket = state.basket.filter((item) => {
        return item.idx !== action.payload
      })
      
      state.pricesbasket = state.basket.reduce((sum, current) => {
        return sum + current.price
      }, 0)

      state.countProducts = state.basket.length

    }
  }
})

export const { addProductInBasket, removeProductBasket } = basketSlice.actions

export default basketSlice.reducer