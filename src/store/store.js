import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducer/cartSlice";

const allCartItem = localStorage.getItem("addCart")
  ? JSON.parse(localStorage.getItem("addCart"))
  : null;

const initialState = { cartItem: allCartItem };
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;
