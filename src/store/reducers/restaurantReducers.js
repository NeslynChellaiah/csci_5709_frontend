
import {
    SET_RESTAURANTS,
    SET_LOADING,
    SET_ERROR,
} from '../actions/restaurantActions';

const initialState = {
    restaurants: [],
    isRestaurantsLoading: false,
    error: null,
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isRestaurantsLoading: action.payload };

        case SET_RESTAURANTS:
            return { ...state, restaurants: action.payload.data, isLoading: false, error: null };

        case SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };

        default:
            return state;
    }
};

export default restaurantReducer;
