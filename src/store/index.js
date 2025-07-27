// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './reducers/restaurantReducers.js';
import authReducer from './reducers/authReducers.js';

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    restaurant: restaurantReducer,
    auth: authReducer,
  },
});
