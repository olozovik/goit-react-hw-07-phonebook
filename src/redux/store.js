import { phonebookReducer } from './phonebook/phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

const middleware = getDefaultMiddleware => {
  if (process.env.NODE_ENV === 'development') {
    return [...getDefaultMiddleware(), logger];
  }
  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: phonebookReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
