import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basketStore";
// import { productStore } from "./productStore" 

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    // product: productStore
  },
});
