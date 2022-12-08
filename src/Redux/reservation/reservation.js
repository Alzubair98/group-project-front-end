import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_RESERVATION = 'FETCH_RESERVATION';

const url = 'http://localhost:3000/reservations';

export const addReservations = createAsyncThunk(FETCH_RESERVATION, async () => {
  const response = await axios.get(url);
  const res = response.data;
  console.log(res);
  const data = res.map((reservation) => ({
    id: reservation.id,
    location: reservation.location,
    user_id: reservation.user_id,
    bike_id: reservation.bike_id,
  }));
  return data;
});
