// authenticationSelectors.js
export const selectToken = (state) => state.authentication.token;
export const selectRole = (state) => state.authentication.role;
export const selectError = (state) => state.authentication.error;
