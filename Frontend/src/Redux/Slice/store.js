import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router'; // Import connectRouter and routerMiddleware
import { createBrowserHistory } from 'history'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './Slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const history = createBrowserHistory(); 

const rootReducer = (history) => persistReducer(persistConfig, connectRouter(history)(userReducer)); 

const store = configureStore({
  reducer: rootReducer(history), 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)), 
});

export const persistor = persistStore(store);
export default store;
