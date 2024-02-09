// authenticationReducer.js
import * as types from './authenticationActionTypes';

const initialState = {
  token: null,
  role: null,
  error: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        error: null,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authenticationReducer;