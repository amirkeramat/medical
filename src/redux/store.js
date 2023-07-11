import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice/HomeSlice'
const store = configureStore({
  reducer: {
    homeState:homeReducer
  },
});

export default store;
