
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  payload: restaurants,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
