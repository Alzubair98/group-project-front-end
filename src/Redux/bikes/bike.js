import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOADING = "LOADING";

const url = "http://localhost:3001/bikes";

export const loadBikes = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((bike) => ({
    id: bike.id,
    name: bike.name,
    description: bike.description,
    img: bike.image,
    price: bike.price,
  }));
  return data;
});

export const storeSlice = createSlice({
  name: "bikers",
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadBikes.fulfilled]: (state, action) => action.payload,
  },
});
export default storeSlice.reducer;
