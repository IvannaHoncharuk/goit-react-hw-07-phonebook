import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { phonebookReducer } from 'redux/slice';
import { contactsApi } from 'services/api';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});