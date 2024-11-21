import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popupSlice";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
