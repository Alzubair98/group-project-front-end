import { configureStore } from '@reduxjs/toolkit';
import reservationStore from './reservation/reservation';

const store = configureStore({
  reducer: {
    // Add your reducers here
    reservationSlice: reservationStore,
  },
});

export default store;
