import { configureStore } from '@reduxjs/toolkit';
import bikeStore from './bikes/bike';
import reservationStore from './reservations/reservation';

const store = configureStore({
  reducer: {
    storeSlice: bikeStore,
    reservationStore,
  },
});

export default store;
