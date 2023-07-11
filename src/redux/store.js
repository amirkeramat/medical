import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/HomeSlice'
const store = configureStore({
  reducer: {
    homeState:homeReducer
  },
});

export default store;
