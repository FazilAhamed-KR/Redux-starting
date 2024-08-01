import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: " ",
  initialState: { counter: 0, showCounter: false },
  reducers: {
    increment: (state) => {
      state.counter += 1;
      state.showCounter = state.showCounter;
    },
    decrement: (state) => {
      state.counter -= 1;
      state.showCounter = state.showCounter;
    },
    increase: (state, action) => {
      state.counter += action.payload;
      state.showCounter = state.showCounter;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: { counterSlice: counterSlice.reducer, authSlice: authSlice.reducer },
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;
