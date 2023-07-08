import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: "idle",
  data: [],
  error: null,
};

const getHomeData = createAsyncThunk("home/getHomeData", async () => {
  return await axios
    .get()
    .then((response) => response.data)
    .catch((err) => err.message);
});
