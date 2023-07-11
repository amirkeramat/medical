import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
import axios from "axios";
const initialState = {
  loading: "idle",
  data: {},
  error: null,
};

export const getData = createAsyncThunk("singleData/getData", async (arg) => {
  const { url, id } = arg;
  return await axios
    .get(`${BASE_URL}/${url}/${id}`)
    .then((Response) => Response.data);
});

const singleDataSlice = createSlice({
  name: "singleData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      (state.loading = "fulfilled"), (state.data = action.payload);
    });
    builder.addCase(getData.rejected, (state, action) => {
      (state.loading = "rejected"), (state.error = action.payload);
    });
  },
});

export default singleDataSlice.reducer