import { configureStore } from '@reduxjs/toolkit';
import bikeSlice from './bike/bike';

const store = configureStore({
  reducer: {
    // Add your reducers here
    bike: bikeSlice,
  },
});

export default store;
