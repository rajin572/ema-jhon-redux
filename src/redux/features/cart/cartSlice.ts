import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialValues: any = {
  products: [],
  selectedProducts: 0,
  totalPrice: 0,
  taxPrice: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.selectedProducts += 1;
      state.totalPrice += action.payload.price;
      state.taxPrice = state.totalPrice * state.taxRate;
      state.grandTotal = state.totalPrice + state.taxPrice;
    },
  },
});
