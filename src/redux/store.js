import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/HomeSlice";
import singleDataReducer from "./slices/singleDataSlice";
const store = configureStore({
  reducer: {
    homeState: homeReducer,
    singleData: singleDataReducer,
  },
});

export default store;
