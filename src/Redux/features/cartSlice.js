import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: initialCart,
  },
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeAllCart(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, updateCart, removeFromCart, removeAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;
