import { configureStore } from "@reduxjs/toolkit";
import bikeStore from "./bikes/bike";

const store = configureStore({
  reducer: {
    storeSlice: bikeStore,
  },
});

export default store;
