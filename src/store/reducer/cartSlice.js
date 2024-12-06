import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartInfo: localStorage.getItem("addCart")
      ? JSON.parse(localStorage.getItem("addCart"))
      : null,
  },
  reducers: {
    setCart(state, action) {
      state.cartInfo = action.payload;
    },
    resetUserInfo(state, action) {
      state.userInfo = null;
    },
  },
});

export const userActions = cartSlice.actions;
export default cartSlice.reducer;

// export default { userActions, userReducer };
