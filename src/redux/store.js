import { filter, phonebookReducer } from './phonebook/phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { phonebookApi } from './phonebook/phonebook-slice';

const middleware = getDefaultMiddleware => {
  if (process.env.NODE_ENV === 'development') {
    return [...getDefaultMiddleware(), phonebookApi.middleware, logger];
  }
  return [...getDefaultMiddleware(), phonebookApi.middleware];
};

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
