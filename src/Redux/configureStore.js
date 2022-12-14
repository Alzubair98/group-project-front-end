/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import bikeSlice from "./bikes/bike";
import reservationStore from "./reservations/reservation";

const store = configureStore({
  reducer: {
    bike: bikeSlice,
    reservationStore: reservationStore,
  },
});

export default store;
