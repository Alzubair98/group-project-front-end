import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOADING = 'LOADING';

const url = 'http://localhost:3001/reservations';

export const loadReservations = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((reservation) => ({
    id: reservation.id,
    user_id: reservation.user_id,
    location: reservation.location,
    bike_id: reservation.bike_id,
  }));
  return data;
});

export const storeSlice = createSlice({
  name: 'bikers',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadReservations.fulfilled]: (state, action) => action.payload,
  },
});
export default storeSlice.reducer;
