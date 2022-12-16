/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bikes: [],
  status: "idle",
};

export const fetchBikes = createAsyncThunk("bike/fetchBikes", async () => {
  const response = await fetch("https://bikee.onrender.com/bikes");
  const data = await response.json();
  return data;
});

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bikes = action.payload;
    });
  },
});

export default bikeSlice.reducer;
