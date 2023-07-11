import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice'
const store = configureStore({
  reducer: {
    homeState:homeReducer
  },
});

export default store;
