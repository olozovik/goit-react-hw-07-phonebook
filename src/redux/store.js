import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from './phonebook/phonebookApi';
import { phonebookReducer } from './phonebook/phonebook-reducer';
// import { logger } from 'redux-logger';

const middleware = getDefaultMiddleware => {
  if (process.env.NODE_ENV === 'development') {
    // return [...getDefaultMiddleware(), phonebookApi.middleware, logger];
    return [...getDefaultMiddleware(), phonebookApi.middleware];
  }
  return [...getDefaultMiddleware(), phonebookApi.middleware];
};

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
