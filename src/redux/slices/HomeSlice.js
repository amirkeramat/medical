import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "idle",
  data: [],
  error: null,
};
import { BASE_URL } from "../../api/index";

export const getHomeData = createAsyncThunk("home/getHomeData", async () => {
  return await axios
    .get(`${BASE_URL}/home_page`)
    .then((response) => response.data)
    .catch((err) => err.message);
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHomeData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      (state.loading = "fulfilled"), (state.data = action.payload);
    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.payload);
    });
  },
});

export default homeSlice.reducer