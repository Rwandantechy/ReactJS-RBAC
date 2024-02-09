// authenticationActions.js
import { Navigate } from 'react-router-dom';
import * as types from './authenticationActionTypes';
// import { NA } from 'connected-react-router'; 

export const loginRequest = () => ({ type: types.LOGIN_REQUEST });

export const loginSuccess = (token, role) => (dispatch) => {
  dispatch({ type: types.LOGIN_SUCCESS, payload: { token, role } });

  // Redirect based on role
  if (role === "a") {
    dispatch(Navigate("/a"));
  } else if (role === "s") {
    dispatch(Navigate("/s"));
  } else {
    dispatch(Navigate("/u"));
  }
};

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: { error },
});

export const logout = () => ({ type: types.LOGOUT });
