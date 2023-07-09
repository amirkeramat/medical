import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice/homeSlice'
const store = configureStore({
  reducer: {
    homeState:homeReducer
  },
});

export default store;
