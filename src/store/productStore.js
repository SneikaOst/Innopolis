import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = [];

export const addProductListAction = createAction("basket/addProductListAction");
export const clearProductListAction = createAction("basket/clearProductListAction");

export const basketReducer = createReducer(initialState, (builder) => {
	builder.addCase(addProductListAction, (state, action) => action.payload);
	
  });
