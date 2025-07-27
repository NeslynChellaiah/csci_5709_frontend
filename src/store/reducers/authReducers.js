import {
  SET_TOKEN,
  CLEAR_TOKEN,
  SET_USER,
  CLEAR_USER,
} from '../actions/authActions';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };

    case CLEAR_TOKEN:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer; 