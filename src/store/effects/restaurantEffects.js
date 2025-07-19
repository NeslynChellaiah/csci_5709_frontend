// src/store/effects/restaurantEffects.js

import axios from 'axios';
import {
  setRestaurants,
  setLoading,
  setError,
  setRestaurant,
} from '../actions/restaurantActions';
import { BASE_URL, getToken } from '../../../constants';

export const fetchRestaurants = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        Authorization: `${getToken()}`,
      },
    });
    dispatch(setRestaurants(response.data));
  } catch (err) {
    dispatch(setError(err.response?.data?.message || err.message || 'Failed to fetch'));
  }
};

export const filterRestaurants = (filterData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post(`${BASE_URL}/restaurants/filter`, filterData, {
      headers: {
        Authorization: `${getToken()}`,
      },
    });
    dispatch(setRestaurant(response.data));
  } catch (err) {
    dispatch(
      setError(err.response?.data?.message || err.message || 'Failed to fetch')
    );
  }
};
