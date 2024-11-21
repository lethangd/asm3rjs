import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userArr: JSON.parse(localStorage.getItem("userArr")) || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    onLogout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
    addUser: (state, action) => {
      state.userArr.push(action.payload);
      localStorage.setItem("userArr", JSON.stringify(state.userArr));
    },
  },
});

export const { onLogin, onLogout, addUser } = userSlice.actions;

export default userSlice.reducer;
