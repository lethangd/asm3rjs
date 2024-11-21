import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    showPopup: false,
    product: null,
  },
  reducers: {
    showPopup: (state, action) => {
      state.showPopup = true;
      state.product = action.payload;
    },
    hidePopup: (state) => {
      state.showPopup = false;
      state.product = null;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
